const chai = require('chai');
const sinon = require('sinon');
chai.use(require('sinon-chai'));
const expect = chai.expect;

const routes = require('../routes');

describe('routes', function() {
  describe('cow', function() {
    it('speaks', function() {
      const req = {
        query: {
          mode: 'speak',
          thought: 'Hello campjs vii!',
        },
      };
      const res = {
        send: sinon.stub(),
      };
      routes.cow(req, res);
      expect(res.send).to.have.been.calledWith(` ___________________
< Hello campjs vii! >
 -------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`);
    });
    it('thinks', function() {
      const req = {
        query: {
          mode: 'think',
          thought: 'Hello campjs vii!',
        },
      };
      const res = {
        send: sinon.stub(),
      };
      routes.cow(req, res);
      expect(res.send).to.have.been.calledWith(` ___________________
( Hello campjs vii! )
 -------------------
        o   ^__^
         o  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`);
    });
  });
});
