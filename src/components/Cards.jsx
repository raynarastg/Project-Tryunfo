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

    return (
      <div className="card-content">
        <div data-testid="name-card" className="name">

          {cardName}
        </div>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <div data-testid="description-card">

          {cardDescription}
        </div>
        <div className="phrase">
          { cardPhrases }
        </div>
        <div className="atributos">
          <div data-testid="attr1-card">
            <p>
              <strong>Funny:</strong>

              {cardAttr1}
            </p>
          </div>
          <div data-testid="attr2-card">
            <p>
              <strong>Beauty:</strong>
              {cardAttr2}
            </p>
          </div>
          <div data-testid="attr3-card">
            <p>
              <strong>Friendship:</strong>
              {cardAttr3}
            </p>
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
