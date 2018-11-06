function lcs(word1, word2){
    let max = 0;
    let index = 0;
    const lcsarr = [];
    // initializing array
    for(let i=0; i<= word1.length-1; i++){ // the row of matrix
        lcsarr[i] = [];
        for(let j=0; j<=word2.length-1; j++){ // the column of the matrix
            lcsarr[i][j] = 0;
        }
    }
    console.log(lcsarr);
}

let word1= "moragan";
let word2= "same";


 console.log(lcs(word1, word2));
