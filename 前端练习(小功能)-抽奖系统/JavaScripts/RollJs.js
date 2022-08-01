var rollResultText = document.querySelector('.rollResult');
var rollBtn = document.querySelector(`.rollButton`);
var isinRoll = false;//判断是否正在随机
var totalTime = 10000;//总间隔时长
var intervalTime = 100;
var nowTime = 0;//当前经历时长

var intervalTimeGrow = 1.3;
//因为定时器本质是在创建的时候就开始计时，所以间隔变长逻辑不能在定时器内部执行，只能先根据间隔先将总时长分割为几部分，然后在创建定时器的时候传入计算好的间隔
function BtnRollClick() //抽奖按钮点击事件
{

    if (isinRoll) {
        alert("正在随机，请耐心等待结果");
        return;
    }
    else {
        isinRoll = true;
        let nowIntervalTime = intervalTime;
        while (isinRoll) {
            //方法一 
            setTimeout(() => {
                rollResultText.innerText = Math.floor(Math.random() * 100);
            }, nowIntervalTime);
            if (nowTime >= totalTime) {
                isinRoll = false;
                nowIntervalTime = intervalTime;
                nowTime = 0;   
            }
            else {
                nowTime += nowIntervalTime;
                nowIntervalTime = Math.floor(nowIntervalTime * intervalTimeGrow);         
            }    
            
            //方法二 闭包
            // (function(){
            // setTimeout(() => {
            //     rollResultText.innerText = Math.floor(Math.random() * 100);
            // }, nowIntervalTime);
            // nowIntervalTime = Math.floor(nowIntervalTime * intervalTimeGrow); 
            // })(); 
            // if (nowTime >= totalTime) {
            //     isinRoll = false;
            //     nowIntervalTime = intervalTime;
            //     nowTime = 0;   
            // }
            // else {
            //     nowTime += nowIntervalTime;
            // }  
           
        } 
    }

}