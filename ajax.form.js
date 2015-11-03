<script>
    $(document).ready(function() {
        var options = {
            beforeSubmit:  showRequest,
            success:       showResponse,
            dataType: 'json'
        };
        $('#image').on('change', function(){
            $('#upload-avatar').html('正在上传...');
            $('#avatar').ajaxForm(options).submit();
        });
    });
    function showRequest() {
        $("#validation-errors").hide().empty();
        $("#output").css('display','none');
        return true;
    }

    function showResponse(response)  {
        if(response.success == false)
        {
            var responseErrors = response.errors;
            $.each(responseErrors, function(index, value)
            {
                if (value.length != 0)
                {
                    $("#validation-errors").append('<div class="alert alert-error"><strong>'+ value +'</strong><div>');
                }
            });
            $("#validation-errors").show();
        } else {
            $('#user-avatar').attr('src',response.avatar);
            $('#upload-avatar').html('更换新的头像');
        }
    }
</script>