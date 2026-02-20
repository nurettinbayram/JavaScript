import { readFileSync, writeFileSync } from "fs";

const csv = readFileSync("words_1000_2000.csv", "utf8");

const lines = csv.split(/\r?\n/).filter((line) => line.trim() !== "");

const headers = lines[0].split(",").map((h) => h.trim());

const result = lines.slice(1).map((line) => {
  const values = line.split(",").map((v) => v.trim());

  return {
    [headers[0]]: values[0],
    [headers[1]]: values[1],
  };
});

writeFileSync("words_1000_2000.json", JSON.stringify(result, null, 2));

console.log("CSV → JSON temiz şekilde dönüştürüldü ✅");
