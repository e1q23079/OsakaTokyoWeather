# Osaka Tokyo Weather

## 概要

OsakaTokyoWeatherは、大阪と東京の最新天気情報を取得し、HTMLページとして出力するNode.jsアプリケーションです。

## 特徴

- 大阪・東京の天気（タイトル・天気画像）を取得
- 時間帯（朝・夕方・夜）で背景色が変化
- EJSテンプレートで美しいHTMLを生成

## 使い方

1. 必要なパッケージをインストール

    ```bash
    npm install
    ```

2. プログラムを実行

    ```bash
    npm start
    ```

3. `dist/index.html` が生成されます。ブラウザで開いて天気情報を確認できます。

## 依存パッケージ

- [ejs](https://www.npmjs.com/package/ejs)

## ファイル構成

- `main.js` : メインロジック（天気取得・HTML生成）
- `index.ejs` : EJSテンプレート
- `package.json` : パッケージ管理
- `dist/index.html` : 出力HTML

## API

天気情報は [weather.tsukumijima.net](https://weather.tsukumijima.net/) のAPIを利用しています。
