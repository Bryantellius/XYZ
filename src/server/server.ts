import * as express from "express";
import router from "./routes";
import * as path from "path";
import { Error } from "./utils/types";
import config from "./config";
import * as morgan from "morgan";
import * as helmet from "helmet";
import * as cors from "cors";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use(morgan("dev"));
app.use(router);

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

const port = config.port;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
