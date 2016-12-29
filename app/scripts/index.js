import _ from 'lodash';
function component(){
    var element=document.createElement('div');
    element.innerHTML=_.map(['hello','webpack'],function(item){
        return item+' ';
    });
    return element;
}

// document.body.appendChild(component());