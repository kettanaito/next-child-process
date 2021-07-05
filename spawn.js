const { spawn } = require('child_process')

async function test() {
  const child = spawn('yarn', ['start'], {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
  })

  // Send the message to the child process.
  child.send('hello')
}

test()
