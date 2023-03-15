var registValidate = {
    lang: 'ja',
    rules:{
        family_name:{
            required: true
        },
        given_name:{
            required: true
        },
        nickname:{
            required: true
        },
        postal_code:{
            required: true
        },
        locality:{
            required: true
        },
        administrative_district_level_1:{
            required: true
        },
        phone_number:{
            required: true,
            number: true,
        },
        birthday:{
            required: true,
        }
    }
}

var $form = $('#signup-form');

$(function(){
    $form.submit(function(event){
        event.preventDefault();
        $form.validate(registValidate);

        if(!$form.valid()){
            return false;
        };

        var serialize = $form.serializeArray();
        var data = {}

        for (idx in serialize) {
            var key   = serialize[idx]["name"];
            var value = serialize[idx]["value"];
            data[key] = value;
        }

        $.ajax({
            url: 'https://fecen3ssuc.execute-api.ap-northeast-1.amazonaws.com/Prod/hello',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            scriptCharset: 'utf-8',
            crossDomain: true,
            data: JSON.stringify(data)
            })
            .done(function(){
                window.location.href = '/thanks.html';
            })
            .fail(function(){
                console.log('fail');
            })
    });
})