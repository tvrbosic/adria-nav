import { Stack } from 'react-bootstrap';
import L from 'leaflet';
import { Popup } from 'react-leaflet';

const MarkerPopup = ({ item }) => {
  return (
    <Popup offset={L.point(0, -25)}>
      <Stack gap={1} className='fs-6 p-2'>
        <Stack direction='horizontal' gap={2}>
          <span className='fw-bold'>Naziv objekta:</span>
          <span className='ms-auto'>{item.properties.naziv_objekta}</span>
        </Stack>
        <Stack direction='horizontal' gap={2}>
          <span className='fw-bold'>PS broj:</span>
          <span className='ms-auto'>{item.properties.ps_br}</span>
        </Stack>
        <Stack direction='horizontal' gap={2}>
          <span className='fw-bold'>E broj:</span>
          <span className='ms-auto'>{item.properties.e_br}</span>
        </Stack>
        <Stack direction='horizontal' gap={2}>
          <span className='fw-bold'>Tip objekta:</span>
          <span className='ms-auto'>{item.properties.tip_objekta}</span>
        </Stack>
        <Stack direction='horizontal' gap={2}>
          <span className='fw-bold'>Lučka kapetanija:</span>
          <span className='ms-auto'>{item.properties.lucka_kapetanija}</span>
        </Stack>
      </Stack>
    </Popup>
  );
};

export default MarkerPopup;
