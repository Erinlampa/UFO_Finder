// from data.js
var tableData = data;

//create table body variable
var tbody = d3.select("tbody");

// Table population using arrow functions
data.forEach((sightings) => {
    console.log(sightings);
    var row = tbody.append("tr");

    Object.entries(sightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

