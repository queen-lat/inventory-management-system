// Root entrypoint for deployments that run `node index.js`.
// This delegates to the backend server implementation.
// Keep this tiny file so platforms like Render that call `node index.js`
// will start the Express server located in ./backend/server.js

require("./server");
