#Firmare le app in produzione

	nano platforms/android/release-signing.propertie
	cordova build android --release

storeFile=/home/cricco/serraturagmarket.jks
storeType=jks
keyAlias=myname

