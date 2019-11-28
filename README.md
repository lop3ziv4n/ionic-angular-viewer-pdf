
## Dependencies
$ ionic cordova plugin add cordova-plugin-file
$ npm install @ionic-native/file

$ ionic cordova plugin add cordova-plugin-file-opener2
$ npm install @ionic-native/file-opener

$ ionic cordova plugin add cordova-plugin-file-transfer
$ npm install @ionic-native/file-transfer

$ ionic cordova plugin add cordova-plugin-document-viewer
$ npm install @ionic-native/document-viewer

## Android

### Build
-   Install sdk android
-   Environment
    $ export ANDROID_HOME=/home/<user>/Android/Sdk 
    $ export PATH=${PATH}:$ANDROID_HOME/bin:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
-   Error: Android Build Tools license agreement not accepted
    $ cd $ANDROID_HOME/tools/bin
    $ yes | ./sdkmanager --licenses && ./sdkmanager --update

$ ionic cordova build android

### Run Emulate
$ npm i -g native-run
$ ionic cordova run android
$ ionic cordova emulate android