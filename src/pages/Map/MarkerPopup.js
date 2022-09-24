import { Popup } from 'react-leaflet';

const MarkerPopup = ({ item }) => {
  return (
    <Popup>
      <div>
        <div>
          <span>Naziv objekta:</span>
          <span>{item.properties.naziv_objekta}</span>
        </div>
        <div>
          <span>PS broj:</span>
          <span>{item.properties.ps_br}</span>
        </div>
        <div>
          <span>E broj:</span>
          <span>{item.properties.e_br}</span>
        </div>
        <div>
          <span>Tip objekta:</span>
          <span>{item.properties.tip_objekta}</span>
        </div>
        <div>
          <span>Lučka kapetanija:</span>
          <span>{item.properties.lucka_kapetanija}</span>
        </div>
      </div>
    </Popup>
  );
};

export default MarkerPopup;
