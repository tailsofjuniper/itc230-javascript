// let items = [
//     "red", "orange", "yellow", "green", "blue"
// ]
let bicycles = [
    { make : 'Trek', type : 'ATB', colour : 'red', wheel : '27.5in' },
    { make : 'Specialized', type : 'ATB', colour : 'green', wheel : '29in' },
    { make : 'Colnago', type : 'RD', colour : 'blue', wheel : '700c' },
    { make : 'Look', type : 'RD', colour : 'red', wheel : '700c' },
    { make : 'Colnago', type : 'RD', colour : 'yellow', wheel : '700c' }
    ];
exports.bicycles = bicycles

exports.getAll = (length) => {
    return bicycles[length]
}

console.log(bicycles.length)
console.log(bicycles[1])