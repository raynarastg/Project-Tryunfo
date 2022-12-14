import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardPhrases,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    const cardNameFormatted = cardName ? (cardName.split('').join('.')) : '';
    return (
      <div className="borderCard">
        <div data-testid="name-card" className="name name-review">
          {cardNameFormatted.toUpperCase()}
        </div>
        {cardImage ? (<img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="image-preview"
        />) : ''}
        <div data-testid="description-card">

          {cardDescription}
        </div>
        <div className="phrase-preview">
          { cardPhrases }
        </div>
        <div className="atributo">
          <div data-testid="attr1-card">
            <strong>
              Funny:
              {cardAttr1}
            </strong>
          </div>
          <div data-testid="attr2-card">
            <strong>
              Beauty:
              {cardAttr2}
            </strong>

          </div>
          <div data-testid="attr3-card">
            <strong>
              Friendship:
              {cardAttr3}
            </strong>

          </div>
          <div data-testid="rare-card" className="rare-card">
            {cardRare}

          </div>
        </div>
        {cardTrunfo ? <div data-testid="trunfo-card">Super Trunfo</div> : null}
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardPhrases: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
};
export default Card;
