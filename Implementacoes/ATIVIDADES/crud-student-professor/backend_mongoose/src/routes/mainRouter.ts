import { Router } from "express";
import studentRouter from "./StudentsRoutes";
import professorRouter from "./ProfessorRoutes";

const mainRouter = Router()

export default mainRouter
                    .use(studentRouter)
                    .use(professorRouter)