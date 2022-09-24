import L from 'leaflet';
//import greenPin from '../../assets/green_pin.png'
//import pinShadow from '../../assets/pin_shadow.png'

const Icon = L.Icon({
  iconUrl: '../../assets/green_pin.png',
  shadowUrl: '../../assets/pin_shadow.png',
  //iconSize: new L.Point(60, 75),
  iconSize: [50, 50],
  shadowSize: [50, 40],
  iconAnchor: [25, 50],
  shadowAnchor: [25, 50],
});

export default Icon;
