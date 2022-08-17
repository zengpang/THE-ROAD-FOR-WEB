// const { resolve } = require("path");

const { rejects } = require("assert")

// //方法1
// const getWeather=(city,onok,onfail)=>{
//     let xhr=new XMLHttpRequest();
//     let url = 'http://rap2api.taobao.org/app/mock/244238/weather?city=' + city;
//     xhr.open(`GET`,url,true);
//     xhr.onload=()=>onok(JSON.parse(xhr.responseText));
//     xhr.onerror=()=>onfail;
//     xhr.send();
// }
// getWeather(`北京`,weather=>{
//     console.log(weather);
// },()=>{
//     console.log(`error`);
// });
// console.log(`执行完成`);

//方法2
const getWeather=city=>{
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        let url = 'http://rap2api.taobao.org/app/mock/244238/weather?city=' + city;
        xhr.open('GET', url, true )
        xhr.onload=()=>{
            resolve(JSON.parse(xhr.responseText))
        }
        xhr.onerror=()=>{
            reject(`接口异常`);
        }
        xhr.send();
    })

}
getWeather(`北京`).then(weather=>{
    console.log(weather);
})