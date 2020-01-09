 
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

    $("#9am").attr("class","col-lg-9 present")
    $("#10am").attr("class","col-lg-9 future")
    $("#11am").attr("class","col-lg-9 future")
    $("#12pm").attr("class","col-lg-9 future")
    $("#1pm").attr("class","col-lg-9 future")
    $("#2pm").attr("class","col-lg-9 future")
    $("#3pm").attr("class","col-lg-9 future")
    $("#4pm").attr("class","col-lg-9 future")
    $("#5pm").attr("class","col-lg-9 future")
  

  console.log('is between')
  console.log(time);

} else if  (time.isBetween(time9am, time10am)) {
  
    $("#9am").attr("class","col-lg-9 past")
    $("#10am").attr("class","col-lg-9 present")
    $("#11am").attr("class","col-lg-9 future")
    $("#12pm").attr("class","col-lg-9 future")
    $("#1pm").attr("class","col-lg-9 future")
    $("#2pm").attr("class","col-lg-9 future")
    $("#3pm").attr("class","col-lg-9 future")
    $("#4pm").attr("class","col-lg-9 future")
    $("#5pm").attr("class","col-lg-9 future")

    console.log('is between aquiles')
    console.log(time);

} else if (time.isBetween(time10am, time11am)) {


    $("#9am").attr("class","col-lg-9 past")
    $("#10am").attr("class","col-lg-9 past")
    $("#11am").attr("class","col-lg-9 present")
    $("#12pm").attr("class","col-lg-9 future")
    $("#1pm").attr("class","col-lg-9 future")
    $("#2pm").attr("class","col-lg-9 future")
    $("#3pm").attr("class","col-lg-9 future")
    $("#4pm").attr("class","col-lg-9 future")
    $("#5pm").attr("class","col-lg-9 future")
 

 console.log('is between')
 console.log(time);

} else if (time.isBetween(time11am, time12pm)) {

    $("#9am").attr("class","col-lg-9 past")
    $("#10am").attr("class","col-lg-9 past")
    $("#11am").attr("class","col-lg-9 past")
    $("#12pm").attr("class","col-lg-9 present")
    $("#1pm").attr("class","col-lg-9 future")
    $("#2pm").attr("class","col-lg-9 future")
    $("#3pm").attr("class","col-lg-9 future")
    $("#4pm").attr("class","col-lg-9 future")
    $("#5pm").attr("class","col-lg-9 future")

 console.log('is between 12am 1pm')
 console.log(time);

} else if (time.isBetween(time12pm, time1pm)) {

    $("#9am").attr("class","col-lg-9 past")
    $("#10am").attr("class","col-lg-9 past")
    $("#11am").attr("class","col-lg-9 past")
    $("#12pm").attr("class","col-lg-9 past")
    $("#1pm").attr("class","col-lg-9 present")
    $("#2pm").attr("class","col-lg-9 future")
    $("#3pm").attr("class","col-lg-9 future")
    $("#4pm").attr("class","col-lg-9 future")
    $("#5pm").attr("class","col-lg-9 future")


    console.log('is between 12am 1pm')
    console.log(time);
   

} else if (time.isBetween(time1pm, time2pm)) {

    $("#9am").attr("class","col-lg-9 past")
    $("#10am").attr("class","col-lg-9 past")
    $("#11am").attr("class","col-lg-9 past")
    $("#12pm").attr("class","col-lg-9 past")
    $("#1pm").attr("class","col-lg-9 past")
    $("#2pm").attr("class","col-lg-9 present")
    $("#3pm").attr("class","col-lg-9 future")
    $("#4pm").attr("class","col-lg-9 future")
    $("#5pm").attr("class","col-lg-9 future")

 console.log('is between 1pm 2pm')
 console.log(time);

} else if (time.isBetween(time2pm, time3pm)) {

    $("#9am").attr("class","col-lg-9 past")
    $("#10am").attr("class","col-lg-9 past")
    $("#11am").attr("class","col-lg-9 past")
    $("#12pm").attr("class","col-lg-9 past")
    $("#1pm").attr("class","col-lg-9 past")
    $("#2pm").attr("class","col-lg-9 past")
    $("#3pm").attr("class","col-lg-9 present")
    $("#4pm").attr("class","col-lg-9 future")
    $("#5pm").attr("class","col-lg-9 future")


 console.log('is between 2pm 3pm')
 console.log(time);

} else if  (time.isBetween(time3pm, time4pm)) {

    $("#9am").attr("class","col-lg-9 past")
    $("#10am").attr("class","col-lg-9 past")
    $("#11am").attr("class","col-lg-9 past")
    $("#12pm").attr("class","col-lg-9 past")
    $("#1pm").attr("class","col-lg-9 past")
    $("#2pm").attr("class","col-lg-9 past")
    $("#3pm").attr("class","col-lg-9 past")
    $("#4pm").attr("class","col-lg-9 present")
    $("#5pm").attr("class","col-lg-9 future")


 console.log('is between 3pm 4pm')
 console.log(time);

} else if (time.isBetween(time4pm, time5pm)) {

    $("#9am").attr("class","col-lg-9 past")
    $("#10am").attr("class","col-lg-9 past")
    $("#11am").attr("class","col-lg-9 past")
    $("#12pm").attr("class","col-lg-9 past")
    $("#1pm").attr("class","col-lg-9 past")
    $("#2pm").attr("class","col-lg-9 past")
    $("#3pm").attr("class","col-lg-9 past")
    $("#4pm").attr("class","col-lg-9 past")
    $("#5pm").attr("class","col-lg-9 present")
 console.log('is between 4 pm 5 pm')
 console.log(time);




}
else {

    $("#9am").attr("class","col-lg-9 past")
    $("#10am").attr("class","col-lg-9 past")
    $("#11am").attr("class","col-lg-9 past")
    $("#12pm").attr("class","col-lg-9 past")
    $("#1pm").attr("class","col-lg-9 past")
    $("#2pm").attr("class","col-lg-9 past")
    $("#3pm").attr("class","col-lg-9 past")
    $("#4pm").attr("class","col-lg-9 past")
    $("#5pm").attr("class","col-lg-9 past")

    

    console.log('is not between')
    console.log(time);
}