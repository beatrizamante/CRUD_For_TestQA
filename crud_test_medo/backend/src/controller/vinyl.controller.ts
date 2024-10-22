import { Response } from 'express';
import { CustomRequest } from './../interface/CustomRequest';
import { AppDataSource } from "../config";
import { Vinyls } from "../entity/Vinyls";
import { Bands } from "../entity/Bands";

export default class VinylController {
  static listAllVinyls = async (req: CustomRequest<{ bandName: string; title: string; year: number }>, res: Response) => {
    try {
      const vinyls = await AppDataSource.getRepository(Vinyls).find();
      res.status(200).json(vinyls);
    } catch (err) {
      console.error("Error loading vinyl", err);
      res.status(500).json({
        message: "There was a problem while loading the vinyls in our case.",
      });
    }
  };

  static createNewVinyl = async (req: CustomRequest<{ bandName: string; title: string; year: number }>, res: Response) => {
    const { bandName, title, year } = req.body;
    const bandRepository = AppDataSource.getRepository(Bands);
    const vinylRepository = AppDataSource.getRepository(Vinyls);

    try {
      let band = await bandRepository.findOneBy({ name: bandName });

      if (!band) {
        band = bandRepository.create({ name: bandName });
        await bandRepository.save(band);
      }

      const vinyl = vinylRepository.create({
        title: title,
        band: band,
        year: year,
      });
      const result = await vinylRepository.save(vinyl);

      res.status(201).json(result);
    } catch (err) {
      console.error("Error creating vinyl", err);
      res.status(500).json({ message: "Error creating vinyl, broken record!" });
    }
  };

  static editVinyl = async (req: CustomRequest<{ bandName: string; title: string; year: number }>, res: Response) => {
    const { bandName, title, year } = req.body;
    const bandRepository = AppDataSource.getRepository(Bands);
    const vinylRepository = AppDataSource.getRepository(Vinyls);

    try {
      const vinyl = await vinylRepository.findOne({
        where: { vinyl_id: parseInt(req.params.id) },
        relations: ["band"],
      });

      if (!vinyl) {
        return res.status(404).json({ message: "Vinyl Not Found!" });
      }

      if (bandName && bandName !== vinyl.band.name) {
        let band = await bandRepository.findOneBy({ name: bandName });

        if (!band) {
          band = bandRepository.create({ name: bandName });
          await bandRepository.save(band);
        }

        vinyl.band = band;

        vinyl.title = title || vinyl.title;
        vinyl.year = year || vinyl.year;

        const result = await vinylRepository.save(vinyl);

        res.status(200).json(result);
      }
    } catch (err) {
      console.error("Error updating vinyl", err);
      res.status(500).json();
    }
  };

  static deleteVinyl = async (req: CustomRequest<{ bandName: string; title: string; year: number }>, res: Response) => {
    try {
      const result = await AppDataSource.getRepository(Vinyls).delete(
        req.params.id
      );

      if (result.affected === 0) {
        return res.status(404).json({ message: "Vinyl Not Found" });
      }

      res.json();
    } catch (err) {
      console.error("Error breaking vinyl", err);
      res.status(500).json({ message: "Error breaking vinyl." });
    }
  };
}
