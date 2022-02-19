import React from "react";
import { useState, useEffect } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Slider,
  InputNumber,
  Row,
  Col,
} from "antd";

const { Option } = Select;

function ModalWindow({ visible, onCancel, adding, inputValue, savingQuery }) {
  const [form] = Form.useForm();
  const [sortCount, setSortCount] = useState(12);

  useEffect(() => {
    form.setFieldsValue({
      query: inputValue,
      maxResults: 12,
      order: "relevance",
      name: inputValue
    });
  }, [inputValue, form]);

  function sortCountOnChange(value) {
    setSortCount(value);
  }

  return (
    <Modal
      visible={visible}
      title={adding ? "Сохранить запрос" : "Изменить запрос"}
      okText={adding ? "Сохранить" : "Изменить"}
      cancelText={adding ? "Не сохранять" : "Не изменять"}
      onCancel={onCancel}
      savingQuery={savingQuery}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            savingQuery(values);
            onCancel();
          })
          .catch((err) => {
            console.log(err);
          });
      }}
      forceRender
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          q: inputValue,
        }}
      >
        <Form.Item name="query" label="Запрос">
          <Input placeholder={inputValue} disabled={true} />
        </Form.Item>
        <Form.Item
          name="name"
          label="Название"
          rules={[
            {
              required: true,
              message: "Укажите название!",
            },
          ]}
        >
          <Input placeholder="Укажите название" />
        </Form.Item>
        <Row>
          <Col span={12}>
            <Form.Item name="order" label="Сортировать по:">
              <Select placeholder="Без сортировки" allowClear>
                <Option value="date">Дате</Option>
                <Option value="rating">Рейтингу</Option>
                <Option value="viewCount">Числу просмотров</Option>
                <Option value="relevance">Соответствию</Option>
              </Select>
            </Form.Item>

            <Form.Item name="maxResults" label="Максимальное количество">
              <Slider
                min={0}
                max={50}
                onChange={sortCountOnChange}
                value={sortCount}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              name="maxResults"
              className="collection-create-form_last-form-item"
            >
              <InputNumber
                min={0}
                max={50}
                style={{ margin: "118px 0 0 144px" }}
                value={sortCount}
                onChange={sortCountOnChange}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default ModalWindow;
