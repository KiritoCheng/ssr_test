import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { Home } from "../src/component/Home";

// require("node-jsx").install();

const app = express();
const content = renderToString(React.createElement(Home));
app.use("/", function (req, res, next) {
  res.send(
    `
     <html>
       <head>
         <title>ssr</title>
       </head>
       <body>
         <div id="root">${content}</div>
       </body>
     </html>
    `
  );
});
app.listen(3001, () => {
  console.log("listen on port 3001");
});
