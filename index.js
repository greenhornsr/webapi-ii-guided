const server = require('./api/server.js');

// once the server is fully configured we can have it "listen" for connections on a particular "port"
  // in this case:  watch for connections on port 4000
// the callback function passed as the second argument will run once when the server starts
server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
