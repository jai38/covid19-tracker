var bar = 1;
var foo = {};
var foo = {
  foo: 1,
  bar: 1,
  buzz: ++bar,
};
console.log(foo.buzz + foo.bar + bar);
