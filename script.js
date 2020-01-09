 
// console.log(today)
// $("#currentDay").text(today);

function setTime() {
   setInterval(function() {
        var today=moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(today);
      
      
  
    }, 1000);
  }

setTime();