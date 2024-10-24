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

  getVinylById(index: string) {
      const id = {
      id: index,
    };
    const vinyl_id = JSON.stringify(id)
    console.log(`${vinyl_id}`)
    return apiClient.get(`/api/vinyls/${vinyl_id}`)
  },

  postVinyl(data: Object) {
    console.log(`${data}`)
    return apiClient.post("/api/vinyls", data);
  },

  deleteVinyl(index: string) {
    const id = {
      id: index,
    };
    const vinyl_id = JSON.stringify(id);
    console.log(`${vinyl_id}`)
    return apiClient.delete(`/api/vinyls/${vinyl_id}`);
  },

  updateVinyl(vinyl_id: string, data: Object) {
    console.log(`${vinyl_id}`)
    console.log(`${data}`)

    return apiClient.put(`/api/vinyls/${vinyl_id}`, data);
  },
};
