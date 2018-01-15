let test = require('tape');
let polygon = require('../polygon.js');

// test triangle with side length one
test('triangle test', function(t){
  t.plan(6);

  let coords = polygon.coordinates(3, 1, 0);
  t.equal(Math.round(coords[0].x)/1000, 0);
  t.equal(Math.round(coords[0].y)/1000, 0);

  t.equal(Math.round(coords[1].x)/1000, 1);
  t.equal(Math.round(coords[1].y)/1000, 0);

  t.equal(Math.round(coords[2].x)/1000, 0.5);
  t.equal(Math.round(coords[2].y)/1000, 0.866);
});

test('downward rotated triangle', function(t){
  t.plan(6);

  let coords = polygon.coordinates(3, 1, -60);
  t.equal(Math.round(coords[0].x)/1000, 0);
  t.equal(Math.round(coords[0].y)/1000, 0);

  t.equal(Math.round(coords[1].x)/1000, 0.5);
  t.equal(Math.round(coords[1].y)/1000, -0.866);

  t.equal(Math.round(coords[2].x)/1000, 1);
  t.equal(Math.round(1000*coords[2].y)/1000, 0);
});
