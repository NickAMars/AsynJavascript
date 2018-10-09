/**
 * @param {number[]} deck
 * @return {boolean}
 */
// var hasGroupsSizeX = function(deck) {
//
// deck.sort((x, y) => x - y);
// // console.log(deck);
//   if(deck.length === 1){
//     return false;
//   }
//
//   let i = 0, j= 1, parti = 0, sep = 0;
//   while (deck[i] === deck[j]){
//     j++;i++;
//   }
//   // console.log(j);
//   parti= j; i = 0; j = 1;
//
//
//   if(deck.length % parti  !== 0){
//     return false;
//   }
//   while(j < deck.length ){
//         // correct
//         if(sep === parti){
//           sep = 0;
//           if(deck[i] !== deck[j]){
//           return false;
//           }
//         }
//     sep++;
//     i++; j++;
//   }
//   return true;
// };

// console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]));
// console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]));

 var hasGroupsSizeX = function(deck) {
   // this should need this but doesnt see to work without it
   // deck.sort((x, y) => x - y);
  let obj1 = {};
  let i = 0, j= 1;
  let flag = false;
  // add up the the values of the array
   for(let i = 0; i < deck.length; i++){
     obj1[deck[i]] = (obj1[deck[i]] || 0) +1;
   }
// get the maximum number in the object
   // while (deck[i] === deck[j]){
   //   j++;i++;
   // }
// let max_key =  Object.keys(obj1).reduce( (a,b) => obj1[a] > obj1[b] ? obj1[a]: obj1[b] );
// // if(obj1[max_key] = 1)
//   console.log(obj1);

  for(let part = deck.length ; part > 1 ; part--){ // 3,2
    // once we have a set that is true dont do it any more
    if(flag === false){
        // go throw the key and look for one that suits all condition
      for (let key in obj1){
      // takes a set the key number
          if( obj1[key] % part === 0){
            flag = true;
          }else{
            flag = false;
            break;
          }
      }
    }

  }

   if(flag === true) return true;
   return false;
 }
 console.log(hasGroupsSizeX([2,2,2,2]));
