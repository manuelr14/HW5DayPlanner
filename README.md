# HW5DayPlanner
Simple calendar application that allows the user to save events for each hour of the day. Poor time management can result in missed meetings and deadlines or create the appearance of unprofessionalism. A daily planner allows employees to see their day at a glance, schedule time effectively, and improve productivity.

The app should display standard business hours (9 a.m. to 5 p.m.). Each time slot should represent one hour and contain the following:


The time


A field to hold user input


A save button


Each timeblock contains an input field and save button.
Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.
The current day is displayed at the top of the calendar. the application should display the current day. Additionally, each hour should be color coded to reflect 
Each timeblock is color coded to indicate whether it is in a past, present, or future hour.


Near the top of the calendar,whether the time slot is in the past, the present, or the future. This will change depending on the time of day.

timer done with setinterval(). every 1 sec the script was getting the time inf from moment.js and writing it on the hmtl document.

I declared a variable for every hr and used the function .isbetween to check if the current time is between the 2 times variable.
if is true will change the class on the description changing the color and getting information from the local storage to keep it in the right time block if they are still present or future or deleting information from the local storage when the blocktime is past.

I used event listener in every save button to save the event information in the local storage.

