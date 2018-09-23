function reverse(str1){
// base case
  if(str1 === '') return '';
  // const rev =    str1.charAt(str1.length -1) ;

  return str1.slice(-1) + reverse( str1.slice(0, -1) );
}

console.log(reverse("working"));

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
