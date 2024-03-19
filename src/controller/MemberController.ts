import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Member } from "../entity/member.entity"
import express from "express";

const router = express.Router();

router.get('/member', async (req: Request, res: Response) => {
    try {
        const memberRepository = AppDataSource.getRepository(Member);
        const members = await memberRepository.find();
        res.json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



router.post('/member', async (req: Request, res: Response) => {
    try {
        const userRepository = AppDataSource.getRepository(Member);
        const newMember = userRepository.create(req.body);
        await userRepository.save(newMember);
        res.status(201).json(newMember);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/member/:id', async (req: Request, res: Response) => {
     
    try {
      const memberRepository = AppDataSource.getRepository(Member);
      const member = await memberRepository.findOneBy(({id: parseInt(req.params.id)}));
      if (!member) return res.status(404).json({ message: 'Member not found' });
      res.json(member);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  router.put('/member/:id', async (req: Request, res: Response) => {
    try {
      const memberRepository = AppDataSource.getRepository(Member);
      await memberRepository.update(req.params.id, req.body);
      const updatedUser = await memberRepository.findOneBy(({id: parseInt(req.params.id)}));
      if (!updatedUser) return res.status(404).json({ message: 'Member not found' });
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  
  router.delete('/member/:id', async (req: Request, res: Response) => {
    try {
      const memberRepository = AppDataSource.getRepository(Member);
      const member = await memberRepository.findOneBy(({id: parseInt(req.params.id)}));
      if (!member) return res.status(404).json({ message: 'Member not found' });
      await memberRepository.delete(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });




export default router;