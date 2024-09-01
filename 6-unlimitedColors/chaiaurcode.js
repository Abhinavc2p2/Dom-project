const randomcolour=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for( let i=0;i<6;i++){
color+= hex[Math.floor(Math.random()*16)]
    }
    return color
}
let idd;
console.log(randomcolour());
const startchangngcolor=function(){
    function changbg(){
        document.body.style.backgroundColor=randomcolour()
    }
   
  idd=setInterval(changbg,1000)
}


const start=document.querySelector('#start').addEventListener('click',startchangngcolor)

const stopchangingcolor=function(){
    clearInterval(idd)
    idd=null;
    console.log("stop")
}
const stop=document.querySelector('#stop').addEventListener('click',stopchangingcolor)