require("../env");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { globalErrorHandler } = require("./middlewares/error.middlewares");

// Routes
const authRouter = require("./features/auth/auth.routes");

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/auth", authRouter);

app.use(globalErrorHandler);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    } else {
        console.log(`Server run on http://localhost:${PORT}`);
    }
});
