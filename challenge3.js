// Write a method or function that removes all instances of the letter <strong>s</strong> 
// in a string. The method or function should accept a string as an argument and return the 
// same string with every instance of the letter <strong>s</strong> removed.

var string = "suffering sassafras"
var remove= "s"

function apple(string, remove){
  return string.replaceAll("s","")
}

console.log(apple(string, "s"))