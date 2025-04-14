import { Form, Select } from "antd";
import React from "react";
import { departmentsList } from "./departmentsList";

const SelectDepartment = () => {
  return (
    <Form.Item
      label="Department"
      name="department"
      rules={[{ required: true, message: "Please input your department!" }]}
    >
      <Select>
        {departmentsList.map((state) => (
          <Select.Option value={state.abbreviation}>{state.name}</Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectDepartment;
