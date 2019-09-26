import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import ExpenseDashboardSidebar from './ExpenseDashboardSidebar';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="container-fluid mt-5 pt-2">
        <div className="row">
          <ExpenseDashboardSidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="row p-3">
              <h4>Add Expense</h4>
            </div>
            <div>
              <ExpenseForm onSubmit={this.onSubmit} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
