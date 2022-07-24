let inputTex;
let arr=[3,1,8,10,11];
let radios=document.getElementsByName("sumType");
function ifBranch()
{
    inputTex= document.getElementsByClassName("scoreInput")[0].innerHTML; 
   let score=parseInt(inputTex);
   if(score>=90)
   {
    alert('优秀');
   }
   else if(score>=60)
   {
    alert('良好');
   }
   else
   {
    alert('不及格');
   }
}
function SwitchBrach()
{
    inputTex= document.getElementsByClassName("scoreInput")[0].innerHTML;
    let score=parseInt(inputTex);
    
    switch(true)
    {
        case score>=90:{alert('优秀');};break;
        case score>=60:{alert('良好');};break;
        default:{alert('不及格');};
    }
}
function SquaresSumCollect()
{
    let result=0;
   switch(parseInt(getSelectRadio()))
   {
      case 1:{result=SquaresSum1();};break;
      case 2:{result=SquaresSum2();};break;
      case 3:{result=SquaresSum3();};break;
      case 4:{result=SquaresSum4();};break;
      case 5:{result=SquaresSum5();};break;

   }
   alert(result);
}
function SquaresSum1()//while循环
{
    let sum=0;
    let index=0;
    while(index<arr.length)
    {
        sum+=arr[index]**2;
        index++;
    }
    return sum;
     
}
function SquaresSum2()//dowhile循环执行
{
    let sum=0;
    let index=0;
    do{
        sum+=arr[index]**2;
        index++;
    }while(index<arr.length);
    return sum;
}
function SquaresSum3()//for循环执行
{
    let sum=0;
    for(let index=0;index<arr.length;index++)
    {
        sum+=arr[index]**2;
    }
    return sum;
}
function SquaresSum4()//forin循环执行
{
    let sum=0;
    for(let index in arr)
    {
        sum+=arr[index]**2;
    }
    return sum;
   
}
function SquaresSum5()//forof循环执行
{
    let sum=0;
    for(let index of arr)
    {
        sum+=index**2;
    }

    return sum;
}

function getSelectRadio()
{
    for(let index of radios)
    {
        if(index.checked)
        {
            return index.value;
        }
    }
}