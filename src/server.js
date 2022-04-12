import express from 'express';

const app = express();

//__dirname: 현재 파일 경로
//1. Pug로 뷰 엔진 설정
app.set("view engine", "pug");
//2. express에 템플릿이 어디있는지 지정
app.set("views", __dirname + "/views");

// /public으로 이동하면 다음의 정적 파일을 보여줘라. 
//3. public url 생성해 유저에게 파일 공유
app.use("/public", express.static(__dirname + "/public"));

//4. home.pug를 render해주는 route handle 만듬
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"))

const handleListen = () => console.log('Listening on http://localhost:3000');

app.listen(3000, handleListen);

//express로 할 일 : views 설정, render