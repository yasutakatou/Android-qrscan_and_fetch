# Android-qrscan_and_fetch

QRで読み取ったAPIサーバー宛にアドレスとスマホのIMEIをPOSTするAndroidアプリです<br>

cordovaの環境を作り、git cloneから**yarn buld && cordova build android**でapkを作るか、<br>
releaseページにある[apkファイル](https://github.com/yasutakatou/Android-qrscan_and_fetch/releases/download/0.0.2/app-debug.apk)をAndroidスマホにインストールしてください

起動前にスマホに**カメラ**と**位置情報**のアクセス許可を設定してください<br>
(manifest.xmlに許可入れてるんだが・・cordovaの挙動が怪しい)<br>

起動したらHyperledgerのAPI(node query.js)で登録したメールアドレスをテキスト欄に入力します<br>

![0](https://github.com/yasutakatou/Android-qrscan_and_fetch/blob/pic/00.png)

QRコードを読み取ったらAPIサーバー宛にアドレスとスマホのIMEIをPOSTします<br>

![1](https://github.com/yasutakatou/Android-qrscan_and_fetch/blob/pic/01.png)
