let test = require("tape");
let polygon = require("../polygon.js");

test("translate", function(t){

  t.plan(6);
  let poly = polygon.polygon(polygon.coordinates(3,1,0));
  poly.translate({x: 1, y: 1});
  t.equal(poly.vertices[0].x, 1);
  t.equal(poly.vertices[0].y, 1);

  t.equal(poly.vertices[1].x, 2);
  t.equal(poly.vertices[1].y, 1);

  t.equal(Math.round(1000*poly.vertices[2].x)/1000, 1.5);
  t.equal(Math.round(1000*poly.vertices[2].y)/1000, 1.866);
});

test("rotation around centre", function(t){
  t.plan(6);
  let poly = polygon.polygon(polygon.coordinates(3));
  poly.rotate(60);

  t.equal(Math.round(1000*poly.vertices[0].x)/1000, 0.5);
  t.equal(Math.round(1000*poly.vertices[0].y)/1000, -0.289);

  t.equal(Math.round(1000*poly.vertices[1].x)/1000, 1);
  t.equal(Math.round(1000*poly.vertices[1].y)/1000, 0.577);

  t.equal(Math.round(1000*poly.vertices[2].x)/1000, 0);
  t.equal(Math.round(1000*poly.vertices[2].y)/1000, 0.577);
});

test("rotation around given point", function(t){
  t.plan(6);
  let poly = polygon.polygon(polygon.coordinates(3));
  poly.rotate(60, {x: 0, y: 0});

  t.equal(poly.vertices[0].x, 0);
  t.equal(poly.vertices[0].y, 0);

  t.equal(Math.round(1000*poly.vertices[1].x)/1000, 0.5);
  t.equal(Math.round(1000*poly.vertices[1].y)/1000, 0.866);

  t.equal(Math.round(1000*poly.vertices[2].x)/1000, -0.5);
  t.equal(Math.round(1000*poly.vertices[2].y)/1000, 0.866);
});

test("scaling from centre", function(t){
  t.plan(6);
  let poly = polygon.polygon(polygon.coordinates(3));
  poly.scale(2);

  t.equal(Math.round(1000*poly.vertices[0].x)/1000, -0.5);
  t.equal(Math.round(1000*poly.vertices[0].y)/1000, -0.289);

  t.equal(Math.round(1000*poly.vertices[1].x)/1000, 1.5);
  t.equal(Math.round(1000*poly.vertices[1].y)/1000, -0.289);

  t.equal(Math.round(1000*poly.vertices[2].x)/1000, 0.5);
  t.equal(Math.round(1000*poly.vertices[2].y)/1000, 1.443);
});

test("scaling from given point", function(t){
  t.plan(6);
  let poly = polygon.polygon(polygon.coordinates(3));
  poly.scale(2, {x: 0, y: 0});

  t.equal(poly.vertices[0].x, 0);
  t.equal(poly.vertices[0].x, 0);

  t.equal(Math.round(1000*poly.vertices[1].x)/1000, 2);
  t.equal(Math.round(1000*poly.vertices[1].y)/1000, 0);

  t.equal(Math.round(1000*poly.vertices[2].x)/1000, 1);
  t.equal(Math.round(1000*poly.vertices[2].y)/1000, 1.732);
});

test("centroid triangle", function(t){
  t.plan(2);
  let poly = polygon.polygon(polygon.coordinates(3));
  let centroid = poly.centroid();
  t.equal(Math.round(1000*centroid.x)/1000, 0.5);
  t.equal(Math.round(1000*centroid.y)/1000, 0.289);
});

test("area triangle", function(t){
  t.plan(1);
  let poly = polygon.polygon(polygon.coordinates(3));
  let area = poly.area();
  t.equal(Math.round(1000*area)/1000, 0.433);
});
