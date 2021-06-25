$(function(){
    $(".project-info").on("click",function(){
        window.location.href  = "{{site.baseurl}}/about/about.html";
        // window.location.assign("{{site.baseurl}}/about/about.html/#project-info-div");
        // var l={{site.baseurl}}
        document.getElementById('project-info-div').focus();
    });
    $(".contact-info").on("click",function(){
        window.location.href = "{{site.baseurl}}/about/about.html/#contact-info-div";
    });
})