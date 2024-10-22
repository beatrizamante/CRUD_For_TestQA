import express from 'express';
import VinylController from './controller/vinyl.controller'


const router = express.Router();

router
.get("/vinyls", VinylController.listAllVinyls)
.post("/vinyls", VinylController.createNewVinyl)
.put("vinyls/:id", VinylController.editVinyl)
.delete("/vinyls/:id", VinylController.deleteVinyl)

export default router;
