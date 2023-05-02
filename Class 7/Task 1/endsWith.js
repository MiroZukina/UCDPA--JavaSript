function endsWith(str, suffix) {
  return suffix === str.substring(str.length - suffix.length);
}
const str = "Hello, world!";
console.log(endsWith(str, "world!"));
