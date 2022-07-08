

const ctf = (i)=>{
    return (9*i)/5 + 32;
}
const ftc = (i)=>{
    return  (5*(i-32))/9;
}

const out = document.getElementById("output");

const convert = ()=>{
    let result;
    let tem = document.getElementById("temp_value").value;
    const unit1 = document.getElementById('unit');
    let unit2 = unit1.options[unit1.selectedIndex].value;
    
    if(unit2=="fahr"){
        result = ftc(tem);
        out.innerHTML = `Temperature in Celcius is ${result}  &#176C`;
    }else{
        result = ctf(tem);
        out.innerHTML = `Temperature in Fahrenheit is ${result} F`;
    }
}