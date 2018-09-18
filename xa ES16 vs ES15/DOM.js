// Text
document.querySelector('(class_goes_here)').textContent='dice';
document.querySelector('(class_goes_here)')..innerHTML= "<em> dic</em>"            
// Style Sheet
document.querySelector('(class_goes_here)').style.display= 'none';
// BUTTON
document.querySelector('(class_goes_here)').addEventListener('click', function() {
console.log('look out');
});
//ID Text
document.getElementById('class_goes_here').textContent = '0';
//CONDITIONAL OPERATION
active === 0 ? active = 1 : active = 0;
//REMOVE CSS FILE
document.querySelector('.class_goes_here').classList.remove('active');
//ADD CSS class
document.querySelector('.class_goes_here').classList.add('active');
//TOGGLE
document.querySelector('.class_goes_here').classList.toggle('active');
//ADDING  FUNCTION TO BUTTON
document.querySelector('(class_goes_here)').addEventListener('click', init);
function init(){console.log('looking for hope');}

//SELECT ALL
document.querySelectorAll('(class_goes_here)'); // returns a node list




