function getMachine(req) {
  var deviceAgent = req.headers["user-agent"] ? req.headers["user-agent"].toLowerCase() : "pc";
  var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
  if (agentID) {
    return "mobile";
  } else {
    return "pc";
  }
}

module.exports = getMachine;