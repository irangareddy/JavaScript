// 1
// const sayHello = (name) => {
//     return "Hey there, "+name+" !"
// }


// 2
// const sayHello = function(name){
//     return "Hey there, "+name+" !"
// }


// 3
// const sayHello = (name) => `Hey there ${name}!!!`

// console.log(sayHello("Ranga"));

const todos = [{
    title: 'Make More Apps',
    isDone: true,
},{
    title: 'Learn from Paul',
    isDone: false,
},{
    title: 'SwiftUI Customs',
    isDone: true,
}]

const thingsDone = todos.filter((todo) => todo.isDone === true)

// console.log(thingsDone);


const cameras = {
    price: 600,
    weight: 2000,
    myDes: () => {
        return `This Canon Camera is of ${this.price}$`
    },
    // 2 type function
    // myDest(){
    //     return `This Canon Camera is of ${this.price}$`
    // }

}

// Dont use arrow functions in methods and constructors

console.log(cameras.myDes());

// this for Redux
// const func = () => ({key:'value'});