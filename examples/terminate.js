const vm = new VM();
// spawn actor, prints "hello world" endlessly
const pid = vm.spawn(['print', 'hello world']);

//terminate pid after 3 seconds
setTimeout(() => {
  VM.terminate(pid);
}, 3000);
