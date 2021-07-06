$(document).ready(function () {
   $('#team-pr').progress();
   $('#inline_calendar').calendar({
      initialDate: new Date('2020-12-1'),
      eventDates: [{
         date: new Date('2020-12-12'),
         message: 'Show me in light purple',
         class: 'inverted purple'
      }, {
         date: new Date('2020-12-25'),
         message: 'Show me in green',
         class: 'green'
      }]
   });
   $('#task-cal').calendar({
      type: 'date'
    });
   $('.ui.checkbox').checkbox('set checked');
   $('#schedule').click(function () {
      $('#checklist').modal('show')
   })
   $('#task').click(function () {
      $('#add-task').modal('show')
   })
   $('.tabular.menu .item').tab();
   $('.ui.dropdown').dropdown();
});