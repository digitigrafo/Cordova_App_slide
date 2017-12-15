```
<?xml version='1.0' encoding='utf-8'?>
<widget id="xm24.digitigrafo.it" version="1.0.2" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>I love XM24</name>
    <description>
            Descrizione della mia applicazione!
        </description>
    <author email="hacklabbo@indivia.net" href="http://hacklabbo.indivia.net">
            hacklabbo.indivia.net
        </author>

    <content src="index.html" />

    <preference name="SplashScreen" value="res/splashscreen.png" />
    <preference name="SplashScreenDelay" value="3000" />
    <preference name="AutoHideSplashScreen" value="false" />
    <preference name="AndroidPersistentFileLocation" value="Compatibility" />

    <access origin="*" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    <allow-intent href="tel:*" />
    <allow-intent href="sms:*" />
    <allow-intent href="mailto:*" />
    <allow-intent href="geo:*" />

    <platform name="android">
        <allow-intent href="market:*" />
        <icon src="res/icon.png" />
        <preference name="AndroidPersistentFileLocation" value="Compatibility" />
        <preference name="SplashScreen" value="res/splashscreen.png" />
        <splash src="res/splashscreen.png" />
        <preference name="AutoHideSplashScreen" value="false" />
        <preference name="SplashScreen" value="splashscreen" />
        <preference name="SplashScreenDelay" value="3000" />
        <preference name="SplashMaintainAspectRatio" value="true" />
        <preference name="SplashShowOnlyFirstTime" value="false" />
    </platform>

    <platform name="ios">
        <allow-intent href="itms:*" />
        <allow-intent href="itms-apps:*" />
    </platform>

    <engine name="android" spec="^6.3.0" />
    <plugin name="cordova-plugin-file" spec="~4.3.3" />
    <plugin name="cordova-plugin-media" spec="~3.0.1" />
    <plugin name="cordova-plugin-network-information" spec="~1.3.3">
        <variable name="SENDER_ID" value="667XXX382143" />
    </plugin>
    <plugin name="cordova-plugin-splashscreen" spec="~4.0.3">
        <variable name="SENDER_ID" value="667XXX382143" />
    </plugin>
    <plugin name="cordova-plugin-whitelist" spec="~1.3.2" />
    <plugin name="cordova-plugin-x-socialsharing" spec="~5.1.8">
        <variable name="SENDER_ID" value="667XXX382143" />
    </plugin>
    <plugin name="cordova-sqlite-storage" spec="~2.0.4" />
    <plugin name="phonegap-plugin-push" spec="~1.9.4">
        <variable name="SENDER_ID" value="667XXX382143" />
    </plugin>
</widget>
```
