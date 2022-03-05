$(document).ready(function(){
    $(".btn").click(function(){
        var attr = $(this).attr("data-li");

        $(".btn").removeClass("active");
        $(this).addClass("active");

        $(".item").hide();

        if(attr == "tank")  {
            $("."+attr).show();
        }

        if(attr == "fighter")  {
            $("."+attr).show();
        }

        if(attr == "assassin")  {
            $("."+attr).show();
        }

        if(attr == "mage")  {
            $("."+attr).show();
        }

        if(attr == "marksman")  {
            $("."+attr).show();
        }

        if(attr == "support")  {
            $("."+attr).show();
        }
    });
});