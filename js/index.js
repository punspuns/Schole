$(document).ready(function() {
    $('#inline_calendar').calendar({
        initialDate: new Date('2020-12-1'),
        eventDates: [{
           date: new Date('2020-12-24'),
           message: 'Design Exercise IIB',
           class: 'inverted yellow'
        }, {
           date: new Date('2020-12-27'),
           message: 'Design Practice II',
           class: 'inverted yellow'
        }]
     });
    $('#example1').progress();
    $('.ui.dropdown').dropdown();
    $('.out').click(function () {
        $('#sign-out').modal('show')
     });
 });