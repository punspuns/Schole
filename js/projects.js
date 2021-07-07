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
   $('.ui.checkbox#phase1').checkbox('set checked');
   $('.ui.checkbox#phase4').checkbox('set checked');
   $('#schedule').click(function () {
      $('#checklist').modal('show')
   });
   $('#task').click(function () {
      $('#add-task').modal('show')
   });
   $('.feedback').click(function () {
      $('#feedback-modal').modal('show')
   });
   $('.update').click(function () {
      $('#update-modal').modal('show')
   });
   $('.minutes').click(function () {
      $('#minutes-modal').modal('show')
   });
   $('.tabular.menu .item.task-tab').tab();
   $('.tabular.menu .item.box-tab').tab();
   $('.ui.dropdown').dropdown();
});