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

  getVinylById(id: string) {
    return apiClient.get(`/api/vinyls/${id}`)
  },

  postVinyl(vinyl: any) {
    return apiClient.post("/api/vinyls", vinyl);
  },

  deleteVinyl(id: string) {
    return apiClient.delete(`/api/vinyls/${id}`);
  },

  updateVinyl(id: string, vinyl: any) {
    return apiClient.put(`/api/vinyls/${id}`, vinyl);
  },
};
