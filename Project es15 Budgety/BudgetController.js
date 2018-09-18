//BUDGET CONTROLLER
var budgetController = (function(){ // model
		var Expense = function(id, description, value){
			this.id = id;
			this.description =  description;
			this.value = value;
			this.percentage = -1;
		}
		Expense.prototype.calcPercentage = function(totalIncome){ // calulate percentage
				if(totalIncome > 0) {
					this.percentage = Math.round((this.value/ totalIncome)*100);
				}else{
					this.percentage = -1;
				}
		}
		Expense.prototype.getPercentage = function(){ // return percentage
			return this.percentage;
		}
		var Income = function(id, description, value){
			this.id = id;
			this.description =  description;
			this.value = value;
		}
		var calculateTotal = function(type){
			var sum = 0;
			data.allItems[type].forEach(function(cur){
				sum += cur.value;
			});
			data.totals[type] = sum;
		}
// Private Object to Store data
		var data = {
				allItems:{
					exp: [],
					inc: []
				},
				totals:{
					exp:0,
					inc:0
				},
				budget:0,
				percentage: -1
			}

//Public
		return {

					addItem:function(type,des, val){
							var newItem, ID;
							if(data.allItems[type].length > 0){
							ID = data.allItems[type][data.allItems[type].length - 1].id +1;
						} else {
							ID = 0;
						}
							if(type === 'exp'){
								newItem = new Expense(ID, des,val);
							} else if(type === 'inc'){
								newItem = new Income(ID, des, val);
							}
							data.allItems[type].push(newItem);
							return newItem;
					},
					deleteItem: function(type, id){
						var ids, index;
					 		ids =	data.allItems[type].map(function(current){
							return current.id;// return array of all index
						});
						index = ids.indexOf(id); // index of the id
						if(index !== -1){
							data.allItems[type].splice(index, 1); // remove one element at the index
						}

					},
					calculateBudget: function(){
						// calculate total income and expenses__list
						calculateTotal('exp');
						calculateTotal('inc');
						// calculate the budget: income - expenses
						data.budget = data.totals.inc - data.totals.exp;
						// calculate the percentage of income that we spent
						if(data.totals.inc > 0 && data.totals.inc >= data.totals.exp){
							data.percentage = Math.round( (data.totals.exp/data.totals.inc) *100); // round to the closes integer
						}else{
							data.percentage = -1;
						}
					},
					calulatePercentages: function(){
							data.allItems.exp.forEach(function(cur){// expense array
							cur.calcPercentage(data.totals.inc);
						});
					},
					getPercentages: function(){// gets all the percentages
						var allPerc = data.allItems.exp.map(function(cur){// map returns something
							return cur.getPercentage();
						});
						return allPerc;
					}
					,
					getBudget: function(){
						return{
							budget:data.budget,
							totalInc: data.totals.inc,
							totalExp: data.totals.exp,
							percentage: data.percentage
						};
					}
					,

					testing: function(){
						console.log(data);
					}

				};
		})();
