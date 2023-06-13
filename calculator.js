function reset(){   
    document.getElementById("num1").value = " ";
    document.getElementById("num2").value =" ";
    document.getElementById("result").value = " ";
    console.log(num1);
}

function add(){
    document.getElementById("result").value = parseInt(num1= document.getElementById("num1").value) + parseInt( num2= document.getElementById("num2").value);
    console.log(num1);
}

function sub(){
    document.getElementById("result").value = parseInt(num1= document.getElementById("num1").value) - parseInt( num2= document.getElementById("num2").value);
    console.log(num1);
}

function mul(){
    document.getElementById("result").value = parseInt(num1= document.getElementById("num1").value) * parseInt( num2= document.getElementById("num2").value);
    console.log(num1);
}

function div(){
    document.getElementById("result").value = parseInt(num1= document.getElementById("num1").value) / parseInt( num2= document.getElementById("num2").value);
    console.log(num1);
}



