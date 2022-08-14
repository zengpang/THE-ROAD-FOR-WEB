let formData=new FormData();
formData.append(`username`,`adcdefg`);
formData.append(`password`,`123456`);
let url = 'http://rap2api.taobao.org/app/mock/244238/register';
let xhr=new XMLHttpRequest();
xhr.open(`POST`,url,true);
xhr.onload=function(){
    if(xhr.status===200||xhr.status===304)
    {
       console.log(JSON.parse(xhr.responseText));
    }
    else
    {
       console.log(`接口异常`);
    }
}
xhr.send(formData);
