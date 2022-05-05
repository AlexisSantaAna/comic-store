/* INTERACCIÓN CON EL DOM 
Cartel de bienvenida con mensajes aleatorios tomados 
de un array de objetos. El mismo se creará en un elemento
en la sección principal, debajo del título (h1) cada vez que
cargue la página.
*/
const divPadre = document.getElementById("randomWelcome")

const messages = [`"Avengers assemble!"`, `"In brightest day, in blackest night…!"`, `"I Am Iron Man."`, `"It's Not Who I Am Underneath, But What I Do, That Defines Me."`, `"You're Making Me Angry. You Wouldn't Like Me When I'm Angry."`, `"With Great Power Comes Great Responsibility."`, `"We Are Groot."`, `"Tell Me: Do You Bleed? You Will."`, `"Genius, Billionaire, Playboy, Philanthropist."`, `"I'm Batman."`, `"I Could Do This All Day."`, `"Excelsior!"`, `"I'm Not Locked In Here With You. You're Locked In Here With Me!"`, `"Hulk Smash!"`, `"To me, my board!"`]
const div = document.createElement('div')

function randomMessage() {    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    div.innerHTML = `
    <div class="randomMessage">${randomMessage}</div>
`
    divPadre.append(div)
}

randomMessage()
setInterval(() => {
    randomMessage()
}, 4000)


