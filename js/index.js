$(document).ready(function() {
    $('#inline_calendar').calendar({
        initialDate: new Date('2020-12-1'),
        eventDates: [{
           date: new Date('2020-12-24'),
           message: 'Show me in light purple',
           class: 'inverted purple'
        }, {
           date: new Date('2020-12-27'),
           message: 'Show me in green',
           class: 'green'
        }]
     });
    $('#example1').progress();
    $('.ui.dropdown').dropdown();
    $('.out').click(function () {
        $('#sign-out').modal('show')
     });
 });