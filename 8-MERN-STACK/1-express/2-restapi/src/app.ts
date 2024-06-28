import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandlers";
import userRouter from "./users/userRouter";
import bookRouter from "./book/bookRouter";

const app = express();

app.use(express.json());
app.get("/", (req, res, next) => {
  res.send({ name: "dev" });
});

app.use("/api/users", userRouter);

app.use("/api/books", bookRouter);

app.use(globalErrorHandler);
export default app;
