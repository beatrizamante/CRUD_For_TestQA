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

  postVinyl() {
    return apiClient.post("/api/vinyls");
  },

  deleteVinyl(index: string) {
    const id = {
      id: index,
    };
    const vinyl_id = JSON.stringify(id);
    return apiClient.delete(`/api/vinyls/${vinyl_id}`);
  },

  updateVinyl(vinyl_id: string, band: string, title: string, year: number) {
    return apiClient.put(`/api/vinyls/${vinyl_id}`);
  },
};
