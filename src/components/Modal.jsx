export default function Modal({ title, image, alt, description, isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? "active" : ""}`} onClick={onClose} aria-hidden={!isOpen}>
      <div className="modal__content" onClick={(event) => event.stopPropagation()}>
        <button className="modal__close" type="button" onClick={onClose} aria-label={`关闭${title}`}>
          &times;
        </button>
        <h3>{title}</h3>
        <img src={image} alt={alt} />
        <p>{description}</p>
      </div>
    </div>
  );
}
