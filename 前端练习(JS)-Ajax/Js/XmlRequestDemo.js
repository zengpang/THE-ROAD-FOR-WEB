let url = 'http://rap2api.taobao.org/app/mock/244238/weather?city=北京';
let xhr=new XMLHttpRequest();
xhr.open(`GET`,url,true);
xhr.onreadystatechange=function(){
    if(xhr.readyState==4)
    {
        if((xhr.status>=200&&xhr.status<300)||xhr.status===304)
        {
            console.log(JSON.parse(xhr.responseText));
        }
        else
        {
          console.log(`服务器异常`);
        }
    }
}
xhr.onerror=function(){
    console.log(`服务器异常`);
}
xhr.send();