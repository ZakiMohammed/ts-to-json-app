const tsj = require("ts-to-json");
const fs = require("fs");

const config = {
    path: "employee.ts",
    tsconfig: "tsconfig.json",
    type: "*", // Or <type-name> if you want to generate schema for that one type only
    expose: "export",
    jsDoc: "extended",
    topRef: true,
};

const output_path = "output.json";

const schema = tsj.createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 2);
fs.writeFile(output_path, schemaString, (err) => {
    if (err) throw err;
});