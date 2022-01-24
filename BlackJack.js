let cards = []
let sum = 0
let hasBlackJack = false 
let isAlive = false
let message = ""
let messageEl = document.getElementById("messege-el")
let sumEl=document.querySelector("#sum-el")
let carsdEl=document.querySelector("#cards-el")
let Player = document.getElementById("player-el")


Player.textContent=player.name + " : " + player.chips 
function getRandomCard() {
    num = Math.floor(Math.random()*13)+1
    if (num ===1){
        return 11
    }
    else if (num >10){
        return 10
    }
    else{
        return num
    }
}
function startGame() {
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard() 
    cards=[firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    sumEl.textContent="sum : " + sum
    carsdEl.textContent = "cards : "  
    for(let i =0 ;i<cards.length;i++){
        carsdEl.textContent +=  cards[i] +" "
    }
 if (sum<21) {
    message="Do you want draw a new card ?"
 }
 
 if (sum===21) {
    message="woooh! You've got a blackjack"
    hasBlackJack = true
 }

 if (sum>21) {
    message="You out of the game"
    isAlive = false
 }
 messageEl.textContent=message

}
function newCard() {
    if(isAlive&&hasBlackJack===false){
     let card = getRandomCard()
     sum+=card 
     cards.push(card)
     renderGame()
}

} 