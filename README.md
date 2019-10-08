[![npm version](https://badge.fury.io/js/polygon-generator.svg)](https://badge.fury.io/js/polygon-generator)
[![Run Status](https://api.shippable.com/projects/5a6f3685d953dd0700d5a112/badge?branch=master)](https://app.shippable.com/github/Eddykasp/polygon-generator)
[![Coverage Badge](https://api.shippable.com/projects/5a6f3685d953dd0700d5a112/coverageBadge?branch=master)](https://app.shippable.com/github/Eddykasp/polygon-generator)
[![Known Vulnerabilities](https://snyk.io/test/github/Eddykasp/polygon-generator/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Eddykasp/polygon-generator?targetFile=package.json)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/56c7b12b0d284d619c5195419866d783)](https://www.codacy.com/app/Eddykasp/polygon-generator?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Eddykasp/polygon-generator&amp;utm_campaign=Badge_Grade)
# polygon-generator

## API
```javascript
polygon = require('polygon-generator');
```
### coordinates method
Calculate coordinates of an equilateral polygon. The returned object is an array of the following structure:
```javascript
[{x: 0, y: 0}, {x: 1, y: 0}, {x: 0.5, y: 0.866}]
```
The vectors form an anti-clockwise path with the last vector connecting back to the first one.
All coordinates will be in the first quadrant of a cartesian coordinate system meaning there will be no negative numbers.
This method takes three parameters:
- sides: the number of sides of the polygon (minimum is 3)
- sideLength: the length of each side (default is 1)
- startingAngle: determines the angle of the first edge, rotates anti-clockwise (default is 0, horizontal line)
```javascript
sides = 3;
sideLength = 1;
startingAngle = 10;
vertices = polygon.coordinates(sides, sideLength, startingAngle);
```

### polygon wrapper
The polygon object provides translation, rotation and scaling methods for polygons. To create one simply pass in an array of vectors representing the vertices.
```javascript
poly = polygon.polygon([{x: 0, y: 0}, {x: 1, y: 0}, {x: 0.5, y: 0.866}]);
```
You can also directly pass in the results of the coordinates method.
```javascript
poly = polygon.polygon(polygon.coordinates(5,2,20));
```
#### translate
```javascript
poly.translate(vector);
```
Translate shifts a polygon along a vector. The vector needs to be an object with a field `x` and `y`, which should both be numbers.

#### rotate
```javascript
poly.rotate(angle, point);
```
Rotate a polygon anti-clockwise around a given point `{x: ?, y: ?}` by the specified angle. If no point is specified then the centroid of the polygon will be used.

#### scale
```javascript
poly.rotate(factor, point);
```
Scale a polygon by a certain factor with regard to a given point. If no point is specified then the centroid of the polygon will be used.

#### area
```javascript
poly.area();
```
Returns the area of the polygon.

#### centroid
```javascript
poly.centroid();
```
Returns the coordinates of the centroid `{x: Cx, y: Cy}`.

## Further Links
[Contributing](https://github.com/Eddykasp/polygon-generator/blob/master/CONTRIBUTING.md)

[License](https://github.com/Eddykasp/polygon-generator/blob/master/LICENSE)
