const fs = require('fs');
const ejs = require('ejs');

// リクエストオプション
const requestOptions = {
    method: "GET",
    redirect: "follow"
};

// 天気用法を取得：引数（市）
const getData = async (city) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const response = await fetch(`https://weather.tsukumijima.net/api/forecast?city=${city}`, requestOptions);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("Error");
    }
};

// メイン関数
const main = async () => {
    console.log("Running... Osaka and Tokyo Weather");

    // 大阪の天気を取得
    // console.log("大阪");
    const osaka = await getData('270000');
    const osakaWeather = osaka["forecasts"][0]["image"];
    /*
    console.log(osakaWeather["title"]);
    console.log(osakaWeather["url"]);
    */

    // 東京の天気を取得
    // console.log("東京");
    const tokyo = await getData('130010');
    const tokyoWeather = tokyo["forecasts"][0]["image"];
    /*
    console.log(tokyoWeather["title"]);
    console.log(tokyoWeather["url"]);
    */

    // 時刻を取得
    const now = new Date();
    // 時間を取得
    const hour = now.getHours();

    // 時間帯を判定
    let timeClass = '';
    if (hour >= 6 && hour < 16) {
        timeClass = 'morning';
    } else if (hour >= 16 && hour < 19) {
        timeClass = 'evening';
    } else {
        timeClass = 'night';
    }

    // HTMLを生成
    const indexPage = fs.readFileSync('./index.ejs', 'utf8');
    const html = ejs.render(indexPage, {
        osaka: osakaWeather,
        tokyo: tokyoWeather,
        timeClass: timeClass
    });

    // HTMLを保存
    if (!fs.existsSync('./dist')) {
        fs.mkdirSync('./dist');
    }
    fs.writeFileSync('dist/index.html', html);
    console.log("index.html generated");
}


main();
