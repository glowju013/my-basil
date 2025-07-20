require('dotenv').config();
const { execSync } = require('child_process');

const name = process.env.GH_NAME;
const email = process.env.GH_EMAIL;
const token = process.env.GH_TOKEN;

const repo = 'https://${token}@github.com/glowju013/my-basil.git';

const cmd = `npx gh-pages -d build -u "${name} <${email}>" --repo ${repo}`;

try {
  console.log("🚀 Deploying to GitHub Pages...");
  execSync(cmd, { stdio: 'inherit' });
  console.log("✅ 배포 성공!");
} catch (error) {
  console.error("🚨 배포 실패:", error.message);
  process.exit(1);
}