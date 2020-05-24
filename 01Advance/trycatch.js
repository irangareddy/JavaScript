const convertToRs = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 70
    } else {
        throw Error('Inter a valid type of Number')
    }
}

// const myValue = convertToRs("!number")
//     console.log(myValue)

try {
    const myValue = convertToRs("dsk")
    console.log(myValue)
} catch(error) {
    console.log(error)
}

console.log('I will not run if program crashes');

    
