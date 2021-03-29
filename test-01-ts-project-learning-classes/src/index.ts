import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap';

// inject script to index.html
const mapScript = document.createElement('script');
mapScript.type = 'text/javascript';
mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_API_KEY}`;
mapScript.onload = () => initMap();
document.head.appendChild(mapScript);

const user = new User();
const company = new Company();
console.log(user);

function initMap(): void {
  const customMap = new CustomMap('map');
  customMap.addMarker(user);
  customMap.addMarker(company);
}
