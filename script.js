let a=document.querySelector("ul");
console.log(a)
a.addEventListener("click",()=>{
    if(name==="menu"){
        name="close";
        a.classList.add('top-[80px]');
        a.classList.add('opacity-100');
        console.log("menu")
    }
    else{
        name = 'menu';
        a.classList.remove('top-[80px]');
        a.classList.remove('opacity-100');  
        console.log("close");
    }
    
})



// function menu(e) {
//     let list = document.querySelector('ul');
//     if (e.name === "menu") {
//         e.name = 'close';
//         list.classList.add('top-[80px]');
//         list.classList.add('opacity-100');
//     } else {
//         e.name = 'menu';
//         list.classList.remove('top-[80px]');
//         list.classList.remove('opacity-100');
//     }