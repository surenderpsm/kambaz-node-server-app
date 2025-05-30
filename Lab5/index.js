import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import cors from "cors";

export default function Lab5(app) {
    app.use(cors());
    app.get("/lab5/welcome", (req, res) => {
        res.send("Welcome to Lab 5");
    });

    PathParameters(app);
    QueryParameters(app);
    WorkingWithObjects(app);
    WorkingWithArrays(app);
}