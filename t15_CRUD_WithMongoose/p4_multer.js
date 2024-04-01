const express = require("express");
const multer = require("multer");
const app = express();
// code for file uploading.
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // destination: it is a function
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpeg");
    }
  })
}).single("user_file");
//post method for deta send
app.post("/upload",upload, (req, res) => {
  res.send("file uploaded");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
