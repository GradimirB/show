import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import express from "express";
import { Review } from "../entity/review.entity";

const router = express.Router();

router.get('/reviews', async (req: Request, res: Response) => {
    try {
        const reviewRepository = AppDataSource.getRepository(Review);
        const review = await reviewRepository.find();
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/review/:id', async (req: Request, res: Response) => {
     
    try {
      const reviewRepository = AppDataSource.getRepository(Review);
      const review = await reviewRepository.findOneBy(({id: parseInt(req.params.id)}));
      if (!review) return res.status(404).json({ message: 'This show doesnt have reviews' });
      res.json(review);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  router.post('/review', async (req: Request, res: Response) => {
    try {
        const reviewRepository = AppDataSource.getRepository(Review);
        const review = reviewRepository.create(req.body);
        await reviewRepository.save(review);
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put('/review/:id', async (req: Request, res: Response) => {
    try {
      const reviewRepository = AppDataSource.getRepository(Review);
      await reviewRepository.update(req.params.id, req.body);
      const reviewUpdated = await reviewRepository.findOneBy(({id: parseInt(req.params.id)}));
      if (!reviewRepository) return res.status(404).json({ message: 'User not found' });
      res.json(reviewRepository);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
 



