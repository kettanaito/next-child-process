# NextJS in a child process

## Reproduction steps

```sh
$ yarn install
$ yarn build
# Spawn the built NextJS app in a child process.
$ node spawn.js
```

## Expected behavior

The spawned process must print the "hello" message from the parent process into stdout. The printed message must be visible in the parent process since the child's stdio is set to "inherit".
