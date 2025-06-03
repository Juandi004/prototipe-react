import { useState } from "react";
import { Modal, Pagination } from "antd";

const arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="bg-gray-200 rounded-full text-black"
  >
    <path d="M5 12h14" />
    <path d="M13 18l6-6" />
    <path d="M13 6l6 6" />
  </svg>
);

const cards = [
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
    arrow: arrow
  },
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
    arrow: arrow
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
    arrow: arrow
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
    arrow: arrow
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
    arrow: arrow
  },
];

const pageSize = 3; 

const Slider = () => {
  const [selectedCardId, setSelectedCardId] = useState<Number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const selectedCard = cards.find((c) => c.id === selectedCardId);

  const paginatedCards = cards.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-black font-urbanist">
        Nuestros Servicios Destacados
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {paginatedCards.map((card) => (
          <button
            key={card.id}
            onClick={() => setSelectedCardId(card.id)}
            className="flex flex-col max-w-sm w-full sm:w-[300px] bg-white border border-gray-200 rounded-lg shadow-md p-5 transition-all duration-300 hover:scale-105 hover:text-black"
          >
            <div className="py-7 flex justify-center">{card.icon}</div>
            <h5 className="text-xl font-bold tracking-tight text-black">{card.cardTitle}</h5>
            <h6 className="text-m py-2 tracking-tight text-black">{card.cardDesc}</h6>
            <div className="flex items-center justify-end w-full mt-4">{card.arrow}</div>
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={cards.length}
          onChange={(page) => setCurrentPage(page)}
        />
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
