
"I/O" refers primarily to interaction with the system's disk and network supported by libuv.

Blocking

Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation 
completes. This happens because the event loop is unable to continue running JavaScript while a blocking operation 
is occurring.


