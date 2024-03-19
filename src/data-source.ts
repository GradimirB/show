import express from "express"
import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
 

 

// export const dataSourceOptions: DataSourceOptions = {
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "",
//     database: "new_schema222",
//     synchronize: false,
//     logging: false,
//     migrations: ["src/migration/*{.ts,.js}"],
//     entities: ["src/entity/*.entity{.ts,.js}"],
//     subscribers: [],

// }

// export const dataSource = new DataSource(dataSourceOptions)
// export default dataSource;


//const app = express()
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "new_schema222",
    synchronize: false,
    logging: false,
    entities: ["src/entity/*.entity{.ts,.js}"],
    migrations: ["src/migration/*{.ts,.js}"],
    subscribers: [],
})

// app.use(express.json())
// app.use(createClientRouter)

// app.listen(3000, () => {
//     console.log('Now running on port 3000');
// })

// app.get("/", (req, res) => {
//     res.status(200).send("Hey, You are in my backend!!!");
//   });