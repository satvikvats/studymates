$(document).ready(function(){
    $('#header').load('../header-ads.html');
    $('#footer').load('../footer-ads.html');

    var data = [
        {"id":"1","name":"Anind K. Dey","desc":"Dean and Professor","profile_image":"anind.jpg"},
        {"id":"2","name":"Megan Finn","desc":"Assistant Professor","profile_image":"megan.jfif"},
        {"id":"3","name":"Batya Friedman","desc":"Professor","profile_image":"batya.jpg"},
        {"id":"4","name":"Greg Hay","desc":"Lecturer","profile_image":"greg.jpg"},
        {"id":"5","name":"David G. Hendry","desc":"Associate Professor","profile_image":"david.jpg"},
        {"id":"6","name":"Amy J. Ko","desc":"Associate Professor, Informatics Program Chair","profile_image":"amy.jpg"},
        {"id":"7","name":"Amanda Menking","desc":"Senior Lecturer, MHCI+D Program","profile_image":"amanda.jpg"},
        {"id":"8","name":"Nam-ho Park","desc":"Lecturer","profile_image":"nam.jpg"},
        {"id":"9","name":"Wanda Pratt","desc":"Professor\n","profile_image":"wanda.jpg"},
        {"id":"10","name":"Timothy S. Carlson","desc":"Part-Time Lecturer","profile_image":"tim.jpg"}];

    $('#txt-search').keyup(function(){
        var searchField = $(this).val();
        if(searchField === '')  {
            $('#filter-records').html('');
            return;
        }

        var regex = new RegExp(searchField, "i");
        var output = '<div class="row">';
        var count = 1;
        $.each(data, function(key, val){
            if ((val.desc.search(regex) != -1) || (val.name.search(regex) != -1)) {
                output += '<div class="col-md-6 well">';
                output += '<div class="col-md-3"><img style="width: 160px" src="'+val.profile_image+'" alt="'+ val.name +'" /></div>';
                output += '<div class="col-md-7">';
                output += '<h5>' + val.name + '</h5>';
                output += '<p>' + val.desc + '</p>'
                output += '</div>';
                output += '</div>';
                if(count%2 == 0){
                    output += '</div><div class="row">'
                }
                count++;
            }
        });
        output += '</div>';
        $('#filter-records').html(output);
    });
});


