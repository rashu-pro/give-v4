$('.select-2').select2({
  minimumResultsForSearch: -1
});

$(document).on('click', '.btn-navigation-js', function (e){
  e.preventDefault();
  let self = $(this);
  self.closest('.step-box').removeClass('active');
  self.attr('data-action') === 'increase' ? self.closest('.step-box').next().addClass('active') : '';
  self.attr('data-action') === 'decrease' ? self.closest('.step-box').prev().addClass('active') : '';
})

$(document).on('click', '.box-amount-js', function (e){
  e.preventDefault();
  let self = $(this);
  if(self.hasClass('active')) return;

  $('.box-amount-js').removeClass('active');
  self.addClass('active');
  $('.donation-amount-js').val(self.attr('data-amount'));
})
