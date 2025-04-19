// Importation du composant Form.Item depuis Ant Design
import Form from "antd/es/form";
import Select from "antd/es/select";

import React from "react";
import { departmentsList } from "./departmentsList";

// Composant qui affiche un champ de sélection pour choisir un département
const SelectDepartment = () => {
  return (
    // Élément de formulaire avec une étiquette "Department" et une règle de validation
    <Form.Item
      label="Department" 
      name="department"
      rules={[{ required: true, message: "Please input your department!" }]}
    >
      <Select>
        {departmentsList.map((state) => (
          <Select.Option value={state.abbreviation}>
            {state.name}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

// Exportation du composant pour qu’il puisse être utilisé ailleurs dans le projet
export default SelectDepartment;
