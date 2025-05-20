import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./CardDisplay.css"; // Importe o CSS localmente

/**
 * @typedef {Object} ClickOrigin
 * @property {number} x - Coordenada X da origem do clique.
 * @property {number} y - Coordenada Y da origem do clique.
 */

/**
 * Componente reutilizável para exibir um modal de link ou imagem.
 * Controla o scroll do body, permite fechamento por Escape e clique no overlay,
 * e possui animações de entrada/saída com Framer Motion.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {boolean} props.isOpen - Define se o modal está aberto ou fechado.
 * @param {'link' | 'imagem'} props.tipo - O tipo de conteúdo a ser exibido ('link' ou 'imagem').
 * @param {string} props.url - A URL do link ou da imagem.
 * @param {string} [props.texto] - O texto a ser exibido como título ou descrição.
 * @param {function} props.aoFechar - Função a ser chamada quando o modal for solicitado a fechar.
 * @param {ClickOrigin} [props.clickOrigin] - Coordenadas da origem do clique para animação de expansão.
 */
export default function CardDisplay({
  isOpen,
  tipo,
  url,
  texto,
  aoFechar,
  clickOrigin,
}) {
  // Efeito para controlar o scroll do body
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    }

    return () => {
      document.body.style.overflow = originalBodyOverflow || "unset";
      document.body.style.paddingRight = originalPaddingRight || "";
    };
  }, [isOpen]);

  // Efeito para fechar com a tecla "Escape"
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        aoFechar();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, aoFechar]);

  // Se o modal não estiver aberto, não renderiza nada (AnimatePresence no pai cuida da saída)
  if (!isOpen) {
    return null;
  }

  // Lógica de fallback para 'tipo' (pode ser removida se 'tipo' for sempre validado no pai)
  if (!tipo) {
    console.warn("CardDisplay: 'tipo' não foi fornecido. O modal pode não renderizar o conteúdo esperado.");
    return null;
  }

  // Definição das Variantes de Animação (Framer Motion)
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, delay: 0.2 },
    },
  };

  const modalContentVariants = {
    hidden: (customOrigin) => ({
      opacity: 0,
      scale: 0.3,
      left: customOrigin ? `${customOrigin.x}px` : "50%",
      top: customOrigin ? `${customOrigin.y}px` : "50%",
      x: "-50%",
      y: "-50%",
    }),
    visible: {
      opacity: 1,
      scale: 1,
      left: "50%",
      top: "50%",
      x: "-50%",
      y: "-50%",
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 30,
      },
    },
    exit: (customOrigin) => ({
      opacity: 0,
      scale: 0.3,
      left: customOrigin ? `${customOrigin.x}px` : "50%",
      top: customOrigin ? `${customOrigin.y}px` : "50%",
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.2 },
    }),
  };

  const handleAbrirLinkNovaAba = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    aoFechar();
  };

  return (
    <motion.div
      className="card-display-overlay"
      key="backdrop-carddisplay"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={aoFechar}
    >
      <motion.div
        className="card-display-content"
        key="modal-carddisplay"
        variants={modalContentVariants}
        custom={clickOrigin}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
        }}
      >
        <button className="card-display-close-button" onClick={aoFechar}>
          &times;
        </button>
        <h3>
          {texto || (tipo === "link" ? "Visualizar Link" : "Visualizar Imagem")}
        </h3>
        {tipo === "link" && (
          <>
            <p className="card-display-link-text">
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </p>
            <button
              className="card-display-action-button"
              onClick={handleAbrirLinkNovaAba}
            >
              Abrir link
            </button>
          </>
        )}
        {tipo === "imagem" && (
          <div className="card-image-container">
            <img
              src={url}
              alt={texto || "Imagem em destaque"}
              style={{
                maxWidth: "100%",
                maxHeight: "70vh",
                borderRadius: "4px",
                display: "block",
                margin: "auto",
              }}
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}