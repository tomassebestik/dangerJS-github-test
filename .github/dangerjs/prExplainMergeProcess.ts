declare const danger: any;
declare const markdown: any;
declare const message: any;

export default function (): void {
	// Define the path to your Markdown file
	const filePath = 'mergeProcess.md';

	// Read the contents of the Markdown file
	const fs = require('fs');
	const markdownContent = fs.readFileSync(filePath, 'utf-8');

	// Display the Markdown content to the user
	message(markdownContent);
}
