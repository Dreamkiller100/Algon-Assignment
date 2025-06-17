const app = require('./fileserver');


app.listen(3000, () => {
  console.log("File server running at http://localhost:3000/files");
});
/* just go to http://localhost:3000/files */
