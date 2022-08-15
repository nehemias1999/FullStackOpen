
  export function createArray(length) {
    return Array.apply(null, Array(length)).map(Number.prototype.valueOf, 0)
  }
  
  export function mostVotedQuote(array) {
    let mostVoted = 0
    let mostVotedIndex = 0
    
    for(let index = 0; index < array.length; index ++) {
      if(array[index] > mostVoted) {
        mostVoted = array[index]
        mostVotedIndex = index
      }
    }
  
    return mostVotedIndex
  } 