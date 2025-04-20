// Importation des composants nécessaires depuis Ant Design et React
import Input from "antd/es/input";
import { Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./styles.css";

// Définition des colonnes du tableau avec tri possible sur chaque champ
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
    sorter: (a, b) => a.lastname.localeCompare(b.lastname),
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    render: (text) => <span>{new Date(text).toLocaleDateString()}</span>, // Formatage de la date
    sorter: (a, b) => a.startDate.localeCompare(b.startDate),
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    sorter: (a, b) => a.department.localeCompare(b.department),
  },
  {
    title: "Date of Birth",
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
    render: (text) => <span>{new Date(text).toLocaleDateString()}</span>, // Formatage de la date
    sorter: (a, b) => a.dateOfBirth.localeCompare(b.dateOfBirth),
  },
  {
    title: "Street",
    dataIndex: "street",
    key: "street",
    sorter: (a, b) => a.street.localeCompare(b.street),
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    sorter: (a, b) => a.city.localeCompare(b.city),
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    sorter: (a, b) => a.state.localeCompare(b.state),
  },
  {
    title: "Zip Code",
    dataIndex: "zipCode",
    key: "zipCode",
    sorter: (a, b) => a.zipCode.localeCompare(b.zipCode),
  },
];

// Options pour sélectionner le nombre d'entrées affichées par page
const sizeOptions = [
  { name: "10", value: 10 },
  { name: "25", value: 25 },
  { name: "50", value: 50 },
  { name: "100", value: 100 },
];

const MyTable = () => {
  // États pour les données, les données filtrées, la page actuelle, et la taille de page
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Récupération des données depuis le localStorage au chargement du composant
  useEffect(() => {
    const employeesFromStorage = localStorage.getItem("employees");
    if (employeesFromStorage) {
      setEmployees(JSON.parse(employeesFromStorage));
      setFilteredEmployees(JSON.parse(employeesFromStorage));
    }
  }, []);

  // Fonction de filtrage lors de la recherche
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
      <div className="header">
        <img src={logo} alt="HRnet logo" className="logo" loading="lazy" />
        <h1>Current Employees</h1>
      </div>
      

      {/* Section de contrôle du tableau : sélection de la taille et champ de recherche */}
      <div className="topTableContainer">
        <div className="selectWrapper">
          <span>Show</span>
          <Select
            value={pageSize}
            className="sizeSelect"
            onSelect={setPageSize} // Met à jour le nombre d'éléments par page
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
            onChange={(e) => onChangeFilter(e.target.value)} // Lance le filtrage en temps réel
          />
        </div>
      </div>

      {/* Tableau avec colonnes définies, pagination, tri et clé unique */}
      <Table
        columns={columns}
        dataSource={filteredEmployees}
        pagination={{ pageSize: pageSize }}
        rowKey="id" // Important pour que React puisse identifier chaque ligne
        onChange={(value) => setCurrentPage(value.current)} // Met à jour la page courante
        showSorterTooltip={{ target: "sorter-icon" }} // Affiche l’info bulle sur l’icône de tri
      />

      {/* Informations sur la pagination affichées sous le tableau */}
      <div>
        Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, filteredEmployees.length)}  of  {filteredEmployees.length} entries
      </div>

    </div>
  );
};

export default MyTable;
