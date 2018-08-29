jQuery(document).ready(function($) {
     // 定义背景变颜色

    function Colors() {
        var a = parseInt(Math.random()*10);
        switch(a){
            case 0:
            $(".about").css('background-color',"#E16A6A");
            break;
            case 2:
            $(".about").css('background-color',"#393FD6");
            break;
            case 3:
            $(".about").css('background-color',"#2DE4AE");
            break;
             case 4:
            $(".about").css('background-color',"#259D18");
            break;
             case 5:
            $(".about").css('background-color',"#558531");
            break;
            case 6:
            $(".about").css('background-color',"#895633");
            break;
            case 7:
            $(".about").css('background-color',"#B03232");
            break;
            case 8:
            $(".about").css('background-color',"#0A9156");
            break;
            case 9:
            $(".about").css('background-color',"#3249A6");
            break;
            case 10:
            $(".about").css('background-color',"#E44DB8");
            break;
        }
    }


    var aw = setInterval(Colors, 2000);

    if($(window).width()<=700){
        document.write("暂不支持移动设备,请用电脑观看");
        exit();
    }else{
        $(window).scroll(function(){
                topheight();
                
            });

               
     }
 
     var aa = $("#p").offset().top;
        function topheight() {
            
              if ($(document).scrollTop() >= 30) {
                    $(".banner-top").addClass("style");
                    clearInterval(aw);
                    aw = setInterval(Colors, 2000);  
                }else{
                    $(".banner-top").removeClass("style");
                    clearInterval(aw);
                }
                    //获取滚动条的高度(对联)
                if (aa >= $(window).scrollTop() && aa < ($(window).scrollTop() + $(window).height())) {
                       
                $(".duilian li").addClass('zengjia');
                      }
                else{
                    $(".duilian li").removeClass('zengjia');
                }


        }


        //设置点击缓慢滑动
         $(".right-banner ul li").on('click',function(){
                index = $(this).index();
                 $(this).stop(true);
                //offset相对于当前窗口的偏移(与position进行区别)
                $(".right-banner ul a").removeClass("first-c");
                $(".right-banner ul a").eq(index).addClass('first-c');
                switch(index){
                    case 0:
                         $('html,body').animate({scrollTop: $('#h').offset().top},2000);
                    break;
                    case 1:
                        //offset相对于当前窗口的偏移(与position进行区别)
                        $('html,body').animate({scrollTop: $('#a').offset().top},2000);
                    break;
                    case 2:
                        //offset相对于当前窗口的偏移(与position进行区别)
                        $('html,body').animate({scrollTop: $('#m').offset().top},2000);
                    break;
                    case 3:
                     $('html,body').animate({scrollTop: $('#p').offset().top},2000);
                    break;

                    case 4:
                             //offset相对于当前窗口的偏移(与position进行区别)
                         $('html,body').animate({scrollTop: $('#c').offset().top},2000);
                    break;
                }
               
            });

        //兴趣爱好效果
        $(".Animate li").mouseover(function(){
            
            $(this).addClass('rubberBand');
        });
        $(".Animate li").mouseout(function(){
            $(this).removeClass('rubberBand');
        });

        //对联效果
         $(window).scroll(function () {
              
            });
});

