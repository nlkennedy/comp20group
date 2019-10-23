var slide_index = 0;
var num_slides = 8;

$(document).ready(function() {
    show_slide(slide_index);
});

function move_slide(n) {
    slide_index = image_index(slide_index += n);
    show_slide(slide_index);
}

function image_index(i) {
    if (i >= num_slides) {
        return (i % num_slides);
    } else if (i < 0) {
        return (num_slides + i);
    } else {
        return i;
    }
}
function show_slide(n) {
    for (i = 0; i < 3; i++) {
        index = image_index(slide_index + i);

        if (i == 0) {
            $("#num").html((index + 1) + " / " + num_slides);
        }

        $("#" + i).hide();
        $("#" + i).prop("src", "gallery_images/g" + index + ".jpg");
        $("#" + i).fadeIn();
    }
}