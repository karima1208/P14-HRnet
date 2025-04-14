import { Form, Select } from "antd";
import React from "react";
import { statesList } from "./statesList";

const SelectState = () => {
  return (
    <Form.Item
      label="State"
      name="state"
      rules={[{ required: true, message: "Please input your state!" }]}
    >
      <Select>
        {statesList.map((state) => (
          <Select.Option value={state.abbreviation}>{state.name}</Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectState;
