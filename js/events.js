$(document).on('show.bs.collapse', '.agenda-item', function(){
    $(this).prev().find('.fa').addClass('fa-flip-vertical');
});

$(document).on('hide.bs.collapse', '.agenda-item' , function(){
    $(this).prev().find('.fa').removeClass('fa-flip-vertical');
});

// Scroll to the bottom of the page when the last description is opened
$(document).on('shown.bs.collapse', '.list-group-item:last-child .agenda-item', function(){
    window.scrollTo(0,document.body.scrollHeight);
});
