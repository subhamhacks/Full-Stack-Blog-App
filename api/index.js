import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import cookieParser from "cookie-parser";
import multer from "multer";


const app = express();

app.use(express.json());
app.use(cookieParser());
// If there is auth problem,
// Alter user 'root'@'localhost' identified with mysql_native_password = "";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
});
  
const upload = multer({storage : storage});

app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
});


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
// app.get("/test", (req, res) => {
//     res.json('Hello World!')
// });
app.get("/api/posts", (req, res) => {
    const q = "SELECT * FROM posts";
    db.query(q, (err, data) => {    
        if(err) return res.json(err);
        return res.json(data);
    });
});


app.listen(8800, () => {
  console.log("Connected!");
});
