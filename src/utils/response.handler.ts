import { Response } from "express";

export const handleResponse = (
  res: Response,
  code: number,
  data?: any,
  message?: string
) => {
  const responseBody: any = {};
  if (data) responseBody.data = data;
  if (message) responseBody.message = message;
  res.status(code).json(responseBody);
};
