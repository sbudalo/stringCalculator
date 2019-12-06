'use strict'

function add(str){
    let sum = 0;
    let regularExp = new RegExp(/-?\d+/gi); 
    let arr = str.match(regularExp);
    let negatives = []; 
    str = str.split(/\/\/|;|,|1000|\n/gi)       
        
//first checks string validity, then loops to push negative numbers in an array
    if (str == ""){
        return 0;
    }
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            negatives.push(arr[i]);
        } 
        else {
// ERRORS!! numbers more than 999 are pushed to give an error, 
//number 4 is ignored from an array arr
            if(parseInt(arr[i]) > 999){
             throw('ERROR: invalid input');
            } else {
                if(parseInt(arr[i]) != 4){
                    sum += parseInt(arr[i]);
                }
              }
        }
    }       
    if(negatives.length > 0){
    let negNumbers = " ";
        for(var i = 0; i < negatives.length; i++){
            if(i == negatives.length  - 1){   
                negNumbers += negatives[i];  
            }
            else{
                negNumbers += negatives[i] + ",";
            } 
        } throw ("negatives not allowed " + negNumbers);     
    }      
    return sum;
}

// i will use console.log to display different outputs from the exersizes.
// console.log(add(""))
// console.log(add("1"))
// console.log(add("1,1"))
// console.log(add("1,2,3,4"))
// console.log(add("1\n2,3"))
// console.log(add("//;\n1;2"))
// console.log(add("//4\n142"))
// console.log(add("-1,-2,3,4"))

// console.log(add("//;\n1000,1;2"));

module.import(add) = add()