function creategame (player1, hour, player2){
  return ` <li>
             <img src="./${player1}.svg" alt="bandeira do ${player1}">
              <strong>${hour}</strong>
              <img src="./${player2}.svg" alt="bandeira do ${player2}">
            </li>`
}

let delay = -0.2;
function createcard(date, day, games){
  delay= delay + 0.4; 
  return `<div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span> </h2>
              <ul> 
                 ${games}
             </ul>
           </div>`

}


document.querySelector('#cards').innerHTML = 

    createcard("24/11","quinta", creategame("brazil","16:00","serbia")) +
    createcard("28/11","segunda", creategame("brazil","13:00","suica")+ 
    creategame("hungary","16:00","argentina"))+
    createcard("02/12","sexta", creategame("brazil","16:00","camaroes"))
            