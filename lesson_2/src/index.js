import {emp} from './employers';
import {money,sponsors} from "./sponsors";
// console.log(employersNames);
// console.log(money);

let sumSponsors = {...sponsors.eu,...sponsors.rus};
class MakeBusiness{
    constructor(owner, director = 'Victor', cash, emp){
        this.owner=owner;
        this.director=director;
        this.cash=cash;
        this.emp=emp;
    }
  
    out(){
          console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
              emp);
          console.log('And we have a sponsors: ');
          console.log(Math.max(sumSponsors));
          console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
    }
}
const res=new MakeBusiness("Aleksey","Grigoriy",900,emp);
console.log(res);