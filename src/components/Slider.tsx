import { useState } from "react";
import { Modal } from "antd";
import { motion, AnimatePresence } from "framer-motion";

const arrowRight = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const arrowLeft = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

const cards = [
  // Tus objetos de cards aquí (igual que los que pusiste)
  {
    id: 1,
    cardTitle: "Sitios Web Express",
    cardDesc: "Creamos sitios web en menos de 1 semana.",
    modalTitle: "Detalles del Servicio: Sitios Web Express",
    modalContent: "Incluye diseño responsivo, SEO básico y hosting gratuito por 3 meses.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-black"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M15 17h2" />
        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
        <path d="M11 12h6" />
        <path d="M13 7h4" />
      </svg>
    ),
    arrow: arrowRight
  },
  // ... Los demás cards igual que tú pusiste (2, 3, 4, 5)
  {
    id: 2,
    cardTitle: "Landing Page Premium",
    cardDesc: "Landing optimizada para conversiones.",
    modalTitle: "Detalles del Servicio: Landing Page Premium",
    modalContent: "Incluye animaciones, integración con campañas de Google Ads y soporte.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-black"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M15 17h2" />
        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
        <path d="M11 12h6" />
        <path d="M13 7h4" />
      </svg>
    ),
    arrow: arrowRight
  },
  {
    id: 3,
    cardTitle: "Landing Page Premium",
    cardDesc: "Landing optimizada para conversiones.",
    modalTitle: "Detalles del Servicio: Landing Page Premium",
    modalContent: "Incluye animaciones, integración con campañas de Google Ads y soporte.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-black"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M15 17h2" />
        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
        <path d="M11 12h6" />
        <path d="M13 7h4" />
      </svg>
    ),
    arrow: arrowRight
  },
  {
    id: 4,
    cardTitle: "Landing Page Premium",
    cardDesc: "Landing optimizada para conversiones.",
    modalTitle: "Detalles del Servicio: Landing Page Premium",
    modalContent: "Incluye animaciones, integración con campañas de Google Ads y soporte.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-black"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M15 17h2" />
        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
        <path d="M11 12h6" />
        <path d="M13 7h4" />
      </svg>
    ),
    arrow: arrowRight
  },
  {
    id: 5,
    cardTitle: "Landing Page Premium",
    cardDesc: "Landing optimizada para conversiones.",
    modalTitle: "Detalles del Servicio: Landing Page Premium",
    modalContent: "Incluye animaciones, integración con campañas de Google Ads y soporte.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-black"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M15 17h2" />
        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
        <path d="M11 12h6" />
        <path d="M13 7h4" />
      </svg>
    ),
    arrow: arrowRight
  },
];

const cardsPerPage = 3;

const Slider = () => {
  const [selectedCardId, setSelectedCardId] = useState<Number | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const selectedCard = cards.find((c) => c.id === selectedCardId);
  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

  const next = () => {
    const newIndex = startIndex + cardsPerPage;
    if (newIndex < cards.length) {
      setStartIndex(newIndex);
    }
  };

  const prev = () => {
    const newIndex = startIndex - cardsPerPage;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-black font-urbanist">
        Nuestros Servicios Destacados
      </h2>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prev}
          disabled={startIndex === 0}
          className="p-2 rounded-full bg-gray-200 disabled:opacity-30"
        >
          {arrowLeft}
        </button>

        <div className="flex gap-6 overflow-hidden w-[calc(280px*3+12px*2)]">
          <AnimatePresence initial={false} mode="wait">
            {visibleCards.map((card) => (
              <motion.button
                key={card.id}
                onClick={() => setSelectedCardId(card.id)}
                className="flex flex-col w-[280px] sm:w-[300px] bg-white border border-gray-200 rounded-lg shadow-md p-5 transition-all hover:scale-105 hover:text-black"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.1 }}
              >
                <div className="py-7 flex justify-center">{card.icon}</div>
                <h5 className="text-xl font-bold tracking-tight text-black">{card.cardTitle}</h5>
                <h6 className="text-m py-2 tracking-tight text-black">{card.cardDesc}</h6>
                <div className="flex items-center justify-end w-full mt-4">{card.arrow}</div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          disabled={startIndex + cardsPerPage >= cards.length}
          className="p-2 rounded-full bg-gray-200 disabled:opacity-30"
        >
          {arrowRight}
        </button>
      </div>

      <Modal
        title={selectedCard?.modalTitle}
        open={!!selectedCard}
        onOk={() => setSelectedCardId(null)}
        onCancel={() => setSelectedCardId(null)}
      >
        <p>{selectedCard?.modalContent}</p>
      </Modal>
    </div>
  );
};

export default Slider;
