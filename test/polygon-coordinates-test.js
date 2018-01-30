let test = require('tape');
let polygon = require('../polygon.js');

// test triangle with side length one
test('triangle test', function(t){
  t.plan(6);

  let coords = polygon.coordinates(3, 1, 0);
  t.equal(Math.round(1000*coords[0].x)/1000, 0);
  t.equal(Math.round(1000*coords[0].y)/1000, 0);

  t.equal(Math.round(1000*coords[1].x)/1000, 1);
  t.equal(Math.round(1000*coords[1].y)/1000, 0);

  t.equal(Math.round(1000*coords[2].x)/1000, 0.5);
  t.equal(Math.round(1000*coords[2].y)/1000, 0.866);
});

test('downward rotated triangle', function(t){
  t.plan(6);

  let coords = polygon.coordinates(3, 1, -60);
  t.equal(Math.round(1000*coords[0].x)/1000, 0);
  t.equal(Math.round(1000*coords[0].y)/1000, 0.866);

  t.equal(Math.round(1000*coords[1].x)/1000, 0.5);
  t.equal(Math.round(1000*coords[1].y)/1000, 0);

  t.equal(Math.round(1000*coords[2].x)/1000, 1);
  t.equal(Math.round(1000*coords[2].y)/1000, 0.866);
});

test('rotated pentagon', function(t){
  t.plan(10);

  let coords = polygon.coordinates(5, 1, 36);

  t.equal(Math.round(1000*coords[0].x)/1000, 0.809);
  t.equal(Math.round(1000*coords[0].y)/1000, 0);

  t.equal(Math.round(1000*coords[1].x)/1000, 1.618);
  t.equal(Math.round(1000*coords[1].y)/1000, 0.588);

  t.equal(Math.round(1000*coords[2].x)/1000, 1.309);
  t.equal(Math.round(1000*coords[2].y)/1000, 1.539);

  t.equal(Math.round(1000*coords[3].x)/1000, 0.309);
  t.equal(Math.round(1000*coords[3].y)/1000, 1.539);

  t.equal(Math.round(1000*coords[4].x)/1000, 0);
  t.equal(Math.round(1000*coords[4].y)/1000, 0.588);
});

test('invalidSidesInput', function(t){
  t.plan(6);
  let coords = polygon.coordinates(2, 1, 0);

  t.equal(Math.round(1000*coords[0].x)/1000, 0);
  t.equal(Math.round(1000*coords[0].y)/1000, 0);

  t.equal(Math.round(1000*coords[1].x)/1000, 1);
  t.equal(Math.round(1000*coords[1].y)/1000, 0);

  t.equal(Math.round(1000*coords[2].x)/1000, 0.5);
  t.equal(Math.round(1000*coords[2].y)/1000, 0.866);
});

test('invalidLengthInput', function(t){
  t.plan(6);
  let coords = polygon.coordinates(3, 0, 0);

  t.equal(Math.round(1000*coords[0].x)/1000, 0);
  t.equal(Math.round(1000*coords[0].y)/1000, 0);

  t.equal(Math.round(1000*coords[1].x)/1000, 1);
  t.equal(Math.round(1000*coords[1].y)/1000, 0);

  t.equal(Math.round(1000*coords[2].x)/1000, 0.5);
  t.equal(Math.round(1000*coords[2].y)/1000, 0.866);
});

test('defaultParams', function(t){
  t.plan(6);
  let coords = polygon.coordinates(3);

  t.equal(Math.round(1000*coords[0].x)/1000, 0);
  t.equal(Math.round(1000*coords[0].y)/1000, 0);

  t.equal(Math.round(1000*coords[1].x)/1000, 1);
  t.equal(Math.round(1000*coords[1].y)/1000, 0);

  t.equal(Math.round(1000*coords[2].x)/1000, 0.5);
  t.equal(Math.round(1000*coords[2].y)/1000, 0.866);
});
