function car(regNum, brand){
    this.regNum = regNum;
    this.brand = brand;
}

car.prototype.carDetails = function(){
    return {
        "Registration no" : this.regNum,
        "Brand" : this.brand
    }
}

function getOwnersVehicleDetail(owner,city){
    console.log({...this.carDetails(),...owner,city});
}

function person(name,year){
        this.name=name;
        this.year=year;
    }
    
    const gaurav = new person("gaurav","2021");
    const shardul = new person("shardul","2022");
    const jayesh = new person("jayesh","2013");
    
    const audi = new car("xyz","hyudai");
    const neo = new car("abc","tata");
    const thar = new car("pqr","mahindra");
    //call example
    getOwnersVehicleDetail.call(audi,gaurav,"LKO")
    //apply
    getOwnersVehicleDetail.apply(neo,[shardul,"AMD"])
    //bind
    detailOfJaysVehicle=getOwnersVehicleDetail.bind(audi,jayesh,"CHN")

    detailOfJaysVehicle();