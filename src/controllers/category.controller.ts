import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";
import { handleResponse } from "../utils/response.handler";

export class CategoryController {
  private categoryService: CategoryService;

  constructor() {
    this.categoryService = new CategoryService();
  }

  public getAllPaths = async (req: Request, res: Response): Promise<void> => {
    const { code, data } = await this.categoryService.getCategoryPaths();
    handleResponse(res, code, data);
  };

  public getById = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    const { code, data, message } = await this.categoryService.findCategoryById(id);
    handleResponse(res, code, data, message);
  };
}
