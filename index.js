import http from "http";
import parser from "./parser/parser.js";
import CustomError from "./parser/models/customError.js";
import ParseToRawHtml from "./parser/parseToRawHtml.js";
import url from "node:url"
const { parseBody, parseBodyAndChangeToWebP } = parser;
const server = http.createServer(async (req, res) => {
  // Allow CORS for all origins
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;
  if (req.method === "POST" && parsedUrl.pathname === "/api/parse-html") {
    let requestData = "";

    req.on("data", (chunk) => {
      requestData += chunk;
    });

    req.on("end", async () => {
      try {
        console.log(requestData)
        const processedText = await parseBody(requestData);
        console.log(processedText)
        if (
          !processedText.Commands ||
          !Array.isArray(processedText.Commands) ||
          processedText.Commands.length == 0 ||
          (processedText.Commands.length == 1 &&
            processedText.Commands[0].core == "rawtext")
        ) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ index: 5, errorid: 3, message: "successful" })
          );
        } else {
          if (query.webp ==true) {
            const webp_il = await parseBodyAndChangeToWebP(requestData);
            res.writeHead(200, {
              "Content-Type": "application/json",
            });
            res.end(JSON.stringify({ index: 1 ,errorid :4 ,page_il: processedText, webp_il }));
          } else {
            const webp_il = await parseBodyAndChangeToWebP(requestData);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ page_il: processedText, webp_il ,index: 1 ,errorid :4}));
          }
        }
      } catch (error) {
        console.log(error);
        if (error instanceof CustomError) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              errorid: 1,
              message: "validation Error while processing text",
              error: error.message,
            })
          );
        } else {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              errorid: 2,
              success: false,
              message: "Error processing text",
              error: error,
            })
          );
          console.log(error);
        }
      }
    });
  } else if (req.method === "POST" && req.url === "/api/find-basis-tag") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      try {
        const data = JSON.parse(body);

        const parsedData = await ParseToRawHtml.findBasisTags(data);
        const jsonResponse = {
          message: "successful",
          array: parsedData,
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(jsonResponse));
      } catch (error) {
        if (error instanceof CustomError) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              errorid: 4,
              message: "validation Error while processing JSON",
              error: error.message,
            })
          );
        } else {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              errorid: 5,
              success: false,
              message: "Error processing text",
              error: error,
            })
          );
          console.log(error);
        }
      }
    });
  } else if (req.method === "POST" && req.url === "/api/raw-text") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      try {
        const data = JSON.parse(body);

        const parsedData = await ParseToRawHtml.convertToHtml(data);
        const jsonResponse = {
          message: "successful",
          html: parsedData,
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(jsonResponse));
      } catch (error) {
        if (error instanceof CustomError) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              errorid: 4,
              message: "validation Error while processing JSON",
              error: error.message,
            })
          );
        } else {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              errorid: 5,
              success: false,
              message: "Error processing text",
              error: error,
            })
          );
          console.log(error);
        }
      }
    });
  }else if (req.method === "POST" && req.url === "/api/commandfinder") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      try {
        const data = JSON.parse(body);

        const parsedData = await ParseToRawHtml.FindCommandByCore(data,query.core);
        const jsonResponse = {
          message: "successful",
          html: parsedData,
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(jsonResponse));
      } catch (error) {
        if (error instanceof CustomError) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              errorid: 4,
              message: "validation Error while processing JSON",
              error: error.message,
            })
          );
        } else {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              errorid: 5,
              success: false,
              message: "Error processing text",
              error: error,
            })
          );
          console.log(error);
        }
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "not-found", errorid: "6" }));
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
