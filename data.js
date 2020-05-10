let bicycle = [
    { make : 'Trek', name : '5000', type : 'ATB', colour : 'red', wheel : '27.5in' },
    { make : 'Specialized', name : 'Allez', type : 'ATB', colour : 'green', wheel : '29in' },
    { make : 'Colnago', name : 'Elite', type : 'RD', colour : 'blue', wheel : '700c' },
    { make : 'Time', name : 'VSRX', type : 'RD', colour : 'red', wheel : '700c' },
    { make : 'Colnago', name : 'EPS', type : 'RD', colour : 'yellow', wheel : '700c' }
    ];

exports.getAll = () => {
    return bicycle;
}
exports.bicycle;