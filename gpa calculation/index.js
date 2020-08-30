/*
let marks = 22;
let grade;

if(marks >=80){
        grade = "A+";
}
else if(marks >=70){
        grade = "A";
}
else if(marks >=60){
        grade = "A-";
}
else if(marks >=50){
        grade = "B";
}
else if(marks >=40){
        grade = "C";
}
else if(marks >=33){
        grade = "D";
}
else{
        grade = "F";
}

console.log(grade)

*/




function getGrade(gradeData) {

        if (gradeData >= 80) {
            return 'A+';
        }
        else if (gradeData >= 70) {
            return 'A';
        }
        else if (gradeData >= 60) {
            return 'A-';
        }
        else if (gradeData >= 50) {
            return 'B';
        }
        else if (gradeData >= 40) {
                return 'C';
            }
        else if (gradeData >= 33) {
                return 'D';
            }

        else{
                return 'F';
        }
    }

    console.log(getGrade(90))







    

/*
const finalGpa = (marks) => {
        var gpagrade;
        switch(marks){

                case marks >= 100:
                gpagrade = "A+";
                return gpagrade;

                case(marks >=70 || marks <=79):
                gpagrade = "A";
                return gpagrade;

                case(marks >=60 || marks <=69):
                gpagrade = "A-";
                return gpagrade;

                case(marks >=50 || marks <=59):
                gpagrade = "B";
                return gpagrade;

                case(marks >=40 || marks <=49):
                gpagrade = "C";
                return gpagrade;

                case(marks >=33 || marks <=39):
                gpagrade = "D";
                return gpagrade;

                case(marks >=0 || marks <=32):
                gpagrade = "F";
                return gpagrade;

                default:
                        return "You Must Enter The Marks";
        }
        
}


console.log(finalGpa(55))


*/

