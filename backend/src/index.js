import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helment from "helmet";
import morgan from "morgan";

// import routes
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// dotenv setting
dotenv.config();

// configration settings
const app = express();

// import data
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverAllStat from "./models/OverAllStat.js";
import AffiliateStat from "./models/AffiliateStat.js";

import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat } from "./data/index.js";

app.use(express.json());
app.use(helment());
app.use(helment.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// api routes

app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

// mongoose settings

const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {

    app.listen(PORT, () => console.log(`Server is up and running on port:${PORT}`));

    // add data one time
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverAllStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);

}).catch((error) => console.log(`${error} did not connected`));