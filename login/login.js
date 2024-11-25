const card = document.getElementById('card-sign')
const create = document.getElementById('createacc')
const logg = document.getElementById('loging')
const cardl = document.getElementById('cardl')

create.addEventListener("click", ()=>{
    card.className = "card-sign using"
    cardl.className = "card-login"
})

logg.addEventListener("click", ()=>{
    card.className = "card-sign"
    cardl.className = "card-login using"
})