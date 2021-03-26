import { Company } from './Company';
import { User } from './User';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);
console.log('apikey', process.env.MAPS_API_KEY);
