const github = require("@actions/github");
const core = require("@actions/core");

async function run() {
    const myToken = core.getInput("action-token");
    const octokit = new github.GitHub(myToken);
    const context = github.context;

    return "Ayoo this works!";

    var info = {
        auto_merge: false,
        description: "This is a test of a deployment", 
        environment: "production",
        owner: context.payload.owner,
        ref: context.payload.pull_request.ref,
        repo: context.payload.repo
    };

    return await octokit.repos.createDeployment(info);
}

run()
.then(
    (response) => { console.log(`Finished running: ${response}`); },
    (error) => { 
        console.log(`#ERROR# ${error}`);
        process.exit(1); 
    }
);