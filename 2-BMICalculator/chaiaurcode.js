const form=document.querySelector('form');

form.addEventListener('submit',function(e){

    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')

    if(height==='' || height <= 0 || isNaN(height)){
        result.innerHTML="plz giv valid height";
    }
  else  if(weight===' ' ||weight <= 0 || isNaN(weight)){
        result.innerHTML="plz giv valid weight";
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`;
    

    if (bmi<18.6){
        result.innerHTML+= "   "+"under weight";
    }
    else if(bmi<=24.9){
        result.innerHTML+="  "+"normal range";
    }
    else if(bmi>24.9){
        result.innerHTML+="  " +"overweight"
    }
}

});