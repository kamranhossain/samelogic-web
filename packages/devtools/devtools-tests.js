// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by devtools.js.
import { name as packageName } from "meteor/devtools";

// Write your tests here!
// Here is an example.
Tinytest.add('devtools - example', function (test) {
  test.equal(packageName, "devtools");
});
