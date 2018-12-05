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
  'Github API query - Query Page': function(browser) {
    browser
      .url('http://localhost:3000/')
      .click('button[name=query]')
      .assert.urlContains('query')
      .assert.title('Github API: Query')
      .assert.containsText('body', 'Please enter a valid username')
      .assert.visible('input[name=username]')
      .assert.visible('input[name=submit]')
      .end();
  },
}
