$(function () {
    $('.btn').hover(function () {
        $(this).toggleClass('bttn')
    })
    $('.btn').click(function () {
        var val=$('.sendin').val().trim()
        if (val.length>0 && val != '') {
           $('.chart').append('<li class="user"><span class="ren">'+val+'</span><img src="新建文件夹\黎明.svg" alt=""></li>')
           $('.sendin').val('')        
        }else{
            return $('.sendin').val('')
        }
        getmsg(val)
    })
    function getmsg(text) {
        $.ajax({
            type:'GET',
            url:'http://ajax.frontend.itheima.net:3006/api/robot',
            data:{
                spoken:text
            },
            success:function (res) {
                var value=res.data.info.text
                $('.chart').append('<li class="jq"><img src="新建文件夹\月球.svg" alt=""><span class="jqr">'+value+'</span></li>')
            }
        })
    }
})