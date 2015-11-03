<div class="text-center">
        <div id="validation-errors"></div>
        <img src="{{Auth::user()->avatar}}" width="120" class="img-circle" id="user-avatar" alt="">
        {!! Form::open(['url'=>'/avatar','files'=>true,'id'=>'avatar']) !!}
        <div class="text-center">
            <button type="button" class="btn btn-success avatar-button" id="upload-avatar">上传新的头像</button>
        </div>
        {!! Form::file('avatar',['class'=>'avatar','id'=>'image']) !!}
        {!! Form::close() !!}
        <div class="span5">
            <div id="output" style="display:none">
            </div>
        </div>
</div>