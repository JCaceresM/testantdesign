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
interface IFormProps {
  validate: () => void;
  next: () => void;
}

function Formulario({ validate, next }: IFormProps): JSX.Element {

  const [form] = Form.useForm();
  const [Edit, SetEditState] = useState<boolean>(true);
  const [visible, SetVisible] = useState<boolean>(false);

  const config = {
    rules: [{ required: true, message: "No debe haber camppos vacios!" }],
  };

  const onFinish = (values: Object): void  => {
    next();
    validate();
    console.log("Received values of form: ", values);
  };

  const showModal = (): void  => {
    SetVisible(true);
  };

  const handleOk = (): void  => {
    SetVisible(false);
  };
  return (
    <>
      <Divider orientation="left" >
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

              {...config}
            >
              <Radio.Group>
                <Radio value="a" onClick={() => SetEditState(false)}>Cedula</Radio>
                <Radio value="b" onClick={() => SetEditState(false)}>Passaporte</Radio>
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
                <Radio value="Masculino">Masculino</Radio>
                <Radio value="Femenino">Femenino</Radio>
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
              {...config}
            >
              <DatePicker placeholder="Fecha de nacimiento" />
            </Form.Item>

            <Form.Item name="estadoCivil " label="Estado civil" {...config}>
              <Radio.Group>
                <Radio value="Casado">Casado</Radio>
                <Radio value="Soltero">Soltero</Radio>
                <Radio value="UnionLibre">Union Libre</Radio>
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
