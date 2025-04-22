import DatePicker from "antd/es/date-picker";
import Form from "antd/es/form";
import Input from "antd/es/input";
import React from "react";
import { v4 as uuidv4 } from "uuid"; // Génère un ID unique
import { useDispatch } from "react-redux";
import { addEmployee } from "../../features/employeeSlice"; // Action Redux pour ajouter un employé
import SelectDepartment from "../select-department/SelectDepartment";
import SelectState from "../select-state/SelectState";
import "./styles.css";

// Composant principal du formulaire
const MyForm = ({ setOpenModal }) => {
  const [form] = Form.useForm(); // Création d'une instance de formulaire Ant Design
  const dispatch = useDispatch(); // Initialisation du dispatcher Redux

  // Fonction appelée lorsque le formulaire est soumis avec succès
  const onFinish = (values) => {
    console.log('Form Values:', values); // Affiche les valeurs dans la console pour vérification

    // Formatage des dates en chaînes (pour éviter une erreur Redux sur les objets non sérialisables)
    values.dateOfBirth = values.dateOfBirth.format("YYYY-MM-DD");
    values.startDate = values.startDate.format("YYYY-MM-DD");

    // Création d’un nouvel objet employé avec un ID unique
    const newEmployee = { ...values, id: uuidv4() };

    // Envoi de l’employé dans le store Redux
    dispatch(addEmployee(newEmployee));

    // Enregistrement facultatif dans le localStorage pour garder les données même après un rafraîchissement
    const employeesFromStorage = localStorage.getItem("employees");
    let newEmployeesList = [];
    if (!employeesFromStorage) {
      newEmployeesList = [newEmployee];
    } else {
      newEmployeesList = [...JSON.parse(employeesFromStorage), newEmployee];
    }
    localStorage.setItem("employees", JSON.stringify(newEmployeesList));

    // Affichage de la modal de confirmation
    setOpenModal(true); // Déclenche l'ouverture de la modal

    // Réinitialisation des champs du formulaire
    form.resetFields();
  };

  // Fonction appelée si la validation du formulaire échoue
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo); // Affiche les erreurs de validation dans la console
  };

  return (
    <div className="myFormContainer">
      {/* Formulaire Ant Design */}
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        form={form}
      >
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[{ required: true, message: "Please input your firstname!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[{ required: true, message: "Please input your lastname!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dateOfBirth"
          rules={[{ required: true, message: "Please input your date of birth!" }]}
        >
          <DatePicker className="datePicker" />
        </Form.Item>

        <Form.Item
          label="Start Date"
          name="startDate"
          rules={[{ required: true, message: "Please input your start date!" }]}
        >
          <DatePicker className="datePicker" />
        </Form.Item>

        <Form.Item
          label="Street"
          name="street"
          rules={[{ required: true, message: "Please input your street!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please input your city!" }]}
        >
          <Input />
        </Form.Item>

        <SelectState />

        <Form.Item
          label="Zip Code"
          name="zipCode"
          rules={[{ required: true, message: "Please input your zip code!" }]}
        >
          <Input />
        </Form.Item>

        <SelectDepartment />

        <Form.Item label={null} className="mt50">
          <div className="button-container">
            <button type="submit" className="button-save">
              Save
            </button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MyForm;
