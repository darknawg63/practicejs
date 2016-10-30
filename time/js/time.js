var date = new Date();

var daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = date.getDay();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

console.log('Today is: ' + daylist[day] + '.');
console.log('Current time is : 4 PM : 50 : 22');
