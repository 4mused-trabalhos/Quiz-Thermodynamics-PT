const HTML_Question = document.querySelector(".Q");
const HTML_Score = document.querySelector(".S");
const HTML_Button = document.querySelector(".Button");

const HTML_A = [document.querySelector(".A1"), document.querySelector(".A2"), document.querySelector(".A3"), document.querySelector(".A4")];
const HTML_R = [document.querySelector(".R1"), document.querySelector(".R2"), document.querySelector(".R3"), document.querySelector(".R4")];

var questionNum = 0;
var ScoreP = 0;
var radClass = "";

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
    new Question("Como funciona a máquina frigorifica?", "Passagem de calor de uma fonte fria para uma fonte quente", "Passagem de calor de uma fonte quente para uma fonte fria", "Meio termo entre as duas fontes", "Magic"),
    new Question("Quantas leis da termodinâmica existem?", "4", "5", "3", "2"),
    new Question("No que consiste a lei zero da termodinâmica?", "No tratamento das condições para a obtenção do equilibrio térmico", "Na transferência do calor do corpo mais quente para o mais frio, de forma espontânea", "Na tentativa de estabeleçer um ponto de referencia que determine a entropia", "No relacionamento do principio de conservação de energia"),
    new Question("No que consiste a primeira lei da termodinâmica?", "No relacionamento do principio de conservação de energia", "Na tentativa de estabeleçer um ponto de referencia que determine a entropia", "No tratamento das condições para a obtenção do equilibrio térmico", "Na transferência do calor do corpo mais quente para o mais frio, de forma espontânea"),
    new Question("No que consiste a segunda lei da termodinâmica?", "Na transferência do calor do corpo mais quente para o mais frio, de forma espontânea", "No tratamento das condições para a obtenção do equilibrio térmico", "Na tentativa de estabeleçer um ponto de referencia que determine a entropia", "No relacionamento do principio de conservação de energia"),
    new Question("No que consiste a terceira lei da termodinâmica?", "Na tentativa de estabeleçer um ponto de referencia que determine a entropia", "No relacionamento do principio de conservação de energia", "Na transferência do calor do corpo mais quente para o mais frio, de forma espontânea", "No tratamento das condições para a obtenção do equilibrio térmico"),
    new Question("Qual o objetivo do cooler do processador?", "Arrefecer o processador", "Nada", "Enfeite", "Ocupar espaço"),
    new Question("Que tipo de refrigeração não existe?", "Refrigeração elétrica", "Refrigeração a nitrogénio", "Rifregeração a água", "Rifrageração a ar"),
    new Question("O que é Energia Térmica?", "Energia diretamente associada à temperatura absoluta do corpo", "Energia total considerada no sistema", "Energia associada a um sistema termodinâmico onde ocorre interação entre corpos", "Energia diretamente associada à temperatura minima do corpo"),
    new Question("O que é Energia Interna?", "Energia total considerada no sistema", "Energia diretamente associada à temperatura absoluta do corpo", "Energia associada a um sistema termodinâmico onde ocorre interação entre corpos", "Energia diretamente associada à temperatura minima do corpo"),
    new Question("O que é Energia Potencial?", "Energia associada a um sistema termodinâmico onde ocorre interação entre corpos", "Energia diretamente associada à temperatura minima do corpo", "Energia diretamente associada à temperatura absoluta do corpo", "Energia total considerada no sistema")

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

function ClassHandler(){

    for(l = 0; l < HTML_R.length; l++) {


        if(HTML_R[l].checked) {

            HTML_Button.disabled = true;
            radClass = HTML_A[l].className;

            if(HTML_R[l].value == "R") {

                HTML_A[l].className += " correto";
                ScoreP += 100;

            }
            else {
                HTML_A[l].className += " errado";
            }

            setTimeout('setclass('  + l + ')', 2500);
            setTimeout('uncheck('  + l + ')', 2500); 
            setTimeout(function(){HTML_Score.textContent = "Pontuação: " + ScoreP;}, 2500);      
    
        }
    
    }

}

function Score() {

    if(questionNum < Questions.length) {

        ClassHandler();
        
        setTimeout(function(){Display(Questions);}, 2500);
        setTimeout(function(){HTML_Button.disabled = false;}, 2500);

    }
    else {

        ClassHandler();

        for(var i = 0, len = HTML_R.length; i < len; i++)
        {   
            HTML_R[i].disabled = false;
        }

        setTimeout(function(){alert("Pontuação: " + ScoreP);}, 2500);

    }

}

function setclass(num) {
    HTML_A[num].className = radClass;
}

function uncheck(num) { 
    HTML_R[num].checked = false;
}

function main() {
    
    HTML_Score.textContent = "Pontuação: " + ScoreP;

    Questions = Random(Questions);
    Display(Questions);
    
}