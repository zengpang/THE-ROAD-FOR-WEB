let url = 'http://rap2api.taobao.org/app/mock/244238/weather?city=北京';
let xhr=new XMLHttpRequest();
xhr.open(`GET`,url,false)//同步写法，最后一个参数是false
xhr.send();
let result=JSON.parse(xhr.responseText);
console.log(result);