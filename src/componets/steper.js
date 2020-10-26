import { Steps, Button, message } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';


const { Step } = Steps;

const steps = [
  {
    title: 'Datos Generales',
    subTitle: 'Informacion Basica',
    content: "",
  },
  {
    title: 'Ingresos',
    subTitle: 'Informacion de ingreso',
    content: '',
  },
  {
    title: 'Peps',
    subTitle: 'Persona expuesta politicamente',
    content: "",
  },
  {
    title: 'Direcciones y Contacto',
    subTitle: 'Direccion telefono y/o redes socuales',
    content: '',
  },
];

class Steper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} description={item.subTitle} />
            

          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </>
    );
  }
}

export default Steper;