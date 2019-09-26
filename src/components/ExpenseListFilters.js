import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };
  render() {
    return (
      <div className="">
        <div className="row align-items-center" >
          <div className="input-group">
            <div className="input-group-prepend mr-0 mr-md-2 my-1 my-lg-2">
              <span className="input-group-text" id="search">Search:</span>
              <input
                type="text"
                className="form-control"
                style={{ alignSelf: 'center', height: '100%' }}
                placeholder=""
                value={this.props.filters.text}
                onChange={this.onTextChange}
                aria-label="Search expenses"
                aria-describedby="search"
              />
            </div>
            <div className="input-group-prepend mr-0 mr-md-2 my-1 my-lg-2">
              <span className="input-group-text" id="dates">Dates:</span>
              <DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId={'expenseStartDateId'}
                endDateId={'expenseEndDateId'}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
              />
            </div>
            <div className="input-group-prepend my-1 my-lg-2">
              <span className="input-group-text" id="sortOrder">Sort By:</span>
              <select
                className="form-control"
                style={{ alignSelf: 'center', height: '100%' }}
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}
              >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
