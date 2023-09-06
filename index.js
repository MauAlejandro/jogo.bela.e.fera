let fera
let bela
let grass
let arbusto

const tamanho = 50

let andarx = 0
let andary = 0

let botton

function setup() {
    createCanvas(450, 450);
    grass = loadImage('grass03_0.png')
    fera = loadImage('fera.png')
    bela = loadImage('bela.bestido.png.png')
    arbusto = loadImage('arbusto.png.webp')
}

function draw() {
    background(220);

    image(grass, 0, 0, tamanho * 9, tamanho * 9)

    image(bela, 260, 110, 40, 40)

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            image(arbusto, tamanho * i, tamanho * j, tamanho, tamanho)

        }
    }


    image(fera, andarx, andary, tamanho, tamanho)

    rect(140, 140, 150, 150)
    text("you win", 160, 220)
    textSize(30)
    if (fera && andarx === 260 && andary === 110) {


    }

}


function keyPressed() {
    if (keyIsDown(DOWN_ARROW) && andary < 400)
        andary += tamanho
    if (keyIsDown(UP_ARROW) && andary > 0)
        andary -= tamanho
    if (keyIsDown(RIGHT_ARROW) && andarx < 400)
        andarx += tamanho
    if (keyIsDown(LEFT_ARROW) && andarx > 0)
        andarx -= tamanho
}
