// in order to get the mont, we need the index of the month. we have 12 month so the index is from zero to 11 but we only need the current month
const monthIndex = new Date().getMonth();
// now if you run the next log, you see a number which is the index of the current month.
// console.log(monthIndex);

const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");

// monthIndex + 1, 0 : gets the current month and 0 is the last day of the month before.but we want the last day of current month so we add 1 to it and now its getting the next month and the last day of current month.
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;
const daysEl = document.querySelector(".days");

console.log(firstDay);

// now we make an array with the name of months. and then we call one of the items in the array using the index that we gotten from the system.
const months = [
  "january",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// calling the item from the array:

// now we want to put the thing that we called into the h1 and for that we need to bring it into the js. we do it at the top of the page. and then just change the inner text
monthEl.innerText = months[monthIndex];

// now we get the part for next line and directly convert it to string using toDateString
fullDateEl.innerText = new Date().toDateString();

// now we need to get the number of days of month. and more importantly today.
// so we get the first day and make the privies ones empty and the one after the last day is also empty

// after writing the for loop to set the number of days dynamically into the div, we call them and then is time to fix the starting day of month.
let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEl.innerHTML = days;
// in js weeks start from sunday and not monday
