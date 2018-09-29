$(function() {
    var people = [{
            name: 'Клара',
            rate: 60
        },
        {
            name: 'Камилла',
            rate: 80
        },
        {
            name: 'Григорий',
            rate: 95
        },
        {
            name: 'Лаврентий',
            rate: 65
        },
        {
            name: 'Софачка',
            rate: 75
        },
        {
            name: 'Алексей',
            rate: 70
        }
    ];


    // forEach //

    // var results = [];
    // people.forEach(function(person) {  
    //     if (person.rate >= 65 && person.rate <= 90) {
    //         results.push(person);
    //     }
    // });


    // filter //

    function priceRange(person) {
        return (person.rate >= 65) && (person.rate <= 90);
    };

    var results = [];
    results = people.filter(priceRange);


    var $tableBody = $('<tbody></tbody>');
    for (var i = 0; i < results.length; i++) {
        var person = results[i];
        var $row = $('<tr></tr>');
        $row.append($('<td></td>').text(person.name));
        $row.append($('<td></td>').text(person.rate));
        $tableBody.append($row);
    }

    $('thead').after($tableBody);


});
