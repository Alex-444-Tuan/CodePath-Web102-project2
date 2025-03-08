import React from 'react';
import './Flashcard.css';

const Flashcard = ({card, flipped, onClick}) => {
  return (
    <div className={`card ${flipped ? 'flip' : ''}`} onClick={onClick}>
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
        <div className='front'>
          <p>{card.vietnamese}</p>
        </div>
        <div className='back'>
          <p>{card.english}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
