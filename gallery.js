var slide_index = 0;
var num_slides = 8;
var captions = ["Caramel Cone", "Mint in a Cup", "Strawberry Cone", "Orange Sherbet", "Twin Strawberry Cones", "Oreo Sundae", "Rasberry Cone", "Sprinkles Cone"];

$(document).ready(function() {
    show_slide(slide_index);

    // set effects
    $(".gal_img").each(function() {
        this.onmouseover = function() {
            $("#cap" + this.id).css("visibility", "visible");
        };
        this.onmouseout = function() {
            $("#cap" + this.id).css("visibility", "hidden");
        };
    });
});

// move slideshow by n
function move_slide(n) {
    slide_index = image_index(slide_index += n);
    show_slide(slide_index);
}

// convert index to valid slideshow index
function image_index(i) {
    if (i >= num_slides) {
        return (i % num_slides);
    } else if (i < 0) {
        return (num_slides + i);
    } else {
        return i;
    }
}

// show a new set of three slides
function show_slide(n) {
    for (i = 0; i < 3; i++) {
        index = image_index(slide_index + i);

        // update slideshow number
        if (i == 0) {
            $("#num").html((index + 1) + " / " + num_slides);
        }

        // update slideshow pictures
        $("#" + i).hide();
        $("#" + i).prop("src", "gallery_images/g" + index + ".jpg");
        $("#" + i).fadeIn();
        $("#cap" + i).html(captions[index]);
    }
}