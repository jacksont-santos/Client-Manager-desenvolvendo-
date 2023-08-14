const fs = require("fs");
const path = require("path");
require("dotenv").config();
console.log("--------------------------------------------------");
console.log("Loading environment variables ...");
console.log("--------------------------------------------------");

function setEnvironemnt() {
  const environmentsVariables = [];
  for (const [key, value] of Object.entries(process.env)) {
    if (key.includes("myApp_"))
      environmentsVariables.push([key, JSON.stringify(value)]);
  }
  let content = "";
  environmentsVariables.forEach((variable) => {
    content += `\n  ${variable[0]}: ${variable[1]},`;
  });
  return `export const environment = {${content}\n}`;
};

(() => {
  const dir = path.resolve("src", "environments");
  const target = "environment.ts";
  fs.writeFile(path.join(dir, target), setEnvironemnt(), (err) => {
    if (err) throw err;
    console.log(">> local environment variables loaded ...");
  });
})();
