import { Input, Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import "./styles.css";
const columns = [
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname",
    sorter: (a, b) => a.firstname.localeCompare(b.firstname),
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname",
    sorter: (a, b) => a.firstname.localeCompare(b.firstname),
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    render: (text) => <span>{new Date(text).toLocaleDateString()}</span>,
    sorter: (a, b) => a.firstname.localeCompare(b.firstname),
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    sorter: (a, b) => a.firstname.localeCompare(b.firstname),
  },
  {
    title: "Date of Birth",
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
    render: (text) => <span>{new Date(text).toLocaleDateString()}</span>,
    sorter: (a, b) => a.firstname.localeCompare(b.firstname),
  },
  {
    title: "Street",
    dataIndex: "street",
    key: "street",
    sorter: (a, b) => a.firstname.localeCompare(b.firstname),
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    sorter: (a, b) => a.firstname.localeCompare(b.firstname),
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    sorter: (a, b) => a.firstname.localeCompare(b.firstname),
  },
  {
    title: "Zip Code",
    dataIndex: "zipCode",
    key: "zipCode",
    sorter: (a, b) => a.firstname.localeCompare(b.firstname),
  },
];

const sizeOptions = [
  { name: "10", value: 10 },
  { name: "25", value: 25 },
  { name: "50", value: 50 },
  { name: "100", value: 100 },
];

const MyTable = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [curentPage, setCurretPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    const employeesFromStorage = localStorage.getItem("employees");
    if (employeesFromStorage) {
      setEmployees(JSON.parse(employeesFromStorage));
      setFilteredEmployees(JSON.parse(employeesFromStorage));
    }
  }, []);
  const onChangeFilter = (query) => {
    let newEmployeesList = employees.filter(
      (employee) =>
        employee.lastname.toLowerCase().includes(query.toLowerCase()) ||
        employee.firstname.toLowerCase().includes(query.toLowerCase()) ||
        employee.startDate.toLowerCase().includes(query.toLowerCase()) ||
        employee.department.toLowerCase().includes(query.toLowerCase()) ||
        employee.dateOfBirth.toLowerCase().includes(query.toLowerCase()) ||
        employee.street.toLowerCase().includes(query.toLowerCase()) ||
        employee.city.toLowerCase().includes(query.toLowerCase()) ||
        employee.state.toLowerCase().includes(query.toLowerCase()) ||
        employee.zipCode.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmployees(newEmployeesList);
  };
  return (
    <div>
      <h1>Current Employees</h1>
      <div className="topTableContainer">
        <div>
          <span>Show</span>
          <Select
            value={pageSize}
            className="sizeSelect"
            onSelect={setPageSize}
          >
            {sizeOptions.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.name}
              </Select.Option>
            ))}
          </Select>
          <span>entries</span>
        </div>
        <div>
          <span>Search : </span>
          <Input
            className="queryInput"
            onChange={(e) => onChangeFilter(e.target.value)}
          />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={filteredEmployees}
        pagination={{ pageSize: pageSize }}
        rowKey="id"
        onChange={(value) => setCurretPage(value.current)}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
      <div>
        Showing {curentPage} to {Math.ceil(filteredEmployees.length / pageSize)}{" "}
        of {filteredEmployees.length} entries
      </div>
    </div>
  );
};
export default MyTable;
