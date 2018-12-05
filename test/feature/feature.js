const config = require('../../nightwatch.conf.js');

module.exports = {
  'Github API query - Homepage': function(browser) {
    browser
      .url('http://localhost:3000/')
      .assert.urlContains('/')
      .assert.title('Github API')
      .assert.containsText('#heading', 'Developer Favourite Language')
      .assert.containsText('.description', 'This is a small app')
      .assert.containsText('body', 'To start press the button below')
      .assert.visible('button[name=query]')
      .end();
  },
}
