import http from "./httpServices";
import { apiUrl } from "../config.json";

export async function newCard(card) {
  return await http.post(`${apiUrl}/cards/new`, {
    name: card.name,
    color: card.color,
    size: card.size,
    description: card.description,
  });
}

export async function updateCard(card) {
  return await http.patch(`${apiUrl}/cards/update`, {
    name: card.name,
    color: card.color,
    size: card.size,
    description: card.description,
    _id: card._id,
    status: card.status,
  });
}

export async function deleteCard(cardId) {
  return await http.delete(`${apiUrl}/cards/delete`, { data: { _id: cardId } });
}

export async function getMycards(cardId) {
  return await http.get(`${apiUrl}/cards/${cardId}`);
}

export async function gelAllCards() {
  return await http.get(`${apiUrl}/cards`);
}

const cardService = {
  gelAllCards,
  getMycards,
  deleteCard,
  updateCard,
  newCard,
};
export default cardService;
