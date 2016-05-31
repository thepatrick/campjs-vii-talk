const cowsay = require('cowsay');

exports.cow = function speak(req, res) {
  if (req.query.mode === 'speak') {
    res.send(cowsay.speak({
      text: req.query.thought
    }));
  } else {
    throw new Error('Unsupported mode');
  }
};
