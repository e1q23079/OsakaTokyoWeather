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
    console.log("Running... Osaka and Tokyo Weather!");
    console.log("大阪");
    const osaka = await getData('270000');
    console.log(osaka);
    console.log("東京");
    const tokyo = await getData('130010');
    console.log(tokyo);
}


main();
