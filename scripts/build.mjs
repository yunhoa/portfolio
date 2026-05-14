import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const workerPath = resolve('scripts/build-worker.mjs');
const result = spawnSync(process.execPath, [workerPath], {
  cwd: process.cwd(),
  stdio: 'inherit',
});

if (existsSync(resolve('dist/index.html'))) {
  process.exit(0);
}

process.exit(result.status ?? 1);
