////////////////////
//Application Module
////////////////////
var app = (function() {
    "use strict";
    //-----------------------------------------------------------------
    // Page Initalization handler : exposed to app.init();
    //-----------------------------------------------------------------
    var init = function() {
            fullwidthEvents();
            _formElements();
            _slider();
            _tab();
            _commen();
            _accord();
        },


        // cart quantity

        
        //form elements

        _formElements = function() {
            //form 
            // $(document).on('load keyup change','input[type="email"], input[type="text"], input[type="date"],input[type="datetime-local"], input[type="number"], input[type="tel"],input[type="time"],input[type="password"], textarea, .floating-blk select',function() {
            //     if ($(this).val() !== "") {
            //         $(this).parents('.floating-blk').addClass('active');
            //     } else {
            //         $(this).parents('.floating-blk').removeClass('active');
            //     }
            // });
            $(document).on('focus','.floating-row .floating-input', function(){
               $(this).parents('.floating-blk').addClass('active');
            })
            $(document).on('blur','.floating-row .floating-input', function(){
                if ($(this).val().trim() === ""){
                    $(this).parents('.floating-blk').removeClass('active');
                }
            })
        },
        fullwidthEvents = function(){
            
            var winWid = $(window).width();
            // spacer start

            $('.spacer').each(function(){
                var space = $(this).data('space');
                if (winWid < 768) {
                    $(this).css('padding-top', space);  //space/2
                }else{
                    $(this).css('padding-top', space);
                }
            });
            // spacer end

            setTimeout(function(){
                var winWid = $(window).width();
                var bodWid = $(document).width();
                var scrollbarwidth =  bodWid-winWid;
                $('.full-width').css({'width':'calc(100vw - '+scrollbarwidth+'px'+')'})
            }, 60);

            // filter start

            if (winWid <= 991) {
                $('.mob-list-blk').addClass('active');
            }else{
                $('.mob-list-blk').removeClass('active');
            }
            // filter end


            // dropdown start

                
                if (winWid <= 991) {
                    $('.dropdown-btn').on('click',function(){
                        if ($(this).hasClass('active')) {
                           $(this).removeClass('active');
                           $(this).next('.with-dropdown').find('.dropdown-con').slideUp('500'); 
                        }else{
                            $(this).addClass('active');
                            $(this).next('.with-dropdown').find('.dropdown-con').slideDown('500'); 

                        }
                    });
                    $('.dropdown-con li').on('click',function(){
                        var txt = $(this).children().text()
                        $(this).parents('.dropdown-blk').find('.dropdown-btn').text(txt);
                        $(this).parents('.dropdown-con').slideUp();
                        $(this).parents('.dropdown-blk').find('.dropdown-btn').removeClass('active');
                    });
                }
            // dropdown end

        },
        _slider = function(){
            $('.primary-slider').each(function() {
                $(this).not('.slick-initialized').slick({
                    dots: true,
                    arrows:false,
                    speed: 800,
                    autoplaySpeed: 8000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    fade: true,
                    appendDots: $(this).next('.primary-dots'),
                })
            });

            // var numSlick = 0;

            $('.product-slider-nav').each(function() {
                // numSlick++;
                $(this).not('.slick-initialized').slick({
                    slidesToShow: 4.5,
                    slidesToScroll: 1,
                    rows:0,
                    dots: false,
                    arrows: false,
                    asNavFor: '.product-slider-for',
                    focusOnSelect: true,
                    speed: 500,
                    infinite: false,
                    cssEase: 'linear',
                    responsive: [
                         {
                             breakpoint: 820,
                             settings: {
                                 slidesToShow: 3,
                                 slidesToScroll: 1,
                             },
                         },
                    ],
                }).on('setPosition', function (event, slick) {
                    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
                });
            });

            // numSlick = 0;
            $('.product-slider-for').each(function() {
                // numSlick++;
                $(this).not('.slick-initialized').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    rows:0,
                    asNavFor: '.product-slider-nav',
                    speed: 500,
                    cssEase: 'linear',
                }).on('setPosition', function (event, slick) {
                    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
                });
            });

            // tab slider start
            // $('.slider_btn').on('change',function(){
            //     var sc = '#detail-'+ $(this).val();
            //     console.log(sc)
            //     $(sc).addClass('active');
            //     $(sc).siblings().removeClass('active');
            //     $('.product-slider-nav,.product-slider-for').slick('refresh');
            // })

            // tab slider end




            // $('.year-timeline-slider').each(function() {
            //     $(this).not('.slick-initialized').slick({
            //         slidesToShow: 4,
            //         slidesToScroll: 1,
            //         speed: 1000,
            //         cssEase: 'linear',
            //         rows: 1,
            //         dots: false,
            //         arrows: true,
            //         infinite:false,
            //         autoplay:true,
            //         autoplaySpeed:0,
            //         variableWidth: true,
            //         nextArrow: '<div class = "right"></div>',
            //         prevArrow: '<div class = "left"></div>',
            //         appendArrows: $(this).next('.primary-arrows'),
            //         responsive: [
                        
            //              {
            //                  breakpoint: 1760,
            //                  settings: {
            //                     slidesToShow: 2,
            //                 },
            //              },
            //             {
            //                  breakpoint: 991,
            //                  settings: {
            //                     slidesToShow: 1,
            //                 },
            //              },
                         
            //         ],
            //     }).on('setPosition', function (event, slick) {
            //         slick.$slides.css('height', slick.$slideTrack.height() + 'px');
            //     });
            // });


            
            //  $(".primary-arrows .right").on('mouseover', function() {
            //     $('.year-timeline-slider').slick('slickNext');
            //   });

            // $(".primary-arrows .left").on('mouseover', function() {
            //   $('.year-timeline-slider').slick('slickPrev');
            // })
            // $('.year-timeline-slider').on('mouseenter',function(){
            //     function toggleBox() {
            //       var box =  $(".primary-arrows .slick-arrow");
            //       box.toggleClass('show');
            //     }

            //     setInterval(toggleBox, 40);
            // })
            // $(document).ready(function(){
            //     var yl = $('.year-timeline-slider .about-content').length;
            //     var wid = $(window).width();

            //     if ((wid > 2344) && (yl <= 5)) {
            //          $('.year-timeline-slider').slick('slickSetOption', 'arrows', false, true);
            //          console.log('sasasasas')
            //     }
            // })

            // about page slider start .......................
            var slider = $('.x-auto-slider');
            if ($(window).width() >= 1023){
              var scrollSpeed = 10;
              var hoverZoneWidth = 100; // Adjust this value to set the hover zone width

              var sliderWidth = slider.width();
              var sliderScrollWidth = slider.prop('scrollWidth');
              var maxScrollPosition = sliderScrollWidth - sliderWidth;

              var isHovered = false;
              var direction;

              slider.on('mouseenter', function() {
                isHovered = true;
              });

              slider.on('mouseleave', function() {
                isHovered = false;
              });

              slider.on('mousemove', function(event) {
                var position = event.pageX
                if (position < hoverZoneWidth) {
                  direction = -1; // Scroll to the left
                } else if (position > sliderWidth - hoverZoneWidth) {
                  direction = 1; // Scroll to the right
                } else {
                  direction = 0; // No scroll
                }
              });

              function slide() {
                if (isHovered) {
                  var scrollAmount = direction * scrollSpeed;
                  var currentScrollPosition = slider.scrollLeft();
                  var newScrollPosition = currentScrollPosition + scrollAmount;

                  if (newScrollPosition < 0) {
                    newScrollPosition = 0;
                  } else if (newScrollPosition > maxScrollPosition) {
                    newScrollPosition = maxScrollPosition;
                  }

                  slider.scrollLeft(newScrollPosition);
                }
                requestAnimationFrame(slide);
              }

              slide();
            }

            // let slider = $('.x-auto-slider');
            var isDragging = false;
            var startX, scrollLeft;

            slider.on('mousedown', function(e){
                isDragging = true;
                startX = e.pageX - slider.offset().left;
                scrollLeft = slider.scrollLeft();
            });

            slider.on('mouseleave mouseup', function(){
                isDragging = false;
            });

            slider.on('mousemove', function(e){
                if (!isDragging) return;
                const x = e.pageX - slider.offset().left;
                const walk = (x - startX) * 2; // You can adjust the speed of the slider here
                slider.scrollLeft(scrollLeft - walk);
            });
            // about page slider end ...................

        },
        _accord = function(){
            // method two start
            $(document).ready(function(){
                $('.inner.show').show();
            })

            // $('.toggle_btn').on('click',function(e){
            //     e.preventDefault();
            //     var $this = $(this);
            //     if ($this.next().hasClass('show')) {
            //         $this.next().removeClass('show');
            //         $this.next().slideUp();
            //         $(this).removeClass("active");
            //     }else{
            //         $this.parent().parent().find('li .inner').removeClass('show');
            //         $this.parent().parent().find('li .inner').slideUp();
            //         $this.next().toggleClass('show');
            //         $this.next().slideToggle(350);
            //         $this.parent().parent().find('li .toggle_btn').removeClass('active');
            //         $(this).addClass("active");
            //     }
            // });
            
            $('.toggle_btn').on('click', function(e) {
              e.preventDefault();
              var $this = $(this);
              var $inner = $this.next('.inner');
              var $siblings = $this.parent().siblings().find('.inner');
              var $btns = $this.parent().siblings().find('.toggle_btn');

              $inner.slideToggle();
              $siblings.slideUp();
              $btns.removeClass('active');
              $this.toggleClass('active');
              $inner.toggleClass('show');
              $siblings.removeClass('show');
            });
           // method two end

           // cart-2 page start

           $('.nxt-btn').on('click', function() {
            var $this = $(this);
            var $con = $this.parents('.accord-content');
            var $nxt = $this.parents('.accord-blk').next();
            var $parent = $this.parents('.accord-blk')

            $parent.addClass('finish');
            $parent.removeClass('active')
            $parent.find('.before').hide();
            $parent.find('.after').show();
            $con.hide();
            $nxt.addClass('active');
            $nxt.find('.accord-content').show();
           })

           $('.change-btn').on('click', function() {
            $(this).parents('.accord-blk').removeClass('finish').addClass('active');
            $(this).parents('.accord-blk').next().removeClass('active').addClass('finish');
            $(this).parents('.accord-blk').next().find('.accord-content').hide();

            $(this).parents('.accord-blk').find('.before').show();
            $(this).parents('.accord-blk').find('.after').hide();
            $(this).parents('.accord-blk').find('.accord-content').show();
           })

           // cart-2 page end

        },


        _tab = function(){

            $('.tab-nav li').on('click',function(){
                var w = $(this).outerWidth();
                var x = $(this).position();
                var p =  $(this).parent()
                p.css({'--active-line': x.left + 'px', '--active-width': w+'px'});
            }); 
            $('.tab-nav li').on('click',function(){
                $(this).addClass('active');
                $(this).siblings('li').removeClass('active');
            });


            // index page slider
            $(function(){
                  // vars
                  var slider, btn, tabC, prevIndex, objTab = {};
                  
                  btn = $(".tab-btn");
                  tabC = $(".tab-content");
                  prevIndex = 0;
                  btn.on("click", function() {
                    var th, thIndex;
                    th = $(this);
                    thIndex = th.index();
                    if(!th.hasClass("active")) {
                      if(prevIndex != thIndex && prevIndex !== 'undefined') {
                        btn.eq(prevIndex).removeClass("active");
                        tabC.eq(prevIndex).removeClass("active");
                      }
                      btn.eq(thIndex).addClass("active");
                      tabC.eq(thIndex).addClass("active");
                      prevIndex = thIndex;
                      tabC.eq(thIndex).find(".secondary-slider").slick('setPosition');
                    }
                  });
                  
                  slider = $(".secondary-slider");
                  
                  $(slider).each(function() {
                    $(this).not('.slick-initialized').slick({
                        rows: 0,
                        dots: true,
                        arrows:false,
                        speed: 600,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        cssEase: 'linear',
                        appendDots: $(this).next('.primary-dots'),
                    });
                });
                  
            });
        },

        _commen = function(){
           

            if ($(window).width() >= 1200) {
               $('.add-cart').on('click', function(){
                    var cart = $('.cart-blk').offset().top;
                    var scroll_height = $(window).scrollTop();
                    if ((cart + 70) < scroll_height) {
                        $('html,body').animate({scrollTop:cart - 80},500);

                    }
                });
            }
            // right nav start

            if ($(window).width() <= 768) {
                var myDiv = $('.right-nav').detach();
                myDiv.insertAfter('section:last-child');
            }
            // right nav end

             // popup start
                setTimeout(function() {
                    $('.popup-card').addClass('active');
                },1000);
                $('.popup-card-close').on('click',function(){
                    $(this).parents('.popup-card').removeClass('active');
                });

                $(".out-icon").on('click',function () {
                    $(".popup-layer").show();
                });
                $(".popup-card-close,.dup-layer").on('click',function () {
                    $(".popup-layer").hide();
                });
            // popup end

            $('.open-btn').on('click',function(){
                $('.fixed').addClass('active');
            })
            $('.close-btn').on('click',function(){
                $('.fixed').removeClass('active');
            })
            // demo address js start


            $('.adrs-book-btn').on('click',function(){
                var inpt = $('.adrs-book-input').val().length;
                if(inpt >= 1){
                    $('.adrs-book').slideDown('500');
                }else{
                    $('.adrs-book-form').slideDown('500');
                }
            }); 
            // demo address js end

            // popup start
            $('.popup-open').on('click',function(){
                $('.popup-box-blk').addClass('active');
            })
            $('.popup-close').on('click',function(){
                $('.popup-box-blk').removeClass('active');
            })

            // another

            $('.popup-open1').on('click',function(){
                $('.popup-box1-blk').addClass('active');
                $('.popup-box1-blk').fadeIn(300);
            })
            $('.popup1-close,.bg-layer1').on('click',function(){
                $('.popup-box1-blk').removeClass('active');
                $('.popup-box1-blk').fadeOut(300);
            })

            // popup end

            // coupon detail blk popup start
            $('.apply-coupon').on('click',function(){
                $('.coupon-detail-blk').addClass('active');
            })
            $('.coupon-close-btn,.coupon-apply').on('click',function(){
                $('.coupon-detail-blk').removeClass('active');
            })
            // coupon detail blk popup end


            // address other form start

            $(".checkboxradio input:radio").on('change' ,function() {
                if ($('.other').is(":checked"))
                {
                    $('.other-form-field').slideDown();
                    $('.other-form-field input').focus()
                }else{
                    $('.other-form-field').slideUp();     
                }
            });

            // address other form end

            // pagination start
                // $('.pagination-arrows .right').on('click',function(){
                //     var parent = $('.pagination-blk');
                //     var start = Number(parent.find('.start-page').text());
                //     var end = Number(parent.find('.end-page').text());
                //     if (start < end) {
                //         start++
                //         parent.find('.start-page').text(start);
                //         $('.left').addClass('active');
                //         if (start >= end) {
                //             $('.right').removeClass('active');
                //         }
                //     }
                // });
                // $('.pagination-arrows .left').on('click',function(){
                //     var parent = $('.pagination-blk');
                //     var start = Number(parent.find('.start-page').text());
                //     var end = Number(parent.find('.end-page').text());
                //     if (start > 1) {
                //         start--
                //         parent.find('.start-page').text(start);
                //         $('.right').addClass('active');
                //     }
                //     if (start < 2) {
                //         $('.left').removeClass('active');
                //     }
                // });
            // pagination end

            $('.with-dropdown li').on('click',function(){
                $(this).addClass('active');
                $(this).siblings('li').removeClass('active');
                var tab_id = "#"+ $(this).data('tab');
                $(tab_id).addClass('active').show('500');
                $(tab_id).siblings().removeClass('active').hide('500');
            });


            $('.ham').on('click', function(){
                if ($('.ham').hasClass('close-menu')) {
                    $('.ham').removeClass('close-menu');
                    $('.header-nav').removeClass('active');
                    $('html,body').removeClass('flow');
                }else{
                    $('.ham').addClass('close-menu');
                    $('.header-nav').addClass('active');
                    $('html,body').addClass('flow');
                }
            });

            // $('.search-btn').on('click', function(){
            //     var parent = $(this).parents('.search-blk');
            //     var val = parent.find('.search-box').val();
            //     if(val <= 0){
            //         parent.next('.err-msg').addClass('active');
            //         parent.addClass('err');
            //     }else{
            //         parent.next('.err-msg').removeClass('active');
            //         parent.removeClass('err');
            //     }
               
            // });

            // demo voucher button

            // $('.voucher-code input').on('input', function(){
            //     var len = $(this).val().length;
            //     if (len != 0 ) {
            //         $(this).next('.button').on('click',function(e){
            //             $(this).parents().parents().find('.success-msg').addClass('active');
            //         })
            //     }
            // })

            $('.coupon-apply').on('click',function(){
                $('.success-msg').addClass('active');
            })

            $('.code-remove').on('click',function(){
                $('.success-msg').removeClass('active');
            })

            // demo end

            // cart product remove function start

            $('.product-remove').on('click',function(){
                $(this).parents('tr').addClass('tr-close').hide();
                var tr = $('.cart-table .t-row').length;
                var tc = $('.cart-table .tr-close').length;
                if (tr === tc) {
                    $('.cart-table-blk').addClass('empty');
                }
            })

            // filter start
            $('.checkbox-animate input').on('change',function(){
                $(this).parents('.checkbox-animate').toggleClass('active');
            });

            // new filter
            if ($('.mob-list-blk').hasClass('active')) {
                $('.mob-list-btn').on('click',function(e){
                    $(this).next('.mob-list').slideToggle();
                    $(this).toggleClass('active');
                })

            }

            // new filter end


            

            // $('.drop-btn.db-open').on('click',function(e){
            //     $('.drop-list-blk').slideDown();
            //     $(this).addClass('active');
            // });
            // $('.drop-btn.db-close').on('click',function(e){
            //     $('.drop-list-blk').slideUp();
            //     $('.drop-btn.db-open').removeClass('active');
            // });
            // $(document).click(function(e){
            //     var con = $('.drop-list');
            //     if (!con.is(e.target) && con.has(e.target).length === 0){
            //         $(".drop-list").slideUp();
            //     }  
            // });

            // filter end

            $('.add-adrs-btn').on('click',function(){
                $(this).toggleClass('active');
                var form = $('.adrs-form'); 
                form.addClass('active');
                $('.bg-layer').toggleClass('active')
            })
            $('.add-adrs-close').on('click',function(){
                $('.adrs-form').removeClass('active');
                $('.add-adrs-btn1').removeClass('active');
                $('.bg-layer').removeClass('active')
            })
            $('.bg-layer').on('click',function(){
                $('.adrs-form').removeClass('active');
                $(this).removeClass('active');
            })


            // $(document).ready(function(){
            //     setTimeout(function(){
            //         $(".popup-box1-blk").fadeIn(500);
            //     },1000)
            // })
            //  $('.popup-close1').on('click',function(){
            //     $('.popup-box1-blk').fadeOut(200);
            // })
            // add address err scroll start

            // $('.add-adrs-check').on('click', function(){
            //     var scroll_height = $('.adrs-form').scrollTop();
            //     var err = $(this).parent().find('.floating-blk.err').position().top;
            //     if (scroll_height > err) {
            //         $('.adrs-form').animate({scrollTop:(err + scroll_height - 150)},500);
            //     }
            //  });
            
            // add address err scroll end

        }


    // Expose Global Functions
    return {
        init: init,
        fullwidthEvents: fullwidthEvents,
    };
})();

$(window).scroll(function() {
    //scroll function here



});

$(window).on('resize',function(){
    app.fullwidthEvents();
});

$().ready(function() {
    app.init();
});

$(window).on('orientationchange', function() {      
    $('.large-product-carousel').slick('reinit');

});

// if(Modernizr.touch){  
//   //modernizer touch function code here for mobile
// }
$(window).on('load', function() {
    $('.tab-btn1 li').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var tab_id = "#"+ $(this).data('tab1');
        $(tab_id).show();
        $(tab_id).siblings().hide();
    });


    $('.tab-nav li:first-child').each(function(){
        var w = $(this).outerWidth();
        var x = $(this).position();
        var p =  $(this).parent()
        p.css({'--active-line': x.left + 'px', '--active-width': w+'px'});
    });
    
    $('.floating-blk input, .floating-blk select, .floating-blk textarea').each(function(){
        if ($(this).val() !== "") {
            $(this).parents('.floating-blk').addClass('active');
        } else {
            $(this).parents('.floating-blk').removeClass('active');
        }

    })
    // slider

    // address form start
        // var windowWidth = $(window).width();
        // $('.add-adrs-btn1').on('click',function(){
        //     $(this).toggleClass('active');
        //     var form = $('.adrs-form'); 
        //     if (windowWidth < 768) {
        //         form.addClass('active');
        //     }else{
        //         form.slideToggle('500');
        //     }
        // })

    // address form end


    
    
    $('.render-blk').stop(true, true).animate({ opacity: 1 }, 1000);
    if (sessionStorage.getItem('loader') == null) {
        sessionStorage.setItem('loader', 'true');
    }
});