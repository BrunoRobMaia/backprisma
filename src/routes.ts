import { Router } from "express";
import { createCompanyController } from "./useCases/CreateCompany";
import { createUserController } from "./useCases/CreateUser";

export const Routes = () => {
  const router = Router();

  router.post("/company", async (request, response) => {
    return createCompanyController.handle(request, response);
  });
  router.post("/user", async (request, response) => {
    return createUserController.handle(request, response);
  });
  

  return router;
};
