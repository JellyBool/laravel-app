// else 里面
var cropBox = $("#cropbox");
cropBox.attr('src',response.avatar);
$('#photo').val(response.avatar);
$('#upload-avatar').html('更换新头像');
$('#exampleModal').modal('show');
cropBox.Jcrop({
    aspectRatio: 1,
    onSelect: updateCoords,
    setSelect: [120,120,10,10]
});
$('.jcrop-holder img').attr('src',response.avatar);


//添加的两个function
function updateCoords(c)
{
    $('#x').val(c.x);
    $('#y').val(c.y);
    $('#w').val(c.w);
    $('#h').val(c.h);
}
function checkCoords()
{
    if (parseInt($('#w').val())) return true;
    alert('请选择图片.');
    return false;
}