import * as R from 'ramda';

export const getEnvVarOptional = (name: string): string | undefined => {
  return process.env[name];
};

export const getEnvVar = (name: string): string => {
  const value = getEnvVarOptional(name);
  if (undefined === value) {
    throw new Error(`Env var ${name} not defined`);
  }

  return value;
};

export const isProd = (): boolean => getEnvVar('NODE_ENV') === 'live';
export const isStaging = (): boolean => getEnvVar('NODE_ENV') === 'staging';
export const isStagingOrProd = R.anyPass([isProd, isStaging]);
export const isDebug = (): boolean => getEnvVarOptional('DEBUG') !== undefined;
