declare const danger: any;
declare const markdown: any;
declare const message: any;

import * as fs from "fs"
import * as path from "path"


export default function (): void {
	// Define the path to your Markdown file
	// const filePath = 'mergeProcess.md';

	// const filePath = path.join(__dirname, "mergeProcess.md")

	// Read the contents of the Markdown file
	// const fs = require('fs');
	const markdownContent = fs.readFileSync('mergeProcess.md', 'utf-8');

	// Display the Markdown content to the user
	markdown('\n***\n');
	markdown(markdownContent);
}
