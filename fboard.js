board = [
 "1 - 2 - 3 4 - 5 - 6 - 7 1 - 2 - 3 4 - 5 - 6 - 7 1 - 2 - 3 4 - 5"
,"5 - 6 - 7 1 - 2 - 3 4 - 5 - 6 - 7 1 - 2 - 3 4 - 5 - 6 - 7 1 - 2"
,"- 3 4 - 5 - 6 - 7 1 - 2 - 3 4 - 5 - 6 - 7 1 - 2 - 3 4 - 5 - 6 -"
,"- 7 1 - 2 - 3 4 - 5 - 6 - 7 1 - 2 - 3 4 - 5 - 6 - 7 1 - 2 - 3 4"
,"4 - 5 - 6 - 7 1 - 2 - 3 4 - 5 - 6 - 7 1 - 2 - 3 4 - 5 - 6 - 7 1"
,"1 - 2 - 3 4 - 5 - 6 - 7 1 - 2 - 3 4 - 5 - 6 - 7 1 - 2 - 3 4 - 5"
]

var inquirer = require('inquirer')

inquirer.prompt([{
	 type: 'input'
	,name: 'root'
	,message: '?'
	,choices: [1,2,3,4]
}])
.then(function (answers) {
	var first = parseInt(answers.root)
	var second = first + 2
	var third = second + 2

	if (first > 7) first = first % 7
	if (second > 7) second = second % 7
	if (third > 7) third = third % 7

	for (var I in board) {
		// console.log(board[I].replace)
	}
	console.log(first, second, third)
});
