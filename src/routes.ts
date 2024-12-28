import { Router } from "express";
import { createCompanyController } from "./useCases/CreateCompany";
import { createUserController } from "./useCases/CreateUser";
import { authenticateController } from "./useCases/Authenticate";
import { editUserController } from "./useCases/EditUser";
import { deleteUserController } from "./useCases/DeleteUser";

export const Routes = () => {
  const router = Router();

  router.post("/company", async (request, response) => {
    return createCompanyController.handle(request, response);
  });
  router.post("/user", async (request, response) => {
    return createUserController.handle(request, response);
  });
  router.put("/user/:id", async (request, response) => {
    return editUserController.handle(request, response);
  });
  router.delete("/user/:id", async (request, response) => {
    return deleteUserController.handle(request, response);
  });
  router.post("/session", async (request, response) => {
    return authenticateController.handle(request, response);
  });
  return router;
};
