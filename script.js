
// let person = {
// gender: "male",
// height: "5'8",
// pet: "lizard",
// single: "yeah",

// }

let person = {
    gender: "male",
    height: "5'8",
    single: "yeah",
    graudated: true,
    previous_work: ["office", "couch", "zoo-worker"],
    pet: {
        type: "bearded dragon",
        name: "beard"
    },

    }

console.log(person.gender) // male
console.log(person.height) // 5'8
console.log(person["pet"]) // lizard
console.log(person["single"]) //yeah
console.log(person.pet.type) //bearded dragon
console.log(person.pet.name) //beard
console.log(person.graudated)
console.log(person.previous_work)
 


    person.previous_work.forEach(function(work){
        console.log(work)
    })
    
    