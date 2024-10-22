import { Router } from "express";
import { AppDataSource } from "../config";
import { Vinyls } from "../entity/Vinyls";
import { Bands } from "../entity/Bands";

const router = Router();

router.get("/vinyls", async (req, res) => {
    try{
        const vinyls = await AppDataSource.getRepository(Vinyls).find({ relations: ["band", "album"] });
        res.json(vinyls);
    } catch(err) {
                
    }
});

router.post("/vinyls", async (req, res) => {

  const { bandName, vinylName, year } = req.body;
  const bandRepository = AppDataSource.getRepository(Bands);
  const vinylRepository = AppDataSource.getRepository(Vinyls);

  try {

    let band = await bandRepository.findOneBy({ name: bandName });

    if (!band) {
      band = bandRepository.create({ name: bandName });
      await bandRepository.save(band);
    }
    
    const vinyl = vinylRepository.create({});
    const result = await vinylRepository.save(vinyl);
    
    res.status(201).json(result);
  
  } catch (err) {
  
    console.error("Error creating vinyl", err);
    res.status(500).json({ message: "Error creating vinyl" });
  }
});

router.put("/vinyls/:id", async (req, res) => {

   const vinyl = await AppDataSource.getRepository(Vinyls).findOneBy({
    vinyl_id: parseInt(req.params.id),
  });

  if (vinyl) {
    AppDataSource.getRepository(Vinyls).merge(vinyl, req.body);

    const result = await AppDataSource.getRepository(Vinyls).save(vinyl);

    res.json(result);

} else {

    res.status(404).json({ message: "Vinyl Not Found" });
  }
});

router.delete("vinyl/:id", async (req, res) => {

    const result = await AppDataSource.getRepository(Vinyls).delete(req.params.id);
  res.json(result);
});
export default router;
