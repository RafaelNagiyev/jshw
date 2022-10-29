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

function six() {
    console.log(
        "The user enters a two-digit number. Print the literal representation of this number to the console. For example, typing '25' will display 'twenty five' in the console, and '13' will display 'thirteen'."
      );
      const A = parseFloat(prompt("Enter two digit number"));
    
      let first = "";
      let second = "";
      let check = false;
      if (A / 10 >= 1) {
        switch (parseInt((A / 10) % 10)) {
          case 1:
            if (A % 10 === 0) {
              first += "ten";
            } else if (A % 10 === 1) {
              first += "eleven";
            } else if (A % 10 === 2) {
              first += "twelve";
            } else if (A % 10 === 3) {
              first += "thirteen";
            } else if (A % 10 === 4) {
              first += "fourteen";
            } else if (A % 10 === 5) {
              first += "fifteen";
            } else if (A % 10 === 6) {
              first += "sixteen";
            } else if (A % 10 === 7) {
              first += "seventeen";
            } else if (A % 10 === 8) {
              first += "eighteen";
            } else if (A % 10 === 9) {
              first += "nineteen";
            }
            check = true;
            break;
          case 2:
            first += "twenty";
            break;
          case 3:
            first += "thirty";
            break;
          case 4:
            first += "fourty";
            break;
          case 5:
            first += "fifty";
            break;
          case 6:
            first += "sixty";
            break;
          case 7:
            first += "seventy";
            break;
          case 8:
            first += "eighty";
            break;
          case 9:
            first += "ninety";
          default:
            break;
        }
    
        if (!check) {
          switch (A % 10) {
            case 1:
              second += "one";
              break;
            case 2:
              second += "two";
              break;
            case 3:
              second += "three";
              break;
            case 4:
              second += "four";
              break;
            case 5:
              second += "five";
              break;
            case 6:
              second += "six";
              break;
            case 7:
              second += "seven";
              break;
            case 8:
              second += "eight";
              break;
            case 9:
              second += "nine";
              break;
          }
        }
      }
      console.log(first + second);
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
six()