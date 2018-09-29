(function() {

    var people = [{
            name: 'Клара',
            rate: 60
        },
        {
            name: 'Камила',
            rate: 80
        },
        {
            name: 'Григорий',
            rate: 75
        },
        {
            name: 'Софи',
            rate: 65
        },
        {
            name: 'Флекс',
            rate: 20
        },
        {
            name: 'Алекс',
            rate: 30
        },
        {
            name: 'Иосиф',
            rate: 90
        },
        {
            name: 'Мантий',
            rate: 10
        }
    ];


    var rows = [],
        $min = $('#value-min'),
        $max = $('#value-max'),
        $table = $('#rates');


    function makeRows() {
        people.forEach(function(person) {
            var $row = $('<tr></tr>');
            $row.append($('<td></td>').text(person.name));
            $row.append($('<td></td>').text(person.rate));
            rows.push({
                person: person,
                $element: $row
            });
        });
    }

    function appendRows() {
        var $tbody = $('<tbody></tbody>');
        rows.forEach(function(row) {
            $tbody.append(row.$element);
        });
        $table.append($tbody);
    }


    function update(min, max) {
        rows.forEach(function(row) {
            if (row.person.rate >= min && row.person.rate <= max) {
                row.$element.show(800);
            }
            else {
                row.$element.hide(800);
            }
        });
    }


    function init() {
        $('#slider').noUiSlider({
            range: [0, 150],
            start: [65, 90],
            handles: 2,
            margin: 20,
            connect: true,
            serialization: { to: [$min, $max], resolution: 1 }
        }).change(function() { update($min.val(), $max.val()); });
        makeRows();
        appendRows();
        update($min.val(), $max.val());
    }

    $(init);

}());
