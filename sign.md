#Firmare le app in produzione

	nano platforms/android/release-signing.properties
	cordova build android --release

CON QUESTO TESTO DENTRO AL FILE DI TESTO:

        storeFile=/home/cricco/serraturagmarket.jks
	storeType=jks
	keyAlias=myname

Per generare la chiave, se non ne avete una data dal progetto o vostra:

	keytool -genkey -v -keystore <keystoreName>.keystore -alias <Keystore AliasName> -keyalg <Key algorithm> -keysize <Key size> -validity <Key Validity in Days>
	
esempio di chiave che dura 25 ANNI (android lo vuole, almeno 25 anni!):

	keytool -genkey -v -keystore edizioniprogetto.keystore -alias progetto -keyalg RSA -keysize 2048 -validity 10000

Per compilare facendo semplicemente release, bisogna aggiundere questo:
https://issues.apache.org/jira/browse/CB-13684
