
	player1Name = localStorage.getItem("player1Name");
	player2Name = localStorage.getItem("player2Name");

	player1Score = 0;
	player2Score = 0;

document.getElementById("p1").innerHTML = player1Name + " : ";
document.getElementById("p2").innerHTML = player2Name + " : ";

document.getElementById("score1").innerHTML = player1Score ;
document.getElementById("score2").innerHTML = player2Score ;

document.getElementById("player_Quest").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("player_asnwer").innerHTML = "Turno de Resposta - " + player2Name ;

function send() {
	getWord = document.getElementById("palavrinha").value;
	word = getWord.toLowerCase();
	console.log("palavra em caixa baixa = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenghtDivide2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenghtDivide2);
	console.log(charAt2);

    lenghtMinus1 = word.length - 1; 
    charAt3 = word.charAt(lenghtMinus1); 
	console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
	console.log(removeCharAt3);

    question_word = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_word + inputBox + checkButton ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("palavrinha").value = "";
}


questionTurn = "p1";
answerTurn = "p2";


function check()
{
	getAnswer = document.getElementById("inputCheckBox").value;
	answer = getAnswer.toLowerCase();
	console.log("resposta em caixa baixa - " + answer);
	if(answer == word)	
	{
		if(answerTurn == "p1")
		{
			player1Score = player1Score +1;
		    document.getElementById("score1").innerHTML = player1Score;
		}
		else 
		{
			player2Score = player2Score +1;
		    document.getElementById("score2").innerHTML = player2Score;
		}
	}
	if(questionTurn == "player1")
	{
		questionTurn = "player2"
		document.getElementById("player_Question").innerHTML = "Turno de Pergunta - " + player2Name ;
	}
	else 
	{
		questionTurn = "player1"
		document.getElementById("player_Question").innerHTML = "Turno de Pergunta - " + player1Name ;
	}

	if(answerTurn == "player1")
	{
		answerTurn = "player2"
		document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2Name ;
	}
	else 
	{
		answerTurn = "player1"
		document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player1Name ;
	}

    document.getElementById("output").innerHTML = "";
}

function send() {
	getWord = document.getElementById("palavrinha").value;
	word = getWord.toLowerCase();

	charAt1 = word.charAt(1);

	lenghtDivide2 = Math.floor(word.lenght/2);
	charAt2 = word.charAt(lenghtDivide2);

	lenghtMinus1 = word.lenght - 1;
	charAt3 = word.charAt(lenghtMinus1)

	removeCharAt1 = word.replace(charAt1, "_");
	removeCharAt2 = removeCharAt1.replace(charAt2 , "_");
	removeCharAt3 = removeCharAt2.replace(charAt3, "_");

	questionWord = "<h4 id='wordDisplay'> p. "+removeCharAt3 +"</h4>";
	inputBox = "<br>Resposta ; <input type='text' id = inputCheckBox> ";
	checkButton = "<br><br><button class='btn btn-info' onclick = 'check()'>Checar</button>";
	  row = questionWord + inputBox + checkButton;
	  document.getElementById("output").innerHTML = row;
	  document.getElementById("word").value =""
}