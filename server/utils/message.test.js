const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Paul';
    var text = 'Hello world.';
    var message = generateMessage(from, text);

    //request(app)
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});
