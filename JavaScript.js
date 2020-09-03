//LOGICA DEL JUEGO//
var tablero = [
  [{value: 0, link: document.getElementById("0")},
   {value: 0, link: document.getElementById("1")},
   {value: 0, link: document.getElementById("2")}],
  [{value: 0, link: document.getElementById("3")},
   {value: 0, link: document.getElementById("4")},
   {value: 0, link: document.getElementById("5")}],
  [{value: 0, link: document.getElementById("6")},
   {value: 0, link: document.getElementById("7")},
   {value: 0, link: document.getElementById("8")}]
  ];
  var turno = "X";
  var win = false;
  var movimientos = 0;
function verificar(matriz){
      //Verifica si hay 3 coinscidencias de forma horizontal o vertical//
    for (i=0; i<3; i++){
      if (matriz[i][0].value === matriz[i][1].value && matriz[i][0].value === matriz[i][2].value && matriz[i][0].value != 0){
        return (desenlace(matriz[i][0].value));
      }
      if (matriz[0][i].value === matriz[1][i].value && matriz[0][i].value === matriz[2][i].value && matriz[0][i].value != 0){
        return (desenlace(matriz[0][i].value));
      }
    }

  //Verifica si hay 3 coinscidencias de forma transversal
    if (matriz[0][0].value === matriz[1][1].value && matriz[0][0].value === matriz[2][2].value && matriz[0][0].value != 0){
      return (desenlace(matriz[0][0].value));
    }
    if (matriz[0][2].value === matriz[1][1].value && matriz[0][2].value === matriz[2][0].value && matriz[0][2].value != 0){
      return (desenlace(matriz[0][2].value));
    }
  if(movimientos === 8){
    return (desenlace("Empate"));
  }
  return(document.getElementById("estado").innerHTML = "En Partida");
}

function desenlace(winner){
  win=true;
  if (winner === "Empate"){
    document.getElementById("estado").innerHTML = "Empate";
  }
  if (winner === "X"){
    document.getElementById("estado").innerHTML = "Ganador Jugador X";
  }
  if (winner === "O"){
    document.getElementById("estado").innerHTML = "Ganador Jugador O";
  }
}


//logica Click// 
function click(x,z){

  if (win){
    return(alert("Game Tie"));
  }

  if (tablero[x][z].value != 0){
    return (alert("ESTA POSICION YA ESTA OCUPADA"));
  }

  if (turno === "X"){
    tablero[x][z].value = "X";
    tablero[x][z].link.innerHTML = "X";
    verificar(tablero);
    movimientos++;
    return(turno = "O");
  }
  if (turno === "O"){
    tablero[x][z].value = "O";
    tablero[x][z].link.innerHTML = "O";
    verificar(tablero);
    movimientos++;
    return(turno = "X");
  }
}


  //Detecta el click y envia: el identificador del elemento en el DOM y la posicion en el tablero
document.getElementById("0").onclick = function(){click(0,0)};
document.getElementById("1").onclick = function(){click(0,1)};
document.getElementById("2").onclick = function(){click(0,2)};
document.getElementById("3").onclick = function(){click(1,0)};
document.getElementById("4").onclick = function(){click(1,1)};
document.getElementById("5").onclick = function(){click(1,2)};
document.getElementById("6").onclick = function(){click(2,0)};
document.getElementById("7").onclick = function(){click(2,1)};
document.getElementById("8").onclick = function(){click(2,2)};