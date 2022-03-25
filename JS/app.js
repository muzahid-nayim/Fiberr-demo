
var counter={
    c1:true,
    c2:true,
    c3:true,
    c4:true,
    c5:true
}

function angle(){
    var img =document.getElementById("first-angle");
    if (counter.c1==true) {
        
        img.style.transform= "rotate(180deg)"
        counter.c1=false;
    }
    else{
        
        img.style.transform= "rotate(0deg)"
        counter.c1=true;
    }
    
}
function angle2(){
    var img =document.getElementById("second-angle");
    if (counter.c2==true) {
        
        img.style.transform= "rotate(180deg)"
        counter.c2=false;
    }
    else{
        
        img.style.transform= "rotate(0deg)"
        counter.c2=true;
    }
}
function angle3(){
    var img =document.getElementById("third-angle");
    if (counter.c3==true) {
        
        img.style.transform= "rotate(180deg)"
        counter.c3=false;
    }
    else{
        
        img.style.transform= "rotate(0deg)"
        counter.c3=true;
    }
}
function angle4(){
    var img =document.getElementById("forth-angle");
    if (counter.c4==true) {
        
        img.style.transform= "rotate(180deg)"
        counter.c4=false;
    }
    else{
        
        img.style.transform= "rotate(0deg)"
        counter.c4=true;
    }
}
function angle5(){
    var img =document.getElementById("fifth-angle");
    if (counter.c5==true) {
        
        img.style.transform= "rotate(180deg)"
        counter.c5=false;
    }
    else{
        
        img.style.transform= "rotate(0deg)"
        counter.c5=true;
    }
}

