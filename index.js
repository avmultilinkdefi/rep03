// To read/write JSON files
// We will create random Date and Time and write them into the JSON files
const jsonfile = require("jsonfile");

// To parse, manipulate the Date and Time
// We will go back to the time and make commits
const moment = require("moment");

// To run git commands in node.js applications
const simpleGit = require("simple-git");

// To generate random data
// We will generate random int which will be our Date and Time
const random = require("random");

// Name of the file, where we will store the modified Date and Time
const FILE_PATH = "./data.json";

// Function to makeCommit 'n' number of times
// We are calling the function recursively until the 'n' becomes 0
const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();         // Base case
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const DATE = moment()
    .subtract(2, "y")       // We are going two years back from today's date
    .add(1, "d")            // Then adding 1 day to it
    .add(x, "w")            // This will be the x-Axis in the contribution graph, which is adding week(s)
    .add(y, "d")            // This will be the y-Axis in the contribution graph, which is adding day(s)
    .format();
  const data = {
    date: DATE,
  };
  console.log(DATE);
  jsonfile.writeFile(FILE_PATH, data, () => {         // We are writing those dates into our file
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, 
              makeCommit.bind(this, --n));            // SimpleGit takes a callback function
                                                     // We need to make sure that the file is written before start creating commit or pushing
  });
};

makeCommit(120);
