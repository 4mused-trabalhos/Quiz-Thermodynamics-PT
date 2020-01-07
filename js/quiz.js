const HTML_Question = document.querySelector(".Q");
const HTML_Score = document.querySelector(".S");
const HTML_Button = document.querySelector(".Button");

const HTML_A = [document.querySelector(".A1"), document.querySelector(".A2"), document.querySelector(".A3"), document.querySelector(".A4")];
const HTML_R = [document.querySelector(".R1"), document.querySelector(".R2"), document.querySelector(".R3"), document.querySelector(".R4")];

var questionNum = 0;
var ScoreP = 0;

class Question {

    constructor(Q, AT, AW1, AW2, AW3) {

        //Question
        this.question = Q;

        //Answers
        this.answerT = AT;
        this.answerW1 = AW1;
        this.answerW2 = AW2;
        this.answerW3 = AW3;

    }

}
    

}