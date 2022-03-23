import Portal from './Portal';

export default function Modal({ showModal, setShowModal, project }) {
  const { title, info, src, languages, url } = project ? project : '';
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Portal element="modal-root">
          <div className="backdrop" onClick={closeModal} />
          <div className="modal">
            <div className="card">
              <div className="card--header">
                <span className="dot dot-close dot--red" onClick={closeModal} />
                <span className="dot dot--yellow" onClick={closeModal} />
                <span className="dot dot--green" onClick={closeModal} />
              </div>
              <div className="card--body card--body-light">
                <div className="projects-modal">
                  <img src={src} alt={title} className="projects-modal-image" />
                  <div className="projects-modal-text">
                    <h4>{title}</h4>
                    <p>{info}</p>
                    <div className="projects-modal-text-spacer">
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        View on Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
