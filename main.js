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

three()