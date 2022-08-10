let $btn=document.querySelector(`.fullBtn`);
let $$pages=document.querySelectorAll(`.page`);
let i=0;
let dir=1;
$btn.addEventListener(`click`,()=>{
    if(i>=$$pages.length-1)
    {
        dir=-1;
    }
    else if(i<=0)
    {
        dir=1;
    }
    i+=1*(dir);
    window.scrollBy({
        top:(window.innerHeight)*dir,
        left:0,
        behavior:`smooth`
    });
    

    
})