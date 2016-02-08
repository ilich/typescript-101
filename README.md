# typescript-101
Sample code for Scaling up JavaScript with TypeScript presentation.

## How-to start

1. Install Node.js
2. Install TypeScript<br>
```$ npm install -g typescript```<br>
```$ npm install -g mocha```
3. Check that TypeScript has been installed successfully.<br>
```$ tsc -v```
4. Build Hello World application.<br>
```$ cd hello-world```<br>
```$ tsc -p .```<br>
```$ cd ..```
5. Build Collections example.<br>
```$ cd lists```<br>
```$ npm run compile```<br>
```$ npm test```<br>
```$ cd ..```
6. Build Decorators example.<br>
```$ cd decorators```<br>
```$ tsc -p .```<br>
```$ cd ..```
7. Build Async-Await example.<br>
```$ cd async-await```<br>
```$ tsc -p .```<br>
```$ cd ..```
8. Check that code has been built successfully.<br>
```$ node ./hello-world/out/hello-world.js```<br>
```$ node ./decorators/out/decorators.js```<br>
```$ node ./async-await/out/promise.js```<br>
```$ node ./async-await/out/async.js```<br>
```$ cd lists```<br>
```$ npm test```<br>
```$ cd ..```
