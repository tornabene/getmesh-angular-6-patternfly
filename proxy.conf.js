// This assumes that Mesh is running under localhost:8080
module.exports = {
  "/api/*": {
  	target: "http://localhost:8070",
  //  target: "http://www.laboratoriocloud.com:8070/",
    secure: false,
    changeOrigin: true
  }
};
