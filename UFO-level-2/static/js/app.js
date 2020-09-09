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


// Get the date from the input
var date = d3.select("#datetime").property("value");
console.log(date);
// Get the country from the input and chnage to LowerCase
var country = d3.select("#country").property("value").toLowerCase();;
console.log(country);
// Get the state from the input and chnage to LowerCase
var state = d3.select("#state").property("value").toLowerCase();;
console.log(state);
// Get the city from the input and chnage to LowerCase
var city = d3.select("#city").property("value").toLowerCase();;
console.log(city);
// Get the shape from the input and chnage to LowerCase
var shape = d3.select("#shape").property("value").toLowerCase();;
console.log(shape);

//Intialize filteredData as Tabledata.
var filteredData = tableData;

// Filter reports based on inputs
if (date){
filteredData = filteredData.filter(record => record.datetime === date);
}
if (country){
filteredData = filteredData.filter(record => record.country === country);
}
if(state){
filteredData = filteredData.filter(record => record.state === state);
}
if(city){
filteredData = filteredData.filter(record => record.city === city);
}
if (shape){
filteredData = filteredData.filter(record => record.shape === shape);
}
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
