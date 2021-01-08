const socket = io(
  {transports: ['websocket']},
  { forceNew: true }
  );
socket.on('reconnect_attempt', () => {
  socket.io.opts.transports = ['polling', 'websocket'];
});
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(220);
}
