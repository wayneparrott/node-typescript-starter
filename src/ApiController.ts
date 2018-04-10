
// Import only what we need from express
import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Hello World!"
    });
});


// e.g., http://localhost:3000/api/foo
//
router.get("/:name", (req: Request, res: Response) => {
    // Extract the name from the request parameters
    const name = req.params.name;

    // Greet the given name
    res.json({
        message: `Hello ${name}`
    });
});

// Export the express.Router() instance to be used by server.ts
// tslint:disable-next-line:variable-name
export const ApiController: Router = router;
