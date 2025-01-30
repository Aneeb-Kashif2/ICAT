$(document).ready(function() {
    $('.link-section .link').on('click', function(e) {
        e.preventDefault();
        $('.link-section .link').removeClass('active');
        $(this).addClass('active');

        var category = $(this).text().trim();
        console.log("Selected Category:", category); 

        if (category === 'All') {
            $('.gallery-img-container').fadeIn(500);
        } else {
            $('.gallery-img-container').fadeOut(300, function() {
                $('.gallery-img-container[data-category="' + category + '"]').fadeIn(500);
            });
        }
    });
});
