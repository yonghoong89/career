$(document).ready(function(){

    $(".tab_lst a").on("click",function(){
        var tabId = $(this).attr("href");
        $(".tab_lst a").removeClass("active");
        $(this).addClass("active");
        $(".cont_bx").removeClass("active");
        $(tabId).addClass("active");        
        console.log(tabId)
        return false;
    });

    $(".subtab_lst a").on("click",function(){
        var tabId = $(this).attr("href");
        console.log(tabId)
        $(".subtab_lst a").removeClass("active");
        $(this).addClass("active");
        $(".cont_lst").removeClass("active");
        $(tabId).addClass("active");        
        return false;
    });

    //$('.cont_lst a').attr("target","_blank")

    var tab_html_li = $("#tab_html").find("li").length-1
    var tab_css_li = $("#tab_css").find("li").length-1
    var tab_javascript_li = $("#tab_javascript").find("li").length-1
    
    for(i=0;i<=tab_html_li;i++){
        $("#tab_html li").eq(i).find("a").prepend(i+1+". ")
    }

    for(i=0;i<=tab_css_li;i++){
        $("#tab_css li").eq(i).find("a").prepend(i+1+". ")
    }

    for(i=0;i<=tab_javascript_li;i++){
        $("#tab_javascript li").eq(i).find("a").prepend(i+1+". ")
    }

    //이전페이지
    $(".btn_prev").on("click",function(){
        history.go(-1);
    })

    $(".button__view").on("click",function(){
        $(this).toggleClass('active').next().toggleClass('box__content--active');
    })

});