// const myElement = document.querySelectorAll('.classOne')

// console.log(myElement[0]);
// console.log(document.URL)


// const myPElement =  document.querySelector('p')
// myPElement.textContent = 'I am new update version'
// console.log(myPElement.textContent)

// const myPElement =  document.querySelectorAll('p')

// myPElement.forEach(para => para.textContent = 'You are seeing an updated version')
    // para.remove()



// console.log(myPElement)

document.querySelector('button').addEventListener('click', (event) =>{
    event.target.textContent = "I was Clicked"
    
})

const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'
console.log(myNewPara)

document.querySelector('body').append(myNewPara)