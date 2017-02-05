#! /usr/bin/env node

'use strict';

const childProcess = require('child_process');
const electron = require('electron');
const join = require('path').join;
const argv = require('minimist')(process.argv.slice(2));
let args = [];
const startpath = join(__dirname, '..');
if (argv.c || argv.capture) {
  const token = argv.token || argv.t;
  const workspaceId = argv.workspace || argv.w;
  if (!token || !workspaceId) {
    console.log('need token and workspaceId to run capture mode.');
    process.exit(1);
  }
  args = args.concat([ 'capturemode', token, workspaceId ]);
  const child = childProcess.spawnSync(electron, [ startpath ].concat(args));
  const output = child.stdout.toString();
  console.log(output);
  if (!(output.match(/success/))) {
    process.exit(1);
  }
} else {
  childProcess.spawn(electron, [ startpath ].concat(args));
}

