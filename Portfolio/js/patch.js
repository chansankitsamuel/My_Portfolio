// close close the menu in mobile version in the beginning
$('#checkboxmenu').click()

$(function() {

    // close the menu in mobile version when links are clicked
    $('#menu li a').click(function() {
        $('#checkboxmenu').click()
    }).click();


});