$(document).ready(function() {
    var modal = $('#myModal');
    var modalImg = $('#img01');
    var captionText = $('#caption');

    $('.myImg').on('click', function(){
        modal.show();
        modalImg.attr('src', this.src);
        captionText.text(this.alt);
    });

    $('.close').on('click', function(){
        modal.hide();
    });
});