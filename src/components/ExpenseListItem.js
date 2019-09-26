import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt, note }) => (
  <tr>
    <th scope="row">
      <Link to={`/edit/${id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        &nbsp;{description}
      </Link>
    </th>
    <td>{note}</td>
    <td>{moment(createdAt).format('MMMM Do, YYYY')}</td>
    <td className="text-right">{numeral(amount / 100).format('$0,0.00')}</td>
  </tr>
);

export default ExpenseListItem;
