function ObjectFirst() //对象基本使用
{
    let obj = {
        name: 'jirengu',
        age: 5,
        sayHello: function () {
            console.log(`Hello ${this.name}`)
        }
    }
    console.log("obj.name结果为".concat(obj.name));
    console.log("obj.name结果为".concat(obj['name']));
    obj.sayHello()

    let key = 'age';
    console.log(`obj[key]的结果为${obj[key]}`);
    console.log(`obj.key的结果为${obj.key}`);
    obj.weignt = '1kg';

    for (let key in obj) {
        console.log(key);
        console.log(obj[key]);
    }
}
function ObjectMore()//对象更多使用
{
    let obj = {
        name: 'jirengu',
        age: 5,
        weignt: '1kg'
    }
    //属性变成数组
    Object.keys(obj);
    Object.keys(obj).forEach(key => console.log(`键名为${key}:键值为${obj[key]}`));
    delete obj.name;
}
function ObjectToJSON()//对象与JSON格式字符串相互转换
{
    let obj = { a: 1, b: 2 };
    let str = JSON.stringify(obj);
    console.log(`对象转换之后的JSON格式字符串为${str}`);
    let newObj = JSON.parse(str);
    console.log(newObj);
}
function ObjectWork2() {
    let obj = {
        name: 'jirengu',
        age: 5
    }
    let key = 'age'
    console.log(`obj.name的值为${obj.name}`);
    console.log(`obj[name]的值为${obj[name]}`);
    console.log(`obj['age']的值为${obj['age']}`);
    console.log(obj[key]);
}
function ObjectWork() {
    let obj = {
        name: 'jirengu',
        age: 5
    }
    let result = traverse(obj);
    //输出 "name=jirengu&age=5"
    console.log(result);
}
function getDayOfNextYear() {
    let week = ["日", "一", "二", "三", "四", "五", "六"];
    let nextYear = new Date();
    nextYear.setTime(Date.now() + 365 * 24 * 60 * 60 * 1000);
    let result = nextYear.getDay();
    return `明年的今天是星期${week[result]}`;
}
function getLeftTime() {

    let newYear = new Date();
    newYear.setFullYear(newYear.getFullYear() + 1);
    newYear.setMonth(1);
    newYear.setDate(1);
    newYear.setHours(0);
    newYear.setMinutes(0);
    newYear.setSeconds(0);
    newYear.setMilliseconds(0);
    let distanceTime = newYear.getTime() - Date.now();
    let distanceDays = parseInt(distanceTime / (24 * 60 * 60 * 1000));
    let distanceHours = parseInt((distanceTime - distanceDays * (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let distanceMinutes = parseInt((distanceTime - distanceDays * (24 * 60 * 60 * 1000) - distanceHours * (60 * 60 * 1000)) / (60 * 1000));
    let distanceSeconds = parseInt((distanceTime - distanceDays * (24 * 60 * 60 * 1000) - distanceHours * (60 * 60 * 1000) - distanceMinutes * (60 * 1000)) / (1000));
    let distanceInfo = {
        day: distanceDays,
        hour: distanceHours,
        minute: distanceMinutes,
        second: distanceSeconds
    };
    console.log(distanceInfo);
    return distanceInfo;
}
function formatDate(inputTimeStr) {
  
    let inputTimeStrs = inputTimeStr.split(/-|:|\s/);
    let now = new Date();
    let inputTime = new Date();
    console.log(inputTimeStrs);
    inputTime.setFullYear(parseInt(inputTimeStrs[0]));
    inputTime.setMonth(parseInt(inputTimeStrs[1])-1);
    inputTime.setDate(parseInt(inputTimeStrs[2]));
    inputTime.setHours(parseInt(inputTimeStrs[3]));
    inputTime.setMinutes(parseInt(inputTimeStrs[4]));
    inputTime.setSeconds(parseInt(inputTimeStrs[5]));
    let distanceTime = Math.abs(inputTime.getTime() - now.getTime());
    switch (true) {
        case distanceTime >= 24 * 60 * 60 * 1000: {
          
            return `${parseInt(distanceTime / (24 * 60 * 60 * 1000))}天前`;
        };
        case distanceTime >= 60 * 60 * 1000: {
       
            return `${parseInt(distanceTime / (60 * 60 * 1000))}小时前`;
        };
        case distanceTime >= 60 * 1000: {
          
            return `${parseInt(distanceTime / (60 * 1000))}分钟前`;
        };
        default: {
        
            return `刚刚`;
        }

    }
}
function randomNum(min,max)
{
//    alert(Math.floor(Math.random()*(max-min)+min));
   return Math.floor(Math.random()*(max-min)+min);
}
function randomStr(n)
{
    let randomStrSource=("A、B、C、D、E、F、G、H、I、J、K、L、M、N、O、P、Q、R、S、T、U、V、W、X、Y、Z、a、b、c、d、e、f、g、h、i、j、k、l、m、n、o、p、q、r、s、t、u、v、w、x、y、z、0、1、2、3、4、5、6、7、8、9、_").split("、");
    let resultstr='';
    for(let index=0;index<n;index++)
    {
        resultstr=resultstr.concat(randomStrSource[Math.floor(Math.random()*randomStrSource.length)]);
    }
    return resultstr;
}
function GetRunTime(handle) {
    let start = Date.now();
    handle();
    return Date.now() - start;
}
//在答案区实现这个函数
function traverse(obj) {
    let trResults = new Array();
    let trResultStr = "";
    Object.keys(obj).forEach(key => { trResults.push(`${key}=${obj[key]}`); });
    trResultStr = trResults.join("&");
    return trResultStr;
}