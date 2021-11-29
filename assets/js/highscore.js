leaderHold = document.querySelector('#leader-hold');
leaderBoard = JSON.parse(localStorage.getItem("info"));

var playerNuff = document.getElementById("user-name")
playerNuff.innerHTML = leaderBoard[0].playerInitials;   

var playerStuff = document.getElementById("user-score")
playerStuff.innerHTML = leaderBoard[0].playerScore;