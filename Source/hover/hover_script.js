function upDate(previewPic) {
    /* In this function you should
    1) change the url for the background image of the div with the id = "image"
    to the source file of the preview image */
	   
	$('#image').css('background-image', 'url(' + $(previewPic).attr('src') + ')');   

    /*
	2) Change the text  of the div with the id = "image"
    to the alt text of the preview image
    */
	$('#image').html($(previewPic).attr('alt'));   
}

function unDo() {
    /* In this function you should
   1) Update the url for the background image of the div with the id = "image"
   back to the orginal-image.  You can use the css code to see what that original URL was */
	
	$('#image').css('background-image','none');
	
   /*
   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */
   $('#image').html("Hover over an image below.");
}
