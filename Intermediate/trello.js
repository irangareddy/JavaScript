// Trello

const myTodo = []

myTodo.push('complete pending projects')
myTodo.push('Buy Groceries')
myTodo.push('Handover keys')

myTodo.forEach(function(todo,index){
    console.log(`your task no.${index+1} is: ${todo}`);
})