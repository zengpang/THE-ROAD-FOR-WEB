const $=s=>document.querySelector(s);
const $submit=$(`[type=submit]`);
const $form = $('form');

const $msg=$(`#msg`);

let url = 'http://rap2api.taobao.org/app/mock/244238/register';
$form.onsubmit=function(e){
    e.preventDefault();
    let formData=new FormData($form);
    let xhr=new XMLHttpRequest();
    xhr.open(`POST`,url,true);
    xhr.onload=function(){
      if(xhr.status===200||xhr.status===304)
      {
        let data=JSON.parse(xhr.responseText);
        $msg.innerText=data.msg||data.errMsg;
      }
      else
      {
        $msg.innerText=`接口异常`;
      }
    }
    xhr.send(formData);
}