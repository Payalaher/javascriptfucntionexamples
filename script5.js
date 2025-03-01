function applyOperation(a,b,operation){

    operation(a,b);
}

applyOperation(8,5,function(x,y){
    console.log("Addition of two numbers: ",x+y);
    console.log("Substraction of two numbers: ",x-y);
    console.log("Multiplication of two numbers: ",x*y);
})