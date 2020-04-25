let getMyGrade = function(currentMarks,totalMarks) {

    let studentPercentage = (currentMarks/totalMarks)*100

    let studentGrade = '' 

    if (studentPercentage>=90 && studentPercentage<100){
        studentGrade = 'O'
    }else if (studentPercentage>=80 && studentPercentage<90){
        studentGrade = 'A+'
    }else if (studentPercentage>=70 && studentPercentage<80){
        studentGrade = 'A'
    }else if (studentPercentage>=60&& studentPercentage<70){
        studentGrade = 'B+'
    }else if (studentPercentage>=50&& studentPercentage<60){
        studentGrade = 'B'
    }else if (studentPercentage>=35&& studentPercentage<50){
        studentGrade = 'C'
    }else if (studentPercentage<35){
        studentGrade = 'Fail'
    }else {
        console.log("Not a valid Marks")
    }


    return `your grade is ${studentGrade} and percentage ${studentPercentage}`
    
}
console.log(getMyGrade(99,100));
