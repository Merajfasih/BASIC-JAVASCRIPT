

//ALERT
function fun1(){
    var a = 30;
    var b = 20;
    if(a>b)
    {
        var c = a + b;
        console.log(c);
        alert("SUM OF A AND B IS :" + c);
    }
    else{
        alert("B is GREATER");
    }
}

//CONFIRM
function fun2(){
    var a = confirm("ARE YOU SURE TO DELETE?");
    if(a)
    {
        alert("Data is delete");
    }
    else{
        alert("Data is not delete");
    }
}

//PROMPT
  var x = prompt("ENTER YOUR NAME : ");
  document.write("Your Name is : " + x);