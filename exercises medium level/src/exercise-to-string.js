// Implement own toString method for objects
// Input: object
// Output: string

// Example 1: 
// Input: { elem1: "test", elem2: { value: 10 } }
// Output: "{ elem1: "test", elem2: { value: 10 } }"

// Example 2: 
// Input: {}
// Output: "{}"

function main(obj) {
  

   let toStringJ = JSON.stringify(obj)
   if(toStringJ.includes('\"')  ){
    
    toStringJ = toStringJ.replace(/\"/g, ' ')
    toStringJ = toStringJ.replace(/ :/g, ': ')
    toStringJ = toStringJ.replace(/}/g, ' }')
    if(toStringJ.includes('} }') ) {
      toStringJ = toStringJ.replace(/  /g, ' ')
      toStringJ = toStringJ.replace(/ ,/g, ',')
    }
   }

return toStringJ 
  
}

module.exports = main;