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
