const Developer = require('../../models/developer.js');

describe('Developer', () => {
  let testdev1;
  let testdev2;
  let testdev3;

  const data1 = [
    { "language": "Ruby" },
    { "language": "Ruby" },
    { "language": "JavaScript" },
  ]
  const data2 = [
    { "language": "Python" },
    { "language": "Ruby" },
    { "language": "Python" },
  ]
  const data3 = [
    { "language": "JavaScript" },
    { "language": "JavaScript" },
    { "language": "JavaScript" },
  ]

  beforeEach(() => {
    testdev1 = new Developer(data1);
    testdev2 = new Developer(data2);
    testdev3 = new Developer(data3);
  });

  test('Model can determine users most used language given data set 1', () => {
    expect(testdev1.favouriteLanguage()).toEqual('Ruby');
  });
  test('Model can determine users most used language given data set 2', () => {
    expect(testdev2.favouriteLanguage()).toEqual('Python');
  });
  test('Model can determine users most used language given data set 3', () => {
    expect(testdev3.favouriteLanguage()).toEqual('Javascript');
  });
});
