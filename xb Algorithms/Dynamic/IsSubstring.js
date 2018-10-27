var isSubsequence = function(s, t) {
    let flag =true;
    // let arr = Array.from(t);
    // Array.from(s).reduce((acc, elem)=>{
    //   // console.log(elem);
    //    if(t.indexOf(elem) > -1)
    //      return elem
    //    else
    //     flag=false;
    //     return elem
    //  },'');
    //
    //     if(flag) return true;
    //     return false
    let  j = 0;
    for(let i = 0 ; i< t.length; i++){
      if(t[i] === s[j])j++;
    }
    if( s.length === j)return true;
    return false;
};

console.log(isSubsequence("axc", "ahbgdc"));
