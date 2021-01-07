import { apiUrl } from "../config.json";
import http from "./httpServices";

export async function newTodo(todo) {
  return await http.post(`${apiUrl}/todos/new`, { todo });
}

export async function deleteTodo(todoId) {
  return await http.delete(`${apiUrl}/todos/delete`, { data: { todoId } });
}

export async function getAllTodos() {
  return await http.get(`${apiUrl}/todos`);
}

export async function getFavoriteTodos() {
  return await http.get(`${apiUrl}/todos/favorite`);
}

export async function updateTodo(todo) {
  return await http.patch(`${apiUrl}/todos/update`, { todo });
}

const todoService = {
  newTodo,
  deleteTodo,
  getAllTodos,
  getFavoriteTodos,
  updateTodo,
};

export default todoService;
