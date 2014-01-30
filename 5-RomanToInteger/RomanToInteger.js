
function integerRoman(n) {
    var Roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var aLetter = [], 
        sum = 0, 
        niIteration = 0, 
        nJiteration = 0;
        
    for (niIteration; niIteration < n.length; niIteration++) {
        // push in aLetter array
        aLetter.push(n[niIteration].toUpperCase());
    }
    for(nJiteration; nJiteration < aLetter.length; nJiteration ++){
        if(aLetter[nJiteration] in Roman){
          sum = sum + Roman[aLetter[nJiteration]]
        }
    } 
    return sum;
}