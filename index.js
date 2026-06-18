let scoreH = 0

let pScoreH = document.getElementById("pScoreH")

function plusOneH() {
    scoreH += 1
    pScoreH.textContent = scoreH
}

function plusTwoH() {
    scoreH += 2
    pScoreH.textContent = scoreH
}

function plusThreeH() {
    scoreH += 3
    pScoreH.textContent = scoreH
}

function resetH() {
    scoreH = 0
    pScoreH.textContent = "0"
    console.log("scoreH=", scoreH)

}

let scoreA = 0

let pScoreA = document.getElementById("pScoreA")

function plusOneA() {
    scoreA += 1
    pScoreA.textContent = scoreA
}

function plusTwoA() {
    scoreA += 2
    pScoreA.textContent = scoreA
}

function plusThreeA() {
    scoreA += 3
    pScoreA.textContent = scoreA
}

function resetA() {
    scoreA = 0
    pScoreA.textContent = "0"
    console.log("scoreA=", scoreA)
}