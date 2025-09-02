
# Osaka Tokyo Weather

## 公開ページ

- [OsakaTokyoWeather](https://e1q23079.github.io/OsakaTokyoWeather/)

## 概要

OsakaTokyoWeatherは、大阪と東京の最新天気情報を取得し、時間帯ごとに背景が変化する美しいウェブページを表示するアプリケーションです。

## 特徴

- 大阪・東京の天気（タイトル・天気画像）を表示
- 朝・夕方・夜で背景色が変化
- EJSテンプレートによるHTML生成
- GitHub Pagesでオンライン公開

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
