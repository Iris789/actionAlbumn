/*重点-两种状态的变化 1-新的状态-通过新添一种类名来区分状态 在新类名下同一个标签写不同的样式 按条件添加动画transition效果
                    2-原来的状态-某种情况下想恢复其原来的状态 删除新添的类名 旧雷鸣下按条件添加动画效果即可
                    1-或直接使用animation 里面可包含多个动画帧 麻烦
*/
var $wrapper = $('.wrapper'),
    $ul = $('.wrapper ul');

var timer = setTimeout(function () {
    $wrapper.removeClass('init');
}, 200);

$ul.on('click', 'li', function () {
    $wrapper.addClass('wrapper-active');
    $(this).addClass('active');
})
$('.close').on('click', function (e) {//会有事件冒泡到ul上
    e.stopPropagation();//取消冒泡
    $wrapper.removeClass('wrapper-active');
    $('.active').removeClass('active');
})

