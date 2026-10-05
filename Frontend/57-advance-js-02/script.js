class Bottle {
    constructor(){
        this.name='cello'
        this.price=860
    }

    showprice(){
        console.log(`the price of your bottle is:${this.price}`);
        
    }
}

let bottle1= new Bottle()
bottle1.showprice()
