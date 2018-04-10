import * as express from "express";

class App {
  private _express: express.App;

  constructor() {
    this._express = express();
    this.mountRoutes();
  }

  get express() {
    return this._express;
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get("/", (req, res) => {
      res.json({
        message: "Hello World!"
      });
    });
    this.express.use("/", router);
  }
}

export default new App();
