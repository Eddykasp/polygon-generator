let test = require('tape');
let polygon = require('../polygon.js');

test('transform', function(t){

  t.plan(6);
  let poly = polygon.polygon(polygon.coordinates(3,1,0));
  poly.transform({x: 1, y: 1});
  t.equal(poly.vertices[0].x, 1);
  t.equal(poly.vertices[0].y, 1);

  t.equal(poly.vertices[1].x, 2);
  t.equal(poly.vertices[1].y, 1);

  t.equal(Math.round(1000*poly.vertices[2].x)/1000, 1.5);
  t.equal(Math.round(1000*poly.vertices[2].y)/1000, 1.866);
});

test('rotation around centre', function(t){
  t.plan(1);
  t.fail('Not implemented');
});

test('rotation around given point', function(t){
  t.plan(1);
  t.fail('Not implemented');
});

test('scaling from centre', function(t){
  t.plan(1);
  t.fail('Not implemented');
});

test('scaling from given point', function(t){
  t.plan(1);
  t.fail('Not implemented');
});

test('centroid triangle', function(t){
  t.plan(1);
  t.fail('Not implemented');
});

test('area triangle', function(t){
  t.plan(1);
  let poly = polygon.polygon(polygon.coordinates(3));
  let area = poly.area();
  t.equal(Math.round(1000*area)/1000, 0.433);
});
