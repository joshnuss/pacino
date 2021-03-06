const node0 = new VM(0);
const node1 = new VM(1);

// spawn 2 actors
const pid1 = node0.spawn(['print', 'hello']);
const pid2 = node1.spawn(['print', 'world']);

// link them together
VM.link(pid1, pid2);

// after 3 seconds, terminate one actor, which causes other (linked actor) to terminate as well
setTimeout(() => VM.terminate(pid2), 3000);
