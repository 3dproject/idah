$(function(){
    $(".project-info").on("click",function(){
        // document.location.href  = "{{site.baseurl}}/about/about.html/#project-info-div";
        // window.location.assign("{{site.baseurl}}/about/about.html/#project-info-div");
        // var l={{site.baseurl}}
        $(location).attr('href',"{{site.baseurl}}/about/about.html/");
        document.getElementById('project-info-div').focus();
    });
    $(".contact-info").on("click",function(){
        window.location.href = "{{site.baseurl}}/about/about.html/#contact-info-div";
    });
})