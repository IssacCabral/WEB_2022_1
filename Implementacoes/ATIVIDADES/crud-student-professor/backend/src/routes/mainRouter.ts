import { Router } from "express";
import studentRouter from "./StudentsRoutes";

const mainRouter = Router()

export default mainRouter
                    .use(studentRouter)