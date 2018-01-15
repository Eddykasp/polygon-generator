let test = require('tape');
let polygon = require('../polygon.js');

// test triangle with side length one
test('triangle test', function(t){
  t.plan(6);

  let coords = polygon.coordinates(3, 1, 0);
  t.equal(coords[0].x, 0);
  t.equal(coords[0].y, 0);

  t.equal(coords[1].x, 1);
  t.equal(coords[1].y, 0);

  t.equal(coords[2].x, 0.5);
  t.equal(coords[2].y, 0.866);
});
