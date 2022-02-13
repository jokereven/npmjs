import ejs from 'ejs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export default config => {
	const __dirname = fileURLToPath(import.meta.url);
	const templateSnippet = fs.readFileSync(
		path.resolve(__dirname, '../../template/.gitignore.ejs')
	);

	const snippet = ejs.render(templateSnippet.toString(), {
		packageName: config.packageName,
	});

	return snippet;
};
