import { useEffect, useState } from 'react';

import { Table } from 'react-bootstrap';

import useHttpRequest from '../hooks/useHttpRequest';

const DataTable = () => {
  const [tableData, setTableData] = useState([]);
  const { sendRequest } = useHttpRequest();

  const dataHandler = (data) => {
    console.log(data.features[0]);
    setTableData(data.features);
  };

  useEffect(() => {
    sendRequest({ url: 'https://plovput.li-st.net/getObjekti/' }, dataHandler);
  }, [sendRequest]);

  const dataLoaded = tableData.length > 0 ? true : false;

  return (
    <>
      {dataLoaded && (
        <Table striped bordered hover className='text-center align-middle'>
          <thead className='align-middle'>
            <tr>
              <th>Redni broj</th>
              <th>Naziv objekta</th>
              <th>PS broj</th>
              <th>E broj</th>
              <th>Tip objekta</th>
              <th>Lučka kapetanija</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
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
      )}
    </>
  );
};

export default DataTable;
