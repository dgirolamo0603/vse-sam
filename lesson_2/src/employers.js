let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((name) =>
        name.length > 0 && name.length != '')
    .map((item) => item.toLowerCase());
export {employersNames as emp};