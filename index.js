const github = require("@actions/github");
const core = require("npm");

async function run() {
    return "Ayoo this works!";
}

run()
.then(
    (response) => { console.log(`Finished running: ${response}`); },
    (error) => { 
        console.log(`#ERROR# ${error}`);
        process.exit(1); 
    }
);