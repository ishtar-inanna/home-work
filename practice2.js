
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
	let firstAndSecondSide = +prompt("fisrt and second side of triangle", 12);
	if (isNaN(firstAndSecondSide)) {
	    firstAndSecondSide = +prompt("please, write number of side of triangle", 12);
	}

	let ThirdSide = +prompt("Third side of triangle", 10);
	if (isNaN(ThirdSide)) {
	    ThirdSide = +prompt("please, write number of third side of triangle", 10);
	}


    function triangleArea(a, b, c) {

    	if (c >= a+b) {
    		return alert("Incorrect data. third side must be less than first and second sides. Please try again.")
    	}
        
        console.log(0.5 * a * b)
    }

    triangleArea(firstAndSecondSide, firstAndSecondSide, ThirdSide)
}

