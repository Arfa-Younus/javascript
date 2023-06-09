// //Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// let a = 10;
// result ="<b><big>"+"Result: " +"<br>" + "The Value Of a Is = " + a  +"<br>" + "......................................."+"</b></big>"
// let b= ++a;
// result1 ="<b><big>" + "The Value Of ++a Is = " + b  +"<br>" + "Now The Value Of a is : "+ a +"</b></big>"
// document.write(result +"<br><br><br>" +result1);
// let c= a++;
// result2 ="<b><big>" + "The Value Of a++ Is = " + c  +"<br>" + "Now The Value Of a is :  "+ a +"</b></big>"
// document.write("<br><br><br>" +result2);
// let d= --a;
// result3 ="<b><big>" + "The Value Of --a Is = " + d  +"<br>" + "Now The Value Of a is :  "+ a +"</b></big>"
// document.write("<br><br><br>" +result3);
// let e = a--;
// result4 ="<b><big>" + "The Value Of a-- Is = " + e  +"<br>" + "Now The Value Of a is :  "+ a +"</b></big>"
// document.write("<br><br><br>" +result4);




// //2.What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--;
// var a = 2 , b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a = "+ a +"<br>" + "b = "+ b  +"<br>"+ "Result is = " + result);

//Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;
// --a means subtract 1 from a means (2-1)output is 1
// --a - --b means a=1, now subtract 1 from b (1-1=0) and the a-b = 1-0 =1
// --a - --b + ++b means a=1, b=0, now add 1 to b (0+1), b=1, 1+1=2
// --a - --b + ++b + b-- means a=1, b=1, b-- uses the current value of b (1) and then decrements it by 1. so the value of b remains 1 for this expression the previous result (2) is added to b, resulting in 2 + 1 = 3




// //3. Write a program that takes input a name from user & greet the user.
// let userName = prompt("Enter Your Name");
// document.write("<b><big>" + "Good Morning " +userName +"</b></big>");



// //Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. don't use if else and loop
// let num = prompt("Enter any number");
// if(num === "") {
// num = 5;
// }
// for(let i = 1; i <= 10; i++) {
// document.write(num + " X " + i + " = " + num * i + "<br>");
// }




  // //take 
  // //Take three subjects name from user and store them in 3 different variables.
  // let subjectOne = prompt("Subject One");
  // let subjectTwo = prompt("Subject Two");
  // let subjectThree = prompt("Subject Three");
  // //b) Total marks for each subject is 100, store it in another variable.
  // let totalMarks = 100;
  // //c) Take obtained marks for first subject from user and stored it in different variable.
  // let marksOne = prompt("Enter Marks for " + subjectOne);
  // //d) Take obtained marks for remaining 2 subjects from user and store them in variables.
  // let marksTwo = prompt("Enter Marks for " + subjectTwo);
  // let marksThree = prompt("Enter Marks for " + subjectThree);
  // //e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
  // let total = marksOne + marksTwo + marksThree;
  // let percentage = (total / totalMarks) * 100;
  // document.write("Total Marks = " + total + "<br>" + "Percentage = " + percentage + "%")
  