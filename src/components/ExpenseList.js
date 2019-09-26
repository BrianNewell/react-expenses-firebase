import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="">
    <div className="row">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Notes</th>
            <th scope="col">Date</th>
            <th scope="col" className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            props.expenses.length === 0 ? (
              <tr>
                <th scope="row">No expenses</th>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            ) : (
                props.expenses.map((expense) => {
                  return <ExpenseListItem key={expense.id} {...expense} />;
                })
              )
          }
        </tbody>
      </table>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
