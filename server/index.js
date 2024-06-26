const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const AUTH0_DOMAIN = "dev-it85fo770ssapz14.us.auth0.com";

server.use(middlewares);

server.use(async (req, res, next) => {
  if (await isAuthorized(req)) {
    // add your authorization logic here
    next(); // continue to JSON Server router
  } else {
    res.sendStatus(401);
  }
});

server.get("/user", (req, res) => {
  res.jsonp({
    ...req.user,
    view_count: 249,
    update_count: 100,
    courses: [
      {
        courseId: 1,
        done: true,
      },
      {
        courseId: 4,
        done: false,
      },
    ],
  });
});

server.use(jsonServer.bodyParser);
server.post("/posts", (req, res, next) => {
  req.body.createdAt = new Date().toISOString();
  req.body.author = { ...req.user };
  next();
});

server.use(router);

server.listen(4000, () => {
  console.log("JSON Server is running");
});

async function isAuthorized(req) {
  try {
    const Authorization = req.headers.authorization;

    const url = `https://${AUTH0_DOMAIN}/userInfo`;

    const res = await fetch(url, {
      headers: {
        Authorization,
      },
    });

    const json = await res.json();

    req.user = json;

    return true;
  } catch (error) {
    return false;
  }
}
