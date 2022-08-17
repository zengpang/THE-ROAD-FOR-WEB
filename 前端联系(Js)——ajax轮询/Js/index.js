let box=document.querySelector(`#box`);
let ipt=document.querySelector(`#ipt`);
let send=document.querySelector(`#send`);

send.onclick=function(){
   let xhr=new XMLHttpRequest();
   xhr.open('GET','http://localhost:3001/send?msg='+ipt.value, true);
   xhr.onload=function(){
    console.log(this.responseText);
   }
   xhr.send();
}
function checkMessage(){
   let xhr=new XMLHttpRequest();
   xhr.open('GET','http://localhost:3001/getMsg', true);
   xhr.onload=function(){
    console.log(this.responseText);
    let msgQueue=JSON.parse(this.responseText);
    box.innerHTML='';
    msgQueue.forEach(msg => {
        let p=document.createElement(`p`);
        p.innerText=msg;
        box.appendChild(p);
    });
   }
   xhr.send();
}
setInterval(()=>checkMessage(),500);