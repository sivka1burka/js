
document.getElementById('one').onclick = black;
document.getElementById('two').onclick = white;
document.getElementById('three').onclick = color;
let ram=0;
function black(){
    document.getElementById('body').style.backgroundColor="rgb(32, 31, 31)"
    document.getElementById('body').style.color="white"
    localStorage.setItem("ram", 1);
}
function white(){
    document.getElementById('body').style.backgroundColor="white"
    document.getElementById('body').style.color="black"
    localStorage.setItem("ram", 0);
}
function color(){
    document.getElementById('body').style.backgroundColor="rgb(102, 156, 131)"
    document.getElementById('body').style.color="rgb(227,255,176)"
    localStorage.setItem("ram", 2);
}
let localValue= localStorage.getItem("ram");
if(localValue==1){
    black()
}
else if(localValue==2){
    color()
}
else{
    white()
}