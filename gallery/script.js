let btn1= document.getElementById("btn1");
let btn2= document.getElementById("btn2");
let activateInterval=document.getElementById("activateInterval");
let activateInterval1=document.getElementById("activateInterval1");
let active=2;
let interval=0;
activateInterval.onclick=ac;
activateInterval1.onclick=bn;
function ac(){   
    interval = setInterval(() => skipOne(), 1000);
    // document.getElementById("activateInterval").style.backgroundColor="rgba(66, 66, 66, 0.315)";
}
function bn(){
    clearTimeout(interval);
   
}







function skipOne(){
    if(active==1){
        document.getElementById("kartinka6").style.display="none";
        document.getElementById("kartinka5").style.display="none";
        document.getElementById("kartinka4").style.display="none";
        document.getElementById("kartinka3").style.display="none";
        document.getElementById("kartinka2").style.display="none";
        document.getElementById("kartinka1").style.display="block";
        active++;
        document.getElementById("circle6").style.backgroundColor="rgb(121, 121, 121)";
        document.getElementById("circle1").style.backgroundColor="rgb(194, 194, 194)";
    }
    else if(active==2){
        document.getElementById("kartinka1").style.display="none";
        document.getElementById("kartinka2").style.display="block";
        document.getElementById("kartinka3").style.display="none";
        document.getElementById("kartinka4").style.display="none";
        document.getElementById("kartinka5").style.display="none";
        document.getElementById("kartinka6").style.display="none";
        active++;
        document.getElementById("circle1").style.backgroundColor="rgb(121, 121, 121)";
        document.getElementById("circle2").style.backgroundColor="rgb(194, 194, 194)";
    }
    else if(active==3){
        document.getElementById("kartinka2").style.display="none";
        document.getElementById("kartinka3").style.display="block";
        document.getElementById("kartinka4").style.display="none";
        document.getElementById("kartinka5").style.display="none";
        document.getElementById("kartinka6").style.display="none";
        document.getElementById("kartinka1").style.display="none";
        active++;
        document.getElementById("circle2").style.backgroundColor="rgb(121, 121, 121)";
        document.getElementById("circle3").style.backgroundColor="rgb(194, 194, 194)";
    }
    else if(active==4){
        document.getElementById("kartinka3").style.display="none";
        document.getElementById("kartinka4").style.display="block";
        document.getElementById("kartinka5").style.display="none";
        document.getElementById("kartinka6").style.display="none";
        document.getElementById("kartinka1").style.display="none";
        document.getElementById("kartinka2").style.display="none";
        active++;
        document.getElementById("circle3").style.backgroundColor="rgb(121, 121, 121)";
        document.getElementById("circle4").style.backgroundColor="rgb(194, 194, 194)";
    }
    else if(active==5){
        document.getElementById("kartinka4").style.display="none";
        document.getElementById("kartinka5").style.display="block";
        document.getElementById("kartinka6").style.display="none";
        document.getElementById("kartinka1").style.display="none";
        document.getElementById("kartinka2").style.display="none";
        document.getElementById("kartinka3").style.display="none";
        active++;
        document.getElementById("circle4").style.backgroundColor="rgb(121, 121, 121)";
        document.getElementById("circle5").style.backgroundColor="rgb(194, 194, 194)";
    }
    else if(active==6){
        document.getElementById("kartinka5").style.display="none";
        document.getElementById("kartinka6").style.display="block";
        document.getElementById("kartinka1").style.display="none";
        document.getElementById("kartinka2").style.display="none";
        document.getElementById("kartinka3").style.display="none";
        document.getElementById("kartinka4").style.display="none";
        active++;
        document.getElementById("circle5").style.backgroundColor="rgb(121, 121, 121)";
        document.getElementById("circle6").style.backgroundColor="rgb(194, 194, 194)";
    }
    if(active>6){
        active=1;
    }
}
function skipTwo(){
    if(active==2){
        document.getElementById("kartinka1").style.display="none";
        document.getElementById("kartinka5").style.display="none";
        document.getElementById("kartinka4").style.display="none";
        document.getElementById("kartinka3").style.display="none";
        document.getElementById("kartinka2").style.display="none";
        document.getElementById("kartinka6").style.display="block";
        active--;
        document.getElementById("circle1").style.backgroundColor="rgb(121, 121, 121)";
        document.getElementById("circle6").style.backgroundColor="rgb(194, 194, 194)";
    }
    else if(active==1){
        document.getElementById("kartinka1").style.display="none";
        document.getElementById("kartinka6").style.display="none";
        document.getElementById("kartinka4").style.display="none";
        document.getElementById("kartinka3").style.display="none";
        document.getElementById("kartinka2").style.display="none";
        document.getElementById("kartinka5").style.display="block";
        active--;
        document.getElementById("circle6").style.backgroundColor="rgb(121, 121, 121)";
        document.getElementById("circle5").style.backgroundColor="rgb(194, 194, 194)";
    }
    else if(active==6){
        document.getElementById("kartinka1").style.display="none";
        document.getElementById("kartinka6").style.display="none";
        document.getElementById("kartinka5").style.display="none";
        document.getElementById("kartinka3").style.display="none";
        document.getElementById("kartinka2").style.display="none";
        document.getElementById("kartinka4").style.display="block";
        active--;
        document.getElementById("circle5").style.backgroundColor="rgb(121, 121, 121)";
        document.getElementById("circle4").style.backgroundColor="rgb(194, 194, 194)";
    }
    else if(active==5){
        document.getElementById("kartinka1").style.display="none";
        document.getElementById("kartinka6").style.display="none";
        document.getElementById("kartinka5").style.display="none";
        document.getElementById("kartinka4").style.display="none";
        document.getElementById("kartinka2").style.display="none";
        document.getElementById("kartinka3").style.display="block";
        active--;
        document.getElementById("circle4").style.backgroundColor="rgb(121, 121, 121)";
        document.getElementById("circle3").style.backgroundColor="rgb(194, 194, 194)";
    }
    else if(active==4){
        document.getElementById("kartinka1").style.display="none";
        document.getElementById("kartinka6").style.display="none";
        document.getElementById("kartinka5").style.display="none";
        document.getElementById("kartinka4").style.display="none";
        document.getElementById("kartinka3").style.display="none";
        document.getElementById("kartinka2").style.display="block";
        active--;
        document.getElementById("circle3").style.backgroundColor="rgb(121, 121, 121)";
        document.getElementById("circle2").style.backgroundColor="rgb(194, 194, 194)";
    }
    else if(active==3){
        document.getElementById("kartinka3").style.display="none";
        document.getElementById("kartinka6").style.display="none";
        document.getElementById("kartinka5").style.display="none";
        document.getElementById("kartinka4").style.display="none";
        document.getElementById("kartinka2").style.display="none";
        document.getElementById("kartinka1").style.display="block";
        active--;
        document.getElementById("circle2").style.backgroundColor="rgb(121, 121, 121)";
        document.getElementById("circle1").style.backgroundColor="rgb(194, 194, 194)";
    }
    
    if(active==0){
        active=6;
    }
}

btn2.onclick=   skipOne

btn1.onclick= skipTwo



























