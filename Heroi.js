

class Heroi {
    constructor (nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo; 
}

atacar () {
    let ataque;
    switch (this.tipo) {
        case "mago":
            ataque = "uma magia"; 
            break; 
        case "guerreiro":
            ataque = "uma espada";
            break;
        case "ninja":
            ataque = "uma shuriken"
            break;
        case "monge":
            ataque = "uma artes marciais";
            break;
        default:
            ataque = "uma ataque indefinido";
            break;                 
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
}

}

let heroi = new Heroi("Gabriel", 29, "ninja");
heroi.atacar();