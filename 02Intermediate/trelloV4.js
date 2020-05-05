// const myTodos = ['Make More Apps','Learn from Paul','SwiftUI Customs']

// console.log(myTodos[myTodos.indexOf('Make More Apps')]);

const newTodos = [{
    title: 'Make More Apps',
    isDone: false,},
{
    title: 'Learn from Paul',
    isDone: true,},
{
    title: 'SwiftUI Customs',
    isDone: false,}]




// const index =  newTodos.findIndex(function(todo,index) {

//     console.log(todo);
    
//     return todo.title === 'Learn from Paul'

// })

// console.log(index);

// // Method 1
// const findTodo = function(myTodos,title) {
//     const index = myTodos.findIndex(function(todo,index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }
// 
// console.log(findTodo(newTodos,'Learn from paul'));


// Method 2

const findTodo = function(myTodos,title) {
    return titleReturned = myTodos.find(function(todo,index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
}

console.log(findTodo(newTodos,'Learn from paul'))