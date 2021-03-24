import dotenv from 'dotenv';
import fs from 'fs';
import { getEnvVar } from '../util/env';

const nodeEnv = getEnvVar('NODE_ENV');
const envFile = `.env/.${nodeEnv}`;

if (fs.existsSync(envFile)) {
  console.debug(`Using ${envFile} file for environment variables`);
  dotenv.config({ path: envFile });
} else {
  console.debug(`Could not find ${envFile} file`);
}
