import { Steps, Button, message } from "antd";
import React from "react";
import "antd/dist/antd.css";
import Dev from "./devInprogress";
import Formulario from "./Form";
const { Step } = Steps;

interface IState {
  current: number;
  validate: boolean;
}

class Steper extends React.Component<any,IState> {
  constructor(props:any) {
    super(props);
    this.state = {
      current: 0,
      validate: false,
    };
  }
  steps=  [
    {
      title: "Datos Generales",
      subTitle: "Informacion Basica",
      content: (
        <Formulario
          validate={this.validate.bind(this)}
          next={this.next.bind(this)}
        />
      ),
    },
    {
      title: "Ingresos",
      subTitle: "Informacion de ingreso",
      content: <Dev></Dev>,
    },
    {
      title: "Peps",
      subTitle: "Persona expuesta politicamente",
      content: <Dev></Dev>,
    },
    {
      title: "Direcciones y Contacto",
      subTitle: "Direccion telefono y/o redes socuales",
      content: <Dev></Dev>,
    },
  ];
  next(): void {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev(): void  {
    if (this.state.current === 1) {
      this.validate();
    }
    const current = this.state.current - 1;
    this.setState({ current });
  }
  validate(): void  {
    const validate = !this.state.validate;
    this.setState({ validate });
  }

  render() {
    const { current } = this.state;
    const Component = this.steps[current].content;

    return (
      <>
        <Steps current={current} >
          {this.steps.map((item) => (
            <Step
              key={item.title}
              title={item.title}
              description={item.subTitle}
            />
          ))}
        </Steps>

        <div className="steps-content">{Component}</div>
        <div className="steps-action">
          {current < this.steps.length - 1 && (
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => this.next()}
              style={{ display: this.state.validate ? "inline-block" : "none" }}
            >
              Siguiente
            </Button>
          )}

          {current === this.steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => this.prev()}>
              Anterior
            </Button>
          )}
        </div>
      </>
    );
  }
}

export default Steper;
