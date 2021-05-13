const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    ["/api/category/*", "/api/category/getAll"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  )
};