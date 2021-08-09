import React from 'react'
import EmployeeListTableComponent from '../../Components/EmployeeListComponent/EmployeeListTableComponent';
import EmployeeListNavbar from '../../Components/EmployeeListComponent/EmployeeListNavbar';

function EmployeeList() {
  return (
    <>
        <EmployeeListNavbar/>
        <div className="mt-5 pt-3">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <h6>Dashboard/EmployeeList</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-3">
                    <div className="card h-100">
                        <div className="card-header">
                        <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
                          EmployeeList
                        </div>
                        <div className="card-body">
                          <EmployeeListTableComponent/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
      </div>
    </>
  );
}

export default EmployeeList;