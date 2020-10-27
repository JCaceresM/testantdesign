import React, { useState } from "react";
import {
  Divider,
  Form,
  Input,
  Radio,
  Select,
  Row,
  Button,
  Col,
  DatePicker,
  Modal,
} from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },

  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

function Formulario(props) {

  const [form] = Form.useForm();
  const [Edit, SetEditState] = useState(true);
  const [visible, SetVisible] = useState(false);

  const dateConfig = {
    rules: [{ type: "object", required: true, message: "Please select time!" }],
  };

  const config = {
    rules: [{ required: true, message: "No debe haber camppos vacios!" }],
  };

  const onFinish = (values) => {
    props.next();
    props.validate();
    console.log("Received values of form: ", values);
  };
  
  const showModal = () => {
    SetVisible(true);
  };

  const handleOk = () => {
    SetVisible(false);
  };
  return (
    <>
      <Divider orientation="left" value="j">
        Datos Generales
      </Divider>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Row style={{ padding: "16px " }}>
          <Col span={12} className="gutter-row">
            <Form.Item name="Codigo" label="Codigo:">
              <Input disabled placeholder="codigo persona" />
            </Form.Item>

            <Form.Item
              name="Elija su documento"
              label="Tipo de documento"
              onClick={() => SetEditState(false)}
              {...config}
            >
              <Radio.Group>
                <Radio value="a">Cedula</Radio>
                <Radio value="b">Passaporte</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="Nombre" label="Nombre" {...config}>
              <Input placeholder="Nombre(s)" type="text" />
            </Form.Item>

            <Form.Item name="Apodo" label="Apodo">
              <Input placeholder="Apodo(Opcional)" />
            </Form.Item>
            <Form.Item
              name="Lugar de Nac:"
              label="Lugar de nacimiento"
              {...config}
            >
              <Input placeholder="Lugar de nacimiento" type="text" />
            </Form.Item>

            <Form.Item name="Sexo" label="Sexo" {...config}>
              <Radio.Group>
                <Radio value="a">Masculino</Radio>
                <Radio value="b">Femenino</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="Categoria solicitada"
              label="Categoria solicitada"
              {...config}
            >
              <Select placeholder="Seleccione una categoria" allowClear>
                <Option value="male">Primera</Option>
                <Option value="Segunda">Segunda</Option>
                <Option value="Tercera">Tercera</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12} style={{ padding: "16px " }}>
            <br />
            <br />
            <Form.Item
              name="Doc. de identidad:"
              label="Doc. de identidad"
              {...config}
            >
              <Input
                disabled={Edit}
                placeholder={
                  Edit
                    ? "Seleciona un tipo de docuemento"
                    : "Escribe tu documento(cedula o pasaporte"
                }
                min={8}
                max={11}
                type="text"
              />
            </Form.Item>

            <Form.Item name="Apellido" label="Apellido" {...config}>
              <Input placeholder="apellido(s)" type="text" />
            </Form.Item>

            <Form.Item name="Nacionalidad" label="Nacionalidad" {...config}>
              <Select placeholder="Seleccione su Nacionalidad" allowClear>
                <Option value="Dominicana">Dominicana</Option>
                <Option value="estadounidece">estado unidece</Option>
                <Option value="Europeo">Europeo</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="Fecha de nacimiento"
              label="Fecha de nacimiento"
              {...dateConfig}
            >
              <DatePicker placeholder="Fecha de nacimiento" />
            </Form.Item>

            <Form.Item name="estadoCivil " label="Estado civil" {...config}>
              <Radio.Group>
                <Radio value="a">Casado</Radio>
                <Radio value="b">Soltero</Radio>
                <Radio value="c">Union Libre</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Siguiente
          </Button>
        </Form.Item>
      </Form>

      <Button
        type="primary"
        htmlType="submit"
        style={{ float: "right" }}
        onClick={() => showModal()}
      >
        + Agregar relacionado
      </Button>
      <Modal
        title="Modal para saludar "
        visible={visible}
        onOk={handleOk}
        okText="Cero"
        onCancel={handleOk}
        cancelText="mas, menos"
      >
        <p>Hola</p>
      </Modal>
    </>
  );
}
export default Formulario;
