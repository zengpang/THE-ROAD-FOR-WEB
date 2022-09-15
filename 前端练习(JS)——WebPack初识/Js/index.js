function component()
{
    const element=document.createElement(`div`);
    element.innerHTML=_.join([`Hello`,`webPack`]);
    return element;
}
document.body.appendChild(component());