const selectionButtons = document.querySelectorAll("[data-selection]")
const finalColumn = document.querySelector("[data-final-column]")
const yourScore = document.querySelector("[data-your-score]")
const computerScore = document.querySelector("[data-computer-score]")
const turn = document.querySelector("[data-turn]")
const SELECTIONS = [
    {
        name: "rock",
        emoji: "👊",
        beats: "scissors"
    },
    {
        name: "paper",
        emoji: "✋",
        beats: "rock"
    },
    {
        name: "scissors",
        emoji: "✌️",
        beats: "paper"
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', (e) => {
        const selectionName = selectionButton.dataset.selection
        const yourSelection = SELECTIONS.find(selection => selection.name === selectionName )
        const computerSelection = computerGenerated()

        const youWin = (yourSelection.beats === computerSelection.name) ? true : false
        const computerWin = (computerSelection.beats === yourSelection.name) ? true : false

        updateScore(youWin, computerWin)
        addResultDiv(computerSelection, computerWin)
        addResultDiv(yourSelection, youWin)
    })
})

function updateScore(you, computer){
    if (you){yourScore.innerText = parseInt(yourScore.innerText) + 1}
    if (computer){computerScore.innerText = parseInt(computerScore.innerText) + 1}
    turn.innerText = parseInt(turn.innerText) + 1
}

function addResultDiv(selection, winner){
    const div = document.createElement("div")
    div.classList.add("selection")
    if (winner) {div.classList.add("winner")}
    div.innerText = selection.emoji
    finalColumn.after(div)
}


function makeSelection(selection){
    console.log(selection)
}

function computerGenerated(){
    const n = Math.floor(Math.random()*SELECTIONS.length)
    return SELECTIONS[n]
}