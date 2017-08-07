var months = [{
    name: 'January',
    days: 31
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];

for(var i= 0; i<months.length; i++){


  for(var j=0; j<months[i].days; j++){
    console.log(months[i].name)
    console.log(j)
  }



}

// console.log(months[0])
// console.log(months[0]['name'])
// console.log(months[0].name)



// function getDaysInMonth(month, year) {
//      var date = new Date(year, month, 1);
//      var days = [];
//      while (date.getMonth() === month) {
//         days.push(new Date(date));
//         date.setDate(date.getDate() + 1);
//       }
//      return days;
// }
