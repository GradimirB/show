 import express from "express"

  


import { UserController } from "./controller/UserController"
import {ShowController} from "./controller/ShowController"

export const Routes = [

    // {
    //     method:"get",
    //     route:"/shows",
    //     controller:ShowController,
    //     action: "all"


    // },

    // {
    //     method:"post",
    //     route:"/shows",
    //     controller:ShowController,
    //     action:"save"
    // },

     
    {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}

]