// Given a sentence with only lowercase letters, print the same sentence 
// with the first letter of every word capitalized. For example, if you were given 
// "Turing is the best", return "Turing Is The Best" instead!

function capitalizeLetter(sentence){
    var result = ("")
    var cap = true
  
    for (var i=0;i<sentence.length;i++){
      var char = sentence[i]
      if (char === " "){
        cap=true
        result += char
      } else if (cap) {
        result += char.toUpperCase()
        cap = false
      } else {
        result += char
      }
    }
  
    return result
  }
  
  var trialsentence = "i cant wait to start mod 1"
  var result = capitalizeLetter(trialsentence)
  
  console.log (result)
  
  