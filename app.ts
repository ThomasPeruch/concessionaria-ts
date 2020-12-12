class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number=0

    constructor(modelo: string, portas: number){
        this.modelo=modelo;
        this.numeroDePortas=portas;
    }

    public acelerar():void{
        this.velocidade= this.velocidade+10;
    }

    public parar(): void{
        this.velocidade=0;
    }

    public velocidadeAtual():number{
        return this.velocidade;
    }
}

class Concessionaria{
    private endereco: string 
    private listaDeCarros : Carro[]
    
    constructor(endereco: string, listaDeCarros: Carro[]){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarros(): Carro[]{
        return this.listaDeCarros
    }
}

class Pessoa{
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string{
        return this.nome;
    }

    public dizerCarroPreferido(): string{
        return this.carroPreferido;
    }

    public comprarCarro(carro: any): void{
        this.carro = carro;
    }

    public dizerCarroQueTem(): any{
        return this.carro;
    }
}

let carro1=new Carro('uno',2);
let carro2=new Carro('corsa',2);
let carro3=new Carro('fiorino',2);

let listaDeCarros: Carro[] = [carro1, carro2, carro3]

let concessionaria = new Concessionaria('Rua Senador Salgado Filho',listaDeCarros)
console.log(concessionaria.mostrarListaDeCarros())
