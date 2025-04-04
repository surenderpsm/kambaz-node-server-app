import "dotenv/config";
import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import cors from "cors";
import UserRoutes from "./Kambaz/Users/routes.js";
import session from "express-session";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import EnrollmentRoutes from './Kambaz/Enrollments/routes.js';
import AssignmentRoutes from './Kambaz/Assignments/routes.js';
const app = express();
app.use(cors());
// app.use(
//     cors({
//         credentials: true,
//         origin: process.env.NETLIFY_URL || "http://localhost:5176",
//     })
// );
 // make sure cors is used right after creating the app
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json()); // make sure this is configure BEFORE all the routes below
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
EnrollmentRoutes(app);
AssignmentRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000);






