// Java : Exception
// JavaScript: Error

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {
  //
}

// const fileName = "file";
const fileName = "not exist!";
function run() {
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log("caught!!");
    return;
  } finally {
    console.log("fileName");
    closeFile(fileName);
  }
}

run();

console.log("!!!");
