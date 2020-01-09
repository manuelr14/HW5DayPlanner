 
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

    // console.log('is between 9am - 10am')
    // console.log(time);

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
 

 console.log('is between 10am - 11am')
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

 console.log('is between 11am - 12pm')
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


    console.log('is between 12am - 1pm')
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

 console.log('is between 1pm - 2pm')
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


 console.log('is between 2pm - 3pm')
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


 console.log('is between 3pm - 4pm')
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

 console.log('is between 4 pm - 5 pm')
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



$("#9amsave").on("click", function() {

// get the text
var text = $('#9amtext').val();
localStorage.setItem("key9am", text);
console.log(text);
 
localStorage.setItem("key9am", text);
var input9am = localStorage.getItem("key9am");
console.log(input9am);
});

$("#10amsave").on("click", function() {

    
// get the text
var text = $('#10amtext').val();
localStorage.setItem("key10am", text);
console.log(text);
     
 
var input10am = localStorage.getItem("key10am");
console.log(input10am);
    });

$("#11amsave").on("click", function() {

// get the text
var text = $('#11amtext').val();
localStorage.setItem("key11am", text);
console.log(text);
 
localStorage.setItem("key11am", text);
var input11am = localStorage.getItem("key11am");
console.log(input11am);
});

$("#12pmsave").on("click", function() {

    // get the text
    var text = $('#12pmtext').val();
    localStorage.setItem("key12pm", text);
    console.log(text);
     
    localStorage.setItem("key12pm", text);
    var input12pm = localStorage.getItem("key12pm");
    console.log(input12pm);
    });

$("#1pmsave").on("click", function() {

// get the text
var text = $('#1pmtext').val();
localStorage.setItem("key1pm", text);
console.log(text);
 
localStorage.setItem("key1pm", text);
var input1pm = localStorage.getItem("key1pm");
console.log(input1pm);
});

$("#2pmsave").on("click", function() {

    // get the text
    var text = $('#2pmtext').val();
    localStorage.setItem("key2pm", text);
    console.log(text);
     
    localStorage.setItem("key2pm", text);
    var input2pm = localStorage.getItem("key2pm");
    console.log(input2pm);
    });

$("#3pmsave").on("click", function() {

// get the text
var text = $('#3pmtext').val();
localStorage.setItem("key3pm", text);
console.log(text);
 
localStorage.setItem("key3pm", text);
var input3pm = localStorage.getItem("key3pm");
console.log(input3pm);
});   

$("#4pmsave").on("click", function() {

    // get the text
    var text = $('#4pmtext').val();
    localStorage.setItem("key4pm", text);
    console.log(text);
     
    localStorage.setItem("key4pm", text);
    var input4pm = localStorage.getItem("key4pm");
    console.log(input4pm);
    });

$("#5pmsave").on("click", function() {

// get the text
var text = $('#5pmtext').val();
localStorage.setItem("key5pm", text);
console.log(text);
 
localStorage.setItem("key5pm", text);
var input5pm = localStorage.getItem("key5pm");
console.log(input5pm);
});

// set the item in localStorage


// alert the value to check if we got it
