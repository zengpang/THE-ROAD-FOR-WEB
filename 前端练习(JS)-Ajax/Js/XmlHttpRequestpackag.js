const request=(url,params,onsuccess,onerror)=>{
    url=url+`?`+Object.entries(params).map(arr=>arr[0]+`=`+arr[1]).join(`&`)
    let xhr=new XMLHttpRequest();
    xhr.open(`GET`,url,true)
    xhr.onload=function(){
        if(xhr.status===200||xhr.status===304){
            onsuccess(JSON.parse(xhr.responseText));
        }
        else
        {
            onerror();
        }
    }
    xhr.onerror=onerror;
    console.log(url);
    xhr.send();
}
request('http://rap2api.taobao.org/app/mock/244238/weathe',{city:`杭州`},data=>{
    console.log(`请求成功`);
    console.log(data);
},()=>{console.log(`接口异常`)})