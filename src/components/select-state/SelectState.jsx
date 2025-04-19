// Importation du composant Select depuis la bibliothèque Ant Design.
import Select from "antd/es/select";
import Form from "antd/es/form";
import React from "react";
import { statesList } from "./statesList";

const SelectState = () => {
  return (
    <Form.Item
      label="State" // L'étiquette du champ de formulaire (texte affiché à côté du champ).
      name="state" // Le nom du champ qui sera utilisé dans les données du formulaire.
      rules={[{ required: true, message: "Please input your state!" }]} // La règle de validation pour s'assurer que l'utilisateur sélectionne un état.
    >
      <Select>
        {statesList.map((state) => (
          <Select.Option key={state.abbreviation} value={state.abbreviation}>
            {state.name}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

// Exportation du composant SelectState pour pouvoir l'utiliser dans d'autres fichiers.
export default SelectState;
