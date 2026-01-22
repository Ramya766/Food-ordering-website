const users = [
  { firstname: "Ramya", lastname: "sreevarshini", age: 19 },
  { firstname: "Hari", lastname: "Priyadharshan", age: 22 },
  { firstname: "Rama", lastname: "Tulasi", age: 18 },
];
//{19:2,24:1}
const output = users.reduce(function(acc,curr){

    if(curr.age<20){
        acc.push(curr.firstname) //push only works on array not on the objects
    }
    return acc;

},[])
console.log(output);
