/**
 * Script to generate the types definitions of the third party libraries.
 */
const fs = require('fs');
const spawn = require('child_process').spawn;
const { Observable } = require('rxjs');

const fromChildProcess = (command, args) => (
  Observable.create((observer) => {
    const ls = spawn(command, args);
    console.log(`Runnig: ${command} ${args.join(' ')}`);

    ls.stdout.on('data', (data) => {
      observer.next(data);
    });

    ls.stderr.on('data', (data) => {
      observer.error(data);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      observer.next(`child process exited with code ${code}`);
      observer.complete();
    });
  })
);

// Create Types folder.
fs.mkdirSync('types');

const libraries = ['good'].map((library) => {
  return fromChildProcess('dts-gen', ['-m', library, '-d', library]);
});

Observable.forkJoin(libraries)
  .concatMap(() => {
    return fromChildProcess('mv', ['-f', './types/*', './node_modules/@types/']);
  })
  .subscribe(() => {
    console.log('done');
    // Remove types folder.
    fs.rmdirSync('types');
  });
