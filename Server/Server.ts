import express, { Request, Response } from "express";
import http from "http";
import https from "https";

const app = express();
const port = process.env.PORT || 3000;

// CORS 방지용
const cors = require("cors");

// cookie용 미들웨어
const cookieParser = require("cookie-parser");

app.use(cookieParser());

// JSON 형태의 요청 바디를 파싱하기 위한 미들웨어
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, // Access-Control-Allow-Credentials 설정을 바꾸는 문법인데 안 먹힘
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

// 기본 응답
app.get("/", (req: Request, res: Response) => {
  //res.setHeader("Access-Control-Allow-Credentials", "true"); // false 로 값을 줘도 멀쩡히 쿠키가 설정됨
  res.setHeader("Set-Cookie", "nickname=inshin;");
  //res.cookie('nickname', 'yahoo', {}); // cookie-parser
  const cookies = req.headers.cookie;
  console.log(`Arrived Cookies: ${cookies}`);
  res.send("GET RECEIVED");
});

app.post("/post", (req: Request, res: Response) => {
  const { id, password } = req.body;
  console.log(`POST REQUEST at \/post`);
  res.send("POSTED");
});

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
