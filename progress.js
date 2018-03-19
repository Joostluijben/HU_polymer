function calculation() {
     // get all dates form table
     var dateArray = document.getElementsByClassName("date");
     var dates = [];
     // parse all found dates to javascript dates and add to dates array
     for (var i = 0; i < dateArray.length; i++) {
       dates.push(Date.parse(dateArray[i].value));
     }
     // parse the date of start of study to javascript
     var startDay = Date.parse("9/4/2016");
     // get the latest day of the javascript dates array
     var endDay = Math.max(...dates);
     // calculate the difference between the date of start study and the latest input date
     var difference = new Date(endDay - startDay);
     // get the difference in months
     var months = difference.getMonth();

     // get the table, parse all elements of second row(except header) to int and add them to sum
     var table = document.getElementById("progressTable");
     var sum = 0;
     for (var i = 1; i < table.rows.length; i++) {
      sum += parseInt(table.rows[i].cells.item(1).innerHTML);
     }

     // get the average monthly gotten EC
     var monthEC = sum / months;

     // get the still needed EC
     var restEC = 60 - sum;
     // get how many months are needed to get P by divinding the needed EC through the monthly gotten ec.
     var monthNeed = restEC / monthEC;

     alert("Je hebt tot nu toe: " + sum + " ECTS behaald.\nJe huidge studietempo is: " + monthEC + " ECTS / mnd.\n"+
     "Op basis van dit studietempo heb je " + monthEC + " maand nodig voor je P.");
}
