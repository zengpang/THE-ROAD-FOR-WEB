let url = 'http://rap2api.taobao.org/app/mock/244238/weather?city=北京';
let xhr=new XMLHttpRequest();
xhr.open(`GET`,url,true);
xhr.onload=function(){
    if((xhr.status>=200&&xhr.status<300)||xhr.status===304)
    {
        console.log(xhr.response);
    }
    else
    {
        console.log(`数据异常`);
    }
}
xhr.responseType=`json`;
xhr.onerror=function(){
    console.log(`服务器异常`);
}
xhr.send();