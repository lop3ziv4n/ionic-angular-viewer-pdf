# ionic -angular-viewer-pdf
## Install
    $ npm install

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

#### Install sdk android
    https://developer.android.com/studio/index.html#downloads

    https://ionicframework.com/docs/installation/android    
#### Environment
    $ export ANDROID_SDK_ROOT=/home/<user>/Android/Sdk 
    $ export PATH=${PATH}:$ANDROID_SDK_ROOT/bin:$ANDROID_SDK_ROOT/tools/bin:$ANDROID_SDK_ROOT/platform-tools:$ANDROID_SDK_ROOT/emulator
#### Error: Android Build Tools license agreement not accepted
    $ cd $ANDROID_SDK_ROOT/tools/bin
    $ yes | ./sdkmanager --licenses && ./sdkmanager --update
#### Error: Source path does not exist: resources\android\icon\drawable-hdpi-icon.png
    $ npm i -g cordova-res
    $ ionic cordova resources android
#### Hyper-V is disabled in Windows Features
    https://github.com/intel/haxm/blob/master/docs/manual-windows.md

### Build
    https://ionicframework.com/docs/building/android
    $ ionic cordova prepare android   

### Run
    $ npm i -g native-run
    $ ionic cordova run android