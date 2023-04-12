declare const danger: any;
declare const warn: any;

const pr = danger.github.pr;
const prDescription = pr.body;
const prTitle = pr.title;

if (prDescription.length === 0) {
	warn('Please provide a description for this PR.');
}

if (prTitle.length > 50) {
	warn('Please keep the PR title under 50 characters.');
}
