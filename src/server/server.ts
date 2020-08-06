import * as express from "express";
import router from "./routes";
import * as path from "path";
import { Error } from "./utils/types";
import config from "./config";
import * as morgan from "morgan";
import * as cors from "cors";

const app = express();

app.use(cors());

app.use(express.static("public"));
app.use(express.json());

app.use(morgan("dev"));
app.use(router);

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

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
