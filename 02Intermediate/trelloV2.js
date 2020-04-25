let myTodos = {
    day:'Monday',
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function(todo,meet = 0) {
    todo.meetings = todo.meetings + meet
} 

let meetDone = function(todo, meet = 0) {
    todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummaryOfDay = function(todo) {

    let meetingsLeft = todo.meetings + todo.meetDone
    return `You have ${meetingsLeft} meetings today!`
    
}

addMeeting(myTodos,4)
addMeeting(myTodos,3)
addMeeting(myTodos,1)

meetDone(myTodos,5)

console.log(getSummaryOfDay(myTodos));


