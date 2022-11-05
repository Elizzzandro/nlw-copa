function createGame(player01, hour, player02){
    return`
        <li>
            <img src="./assets/${player01}-icon.svg" alt="${player01} Flag">
            <strong>${hour}</strong>
            <img src="./assets/${player02}-icon.svg" alt="${player02} Flag">
        </li>
    `
}
let delay=-0.4;
function creatorCard(date, day, games){
    delay=delay+0.4;
    return`
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}
document.querySelector('#cards').innerHTML=
    creatorCard("24/11","QUINTA",createGame("brazil","16:00","serbia"))+
    creatorCard("28/11", "SEGUNDA",createGame("brazil","16:00","serbia"))+
    creatorCard("02/12","SEXTA",createGame("brazil","16:00","serbia"))