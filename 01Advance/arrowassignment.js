const todos = [{
    title: 'Building iOS Apps',
    isDone: true,
},{
    title: 'Learning from Paul',
    isDone: false,
},{
    title: 'SwiftUI Customs',
    isDone: true,
},{
    title: 'College Stuff',
    isDone: false,
},{
    title: 'Learning from Swift Book',
    isDone: true,
},{
    title: 'Planning Bussiness',
    isDone: false,
}]

const pending = todos.filter((todo) => (todo.isDone === false)? console.log(todo.title):"")

console.log((pending));




