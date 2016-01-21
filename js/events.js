$(document).on('show.bs.collapse', '.agenda-item', function(){
    $(this).prev().find('.fa').addClass('fa-flip-vertical');
});

$(document).on('hide.bs.collapse', '.agenda-item' , function(){
    $(this).prev().find('.fa').removeClass('fa-flip-vertical');
});
