exports.format = function (msgs) {
  const results = {};
  for (const [id, msg] of Object.entries(msgs)) {
    // results[id] = {
    //   string: msg.defaultMessage,
    //   comment: msg.description,
    // };
    results[id] = msg.defaultMessage || msg.description || id;
  }
  return results;
};
