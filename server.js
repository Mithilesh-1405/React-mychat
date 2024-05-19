const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

//All the routes for API Endpoints
const listRoutes = require("./routes/listRoutes");
const userRoutes = require("./routes/userRoutes");
const emailRoutes = require('./routes/emailRoutes')
const unsubscribeRoutes = require('./routes/unsubscribeRoutes')

app.use("/lists", listRoutes);
app.use("/users", userRoutes);
app.use("/email", emailRoutes);
app.use("/unsubscribe", unsubscribeRoutes);


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
