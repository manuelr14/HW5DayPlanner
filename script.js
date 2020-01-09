 
// console.log(today)
// $("#currentDay").text(today);

function setTime() {
   setInterval(function() {
        var today=moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(today);
    }, 1000);
  }

setTime();

var format = 'hh:mm:ss'

// var time = moment() gives you current time. no format required.
var time = moment();
  time8am = moment('08:00:00', format);
  time9am = moment('09:00:00', format);
  time10am = moment('10:00:00', format);
  time11am = moment('11:00:00', format);
  time12pm = moment('12:00:00', format);
  time1pm = moment('13:00:00', format);
  time2pm = moment('14:00:00', format);
  time3pm = moment('15:00:00', format);
  time4pm = moment('16:00:00', format);
  time5pm = moment('17:00:00', format);

if (time.isBetween(time8am, time9am)) {

  console.log('is between')
  console.log(time);

} else if  (time.isBetween(time9am, time10am)) {
  
    console.log('is between')
    console.log(time);

} else if (time.isBetween(time10am, time11am)) {

 console.log('is between')
 console.log(time);

} else if (time.isBetween(time11am, time12pm)) {

 console.log('is between 12am 1pm')
 console.log(time);

} else if (time.isBetween(time12pm, time1pm)) {

    console.log('is between 12am 1pm')
    console.log(time);
   

} else if (time.isBetween(time1pm, time2pm)) {

 console.log('is between 1pm 2pm')
 console.log(time);

} else if (time.isBetween(time2pm, time3pm)) {

 console.log('is between 2pm 3pm')
 console.log(time);

} else if  (time.isBetween(time3pm, time4pm)) {

 console.log('is between 3pm 4pm')
 console.log(time);

} else if (time.isBetween(time4pm, time5pm)) {

 console.log('is between 4 pm 5 pm')
 console.log(time);




}
else {


    console.log('is not between')
    console.log(time);
}