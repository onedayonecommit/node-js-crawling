const axios = require('axios'); // 특정 url의 html 요소들을 전부 가져와주는 모듈
const cheerio = require('cheerio'); // Axios로 가져온 html을 파싱할 수 있게 도와주는 모듈

const getHTML = async (keyword) => {
    try {
        return await axios.get("https://www.inflearn.com/courses?s=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&order=search&page=1" + encodeURI(keyword))
    }
    catch (err) {
        console.log(err)
    }
};

const parsing = async (keyword) => {
    const html = await getHTML(keyword)
    const $ = cheerio.load(html.data);
}

parsing("자바스크립트");
