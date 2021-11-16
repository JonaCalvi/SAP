

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});


$('#fj-date').datepicker({
    format: "dd/mm/yyyy"
});