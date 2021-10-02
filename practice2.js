
//---------Task 1----------

let x = 1;
let y = 2;

let res1 = x + "" + y;
console.log(res1);
console.log(typeof res1);

let res2 = (x==1) + "" + y;
console.log(res2);
console.log(typeof res2);

let res3 = (y > x);
console.log(res3);
console.log(typeof res3);

let res4 = x.toString / y;
console.log(res4);
console.log(typeof res4);


//---------Task 2----------


    function checkNumber(number) {
       return (number % 2 == 0 || number % 7 == 0) ? 
            console.log('Number is even') 
            : console.log('Number is odd')
        }

    function getNumber () {

        let numb = prompt("write the number", "2");
        checkNumber(numb);
    }


//---------Task 3----------


let arr = [];

arr[0] = 23;
arr[1] = "Valentina";
arr[2] = true;
arr[3] = null;

console.log(arr.length);

let askForNumber = prompt("put any number", "23");

arr[4] = askForNumber;
console.log(arr[4]);

arr.shift();
console.log(arr);


//---------Task 4----------

function arrOfcitites() {

    let cities = ["Rome", "Lviv", "Warsaw"];
    console.log(cities.join("*"));

}


//---------Task 5----------


function checkAge () {

	let yourAge = prompt("How old are you?");

	if(yourAge >= 18){
		console.log("You are adult");
	} else {
		console.log("Sorry, you aren't adult")
	}
}


//---------Task 6----------

function triangle() {
	let firstSide = +prompt("write fisrt side of triangle", 12);
	if (isNaN(firstSide) || firstSide < 0) {
	    firstSide = +prompt("please, write number of side of triangle", 12);
	}

    let SecondSide = +prompt("write second side of triangle", 12);
    if (isNaN(SecondSide || SecondSide < 0)) {
        SecondSide = +prompt("please, write number of side of triangle", 12);
    }

	let ThirdSide = +prompt("write third side of triangle", 10);
	if (isNaN(ThirdSide) || ThirdSide < 0) {
	    ThirdSide = +prompt("please, write number of third side of triangle", 10);
	}


    function triangleArea(a, b, c) {

    	if (a > 0 && b > 0 && c > 0) {
            let p = (a + b + c) / 2;
            let area = Math.sqrt(p * (p-a) * (p-b) * (p-c));
    		console.log(`triangle area is: ${area.toFixed(3)}`)
    	} else {
            alert('Incorect data');
        }
        
        if ((a*a + b*b == c*c) || (b*b + c*c == a*a) || c*c + a*a == b*b) {
            console.log(`The triangle is right-angeled`)
        } else {
            console.log(`The triangle isn't right-angeled`)
        }
        
    }

    triangleArea(firstSide, SecondSide, ThirdSide)
}


//---------Task 7----------

const sayHallo = () => {
    let date = new Date();
    let hour = date.getHours();


    if (hour >= 23 || hour <= 5) {
        console.log(`Buenas noches`);
    } else if (hour > 5 && hour <= 11) {
        console.log(`Hola`);
    } else if (hour > 11 && hour <= 17) {
        console.log(`Buenos dias`);
    } else if (hour > 17 && hour < 23) {
        console.log(`Buenas tardes`);
    }
}

const sayHallo2 = () => {

    let date2 = new Date();
    let hour2 = date2.getHours();
   
    switch (hour2) {
        case hour2 = 1:
        case hour2 = 2:
        case hour2 = 3:
        case hour2 = 4:
        case hour2 = 5:
        case hour2 = 6:
        case hour2 > 22:
        case hour2 > 23:
        case hour2 > 24:
            console.log(`Buenas noches`);
            break;

        case hour2 = 7:
        case hour2 = 8:
        case hour2 = 9:
        case hour2 = 10:
        case hour2 = 11:
        case hour2 = 12:
            console.log(`Hola`);
            break;

        case hour2 > 13:
        case hour2 > 14:
        case hour2 > 15:
        case hour2 > 16:
        case hour2 > 17:
            console.log(`Buenos dias`);
            break;

        case hour2 > 18:
        case hour2 > 19:
        case hour2 > 20:
        case hour2 > 21:
            console.log(`Buenas tardes`);
            break;

        default:
            alert('i don.t understand');
    }
}