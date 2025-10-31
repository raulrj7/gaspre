import { Request, Response, NextFunction } from "express";

export const validateIdParam = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ message: "ID inválido" });
  }
  next();
};
