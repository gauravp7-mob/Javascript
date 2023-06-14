var employee : [number, string, boolean]
var employees :[number,string,boolean][]=[]

const addEmployeeWithIsPermanentFalse=(id:number,name:string,isPermanent:boolean=false)=>{
    employee=[id,name,isPermanent]
    employees.push(employee)
}
const updateEmployee=(id:number,isPermanent?:boolean)=>{
    const employee = employees.find(employee=>employee[0]===id)
    if (employee) {
        if(isPermanent){
            employee[2]=isPermanent;
            console.log(`Employee with emp id ${id} updated`);
        }else{
            console.log(`employee with emp id ${id} not updated`);
        }
    }else{
        console.log(`Employee with ${id} does not exist`);
    }
}
addEmployeeWithIsPermanentFalse(1,"gaurav")
addEmployeeWithIsPermanentFalse(2,"shivam",false)
addEmployeeWithIsPermanentFalse(3,"shardul",false)
addEmployeeWithIsPermanentFalse(4,"krant",true)
addEmployeeWithIsPermanentFalse(5,"kalki")
console.log(employees);
updateEmployee(1,true)
updateEmployee(2)
console.log(employees);
const typeAssertionExample=()=>{
    let stringIdEmps = employees.map(e=>[(e[0]) as any as String,e[1],e[2]])
    stringIdEmps.push(["6","srb",true]);
    console.log(stringIdEmps);
}
typeAssertionExample();