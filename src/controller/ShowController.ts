import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Show } from "../entity/show.entity"
import express from "express";


const router = express.Router();

router.get('/shows', async (req: Request, res: Response) => {
    try {
        const showRepository = AppDataSource.getRepository(Show);
        const shows = await showRepository.find();
        res.json(shows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



router.post('/show', async (req: Request, res: Response) => {
    try {
        const userRepository = AppDataSource.getRepository(Show);
        const show = userRepository.create(req.body);
        await userRepository.save(show);
        res.status(201).json(show);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/show/:id', async (req: Request, res: Response) => {
     
    try {
      const showRepository = AppDataSource.getRepository(Show);
      const show = await showRepository.findOneBy(({id: parseInt(req.params.id)}));
      if (!show) return res.status(404).json({ message: 'Show not found' });
      res.json(show);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  router.put('/show/:id', async (req: Request, res: Response) => {
    try {
      const showRepository = AppDataSource.getRepository(Show);
      await showRepository.update(req.params.id, req.body);
      const updatedUser = await showRepository.findOneBy(({id: parseInt(req.params.id)}));
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  
  router.delete('/show/:id', async (req: Request, res: Response) => {
    try {
      const showRepository = AppDataSource.getRepository(Show);
      const show = await showRepository.findOneBy(({id: parseInt(req.params.id)}));
      if (!show) return res.status(404).json({ message: 'User not found' });
      await showRepository.delete(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });




export default router;


