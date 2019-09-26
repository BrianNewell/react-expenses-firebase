import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide a Description and Amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <form className="form">
        {this.state.error && <p className="alert alert-danger">{this.state.error}</p>}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Description"
            autoFocus
            className="form-control"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="text"
            placeholder="Amount"
            className="form-control"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
        </div>
        <div className="form-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="date">Date:</span>
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              id="expenseDateId"
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            rows="4"
            placeholder="Add a note for your expense (optional)"
            className="form-control"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.onSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
            &nbsp;Save&nbsp;
          </button>
        </div>
      </form >
    )
  }
}
