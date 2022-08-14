let url = 'http://rap2api.taobao.org/app/mock/244238/weather?city=北京';
let xhr=new XMLHttpRequest();
xhr.open(`GET`,url,true)//异步方法，最后一个参数是true
xhr.onload=function(){
    let result=JSON.parse(xhr.responseText);
    console.log(result);
}
xhr.send();