var ajax = {
    get:function(url,obj,success,fail){
        obj = obj || {};
        obj.url = location.href;
        Zepto.ajax({
            'type':"GET",
            'url':url,
            'data':obj;
            'timeout':30000,
            'dataType':"json",
            'context': $('body'),
            'success':function(data){
                success && success(data);
            },
            'error':function(xhr, errorType, error){
                fail && fail(error,xhr,errorType);
            }

        });
    },
};