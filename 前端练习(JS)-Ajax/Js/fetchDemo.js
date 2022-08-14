let url = 'http://rap2api.taobao.org/app/mock/244238/login';
let data={username:`jirengu`,password:'123456'}
fetch(url,{
    method:"POST",
    body:Object.entries(data).map(arr=>arr[0]+`=`+arr[1]).join(`&`),
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then(res=>res.json())
.catch(error=>console.error(`Error:`,error))
.then(response=>console.log(`Success:`,response))
