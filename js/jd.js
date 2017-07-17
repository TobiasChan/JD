//入口函数
$(function () {
    //关闭广告
    $("#topbanner_close").click(function () {
        $(".topbanner").css("display", "none");
    })

    //经过北京显示下拉列表
    $('.shortcut').find('.dt').mouseenter(function () {
        $('.bj').css('display', 'block');
        $(this).css('background', '#fff');
        $(this).css('border-bottom', '#fff');
    }).mouseleave(function () {
        $('.bj').css('display', 'none');
        $(this).css('background', '#f1f1f1');
    })
    //我的京东的显示二级菜单
    twoMenu('.myone', '.jd_fore');
    //手机京东的二级菜单的显示隐藏
    twoMenu('.tel_jd', '.tel_all');
    //关注京东
    twoMenu('.jd_attention', '.attention');
    //客户
    twoMenu('.jd_consumer', '.consumer');
    //网站导航的显示和隐藏
    twoMenu('.jd_feature', '.feature');
    //京东二级菜单的函数封装
    function twoMenu(obj, value) {
        $(obj).mouseenter(function () {
            $(value).css('display', 'block');
        }).mouseleave(function () {
            $(value).css('display', 'none');
        })
    }

    //全部商品 的二级菜单的tab切换
    $('.item_title').find('h3').each(function (i, elem) {
        $(this).mouseenter(function () {
            $(this).addClass('active');
            $('.dd .item').eq(i).siblings().find('h3').removeClass('active');
            $('.dd .item').eq(i).find('.item_all').css('display', 'block');
            $('.dd .item').eq(i).siblings().find('.item_all').css('display', 'none');
        })
        $('.drapdown').mouseleave(function () {
            $('.item_title').find('h3').removeClass('active');
            $('.dd .item').eq(i).find('.item_all').css('display', 'none');
        })
    })
    /*$('.item_title').find('h3').each(function (i,elem) {
     $('this').mouseenter(function () {
     $('.item_title').find('h3').each(function (i,elem) {
     $('this').removeClass('active');
     $('.dd .item').eq(i).find('.item_all').css('display','none');
     })
     $('this').addClass('active');
     $('.dd .item').eq(i).find('.item_all').css('display','block');
     })
     })*/


    //登录注册框
    //点击显示
    $('#register').on('click', function () {
        $('#mask').css('display', 'block');
        $('.login_box').css('display', 'block');
    })
    //我的京东点击后进入登陆页面
    $('.jd_fore_t .myRegister').on('click', function () {
        $('#mask').css('display', 'block');
        $('.login_box').css('display', 'block');
    })
    //点击隐藏
    $('.close').click(function () {
        $('#mask').css('display', 'none');
        $('.login_box').css('display', 'none');
    })

    //搜索框焦点事件
    $('#search_txt').focus(function () {
        if ($(this).val("") == "二合-平板") {
            $(this).val("");
            $(this).css('color', '#333');
        }
    }).blur(function () {
        if ($(this).val("")) {
            $(this).val("二合-平板");
            $(this).css('color', '#666');
        }
    });

    $('.jd_float_right').find('.text1').focus(function () {
        if ($(this).val("") == "耳机") {
            $(this).val("");
            $(this).css('color', '#333');
        }
    }).blur(function () {
        if ($(this).val("")) {
            $(this).val("耳机");
            $(this).css('color', '#666');
        }
    })
// 购物车
    $('.shopping_car').mouseover(function () {
        $('.car').css('border-bottom', 'none');
        $('.car_con').css('display', 'block');
    }).mouseout(function () {
        $('.car').css('border', '1px solid #DFDFDF');
        $('.car_con').hide();
    })
//轮播图开始
//轮播图的按钮的显示隐藏
    $("#slider").mouseenter(function () {
        $(".slider_prev").css("display", "block");
        $(".slider_next").css("display", "block");
    })
    $("#slider").mouseleave(function () {
        $(".slider_prev").css("display", "none");
        $(".slider_next").css("display", "none");
    });

//添加节点span操作
    $(".slider_con").each(function (i, elem) {
        var $oSpan = $('<span>' + Number(i + 1) + '</span>');
        $('.slider_next').before($oSpan);
        $oSpan.addClass("slider_circle");
        // $(elem).css("display", "none");
    });

    $('.slider_circle').eq(0).addClass('current');
//设置图片的宽度
    var $scrollWidth = $('.slider').width();
//获取所有的图片
    var aImg = $('.slider_wrap').find('img');
    for (var i = 1; i < aImg.length; i++) {
        /*从第一张开始其他的都向左移动730px;*/
        aImg[i].style.left = $scrollWidth + 'px';
    }
//获取所有的span元素
    var aSpan = $('.slider_ctrl').find('span');
//遍历三个按钮
    var iNow = 0;//表示图片的张数
    for (var k = 0; k < aSpan.length; k++) {
        aSpan[k].onclick = function () {
            if (this.className == 'slider_prev') {//左侧点击
                $(aImg).eq(iNow).animate({left: $scrollWidth}, 100);
                --iNow < 0 ? iNow = aImg.length - 1 : iNow;
                //快速走到舞台的左侧，
                $(aImg).eq(iNow).css('left', -$scrollWidth + 'px');
                //当前这张走到舞台中央
                $(aImg).eq(iNow).animate({left: 0}, 100);
                setCircle();
            } else if (this.className == 'slider_next') {//右侧点击
                autoPlay();
            } else {
                var that = this.innerHTML - 1;
                if (that > iNow) {
                    //相当于右侧
                    $(aImg).eq(iNow).animate({left: -$scrollWidth}, 100);
                    $(aImg).eq(that).css('left', $scrollWidth + 'px');
                } else if (that < iNow) {
                    //相当于左侧
                    $(aImg).eq(iNow).animate({left: $scrollWidth}, 100);
                    $(aImg).eq(that).css('left', -$scrollWidth + 'px');
                }
                iNow = that;
                $(aImg).eq(iNow).animate({left: 0}, 50);
                setCircle();
            }
        }
    }
    function setCircle() {
        for (var i = 1; i < aSpan.length - 1; i++) {
            aSpan[i].className = "slider_circle";
        }
        aSpan[iNow + 1].className = "slider_circle current";
    }

//设置定时器
    var timer = null;
    timer = setInterval(autoPlay, 6000);//开启定时器
    function autoPlay() {
        //和右侧一样的效果
        $(aImg).eq(iNow).animate({left: -$scrollWidth}, 100);
        ++iNow > aImg.length - 1 ? iNow = 0 : iNow;
        $(aImg).eq(iNow).css('left', $scrollWidth + 'px');
        $(aImg).eq(iNow).animate({left: 0}, 100);
        setCircle();
    }

    $('.slider').mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        clearInterval(timer);//先关后开
        timer = setInterval(autoPlay, 6000)//开启定时器
    })
//轮播图结束

//遍历所有的lifeService图片
    var $i = $('.lifeService').find('i');
    for (var i = 0; i < $i.length; i++) {
        $i.eq(i).css('background-position', "0 " + (-25 * i) + "px");
    }
//惊喜夜轮播图
//控制按钮的显示隐藏
    $(".night").hover(function () {
        clearInterval(timer);
        $(".two_ctrl_prev").show();
        $(".two_ctrl_next").css("display", "block");
    }, function () {
        clearInterval(timer);
        timer = setInterval(auto, 6000);
        $(".two_ctrl_prev").css("display", "none");
        $(".two_ctrl_next").css("display", "none");
    });
    //设置图片的宽度
    var night_slider_con_width = $('.night_slider_con').width();
    // 遍历所有的图片
    var slider_con_all = $('.night_slider').find('.night_slider_con');
    for (var i = 1; i < slider_con_all.length; i++) {
        slider_con_all[i].style.left = night_slider_con_width + 'px';
    }
    //存储图片的张数
    //获取ctrl按钮
    var currentPosition = 0;
    var twoCtrl = $('.two_ctrl').find('span');
    $(twoCtrl).each(function (i, elem) {
        $(this).click(function () {
            if (this.className == 'two_ctrl_prev') {
                $(slider_con_all).eq(currentPosition).animate({'left': night_slider_con_width}, 1000);
                --currentPosition < 0 ? currentPosition = slider_con_all.length - 1 : currentPosition;
                $(slider_con_all).eq(currentPosition).css('left', -night_slider_con_width + 'px');
                $(slider_con_all).eq(currentPosition).animate({'left': 0}, 1000);
            } else if (this.className == 'two_ctrl_next') {
                auto();
            }
        })
    })
    //定时器设置
    var timer = null;
    timer = setInterval(auto, 2000);
    function auto() {
        $(slider_con_all).eq(currentPosition).animate({'left': -night_slider_con_width}, 1000);
        ++currentPosition > $(slider_con_all).length - 1 ? currentPosition = 0 : currentPosition;
        $(slider_con_all).eq(currentPosition).css('left', night_slider_con_width + 'px');
        $(slider_con_all).eq(currentPosition).animate({'left': 0}, 1000);
    }

//倒计时开始
    var endTime = new Date("2017/12/12 20:30:00");
    setInterval(clock, 1000);//定时器开始
    function clock() {
        var nowTime = new Date();
        var second = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
        var h = parseInt(second / 60 / 60 % 24);
        var m = parseInt(second / 60 % 60);
        var s = parseInt(second % 60);
        h < 10 ? h = "0" + h : h;
        m < 10 ? m = "0" + m : m;
        s < 10 ? s = "0" + s : s;
        $('.timing_hours').find('span').html(h);
        $('.timing_minutes').find('span').html(m);
        $('.timing_seconds').find('span').html(s);
    }


//倒计时结束
// 发现好货 排行榜tab切换
    $('.ranking_tab').find('a').each(function (i, elem) {
        $(this).mouseenter(function () {
            $('.tab_active').animate({'left': 10 + 77 * i}, 300);
            $('.ranking_tab_con').find('div').eq(i).show().siblings().hide();
        })

    })
// 发现好货 排行榜tab切换结束

// 爱生活轮播
    $(".living_content_b").hover(function () {
        $(".living_ctrl_prev").show();
        $(".living_ctrl_next").show();
    }, function () {
        $(".living_ctrl_prev").hide();
        $(".living_ctrl_next").hide();
    });

    var $ul_width = $('.living_content_b').find('ul').width();
    var cid = 0;
    $('.living_ctrl_prev').click(function () {
        cid = cid % 2;
        $('.living_content_b ul').eq((cid + 1) % 2).css({'left': $ul_width, 'display': 'block'});
        $('.living_content_b ul').eq((cid + 1) % 2).animate({left: 0}, 300);
        $('.living_content_b ul').eq(cid).animate({left: -$ul_width}, 300, function () {
            $('.living_content_b ul').eq(cid).css('display', 'none');
            $('.living_content_b ul').eq(cid).css('left', '0');
            cid++;
        });
    });
    $('.living_ctrl_next').click(function () {
        cid = cid % 2;
        $('.living_content_b ul').eq((cid + 1) % 2).css('left', -$ul_width);
        $('.living_content_b ul').eq((cid + 1) % 2).css('display', 'block');
        $('.living_content_b ul').eq((cid + 1) % 2).animate({left: 0}, 300);
        $('.living_content_b ul').eq(cid).animate({left: $ul_width}, 300, function () {
            $('.living_content_b ul').eq(cid).css('display', 'none');
            $('.living_content_b ul').eq(cid).css('left', '0');
            cid++;
        });
    });

// 爱生活轮播结束

//搜索区域滚动展示
    var fs = document.getElementById('fs');
    var windowHeight = $(window).height();
    window.onscroll = function () {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        if (top >= windowHeight) {
            fs.className = "jd_float_search fixed";
        } else {
            fs.className = "jd_float_search";
        }
    }

    // 回到顶部
    $(".jd_side_roof").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 50);
        return false;
    });
    

})

