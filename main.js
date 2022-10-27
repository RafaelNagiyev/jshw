function one () {
    const a = +prompt('Enter A')
    const b = +prompt('Enter B')
    if (b === 0) {
        consol.log('B cannot be equal zero')
    } else {
        let result = a/b;
        let remainder = a%b;
        console.log("Result:",result)
        console.log("Remainder:" ,remainder)
    }
}

function two () {
    let a = +prompt('Enter A')
    let b = +prompt('Enter B')
    c = a;
    a = b;
    b = c;
    console.log(a , b);
}

function three () {
    const a = +prompt('Enter A')
    const b = +prompt('Enter B')
    const c = +prompt('Enter C')
    let result = (c - b) / a;
    console.log("x=",result)
}

function four(){
    let a = +prompt ('please enter the value of A:');
    let b = +prompt ('please enter the value of B:');
    console.log(a);
    console.log(b);
    let result = '';
    if(a > b){
        result = a + b;
    } else if (a == b){
        result = a * b;
    }else if (a < b){
        result = a - b;
    }
    console.log(result);
}

function five(){
    let a = +prompt ('please enter the value of A:');
    let b = +prompt ('please enter the value of B:');
    let c = +prompt ('please enter the value of C:');
    console.log(a);
    console.log(b);
    console.log(c);
    if(a == 0)
        return "D = 0";
    let res = {};
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return "D < 0";
    res = D;
    if(D == 0)
        res = (-b + Math.sqrt(D)) / (2 * a);
    else if(D > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res = tmp;
    }
    return res;
}

function seven(){
    console.log("7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? (the center of the circle is at the origin)")
    let x = +prompt ('please enter the value of X:');
    let y = +prompt ('please enter the value of Y:');
    let r = +prompt ('please enter the value of R:');
    console.log(x);
    console.log(y);
    console.log(r);
    

    if(x**2 + y**2 < r**2)
    {
        console.log("Inside");
    }
    else if(x**2 + y**2 == r**2)
    {
        console.log("On the circle");
    }
    else
    {
        console.log("Outside");
    }
    
}
three()