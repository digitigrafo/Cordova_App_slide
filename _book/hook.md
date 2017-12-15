```
#!/usr/bin/env node

//
// This hook removes specific permissions from the AndroidManifest.xml
// The AndroidManifest is re-generated during the prepare stage,
// so this must be run on the "after_prepare" hook.
//


// Configure the permissions to be forcefully removed.
// NOTE: These permissions will be removed regardless of how many plugins
//       require the permission. You can check the permission is only required
//       by the plugin you *think* needs it, by looking at the "count" shown in
//       your /plugins/android.json file.
//       If the count is more than 1, you should search through
//       the /plugins//plugin.xml files for <uses-permission> tags.

var permsToRm = [ "RECORD_AUDIO", "MODIFY_AUDIO_SETTINGS", "READ_PHONE_STATE" ];

var fs = require('fs');
var path = require('path');
var rootdir = process.argv[2];
var manifestFile = path.join(rootdir, "platforms/android/AndroidManifest.xml");

fs.readFile( manifestFile, "utf8", function( err, data ) {
    if (err)
        return console.log( "Error reading AndroidManifest.xml", err );
    
    var result = data;
    for(var i = 0; i < permsToRm.length; i++) {
        var search = '<uses-permission android:name="android.permission.' + permsToRm[i] + '" />';
        result = result.replace(search, '');
    }

    fs.writeFile( manifestFile, result, "utf8", function( err ){
        if (err)
            return console.log( "Error writing AndroidManifest.xml", err );
    });
} );
```
