import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CardDisplay } from '@seu-usuario-github/react-card-display'; // Importe do seu pacote

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [clickOrigin, setClickOrigin] = useState(null);

  const handleOpenModal = (type, url, text, event) => {
    setModalContent({ type, url, text });
    setIsModalOpen(true);
    if (event) {
      setClickOrigin({ x: event.clientX, y: event.clientY });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setClickOrigin(null);
  };

  return (
    <div>
      <h1>Minha Aplicação</h1>
      <button onClick={(e) => handleOpenModal('link', '[https://www.google.com](https://www.google.com)', 'Visitar Google', e)}>
        Abrir Link Modal
      </button>
      <button onClick={(e) => handleOpenModal('imagem', '[https://via.placeholder.com/600x400](https://via.placeholder.com/600x400)', 'Exemplo de Imagem', e)}>
        Abrir Imagem Modal
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <CardDisplay
            isOpen={isModalOpen}
            tipo={modalContent.type}
            url={modalContent.url}
            texto={modalContent.text}
            aoFechar={handleCloseModal}
            clickOrigin={clickOrigin}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;