$(function(){
    $("#project-info").on("click",function(){
        window.location.href  = window.location.origin+"/about/about.html/#project-info-div";
        // window.location.assign("{{site.baseurl}}/about/about.html/#project-info-div");
        // var l={{site.baseurl}}
        // document.getElementById('project-info-div').focus();
    });
    $("#contact-info").on("click",function(){
        // window.location.href = "{{site.baseurl}}/about/about.html/#project-info-div";
        window.location.hash='#contact-info-div';
    });
})