import express, {Express} from 'express';
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from './entity/user.entity';
import ShowController from './controller/ShowController';
//import { UserController } from './controller/UserController';
  


AppDataSource.initialize().then(async () => {

    const app = express()
    const port = 3000;
    app.use(express.json());
    //app.use(bodyParser.json())

    app.use('/api', ShowController);
    app.listen(3000)

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Timber",
            lastName: "Saw",
            age: 27
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Phantom",
            lastName: "Assassin",
            age: 24
        })
    )

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))