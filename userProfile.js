let div=document.getElementById("div");
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    let ul=document.getElementById("list");
    let display=ul[0].classList.toggle("true");
    if(display){
        ul[0].style.transform="translateY(10)";
    }
    else{
        ul[0].style.display="none"
    }
})


