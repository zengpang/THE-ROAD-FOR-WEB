let inputTex;
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