declare const results: any;
declare const message: any;
declare const markdown: any;

import prCommitsTooManyCommits from './prCommitsTooManyCommits';
import prDescription from './prDescription';

async function runDangerRules() {
	prCommitsTooManyCommits();
	prDescription();

	// Add success log if no issues
	const dangerFails: number = results.fails.length;
	const dangerWarns: number = results.warnings.length;
	const dangerInfos: number = results.messages.length;
	if (!dangerFails && !dangerWarns && !dangerInfos) {
		return message('Good Job! All checks are passing!');
	}
}

runDangerRules();

// Add retry link
const serverUrl = process.env.GITHUB_SERVER_URL;
const repoName = process.env.GITHUB_REPOSITORY;
const runId = process.env.GITHUB_RUN_ID;

const retryLink = `${serverUrl}/${repoName}/actions/runs/${runId}`;
console.log(`The URL to this action is: ${retryLink}`);
markdown(
    `***\n#### :repeat: You can enforce automatic PR checks by retrying the [DangerJS action](${retryLink})\n***`
);
