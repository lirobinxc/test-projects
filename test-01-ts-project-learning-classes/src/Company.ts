import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <h2>${this.companyName}</h2>
    <h3>${this.catchPhrase}</h3>
    <p><strong>Lat: </strong>${this.location.lat}</p>
    <p><strong>Lng: </strong>${this.location.lng}</p>
    `;
  }
}
