import { Table } from 'react-bootstrap';

const DataTable = (props) => {
  return (
    <>
      <Table striped bordered hover className='text-center align-middle'>
        <thead className='align-middle'>
          <tr>
            {props.headers.map((text) => (
              <th>{text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <tr key={item.properties.pk}>
              <td>{index + 1}</td>
              <td>{item.properties.naziv_objekta}</td>
              <td>{item.properties.ps_br}</td>
              <td>{item.properties.e_br}</td>
              <td>{item.properties.tip_objekta}</td>
              <td>{item.properties.lucka_kapetanija}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DataTable;
