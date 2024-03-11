import express from "express"; // backend frameworks uchun
import path from "path";
import router from "./router";
import routerAdmin from "./router-Admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public"))); // static - folder ni ochiq qilib beradi
app.use(express.urlencoded({ extended: true })); // urlencoded - form dan kelayotgan request larni parse qilib object ga uzgartiradi
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 3, // 3h
    },
    store: store,
    resave: true, // agar true bolsa vaqtii yangilanadi kirgan vaqtidan
    saveUninitialized: true,
  })
);

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views")); // config qilib beradi
app.set("view engine", "ejs"); // config qilib beradi

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // EJS, SSR
app.use("/", router); // REACT, SPA

export default app;
