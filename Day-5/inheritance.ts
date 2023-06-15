class Car{
    colour: string;
    constructor( colour:string){
        this.colour=colour;
    }
}
class Child extends Car{
    price:number;
    constructor(colour:string,price:number){
        super(colour)
        this.price=price;
    }
    display=()=>{
       return `Colour of car is ${this.colour} and Price is ${this.price}`;
    }
}
const car1=new Child("Black",100000);
console.log(car1.display());