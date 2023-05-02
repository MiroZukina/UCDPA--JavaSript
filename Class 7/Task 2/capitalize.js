function capitalize(str){
if(str.length === 0 ){
 return str;
} 
else {
 const first = str.charAt(0).toUpperCase();
 const rest = str.slice(1).toLowerCase();
 return first + rest;
}}
console.log(capitalize("BOOLEAN")); 
console.log(capitalize("boolean"));

