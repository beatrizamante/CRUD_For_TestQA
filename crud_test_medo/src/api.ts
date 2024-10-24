/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});
export default {
  getVinyl() {
    return apiClient.get("/api/vinyls");
  },

  getVinylById(vinyl_id: string) {
    return apiClient.get(`/api/vinyls/${vinyl_id}`)
  },

  postVinyl(data: Object) {
    return apiClient.post("/api/vinyls", data);
  },

  deleteVinyl(vinyl_id: string) {
    return apiClient.delete(`/api/vinyls/${vinyl_id}`);
  },

  updateVinyl(vinyl_id: string, data: Object) {
    return apiClient.put(`/api/vinyls/${vinyl_id}`, data);
  },
};
