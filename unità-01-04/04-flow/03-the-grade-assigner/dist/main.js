"use strict";
let assignGrade = (num) => {
    (num <= 18) ? console.log(`Your number score is: ${num} so your grade is: F`) :
        (num > 18 && num <= 23) ? console.log(`Your number score is: ${num} so your grade is: E`) :
            (num > 23 && num <= 26) ? console.log(`Your number score is: ${num} so your grade is: D`) :
                (num > 26 && num <= 28) ? console.log(`Your number score is: ${num} so your grade is: C`) :
                    (num > 28 && num < 30) ? console.log(`Your number score is: ${num} so your grade is: B`) :
                        console.log(`Your number score is: ${num} so your grade is: A`);
};
assignGrade(15);
assignGrade(18);
assignGrade(19);
assignGrade(24);
assignGrade(28);
assignGrade(30);
assignGrade(31);
assignGrade(33);
