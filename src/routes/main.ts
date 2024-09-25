import { Router } from "express";
import { verifyJWT } from "../utils/jwt";
import * as pingController from "../controllers/ping";
import * as authController from "../controllers/auth";
import * as tweetController from "../controllers/tweet";

export const mainRouter = Router();

mainRouter.get("/ping", pingController.ping);
mainRouter.get("/privateping", verifyJWT, pingController.privatePing);

mainRouter.post("/auth/signup", authController.signup);
mainRouter.post("/auth/signin", authController.signin);

mainRouter.post("/tweet", verifyJWT, tweetController.addTweet);
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
