// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text from data.js
tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');
    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append('td');
        cell.text(value);
    });
});
// Select the filter button
var filter = d3.select("#filter-btn");


//Click event of datetime filter
filter.on("click", function() {


// Remove existing table
d3.select("tbody").html("");


// Prevent the page from refreshing
d3.event.preventDefault();


// Get the date from the input element
var date = d3.select("#datetime").property("value");
console.log(date);


// Filter reports
var filteredData = tableData.filter(record => record.datetime === date);
console.log(filteredData);


// Display the filtered dataset
filteredData.forEach((report) => {
    var row = tbody.append('tr');
    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});
