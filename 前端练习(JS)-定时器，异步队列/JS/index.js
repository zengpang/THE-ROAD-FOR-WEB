//setTimeout
// function sayHello(){
//     console.log('Hello jirengu');
// }
// let timer1=setTimeout(sayHello,1000);
// clearTimeout(timer1);//停止计时器

// let timer2=setTimeout(() => {
//     console.log('Hello jirengu');
// }, 2000);
//结果为输出一个Hello jirengu，说明setTimeout只执行一次，且可使用clearTimeout停止计时器


//范例2
// const userTime=t=>{
//     let start=Date.now();
//     while(Date.now()-start<t){
        
//     }
// };
// let timer1=setTimeout(()=>{
//     console.log(3);
// },500);

//范例3
// let timer2=setTimeout(()=>{
//     console.log(4);
// },1000);
// console.log(1);
// userTime(2000);
// console.log(2);
//执行结果为先出现1，过了2秒之后，2，3，4同时出现

//范例3
// setTimeout(()=>{
//   console.log(1)
// },0);
// console.log(2);
//结果为2，1

// setInterval
// console.log(1)
// var timer=setInterval(() => {
//     console.log('hello world')
// }, 2000);
// console.log(2)//结果为1 2 hello world每隔2秒出现一次

function showTime(){
    document.querySelector('.clock').innerText=new Date().toString().match(/\d{1,2}:\d{1,2}:\d{1,2}/)[0];
}
let btnStart=document.querySelector('#start');
let btnPause=document.querySelector('#pause');
let timer=null;
btnStart.onclick=function(){
    timer=setInterval(() => {
        showTime();
    }, 1000);
}
btnPause.onclick=function(){
    clearInterval(timer);
}

