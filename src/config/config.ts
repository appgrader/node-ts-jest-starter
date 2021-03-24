import { getEnvVar, isProd, isDebug, isStaging } from '../util/env';
const someVar = getEnvVar('SAMPLE_ENV');
export { isProd, isStaging, isDebug, someVar };
