// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite. ♠

// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto ♠

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe 

let member1 = {
    name : "Wayne Barnett" ,
    role : "Founder & CEO" ,
    img : '<img class="card-img-top" src="./img/wayne-barnett-founder-ceo.jpg" alt="">'
};
let member2 = {
    name : "Angela Caroll" ,
    role : "Chief Editor" ,
    img : '<img class="card-img-top" src="./img/angela-caroll-chief-editor.jpg" alt="">'
};
let member3  = {
    name : "Walter Gordon" ,
    role : "Office Manager" ,
    img : '<img class="card-img-top" src="./img/walter-gordon-office-manager.jpg" alt="">'
};
let member4 = {
    name : "AngelaLopez" ,
    role : "Social Media Manager" ,
    img : '<img class="card-img-top" src="./img/angela-lopez-social-media-manager.jpg" alt="">'
};
let member5 = {
    name : "Scott Estrada" ,
    role : "Developer" ,
    img : '<img class="card-img-top" src="./img/scott-estrada-developer.jpg" alt="">'
};
let member6 = {
    name : "Barbara Ramos" ,
    role : "Graphic Designer" ,
    img : '<img class="card-img-top" src="./img/barbara-ramos-graphic-designer.jpg" alt="">'
};

let staff = [
    member1,
    member2,
    member3,
    member4,
    member5,
    member6
];

// console.log(member1);
// console.log(member2);
// console.log(member3);
// console.log(member4);
// console.log(member5);
// console.log(member6);
console.log(staff);



// CREAZIONE DELL AUTOMATISMO

/* <div class="col-4">
                <div class="card">
                    <div ></div>
                    <div class="card-body">
                      <h5 class="card-title"></h5>
                      <p class="card-text"></p>
                    </div>
                </div>
</div> */

const container = document.getElementById('containercards');

for (let z in staff) {

    // creazione col
    let col = document.createElement('div')
    col.classList.add('col-4')

    // creazione card
    let card = document.createElement('div')
    card.classList.add('card')

    // creazione img
    let imgprofile = document.createElement('div')
    imgprofile.innerHTML = staff[z].img

    // creazione body
    let body = document.createElement('div')
    body.classList.add('card-body')

    // creazione name
    let named = document.createElement('h5')
    named.classList.add('card-title', 'text-center')
    named.innerHTML = staff[z].name

     // creazione role
     let roled = document.createElement('p')
     roled.classList.add('card-text', 'text-center')
     roled.innerHTML = staff[z].role

     // creazione body2
    let body2 = document.createElement('div')
    body2.classList.add('card-body')

    
    container.append(col)
    col.append(card)
    card.append(imgprofile)
    card.append(body)
    card.append(named)
    card.append(roled)
    card.append(body2)
}

    