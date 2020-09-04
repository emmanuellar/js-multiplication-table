// alert("testing for js");
function getMultiple(){
    let firstNumber=document.getElementById('first').value;
    let secondNumber=document.getElementById('second').value;
    let output="";
    let table="";

    for(let i=1; i<=secondNumber; i++){
        output=firstNumber*i;
        table += firstNumber +  "  X  "  + i +  "  =  "  + output + "<br>";
        document.getElementById("result").innerHTML= table;
    }
}


    