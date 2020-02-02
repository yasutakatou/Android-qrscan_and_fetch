# Android-qrscan_and_fetch

設定したメールアドレスをQRで読み取ったAPIサーバー宛にアドレスとスマホのIMEIをPOSTして認証するAndroidアプリです。

**yarn buld && cordova build android**でapkを作るか、
releaseページにある[apkファイル](https://github.com/yasutakatou/Android-qrscan_and_fetch/releases/download/0.0.2/app-debug.apk)をAndroidスマホにインストールしてください

起動前にスマホに**カメラ**と**位置情報**のアクセス許可を設定してください

起動したらメールアドレスをテキスト欄に入力します

![0](https://github.com/yasutakatou/Android-qrscan_and_fetch/blob/pic/00.png)

QRコードを読み取ったらAPIサーバー宛にアドレスとスマホのIMEIをPOSTします

![1](https://github.com/yasutakatou/Android-qrscan_and_fetch/blob/pic/01.png)
