var p1=document.getElementById('p1');
var p2=document.getElementById('p2');
var p3=document.getElementById('p3');

//bài 1
function changeColor(){
    p1.style.color='blue';
    p2.style.color='yellow';
    p3.style.color='red';
}
changeColor()

//bài 2
function changeBgColor(color){
    document.body.style.backgroundColor = color
}
changeBgColor('black')

//bài 3
function copyContent(paragraph1, paragraph2){
    var temp=paragraph2.innerHTML;
    paragraph1.innerHTML=temp;              
}
copyContent(p1,p2)

//bài4
function changeFontSize(x){
    var s = document.getElementsByTagName("p");
    for(let i=0;i<s.length;i++){
        s[i].style.fontSize=x+'px';
    }
}
changeFontSize(30);

//bai5
function increaseFontSize(id){
    var thePara=document.getElementById(id);
    var getType=parseInt(window.getComputedStyle(thePara,null).getPropertyValue('font-size'))
    if(getType>=30){
        thePara.style.fontSize ="30px";
        console.log("the font-size of this paragraph must not be less than 30px")
    }
    else{
        thePara.style.fontSize = getType + 1 +'px'
    }
}

//bai6
function increaseFontSize(b){
    var thePara=document.getElementById(b);
    var getType=parseInt(window.getComputedStyle(thePara,null).getPropertyValue('font-size'))
    if(getType<=10){
        thePara.style.fontSize ="10px";
        console.log("the font-size of this paragraph must not be less than 10px")
    }
    else{
        thePara.style.fontSize = getType + 1 +'px'
    }
}