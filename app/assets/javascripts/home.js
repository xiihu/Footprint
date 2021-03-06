
/*Downpage Animation*/

$(document).ready(function(){

	$('.dropdown-toggle').click(function(){
		$('.dropdown-menu').toggle();
	});

	$('.right-nav').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    /* Until the last slide (empty slide) */
    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(800).removeClass('active-slide');
    nextSlide.fadeIn(800).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
	});


	$('.left-nav').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
      currentSlide.fadeOut(800).removeClass('active-slide');
      prevSlide.fadeIn(800).addClass('active-slide');

      currentDot.removeClass('active-dot');
      prevDot.addClass('active-dot');
    });

    // link to map "view my map!"
    $('.linktomap').click(function(){
        $('.page2').fadeOut(200).removeClass('active-page');
        $('.page1').fadeIn(800).addClass('active-page');
    });

    $('.viewposts').click(function(){
        $('.popupbox').fadeOut(200).removeClass('active-popupbox');
        $('.page1').fadeOut(400).removeClass('active-page');
        $('.page2').fadeIn(800).addClass('active-page');
    });

    $('.alter-viewposts').click(function(){
      $('.page1').fadeOut(100).removeClass('active-page');
      $('.page3').fadeIn(400).addClass('active-page');
    });

    $('.mapbox2').click(function(){
      $('.page3').fadeOut(100).removeClass('active-page');
      $('.page2').fadeIn(100).addClass('active-page');
    });


    $('#holder_1000').click(function(){
     //   $('.popupbox').slideDown(300).addClass('active-popupbox');
    });

    $('.crossicon').click(function(){
        $('.popupbox').fadeOut(600).removeClass('active-popupbox');
    });

    // microposts text window animation
    $('#micropost_content').click(function(){
      $('#micropost_content').animate({
        height: "150px"
      },
        400);
      $('.uploadpicture').fadeIn(400).addClass('active-page');
      $('.postbutton').fadeIn(400).addClass('active-page');
    });

    $('.postcontainer-inside').click(function(){
      $('#micropost_content').animate({
        height: "50px"
      },
        400);
      $('.uploadpicture').fadeOut(400).removeClass('active-page');
      $('.postbutton').fadeOut(400).removeClass('active-page');
    });

    // for profile page animation
    $('.user_info').click(function(){
      $('#micropost_content').animate({
        height: "50px"
      },
        400);
      $('.uploadpicture').fadeOut(400).removeClass('active-page');
      $('.postbutton').fadeOut(400).removeClass('active-page');
    });

    $('.nav').click(function(){
      $('#micropost_content').animate({
        height: "50px"
      },
        400);
      $('.uploadpicture').fadeOut(400).removeClass('active-page');
      $('.postbutton').fadeOut(400).removeClass('active-page');
    });

    $('#micropost_picture').bind('change', function() {
    var size_in_megabytes = this.files[0].size/1024/1024;
    if (size_in_megabytes > 5) {
      alert('Maximum file size is 5MB. Please choose a smaller file.');
     }
    });

    //for image upload
    $('.uploadpicture').on('click', function() {
      $('#image-upload').click();
    });

    $(function() {
     $("input:file").change(function (){
       var fileName = $(this).val();
       if (fileName.length > 0) { // detect a file has been uploaded --> file must has a name!
        $('#uploadpicture').animate({
          opacity: "0.8"
        }, 
        200);
       }
     });
    });

    $('.submit-routes').click(function(){
      $('.submite-map').fadeIn(200).addClass('active-slide');
    });

    $('.firstsubmit').click(function(){
      $('.maptitlecode').fadeOut(200).addClass('inactive');
      $('.inputcode').fadeOut(200).addClass('inactive');
      $('.firstsubmit').fadeOut(200).addClass('inactive');
      $('.feedbackmsg').fadeIn(200).addClass('active-page');
      $('.okay').fadeIn(200).addClass('active-page');
    });

    $('.okay').click(function(){
      $('.submite-map').fadeOut(200).addClass('inactive');
    });
  //  $('.profile .pagination').click(function(){
  //      $('.page1').removeClass('active-page');
  //      $('.page2').fadeIn(300).addClass('active-page');
  //  });


});

