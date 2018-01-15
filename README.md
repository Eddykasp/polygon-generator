# polygon-generator
```
polygon = require('polygon-generator');
```
## coordinates method
This method takes three parameters:
- sides: the number of sides of the polygon (minimum is 3)
- sideLength: the length of each side (default is 1)
- startingAngle: determines the angle of the first edge, rotates anti-clockwise (default is 0 horizontal line)
```
sides = 3;
sideLength = 1;
startingAngle = 10;
vertices = polygon.coordinates(sides, sideLength, startingAngle);
```
