import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import ExpenseDashboardSidebar from './ExpenseDashboardSidebar';

const ExpenseDashboardPage = () => (
  <div className="container-fluid mt-2 pt-5">
    <div className="row">
      <ExpenseDashboardSidebar />
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 pt-1 pt-lg-4">
        <ExpenseListFilters />
        <ExpensesSummary />
        <ExpenseList />
      </main>
    </div>
  </div>
);

export default ExpenseDashboardPage;
