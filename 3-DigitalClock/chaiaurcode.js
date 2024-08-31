const result = document.querySelector('#clock');




setInterval(()=>{
    const date = new Date();
    result.innerHTML=date.toLocaleTimeString();
},1000);



