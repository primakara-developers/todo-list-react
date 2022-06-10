import { $fetch } from "ohmyfetch";

const api = $fetch.create({
  baseURL: "https://shrouded-refuge-36665.herokuapp.com/api",
});

export default api;
