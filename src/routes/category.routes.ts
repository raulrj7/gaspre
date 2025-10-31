import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";
import { validateIdParam } from "../middlewares/validateId";

const router = Router();
const controller = new CategoryController();

router.get("/paths", controller.getAllPaths);
router.get("/:id", validateIdParam, controller.getById);

export default router;
