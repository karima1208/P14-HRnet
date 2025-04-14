import { Button, DatePicker, Form, Input } from "antd";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux"; // ✅ Redux
import { addEmployee } from "../../features/employeeSlice"; // ✅ Redux
import SelectDepartment from "../select-department/SelectDepartment";
import SelectState from "../select-state/SelectState";
import "./styles.css";

const MyForm = ({ setOpenModal }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch(); // ✅ Redux

  const onFinish = (values) => {
    //transformeR les dates en chaînes de caractères pour eviter l’erreur Redux "non-serializable value"
    values.dateOfBirth = values.dateOfBirth.format("YYYY-MM-DD");
    values.startDate = values.startDate.format("YYYY-MM-DD");

    const newEmployee = { ...values, id: uuidv4() };

    // ✅ Enregistrer dans le store Redux
    dispatch(addEmployee(newEmployee));

    // ✅ (optionnel) Enregistrer aussi dans localStorage
    const employeesFromStorage = localStorage.getItem("employees");
    let newEmployeesList = [];
    if (!employeesFromStorage) {
      newEmployeesList = [newEmployee];
    } else {
      newEmployeesList = [...JSON.parse(employeesFromStorage), newEmployee];
    }
    localStorage.setItem("employees", JSON.stringify(newEmployeesList));

    setOpenModal(true);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="myFormContainer">
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
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MyForm;
