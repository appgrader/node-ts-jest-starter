import './init';
import { isProd, someVar } from './config';

function init() {
  console.log({ someVar, isProd: isProd() });
}

init();
