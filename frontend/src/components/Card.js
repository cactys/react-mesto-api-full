import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((i) => i === currentUser._id);

  const handleClick = () => {
    onCardClick(card);
  }

  const handleLikeClick = () => {
    onCardLike(card);
  }

  const handleDeleteClick = () => {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <button
        className={`card__trach-icon ${isOwn ? 'card__trach-icon_visible' : 'card__trach-icon_hidden'}`}
        type="button"
        onClick={handleDeleteClick}
      />
      <img
        className="card__image"
        alt={card.name}
        src={card.link}
        onClick={handleClick}
      />
      <div className="card__description">
        <h3 className="card__name">{card.name}</h3>
        <div className="card__like-container">
          <button
            className={`card__like-button ${isLiked ? 'card__like-button_active' : 'card__like-button'}`}
            type="button"
            onClick={handleLikeClick}
          />
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
