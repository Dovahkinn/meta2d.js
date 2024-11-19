import { Meta2d } from '@meta2d/core';

type Meta2DEnv = {
  [key: string]: any
}

declare global {
  var meta2d: Meta2d;
  var C2S: any;
  var __meta2d_env__: Meta2DEnv;
}
