// //NodeList可以直接遍历
// document.querySelectorAll(`.box`).forEach(node=>{
//     console.log(node.className);
// });

// //HTMLCollection需要转换为数组才能用forEach
// Array.from(document.getElementsByClassName(`box`)).forEach(node=>{
//     console.log(node.className);
// });
// [...document.getElementsByClassName(`box`)].forEach(node=>{
//     console.log(node.className);
// });

let selectBtn=document.querySelector(`.select-all`);
let selectItems=document.querySelectorAll(`.item`);
let divBtns=document.querySelectorAll(`.box`);

//console.log(Array.from(divBtns).indexOf(document.querySelector(`.box`)));
console.log([...divBtns].indexOf(document.querySelector(`.box`)));
console.log(typeof(divBtns));


divBtns.forEach((divBtn)=>{
    divBtn.onclick=()=>{
        divBtns.forEach((divBtn)=>{
             divBtn.classList.remove(`active`);
        })
        divBtn.classList.add(`active`);
    }
})
selectBtn.onclick= ()=>{
    console.log("触发");
    selectItems.forEach((item)=>{
            item.checked=!item.checked;
    }); 
};
let second=document.querySelector(`.second`);
let first=document.querySelector(`.first`);
let addDivBtn=document.querySelector(`.addDiv`);
addDivBtn.onclick=()=>{
    let div=document.createElement(`div`);
    div.classList.add(`third`);
    let text=document.createTextNode(`third`);
    div.appendChild(text);
    // first.parentNode.insertBefore(div,first);
    first.parentNode.appendChild(div);
}
let colorDiv=document.querySelector(`.changeColor`);
let changeBtn=document.querySelector(`.changeColorBtn`);
let changed=false;
changeBtn.onclick=()=>{
    colorDiv.style.backgroundColor=changed?`#ff7f50`:`#ccc`;
    changed=!changed;
}
let text=document.querySelector(`.bigText`);
let bigButton=document.querySelector(`.bigButton`);
let smallButton=document.querySelector(`.smallButton`);
console.log(text.style.fontSize);

function sizeChangeOnclick(changeType)
{
  
   let changeRatio=(changeType==1?1.2:0.8);
   text.style.fontSize=parseInt(getComputedStyle(text).fontSize)*changeRatio+'px';
   console.log(text.style.fontSize);
}
bigButton.onclick=()=>{sizeChangeOnclick(1);};
smallButton.onclick=()=>{sizeChangeOnclick(0);}

//作业1
console.log(document.querySelector(`body`)===document.body);

//作业4
let $node=document.querySelector(`.box`);
function nodeOperation()
{
    $node.classList.remove(`active`);
    $node.classList.add(`active`);
    $node.classList.contains(`active`);
    $node.classList.toggle(`active`);

    $node.setAttribute(`data-id`,`100`);
    $node.getAttribute(`data-id`);
    $node.removeAttribute(`data-id`);

   
}

//作业10
let changeBodyBtn=document.querySelector(`.changeBody`);
changeBodyBtn.onclick=()=>{
    css(document.body, {
        color: 'red',
        backgroundColor: 'blue'
      })
}
function css(node,cssObj)
{
    
    for(let index in node.style)
    {
       if(typeof(cssObj[index])!="undefined") 
       {
        node.style[index]=cssObj[index];
       }
    }
}