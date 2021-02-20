//FUNCTIONS

// function meraj(){
//     document.write("Hi! <br>");
//     document.write("Hellow <br> Meraj <br>");
// }

// function Ali(){
//     document.write("Hi! <br>");
//     document.write("Hellow <br> Ali <br>");
// }

// function Zeeshan(){
//     document.write("Hi! <br>");
//     document.write("Hellow <br> Zeeshan <br>");
// }

// document.write("<======><br>");
// meraj();
// document.write("<======><br>");
// Ali();
// document.write("<======><br>");
// Zeeshan();  
// document.write("<======><br>");

//FUNCTION WITH PARAMETERS
// function sum(a,b)
// {
//     // c = a + b;
//     x = parseInt(a);
//     y = parseInt(b);
//     c = x + y;
//     document.write("The Sum is : " + c);
// }

// sum(1,2);

//FUNCTION WITH RETURN

function sum(a,b,c)
{
    var sum = a + b + c;
    return sum;
}
function persentage(tt)
{
    var per = tt/300 * 100;
    document.write(per);
}
var total = sum(40,55,70);
persentage(total);
