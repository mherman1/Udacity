$(document).ready(function () { 

    $("#button").click( function makeGrid() {

        $("#pixelCanvas").empty();
        
        event.preventDefault();

        var r = $("#row").val();
        var c = $("#column").val();

        for (var i = 0; i < r; i++) {
            var row = $('<tr></tr>');
            for (var j = 0; j < c; j++) {
                row.append('<td></td>');
            }
            $("#pixelCanvas").append(row);
        }

        $("td").click( function addColor() {

            $(this).add().css('background-color', $("#colorPicker").val());

        });

    });

});



