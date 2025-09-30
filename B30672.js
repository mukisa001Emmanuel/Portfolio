
/*
Name: Mukisa Emmanuel
RegNo: M25B13/059
AccessNo: B30672
*/
/*
This program helps the school to enter students performance and automatically compute their grades.
This reduces manual labour and errors.
*/
const students = [
    {id:'s001',name:'alice', score: 90},
    {id:'s002',name:'john', score: 50},
    {id:'s003',name:'esther', score: 96},
    {id:'s004',name:'mathew', score: 20},
    {id:'s005',name:'james', score: 35},
];

// The functions introduced bellow are for reusability inoder to avoid code duplication.
function assignletter(score){
    if (score<0) return 'invalid';
    if (score<30) return 'F';
    else if (score<50) return 'D';
    else if (score<70) return 'C';
    else if (score<85) return 'B';
    else if (score<=100) return 'A';
    else return 'invalid';
}

function remark(letter){
    switch(letter){
        case 'A': return 'Excellent';
        case 'B': return 'Very Good';
        case 'C': return 'Good';
        case 'D': return 'Pass';
        case 'F': return 'Fail';
        default: return 'Invalid Score';
    }
}
a

// Use a 'for...of' loop to easily iterate over each 'student' object in the 'students' array.
for (const student of students) {
    // 1. Calculate the letter grade for the student's score
    const letterGrade = assignletter(student.score);
    
    // 2. This is for getting the corresponding remark for the letter grade
    const finalRemark = remark(letterGrade);
    
    // 3. Output the result in a readable format
    console.log(
        `${student.name} (ID: ${student.id}) | Score: ${student.score} | Grade: ${letterGrade} | Remark: ${finalRemark}`
    );
}

