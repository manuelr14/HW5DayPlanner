 
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
  beforeTime = moment('20:34:00', format);
  afterTime = moment('22:34:00', format);

if (time.isBetween(beforeTime, afterTime)) {

  console.log('is between')
  console.log(time);

} else {

  console.log('is not between')
  console.log(time);

}
