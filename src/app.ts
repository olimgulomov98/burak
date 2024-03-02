import express from "express"; // backend frameworks uchun
import path from "path";
import router from "./router";
import routerAdmin from "./router-Admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public"))); // static - folder ni ochiq qilib beradi
app.use(express.urlencoded({ extended: true })); // urlencoded - form dan kelayotgan request larni parse qilib object ga uzgartiradi
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views")); // config qilib beradi
app.set("view engine", "ejs"); // config qilib beradi

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // EJS
app.use("/", router); // REACT

export default app;
