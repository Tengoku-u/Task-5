function convertFahrToCelsius(num) {
    let str = JSON.stringify(num);
    let result = (num - 32) * (5/9);
    
     if (typeof num === "number") {
        console.log(result.toFixed(4));
        return result.toFixed(4);   
    }  
    else if (Array. isArray(num)) {
        console.log(str + " is not a valid number but an array")
    } else {
        console.log(str + " is not a valid number but a/an "  + typeof num);
    }
    return result;
}
convertFahrToCelsius(9);




function yuGiOhReplacer(num) {
    let yuGiOh = [];
    if (typeof num === "number") {

        for (let i =1; i<=num; i++) {
            let tempNum = "";
            if (i % 2 === 0) {
                tempNum += (tempNum === "")? "yu" : "-yu";
            }
            if (i % 3 === 0) {
                tempNum += (tempNum === "")? "gi" : "-gi";
            }
            if (i % 5 === 0) {
                tempNum += (tempNum === "")? "oh" : "-oh";
            }
            if (tempNum === "") {
                tempNum =i;
            }
            yuGiOh.push(tempNum);  
        }
    } 
     
    if (typeof num !== "number") {
        console.log("invalid parameter: " + num);
    }
    console.log(yuGiOh);
    return yuGiOh;
}
yuGiOhReplacer(50);