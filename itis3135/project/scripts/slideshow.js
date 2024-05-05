$(document).ready(function(){
    var currentIndex = 0;
    var images = [
        {src: "images/Construction.jpg", caption: 'Updated porch and fence with stairs and a ramp'},
        {src: 'images/ramp.jpg', caption: 'Close up of the ramp and stairs'},
        {src: 'images/counter.jpg', caption: 'Built in counter and dishwasher cover'},
        {src: 'images/doghouse.jpg', caption: 'Homemade dog house'},
        {src: 'images/fence.jpg', caption: 'Privacy fence around porch'},
        {src: 'images/pingpong1.jpg', caption: 'Full size ping pong table'},
        {src: 'images/pingpong2.jpg', caption: 'Another angle of the ping pong table'},
        
        
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