const config = require('../../nightwatch.conf.js');

module.exports = {
  'Github API query - Homepage': function(browser) {
    browser
      .url('http://localhost:3000/')
      .assert.urlContains('/')
      .assert.title('Github API')
      .assert.containsText('body', 'Hello world!!!')
      .end();
  },
}
