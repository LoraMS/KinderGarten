$(document).ready(function () {
    $('.filter-button').click(function () {
        var value = $(this).attr('data-filter');
        console.log($(this));

        if (value === 'all') {
            $('.filter').show('1000');
        } else {
            $('.filter').not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });

    // if ($('.filter-button').hasClass('current')) {
    //     $(this).removeClass('current');
    // }
    // $(this).addClass('current');

    // $('.btn-group').each( function( i, buttonGroup ) {
    //     var $buttonGroup = $( buttonGroup );
    //     $buttonGroup.on( 'click', 'button', function() {
    //       $buttonGroup.find('.current').removeClass('current');
    //       $( this ).addClass('current');
    //     });
    //   });

    $('.btn-group').on( 'click', 'button', function() {
        $('.btn-group').find('.current').removeClass('current');
      $( this ).addClass('current');
    });

});