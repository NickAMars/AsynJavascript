// UI CONTROLLER
var UIController = (function(){ // view
			//PRIVATE
		var DOMstrings = {
			inputType:'.add__type',
			inputDescription: '.add__description'	,
			inputValue:'.add__value',
			inputBtn: '.add__btn',
			incomeContainer: '.income__list',
			expensesContainer: '.expenses__list',
			budgetLabel: '.budget__value',
			incomeLabel: '.budget__income--value',
			expensesLabel: '.budget__expenses--value',
			percentageLabel: '.budget__expenses--percentage',
			container: '.container',
			expensesPercLabel: '.item__percentage',
			dateLabel: '.budget__title--month'
		};

		var formatNumber = function (num, type){ // structure number
					var numSplit;
					num = Math.abs(num);
					num = num.toFixed(2); // gives a string
					numSplit = num.split('.')
					int = numSplit[0];
					if(int.length > 3){
						int = int.substr(0, int.length-3)+','+int.substr(int.length-3, 3);
					}
					dec = numSplit[1];
				//	type === 'exp'? sign = '-' : sign = '+';
					//return type +' '+ int + '.' + dec;
					return (type === 'exp' ? '-' : '+' ) + ' ' + int + '.'+ dec;
			}

			var nodeListForEach = function(list, callback){
				for(var i =0; i < list.length; i++){
					callback(list[i], i); // first class function
				}
			}


			//PUBLIC
			return{
					getInput: function() { // gets user input
							return {
							type: document.querySelector(DOMstrings.inputType).value,
							description: document.querySelector(DOMstrings.inputDescription).value,
							value: parseFloat(document.querySelector(DOMstrings.inputValue).value)// convert string to number
							};
					},
					addListItem: function(obj , type){// adding items to list
						var html, newHtml,element;
						// create html string with placeholder
						if(type === 'inc'){
								element = DOMstrings.incomeContainer;
								html = '<div class="item clearfix" id="inc-%id%">'+
								'<div class="item__description">%description%</div>'+
								'<div class="right clearfix">'+
								'<div class="item__value">%value%</div>'+
								'<div class="item__delete">'+
								'<button class="item__delete--btn">'+
								'<i class="ion-ios-close-outline">'+
								'</i></button></div></div></div>';
						} else {
								element = DOMstrings.expensesContainer;
									// DOM manipulation
								html = '<div class="item clearfix" id="exp-%id%">'+
								'<div class="item__description">%description%</div>'+
								'<div class="right clearfix">'+
								'<div class="item__value">%value%</div>'+
								'<div class="item__percentage">21%</div>'+
								'<div class="item__delete">'+
								'<button class="item__delete--btn">'+
								'<i class="ion-ios-close-outline">'+
								'</i></button></div></div></div>';
						}
						//placeholder
						newHtml = html.replace('%id%',obj.id);
						newHtml = newHtml.replace('%description%', obj.description);
						newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
						//Insert html
						document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
					},
					deleteListItem: function(selectorID){
						var el;
						el =document.getElementById(selectorID);
						el.parentNode.removeChild(el);//remove from UI
					}
					,

					clearFields: function (){ // clear the  fields
						var fields, fieldsArr;
						fields = document.querySelectorAll(DOMstrings.inputDescription + ','+ DOMstrings.inputValue); // returns LIST
						var fieldsArr = Array.prototype.slice.call(fields);  // Prototype function of Array
						fieldsArr.forEach(function(current, index, array){// clear all the feilds
								current.value = "";
						 });
						 fieldsArr[0].focus(); // cursor to description
					},
					displayBudget: function(obj){
						var type;
						obj.budget > 0 ? type  = 'inc' : type  = 'exp';
						document.querySelector(DOMstrings.budgetLabel).textContent =formatNumber(obj.budget, type);
						document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc,'inc');
						document.querySelector(DOMstrings.expensesLabel).textContent =formatNumber( obj.totalExp, 'exp');
							if(obj.percentage > 0){
								document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
							}else {
								document.querySelector(DOMstrings.percentageLabel).textContent = '---';
							}
					},
					displayPercentages: function(percentages){
						var fields;
						fields = document.querySelectorAll(DOMstrings.expensesPercLabel);// nodelist

						// calling function here
						nodeListForEach(fields, function(current, index){// callback function
							if(percentages[index] > 0){
								current.textContent = percentages[index] + '%';
							}else{
								current.textContent = '---';
							}
						});

					},
					displayMonth: function(){
						var now, year, month;
						now = new Date();
						year = now.getFullYear();
						months =['January', 'February', 'March', 'April', 'May', 'June', 'July',
						 'August', 'September', 'October', 'November', 'December'];
						month = now.getMonth();
						document.querySelector(DOMstrings.dateLabel).textContent = months[month] +' '+year;
					},
					changedType: function(){// style manipulation
						var fields = document.querySelectorAll(// node list
							DOMstrings.inputType + ',' +
							DOMstrings.inputDescription + ',' +
							DOMstrings.inputValue
						);
						nodeListForEach(fields, function(cur){
							cur.classList.toggle('red-focus');// each time the type changes this class changes
						});
						document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
					},
					getDOMstrings: function(){
						return DOMstrings;
					}

		};
})();
