// This assumes that Mesh is running under localhost:8070
module.exports = {
  "/api/*": {
    target: "http://www.laboratoriocloud.com:8070/",
    secure: false,
    changeOrigin: true
  }
};
