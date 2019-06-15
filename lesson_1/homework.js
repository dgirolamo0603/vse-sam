let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((name)=>
name.length>0 && name.length !='')
.map((item)=>item.toLowerCase());
console.log(employersNames);

// for (var i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].length != '') {
// 		employersNames.push(employers[i]);
// 	}
// }
// for (var i = 0; i < employersNames.length; i++) {
// 	employersNames[i] = employersNames[i].toLowerCase().trim();
// }

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};


function makeBusiness(owner, director='Victor', cash, emp) {
    let sumSponsors = {...sponsors.eu, ...sponsors.rus};
    console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    emp);
    console.log('And we have a sponsors: ');
    console.log(Math.max(sumSponsors));
    console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}

function calcCash(...own) {
    var total = own;
        return total;
}
const money = calcCash(null, sponsors.cash);
console.log(money);