const bicycle = [
    { make : 'Trek', type : 'ATB', colour : 'red', wheel : '27.5in' },
    { make : 'Specialized', type : 'ATB', colour : 'green', wheel : '29in' },
    { make : 'Colnago', type : 'RD', colour : 'blue', wheel : '700c' },
    { make : 'Look', type : 'RD', colour : 'red', wheel : '700c' },
    { make : 'Colnago', type : 'RD', colour : 'yellow', wheel : '700c' }
    ];

function getAll() {
    return bicycle
    };
    exports.getAll;
    exports.bicycle;
// export function getAll() {
//     return () => {
//         return "bicycle";
//     };
// }
// const _getAll = getAll;
// export { _getAll as getAll };

// console.log(bicycles.length)
// console.log(bicycles[1])
// exports.getAll = () => {
//     return bicycle;
// }
