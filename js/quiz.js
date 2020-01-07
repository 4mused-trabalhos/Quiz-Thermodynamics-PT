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

var Questions = [

    new Question("Em que ano e por quem foi construida a primeira máquina frigorifica?", "1856 por James Harrison", "1856 por Domelre", "1913 por James Harrison", "1913 por Domelre"),
    new Question("Como funciona a máquina frigorifica?", "Passagem de calor de uma fonte fria para uma fonte quente", "Passagem de calor de uma fonte quente para uma fria", "Meio tendo entre as duas fontes", "Magic"),
    new Question("Quantas leis da termodinâmica existem?", "4", "5", "3", "2"),
    new Question("No que consiste a lei zero da termodinâmica?", "No tratamento das condições para a obtenção do equilibrio térmico", "Na transferência do calor do corpo mais quente para o mais frio, de forma espontânea", "Na tentativa de estabeleçer um ponto de referencia que determine a entropia", "No relacionamento do principio de conservação de energia"),
    new Question("No que consiste a primeira lei da termodinâmica?", "No relacionamento do principio de conservação de energia", "Na tentativa de estabeleçer um ponto de referencia que determine a entropia", "No tratamento das condições para a obtenção do equilibrio térmico", "Na transferência do calor do corpo mais quente para o mais frio, de forma espontânea"),
    new Question("No que consiste a segunda lei da termodinâmica?", "Na transferência do calor do corpo mais quente para o mais frio, de forma espontânea", "No tratamento das condições para a obtenção do equilibrio térmico", "Na tentativa de estabeleçer um ponto de referencia que determine a entropia", "No relacionamento do principio de conservação de energia"),
    new Question("No que consiste a terceira lei da termodinâmica?", "Na tentativa de estabeleçer um ponto de referencia que determine a entropia", "No relacionamento do principio de conservação de energia", "Na transferência do calor do corpo mais quente para o mais frio, de forma espontânea", "No tratamento das condições para a obtenção do equilibrio térmico"),
    new Question("Qual o objetivo do cooler do processador?", "Arrefecer o processador", "Nada", "Enfeite", "Ocupar espaço"),
    new Question("Que tipo de refrigeração não existe", "Refrigeração elétrica", "Refrigeração a nitrogénio", "Rifregeração a água", "Rifrageração a ar")

];

function Random(items) {

    for(i = 0; i < items.length; i++) {
        
        var item = items[i];
        
        var pos = Math.floor(Math.random()*items.length);
        var item1 = items[pos];

        items[pos] = item;
        items[i] = item1;
    
    }

    return items;
    
}

function Display(QuestionsArray) {
    
    Question = QuestionsArray[questionNum];
    Quest = Question.question;

    Answers = [Question.answerT, Question.answerW1, Question.answerW2, Question.answerW3];
    Answers = Random(Answers);

    HTML_Question.textContent = Quest;
    
    for(u = 0; u < HTML_A.length; u++) {

        HTML_A[u].textContent = Answers[u];

        if(HTML_A[u].textContent == Question.answerT) {
            HTML_R[u].value = "R";
        }
        else {
            HTML_R[u].value = "W";
        }

    }

    questionNum ++;
    
}


}