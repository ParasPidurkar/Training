let a=10;
{
    let b=20;//always use let if you want local variable 
    //var global var 
    console.log()
}
var test = function (){  //global fun
    var a = 10;
    return a;
}

function test2(){
    console.log(test())
}
test2();
//console.log(b)
//console.log(test())