// Start with an array of travel destinations. Print every travel destination in alphabetical order 
// embedded in a sentence using string interpolation. For example, if the destination is 
// "New York City", print something like "The next place I want to visit is New York City!" 

var travel = ["New York City","Anchorage","Italy"]
travel.sort()
console.log ("The first place I want to go is " + travel['0'], 
"and then I want to go to " + travel['1'], 
", but lastly, I want to go to " + travel[`2`])