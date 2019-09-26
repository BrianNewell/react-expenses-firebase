import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import ExpenseDashboardSidebar from './ExpenseDashboardSidebar';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    var answer = window.confirm("DELETE?  Are you sure?");
    if (answer === true) {
      this.props.startRemoveExpense({ id: this.props.expense.id });
      this.props.history.push('/');
    }
  };
  render() {
    return (
      <div className="container-fluid mt-5 pt-2">
        <div className="row">
          <ExpenseDashboardSidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="row p-3">
              <h4>Edit Expense</h4>
            </div>
            <div className="form-group">
              <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />

              <button className="btn btn-danger" onClick={this.onRemove}>
                Delete Expense&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              </button>
              <p className="text-muted">Warning: This CAN NOT be undone.</p>
            </div>
          </main>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
