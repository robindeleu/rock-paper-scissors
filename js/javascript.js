document.addEventListener('DOMContentLoaded', () => {
let scoreMens = 0;
let scoreRobot = 0;

document.getElementById('steen').onclick = speelSteen;
document.getElementById('blad').onclick = speelPapier;
document.getElementById('schaar').onclick = speelSchaar;

function speelSteen() {
  speel("steen");
}
function speelPapier() {
  speel("blad");
}
function speelSchaar() {
  speel("schaar");
}

function speel(beslissingSpeler) {
  
  robotAtribuut = getRobotAtribuut();
  
  document.getElementById('status').innerHTML = "<p>Jij hebt het wapen <strong>" + beslissingSpeler + "</strong>, de robot heeft <strong>" + robotAtribuut + "</strong>.</p>";
  
  if(beslissingSpeler == 'steen') {
    if(robotAtribuut == 'steen') {
      document.getElementById('status').innerHTML += "<p>Je speelde gelijk, volgende keer beter!</p>";
    } else if (robotAtribuut == 'blad') {
      document.getElementById('status').innerHTML += "<p>Je bent verloren, jammer volgende keer beter!</p>";
      scoreRobot++;
    } else if (robotAtribuut == 'schaar') {
      document.getElementById('status').innerHTML += "<p>Je bent gewonnen hoeraaa!!!</p>";
      scoreMens++;
    }
  } else if (beslissingSpeler == 'blad') {
    if(robotAtribuut == 'steen') {
      document.getElementById('status').innerHTML += "<p>Je bent gewonnen hoeraaa!!!</p>";
      scoreMens++;
    } else if (robotAtribuut == 'blad') {
      document.getElementById('status').innerHTML += "<p>Je speelde gelijk, volgende keer beter!</p>";
    } else if (robotAtribuut == 'schaar') {
      document.getElementById('status').innerHTML += "<p>Je bent verloren, jammer volgende keer beter!</p>";
      scoreRobot++;
    }  
  } else if (beslissingSpeler == 'schaar') {
    if(robotAtribuut == 'steen') {
      document.getElementById('status').innerHTML += "<p>Je bent verloren, jammer volgende keer beter!</p>";
      scoreRobot++;
    } else if (robotAtribuut == 'blad') {
      document.getElementById('status').innerHTML += "<p>Je bent gewonnen hoeraaa!!!</p>";
      scoreMens++;
    } else if (robotAtribuut == 'schaar') {
      document.getElementById('status').innerHTML += "<p>Je speelde gelijk, volgende keer beter!</p>";
    }  
  }
  
  document.getElementById('scoreMens').innerHTML = scoreMens;
  document.getElementById('scoreRobot').innerHTML = scoreRobot;
  
}

function getRobotAtribuut() {
  var atribuut = ['steen', 'blad', 'schaar'];
  var speel = atribuut[Math.floor(Math.random() * atribuut.length)];
  return speel;
}
})