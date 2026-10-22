//basic function
function greet() {
    console.log('hello luffy');
}

greet();

//higher order funciton
function higherOrderFunc(){
    console.log('hello luffy');
}

function execute(callback: ()=> void){
    callback();
}

execute(higherOrderFunc);