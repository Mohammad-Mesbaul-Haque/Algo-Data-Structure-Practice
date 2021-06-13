function pairElement(str){
  let finalPair = [];
  
  let matchPair = function(givenStr){
    switch (givenStr) {
      case 'A':
        finalPair.push(['A', 'T']);
        break;
      case 'T':
        finalPair.push(['T' , 'A']);
        break;
      case 'G':
        finalPair.push(['G', 'C']);
        break;
      case 'C':
        finalPair.push(['C', 'G']);
        break;
                        
    }
    
  }
  //Itarete through all the string
  for(var i=0; i <= str.length; i++){
    matchPair(str[i])
  }
  //return final array
  return finalPair;
  
}

// pairElement("GCG");
