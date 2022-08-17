
function getIp(){
    var promise=new Promise(function(resolve,reject){
        var xhr=new XMLHttpRequest();
        xhr.open('GET', 'http://rap2api.taobao.org/app/mock/244238/getIp',true);
        xhr.onload=function(){
            var retJson=JSON.parse(xhr.responseText);
            resolve(retJson.Ip);
        }
        xhr.onerror=function(){
            reject("获取IP失败");
        }
        xhr.send();
    })
    return promise;
}
const getCityFromIp=ip=>{
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        xhr.open(`GET`,'http://rap2api.taobao.org/app/mock/244238/getCity?ip='+ip,true);
        xhr.onload=()=>{
            resolve(JSON.parse(xhr.responseText).city);
        }
        xhr.onerror=()=>reject(`获取city失败`);
        xhr.send();
    })
}
const getWeatherFromCity=city=>new Promise((resolve,reject)=>{
    let xhr=new XMLHttpRequest();
    xhr.open('GET','http://rap2api.taobao.org/app/mock/244238/getWeather?city='+city, true)
    xhr.onload=()=>{
        if(xhr.status===200)
        {
            resolve(JSON.parse(xhr.responseText));
        }
        else
        {
           reject(`天气接口异常`);
        }
    }
    xhr.onerror=()=>reject("获取天气失败");
    xhr.send();
})
const showData=data=>{
    document.querySelector(`.city`).innerText=data.city;
    document.querySelector(`.weather`).innerText=data.weather;
}
getIp()
.then(Ip=>getCityFromIp(Ip))
.then(city=>`中国`+city)
.then(city=>getWeatherFromCity(city))
.then(data=>{
    console.log(data);
    showData(data);
}).catch(e=>{
    console.log(e);
})