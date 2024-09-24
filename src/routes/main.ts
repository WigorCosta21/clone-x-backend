import { Router } from "express";
import * as pingController from "../controllers/ping";

export const mainRouter = Router();

mainRouter.get("/ping", pingController.ping);
//mainRouter.get("/privateping");

// mainRouter.post("/auth/signup");
// mainRouter.post("/auth/signin");

// mainRouter.post("/tweet");
// mainRouter.get("/tweet/:id");
// mainRouter.get("/tweet/:id/answers");
// mainRouter.post("/tweet/:id/like");

// mainRouter.get("/user/:slug");
// mainRouter.get("/user/:slug/tweets");
// mainRouter.post("/user/:slug/fallow");
// mainRouter.put("/user");
// mainRouter.put("/user/avatar");
// mainRouter.put("/user/cover");

// mainRouter.get("/feed");
// mainRouter.get("/search");
// mainRouter.get("/trending");
// mainRouter.get("/suggestions");
