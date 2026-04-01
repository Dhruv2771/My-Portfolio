const { execSync } = require('child_process');
try {
    const result = execSync('npx netlify status --json', { encoding: 'utf-8' });
    const data = JSON.parse(result);
    console.log(data.siteData.url);
} catch (e) {
    console.error(e.message);
}
