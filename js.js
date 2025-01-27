function leepYear(year){
    if (year%4==0){
        if (year%100==0 &&(year%400==0)){
            return true
        } 
        return true
    }
    else{ 
        return false
    }
}
function ticketPrice(age){
    var price=0
    if (age<=12){
       price=10
    }
    else if (age>=13 && age<=17){
        price=15
    }
    else {
        price=20
    }
    return price
}
function WeatherClothing(){
    var temperature=prompt("enter your temperature")
    var clothes=" "
    if(temperature<=10){
        clothes="don't forget your jacket"
    }
    else if (temperature<=20){
        clothes="don't forget your hoodie"
    }
    else{clothes="t-shirt"}
    return clothes
}
function fib(n){
    if(n==0 || n==1){
        return 1 
    }
    return fib(n-1)+fib(n-2)
}
function palandrom(str){
    if(str.length==0||str.length==1){
        return true
    }
    else {
        palandrom(str.slice(1,str.length-1))
    }
    return false
        
}
function power(x,y){
    if (y==0){
        return 1
    }
    return power(x,y-1)*x
}