/**
 * Created by Administrator on 2016/10/18.
 */

window.onload = function () {
    //关闭topbanner
    var oClose = document.getElementById('topbanner_close');
    var oBanner = document.getElementById('topbanner');
    oClose.onclick = function () {
        oBanner.style.display = 'none';
    }

    // 模态框页面
    $('#register').click(function () {
        $('.login_box').css('display', 'block');
        $('#mask').css('display', 'block');
        $('.login_name').focus();
    });
    $('.close').on('click', function () {
        $('.login_box').css('display', 'none');
        $('#mask').css('display', 'none');
    });
    $('.login_password').focus(function () {
        var str = $('.login_name').val();
        if (str == "") {
            $('.login_in p').css('visibility', 'visible');
        } else {
            var re1 = /^1\d{10}$/;
            var re2 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            if (!re1.test(str) && !re2.test(str)) {
                $('.login_in p').html('请输入正确的手机号码或者是邮箱！');
                $('.login_in p').css('visibility', 'visible');
            }
        }

    });

    $('.login_name').focus(function () {
        $('.login_in p').css('visibility', 'hidden');
    })
    $('.login_password').on('input propertyChange', function () {
        var str = $(this).val();
        if (str.length > 18) {
            str = str.substring(0, str.length - 1);
            $(this).val(str);
        }
    });
    //登录提交验证
    $('.login_box button').click(function () {
        $.post("test.php",
            {
                username: $('.login_name').val(),
                password: $('.login_password').val()

            }, function (data) {
                if (data == 1) {
                    $('.login_box').css('display', 'none');
                    $('#mask').css('display', 'none');
                    $('#register').html($('.login_name').val());

                } else if (data == 0) {
                    $('.login_box h6').css('visibility', 'visible');
                }
            }
        )
    });
    $(document).keypress(function (e) {
        // 回车键事件
        if (e.which == 13) {
            $('.login_box button').click();
        }
    });
    // 模态框页面结束


    //搜索区域的焦点事件
    //获得input表单

    var search_txt = document.getElementById('search_txt');
    //获得焦点事件
    search_txt.onfocus = function () {
        //判断input的值等于初始值得时候 value值清空，同时颜色值改为现在的值
        if (search_txt.value == '二合-平板') {
            search_txt.value = '';
            search_txt.style.color = '#333';
        }
    }
    //失去焦点事件
    search_txt.onblur = function () {
        if (search_txt.value == '') {
            search_txt.value = '二合-平板';
            search_txt.style.color = '#666';
        }
    }
    //搜索区域的焦点事件结束

    //轮播图开始
    var currentPosition = 0;
    var timer = null;
    // timer = setInterval(moveToNext, 3000);
    $('.slider_wrap img').hover(function () {
        // clearInterval(timer);
        $('.slider .triangle').css('display', 'block');
    }, function () {
        // timer = setInterval(moveToNext,3000);
        $('.slider .triangle').css('display', 'none');
    });
    moveToNext();
    function moveToNext() {
        $('.slider_wrap img').eq(0).css('margin-left', -730 + 'px');
    }

    //轮播图结束
    //life_list 区域
    var life_list = document.getElementById('life_list');
    var i_ico = life_list.getElementsByTagName('i');
    //遍历每一个图片
    for (var i = 0; i < 12; i++) {
        i_ico[i].style.backgroundPosition = "0 " + (-25 * i) + "px";
    }

}
