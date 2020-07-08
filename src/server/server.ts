import * as express from "express";
import apiRouter from "./routes";
import * as path from "path";
import { Error } from "./utils/types";

const app = express();

app.use(express.static("public"));
app.use(apiRouter);

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(err.status || 500);
    res.json({ errors: { err: err.message } });
  }
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
