//////////////////////////////////////////////////
//Exercises 1 - 5 = answers are in the elev. web//
//////////////////////////////////////////////////

///////////////
//Exercise #6//
///////////////

// let arr = [3, 10, 20, 24, 10, 93, 3]

// const findDuplicates = ages => {
//     let check = {}
//     ages.forEach(a => {
//         !check[a] ? check[a] = a : console.log(`${check[a]} had a duplicate`)
//     })
// }

// findDuplicates(arr)

///////////////
//Exercise #7//
///////////////

let employees = {
    "ax01": { name: "Ray", age: 28, salary: 1300 },
    "qs84": { name: "Lucius", age: 31, salary: 840 },
    "bg33": { name: "Taylor", age: 18, salary: 2700 }
}

const findEmployeesSalary = function (id) {
    console.log(employees[id].salary)

}

findEmployeesSalary("ax01")

