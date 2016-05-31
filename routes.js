const cowsay = require('cowsay');

exports.cow = function speak(req, res) {
  if (req.query.mode === 'speak') {
    res.send(cowsay.say({
      text: req.query.thought
    }));
  } else if (req.query.mode === 'think') {
    res.send(cowsay.think({
      text: req.query.thought
    }));
  } else {
    throw new Error('Unsupported mode');
  }
};
