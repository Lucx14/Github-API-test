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
  'Github API query - Answer Page': function(browser) {
    browser
      .url('http://localhost:3000/')
      .click('button[name=query]')
      .setValue('input[name=username]', 'Lucx14')
      .click('input[name=submit]')
      .assert.urlContains('answer')
      .assert.title('Github API: Answer')
      .assert.containsText('h4', 'The developers favourite language is probably Ruby')
      .assert.visible('button[name=query')
      .assert.visible('button[name=home')
      .end();
  },
  'Github API query - Navigation': function(browser) {
    browser
      .url('http://localhost:3000/')
      .click('button[name=query]')
      .setValue('input[name=username]', 'Lucx14')
      .click('input[name=submit]')
      .assert.urlContains('answer')
      .click('button[name=query')
      .assert.urlContains('query')
      .setValue('input[name=username]', 'Lucx14')
      .click('input[name=submit]')
      .assert.urlContains('answer')
      .click('button[name=home')
      .assert.urlContains('/')
      .end();
  },

}
