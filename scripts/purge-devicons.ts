import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { glob } from 'glob';
import subsetFont from 'subset-font';

if (!process.argv[2]) {
	console.error('Usage: purge-devicons.ts <build-path>');
	process.exit(1);
}
const buildPath = process.argv[2];

function getFontFormat(ext: string) {
	switch (ext) {
		case '.woff':
			return 'woff';
		case '.woff2':
			return 'woff2';
		case '.ttf':
			return 'truetype';
		default:
			return undefined;
	}
}

const [contentFiles, fontFiles] = await Promise.all([
	glob(`${buildPath}/**/*.css`),
	glob(`${buildPath}/**/devicon.*.{woff,woff2,ttf}`)
]);

// Should match: .devicon-x-x:before{content:"x"}
const devIconCssBlockRegex = /\.devicon-([a-z0-9+-]+):before\s*\{\s*content:\s*"(.)";?\s*}/g;
const usedCharacters = new Set<string>();

for (const filePath of contentFiles) {
	console.log(`Scanning content file: ${filePath}`);
	const content = await readFile(filePath, 'utf-8');
	let match: RegExpExecArray | null;

	while ((match = devIconCssBlockRegex.exec(content)) !== null) {
		usedCharacters.add(match[2]);
	}
}

console.log(`Found ${usedCharacters.size} used devicon characters.`);
const characterString = Array.from(usedCharacters).join('');

// Process all font files with subset-font to retain only used characters
const fileMappings: [string, string][] = [];
for (const fontPath of fontFiles) {
	console.log(`Processing font file: ${fontPath}`);

	const ext = path.extname(fontPath).toLowerCase();
	const fontBuffer = await readFile(fontPath);

	const subsettedFont = await subsetFont(fontBuffer, characterString, {
		targetFormat: getFontFormat(ext)
	});

	const hash = createHash('md5').update(subsettedFont).digest('hex').slice(0, 8);
	await writeFile(path.join(path.dirname(fontPath), `devicon.${hash}${ext}`), subsettedFont);
	fileMappings.push([path.basename(fontPath), `devicon.${hash}${ext}`]);
}

// Update content files to reference new subsetted font files
for (const filePath of contentFiles) {
	console.log(`Updating content file: ${filePath}`);
	let content = await readFile(filePath, 'utf-8');
	for (const [originalFileName, newFileName] of fileMappings) {
		content = content.replaceAll(originalFileName, newFileName);
	}

	await writeFile(filePath, content);
}

console.log('Devicon font subsetting complete.');
