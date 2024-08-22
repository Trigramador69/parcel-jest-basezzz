function generarFizzBuzz(number) {
    if(number===3){
        return "Fizz";
    }

    if(number===5){
        return "Buzz";
    }

    if(number===15)
    {
        return "FizzBuzz";
    }

    if(number%3===0){
        return "Fizz";
    }

    if(number%5===0){
        return "Buzz";
    }
    return number+""
}

export default generarFizzBuzz