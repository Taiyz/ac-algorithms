//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 


//Input: Radius of a circle, supplied by our user
//Output: Area and perimeter of a circle

function circleCalculation (radius) {
  //calculate the area of the circle, given the radius to the nearest integer (whole number)  
  var area = Math.round(Math.PI * Math.pow(radius, 2));
  //Calculate the perimeter given the radius
    var perimeter = Math.round(2 * Math.PI * radius);
    console.log("The area of the circle is " + area + "and the perimeter of th circle is " + perimeter + ".");
}
circleCalculation(100);