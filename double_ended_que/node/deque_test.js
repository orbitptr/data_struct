var deque_module = require('./deque.js');
var dq = new deque_module();
dq.readFront();
dq.pushBack(23);
dq.pushBack(34);
dq.pushBack(38);
dq.readFront();
dq.readBack();
