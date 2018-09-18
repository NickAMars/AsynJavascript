




// CONTROLLER
var controller = (function(budgetCtrl,UICtrl){ // control
	//PRIVATE
				var setupEventListeners = function(){
									var DOM = UICtrl.getDOMstrings();
									document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

									document.addEventListener('keypress', function(event){
											if(event.keyCode === 13 || event.which === 13){
													ctrlAddItem();
											}
									});
									document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem);
									document.querySelector(DOM.inputType).addEventListener('change',UICtrl.changedType);
						}
			var updateBudget = function(){
				budgetCtrl.calculateBudget();
				var budget = budgetCtrl.getBudget();
				UICtrl.displayBudget(budget);

			}
			var updatPercentages = function(){
				budgetCtrl.calulatePercentages(); // calulate
				var percentages = budgetCtrl.getPercentages();  //get
				//console.log(percentages); // show
				UICtrl.displayPercentages(percentages);
			}

		var ctrlAddItem = function(){
												var input, newItem;
											 	input = UICtrl.getInput();
												if(input.description !== "" && !isNaN(input.value) && input.value > 0){
													newItem = budgetCtrl.addItem(input.type, input.description, input.value);
													UICtrl.addListItem(newItem, input.type) // sumbit html bottom
													UICtrl.clearFields(); // clear fiels
													updateBudget();// update top html
													updatPercentages();
												}
										}
		var ctrlDeleteItem = function(event){
																var itemID, splitID, type , ID;
																itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
																if(itemID){
																		splitID = itemID.split('-'); //returns Array
																		type = splitID[0];
																		ID = parseInt(splitID[1]);
																		// delete item from data structure
																		budgetCtrl.deleteItem(type, ID);
																		UICtrl.deleteListItem(itemID);
																		updateBudget();
																}
													}


											//PUBLIC
											return  {
												init: function (){
													console.log('Application has ');
													setupEventListeners();
													UICtrl.displayMonth();
													UICtrl.displayBudget(
														{
																budget:0,
																totalInc: 0,
																totalExp: 0,
																percentage:-1
														}
												);
												}
											};


})(budgetController, UIController);







//GLOBAL
controller.init();
