import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      trunfo: '',
      button: true,
      info: [],
    };
  }

  validacao = () => {
    const { name,
      description, attr1, attr2, attr3, image, rare } = this.state;
    const valorMax = 210;
    const pontosMax = 90;
    const soma = Number(attr1) + Number(attr2) + Number(attr3);
    this.setState({
      button: !(name !== ''
        && description !== ''
        && image !== ''
        && rare !== ''
        && attr1 >= 0
        && attr2 >= 0
        && attr3 >= 0
        && attr1 <= pontosMax
        && attr2 <= pontosMax
        && attr3 <= pontosMax
        && soma <= valorMax) });
  }

  // nessa parte foi utilizado métodos que estão nesta documentação https://pt-br.reactjs.org/docs/react-component.html#setstate
  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState(({ [name]: value }), () => this.validacao());
  }

  onSaveButtonClick = () => {
    const { name,
      description, attr1, attr2, attr3, image, rare } = this.state;
    const objInfo = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
    };

    this.setState((param1) => ({ info: [...param1.info, objInfo] }));
    this.setState({ name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal' });
  }

  render() {
    const {
      name,
      description, attr1, attr2, attr3, image, rare, trunfo, button } = this.state;
    return (
      <div>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ button }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
