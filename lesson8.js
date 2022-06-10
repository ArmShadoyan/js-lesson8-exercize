"use strict";

const lesson8 = {
	review1(num1,num2){
				const result = num1 < num2
				console.log (result)
	},
	review2(num1,num2){
				const result = num1 > num2;
				console.log(result);
	},
	review3(num1,num2){
				const result = num1 <= num2;
				console.log(result);
	},
	review4(num1,num2){
				const result = num1 >= num2;
				console.log(result);
	},
	review5(num1,num2){
				const result = num1 == num2;
				console.log(result);
	},
	review6(num1,num2){
				const result = num1 === num2
				console.log(result);
	},
	review7(num1,num2){
				const result = num1 != num2
				console.log(result);
	},
	review8(num1,num2){
				const result = num1 !== num2
				console.log(result);
	}
}
	lesson8.review1(5,6)  //true
	lesson8.review1(7,6)  // false

	lesson8.review2(25,20) //true
	lesson8.review2(15,20) //false

	lesson8.review3(20,20) //true
	lesson8.review3(30,20) //false

	lesson8.review4(30,30) //true
	lesson8.review4(10,30) //false

	lesson8.review5("5",5) //true
	lesson8.review5(4,5)   //false

	lesson8.review6(10,10)   //true
	lesson8.review6("10",10) //false

	lesson8.review7(50,51) //true
	lesson8.review7(50,50) //false

	lesson8.review8("50",50) //true
	lesson8.review8(50,50) //false