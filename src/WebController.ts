// Import only what we need from express
import { Request, Response, Router } from "express";

const router: Router = Router();
export const WWW_DIR = __dirname + "/public/";

router.get("/", (req: Request, res: Response) => {
    res.sendFile(WWW_DIR + "index.html");
});

// Export the express.Router() instance to be used by server.ts
// tslint:disable-next-line:variable-name
export const WebController: Router = router;