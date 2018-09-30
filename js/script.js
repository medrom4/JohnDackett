var holidays = [
     '2014-12-21',
     '2014-09-28',
     '2014-01-31',
     '2014-05-12',
     '2014-07-01'
];
holidays.sort(function(a, b) {
    var dateA = new Date(a);
    var dateB = new Date(b);
    
    return dateA - dateB;
});

console.log(holidays);
