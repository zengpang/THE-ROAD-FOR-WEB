const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

// var age=2;
// let sex=`male`;
// function printName(){
//     console.log(age);
// }
// console.log(window.age);
// window.printName();
// console.log(window.sex);

// 作业1：判断是否为Android
// function isAndroid()
// {
//     return /android/i.test(navigator.userAgent);
// }
// console.log(isAndroid());

//作业2：判断元素是否在视窗内
let $div= $(`.box`);
window.addEventListener(`scroll`,(e)=>{isinWindow($div)});
function isinWindow($node)
{
    let result=($node.getBoundingClientRect().top<window.innerHeight&&$node.getBoundingClientRect().top>0);
     console.log(result)
     return result;
}
