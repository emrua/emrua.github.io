$(document).ready(function(){
    var currentIndex = 0;
    var images = [
        {src: "images/Elephant.jpg", caption: 'E - Elephant'},
        {src: 'images/Map.jpg', caption: 'M - Map'},
        {src: 'images/Monkeys.jpg', caption: 'M - Monkeys'},
        {src: 'images/Anglerfish.jpg', caption: 'A - Anglerfish'},
        {src: 'images/AppleWatch.jpg', caption: 'A - Applefish'},
        {src: 'images/Nebula.jpg', caption: 'N - Nebula'},
        {src: 'images/Garden.jpg', caption: 'G - Garden'},
        {src: 'images/Longboarding.jpg', caption: 'L - Longboarding'},
        {src: 'images/Iris.jpg', caption: 'I - Iris'},
        {src: 'images/Nutmeg.jpg', caption: 'N - Nutmeg'},
        
    ];

    function showImage(index) {
        $('#slide-img').attr('src', images[index].src);
        $('#caption').text(images[index].caption);
        $('#thumbnails li').removeClass('active');
        $('#thumbnails li').eq(index).addClass('active');
        currentIndex = index;
    }

    images.forEach(function(image, index) {
        var thumbnail = $('<li>').appendTo('#thumbnails');
        var img = $('<img>').attr('src', image.src).appendTo(thumbnail);
        thumbnail.click(function(){
            showImage(index);
        });
    });

    showImage(currentIndex);
});