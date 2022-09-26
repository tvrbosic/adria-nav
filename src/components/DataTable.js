import { useState } from 'react';
import { Table } from 'react-bootstrap';

import PaginationControl from './PaginationControl';

const perPage = 20;

const DataTable = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  // 20 items per page
  const maxPage = Math.ceil(props.data.length / perPage);

  const currentPageData = props.data.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <>
      <Table striped bordered hover className='text-center align-middle'>
        <thead className='align-middle'>
          <tr>
            {props.headers.map((text, index) => (
              <th key={index}>{text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item, index) => (
            <tr key={item.properties.pk}>
              <td>{item.properties.naziv_objekta}</td>
              <td>{item.properties.ps_br}</td>
              <td>{item.properties.e_br}</td>
              <td>{item.properties.tip_objekta}</td>
              <td>{item.properties.lucka_kapetanija}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationControl
        currentPage={currentPage}
        maxPage={maxPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default DataTable;
