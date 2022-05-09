const player_div = document.querySelector(".player_div")
const comp_div = document.querySelector(".comp_div")
const control_div = document.querySelector(".control")
const result = document.querySelector(".result")
const yes_btn = document.querySelector(".btn_yes")
const no_btn = document.querySelector(".btn_no")
const start_btn = document.querySelector(".start")
const play_again_btn = document.querySelector(".again")


const cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
const card_img = ["./pics/11.png", "./pics/2.png", "./pics/3.png", "./pics/4.png", "./pics/5.png", "./pics/6.png", "./pics/7.png", "./pics/8.png", "./pics/9.png", "./pics/10.png", "./pics/10j.png", "./pics/10k.png", "./pics/10q.png"]

control_div.classList.add("hidden")
play_again_btn.classList.add("hidden")

let player_total = 0
let comp_total = 0
//start of the game
function start_game() {
    start_btn.classList.add("hidden")
    control_div.classList.remove("hidden")
    result.textContent = ""


    let player_cards = [Math.floor(Math.random() * cards.length) , Math.floor(Math.random() * cards.length) ]
    let computer_cards = [Math.floor(Math.random() * cards.length) , Math.floor(Math.random() * cards.length) ]

    player_total = cards[player_cards[0]] + cards[player_cards[1]]
    comp_total = cards[computer_cards[0]] + cards[computer_cards[1]]

    player_div.innerHTML = ""
    comp_div.innerHTML = ""

    p_first_card = card_img[player_cards[0]]
    p_second_card = card_img[player_cards[1]]

    card_moves = `
    <img src="${p_first_card}" alt="">
    <img src="${p_second_card}" alt="">
    `

    player_div.insertAdjacentHTML("afterbegin", card_moves)


    c_first_card = card_img[computer_cards[0]]
    c_second_card = card_img[computer_cards[1]]

    card_moves2 = `
    <img src="${c_first_card}" alt="">
    `
    comp_div.insertAdjacentHTML("afterbegin", card_moves2)

    yes_btn.addEventListener("click", function() {
        player_cards.push(Math.floor(Math.random() * cards.length) )
        let new_card = player_cards[2]
        player_total += cards[player_cards[2]]
        let p_third_card = card_img[new_card]
        let html_block = `
        <img src="${p_third_card}" alt="">
        `
        player_div.insertAdjacentHTML("afterbegin", html_block)

        if (comp_total <= 12) {
            computer_cards.push(Math.floor(Math.random() * cards.length))
            let new_card2 = computer_cards[2]
            c_third_card = card_img[new_card2]
            comp_total += cards[computer_cards[2]]
            let html_block2 = `
            <img src="${c_second_card}" alt="">
            <img src="${c_third_card}" alt="">
            `
            comp_div.insertAdjacentHTML("afterbegin", html_block2)
        } else {
            let html_block3 = `
            <img src="${c_second_card}" alt="">
            `
            comp_div.insertAdjacentHTML("afterbegin", html_block3)
        }
        console.log(player_total)
        console.log(comp_total)

        check_winner()

        play_again_btn.classList.remove("hidden")
    })

    no_btn.addEventListener("click", function() {
    
        if (comp_total <= 12) {
            computer_cards.push(Math.floor(Math.random() * cards.length))
            let new_card2 = computer_cards[2]
            c_third_card = card_img[new_card2]
            comp_total += cards[new_card2]
            let html_block4 = `
            <img src="${c_second_card}" alt="">
            <img src="${c_third_card}" alt="">
            `
            comp_div.insertAdjacentHTML("afterbegin", html_block4)
        } else {
            let html_block5 = `
            <img src="${c_second_card}" alt="">
            `
            comp_div.insertAdjacentHTML("afterbegin", html_block5)
        }
        console.log(player_total)
        console.log(comp_total)

        check_winner()

        play_again_btn.classList.remove("hidden")
    })

    function check_winner() {
        if (comp_total == player_total) {
            result.textContent = "IT's a draw!"
        } else if (comp_total > 21) {
            result.textContent = "Player wins!"
        } else if (player_total > 21) {
            result.textContent = "Computer wins!"
        } else if (player_total == 21) {
            result.textContent = "BLACK JACK!!! Player wins!"
        } else if (comp_total == 21) {
            result.textContent = "BLACK JACK!!! Computer wins!"
        } else if (player_total > comp_total && player_total < 21) {
            result.textContent = "Player wins!"
        } else if (comp_total > player_total && comp_total < 21) {
            result.textContent = "Computer wins!"
        }
    }

    
}

play_again_btn.addEventListener("click", function() {
    window.location.reload()
})

start_btn.addEventListener("click", start_game)
