//-------------------------------Task 1


let height = Number(prompt("write the number"));
let width = Number(prompt("write the number"));
 
function calcRectangleArea(h, w) {
	if (h < 0 || w < 0 || isNaN(h) || isNaN(w)) {
		throw new Error("There is an error!")
	}

	return h + w
}

try {
	calcRectangleArea(height, width);
} catch (error) {
   console.log("Error handling of any type");
   console.log(error.message);
}


//-------------------------------Task 2


function checkAge() {
	let age = prompt("write your age");
	if (isNaN(age) || age === "") {
		throw new Error("Please write your age agecorrectly.The field is empty or you didn't use numbers");
    } else if (age < 14) {
    	throw new Error("Sorry, you are too young");
    }
}

try {
	checkAge()
} catch(exp) {
	console.log(exp.name);
	console.log(exp.message);
	console.log(exp.stack);
}


// -------------------------------Task 3


class MonthException {
	constructor(name, message) {
		this.message = message;
		this.name = name;
	}

	showError() {
		throw new Error(this.name, this.message)
	}
}

let error = new MonthException('MonthException', "Incorrect month number")

function showMonthName(month) {
	switch (month) {
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
   case 3:
    console.log('February');
    break;
   case 4:
    console.log('April');
    break;
   case 5:
    console.log('May');
    break;
   case 6:
    console.log('June');
    break;
   case 7:
    console.log('July');
    break;
   case 8:
    console.log('August');
    break;
   case 9:
    console.log('September');
    break;
   case 10:
    console.log('October');
    break;
   case 11:
    console.log('November');
    break;
   case 12:
    console.log('December');
    break;
  default:
    error.showError();
}
}

showMonthName(5)


//-------------------------------Task 4


function showUser(id) {
	if (id < 0) {
		throw new Error(`Error: ID must not be negative: ${id}`)
	}

	return {id}
}



function showUsers(ids) {
	let arrIDS = [];
	for (const elem of ids) {
		try {
		arrIDS.push(showUser(elem));
	} catch(exp) {
	console.log(exp.message);
    }
}

	console.log(arrIDS)
}

showUsers([7, -12, 44, 22])
