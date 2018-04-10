import * as express from "express";
import { ApiController } from "./ApiController";
import { WebController, WWW_DIR } from "./WebController";


class App {
  private _express: express.Application;

  constructor() {
    this._express = express();
    this.mountRoutes();
  }

  get express() {
    return this._express;
  }

  private mountRoutes(): void {
    this.express.use("/api", ApiController);
    this.express.use(WebController);
    this.express.use(express.static(WWW_DIR));
  }

}

export default new App();
