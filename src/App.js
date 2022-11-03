import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import FilterName from './components/FilterName';
import FilterRaridade from './components/FilterRaridade';
import './App.css';
import data from './data';
import Cards from './components/Cards';
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      phrase: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      trunfo: '',
      button: true,
      info: [],
      hasTrunfo: false,
      filter: [],
      filterRare: 'todas',
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

  hasTrunfo = () => {
    const { info } = this.state;
    return info.some((el) => el.trunfo);
  }

  onSaveButtonClick = () => {
    const { name,
      description, attr1, attr2, attr3, image, rare, trunfo } = this.state;
    const objInfo = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
    };

    this.setState((param1) => ({ info: [...param1.info, objInfo] }));
    this.setState((param1) => ({ filter: [...param1.filter, objInfo] }));
    this.setState((param1) => ({ filterRare: [...param1.filterRare, objInfo] }));
    this.setState({ name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      hasTrunfo: !this.hasTrunfo(),
    });
  }

  deleteButton = (param) => {
    this.setState((estadoAnterior) => ({
      info: estadoAnterior.info.filter((el) => el.name !== param),
    }), () => {
      // const { info } = this.state;
      // this.setState({ filter: info });
      this.setState({ hasTrunfo: this.hasTrunfo() });
    });
  }

  nameFilter = ({ target }) => {
    const { value } = target;
    this.setState((estadoAnterior) => ({
      info: estadoAnterior.info.filter((el) => el.name.includes(value)) }));
  };

  rareFilter = ({ target }) => {
    const { rare } = target;
    this.setState((estadoAnterior) => ({
      info: estadoAnterior.info.filter((el) => el.rare.includes(rare)) }));
  };

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3, image, rare, trunfo, button, hasTrunfo, phrase } = this.state;
    return (
      <div className="infos">
        <h1>T.R.Y.U.N.F.O</h1>
        <div className="inputsInfo">
          <Form
            cardName={ name }
            cardDescription={ description }
            cardPhrases={ phrase }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            isSaveButtonDisabled={ button }
          />
          <Card
            cardName={ name }
            cardDescription={ description }
            cardPhrases={ phrase }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ trunfo }
          />
          <FilterName
            onInputChange={ this.nameFilter }
          />
          <FilterRaridade
            onInputChange={ this.rareFilter }
          />
        </div>
        <div className="cards">
          {data.map((el) => (
            <div key={ el.name } className="emVolta">
              <div className="card">
                <Cards
                  cardName={ el.name }
                  cardDescription={ el.description }
                  cardPhrases={ el.phrase }
                  cardAttr1={ el.funny }
                  cardAttr2={ el.beauty }
                  cardAttr3={ el.friendship }
                  cardImage={ el.image }
                  cardRare={ el.rare }
                  cardTrunfo={ el.trunfo }
                />
                <div className="button">
                  <button
                    type="button"
                    data-testid="delete-button"
                    onClick={ () => this.deleteButton(el.name) }
                  >
                    Excluir

                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
