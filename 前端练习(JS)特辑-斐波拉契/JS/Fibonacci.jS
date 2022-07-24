
//时间计算
function TimeCou(handle)
{
 
  let dateNow=Date.now();
  console.log("结果为%s",handle(30,1,1));
  return Date.now()-dateNow;
}
function fibOnClick(data)
{
 
 let result;
 switch(parseInt(data.className.split(" ")[1]))
 {
    case 1:{result= TimeCou(fib1);};break;
    case 2:{result= TimeCou(fib2);};break;
    case 3:{result= TimeCou(fib3);};break;
    case 4:{result= TimeCou(fib4);};break;
    case 5:{result= TimeCou(fib5);};break;
    case 6:{result= TimeCou(fibUltimate);  };break;
 }
 alert(`耗时${result}`);


}
function fib1(n)//普通递归方法
{
   if(n==1||n==2)
   {
     return 1;
   }
   return fib1(n-1)+fib1(n-2);
}
function fib2(n, x, total)//尾递归
{
   if(n<=1) return x;
   return fib2(n-1,total,x+total)
}
let Fmap=new Array(1000).fill(-1);
function fib3(n)
{
   if(n<=1) return n;
   if(Fmap[n]!=-1)
   {
    return Fmap[n];
   }
   Fmap[n]=fib3(n-2)+fib3(n-1);
   return Fmap[n];
}
function fib4(n)
{
   
}
function fib5(n)
{
   
}
function fibUltimate(n)//终极优化版本
{
  let result=(1/Math.sqrt(5))*(((1+Math.sqrt(5))/2)**n-((1-Math.sqrt(5))/2)**n);
  result=Math.floor(result);
  return result;
}