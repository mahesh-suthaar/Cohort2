
class car{
    constructor(name,model,color){
        this.name=name;
        this.model=model
        this.color=color;
    }

    start(){
        console.log(`${this.name} is started and color is ${this.color}`)
    }

    displayModel(){
        console.log(`the model of your ${this.name} is ${this.model}`)
    }
}


let c1=new car('suzuki',2020,'gray')
c1.start()
c1.displayModel()

let c2=new car('mahindra',2009,'black')
c2.start()
c2.displayModel()