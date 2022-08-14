let url = 'http://rap2api.taobao.org/app/mock/244238/login';
let xhr=new XMLHttpRequest();
xhr.timeout=3000
xhr.open(`POST`,url,true);
xhr.setRequestHeader(`Content-type`,`application/x-www-form-urlencoded`);
xhr.onload=function(){
    if((xhr.status>=200&&xhr.status<300)||xhr.status===304)
    {
        console.log(JSON.parse(xhr.responseText));
    }
    else
    {
        console.log(`响应异常`);
    }
}
