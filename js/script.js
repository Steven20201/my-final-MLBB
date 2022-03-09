$(document).ready(function(){
    $(".btn").click(function(){
        var attr = $(this).attr("data-li");

        $(".btn").removeClass("active");
        $(this).addClass("active");

        $(".item").hide();

        if(attr == "tank")  {
            $("."+attr).show();
        }

        else if(attr == "fighter")  {
            $("."+attr).show();
        }

        else if(attr == "assassin")  {
            $("."+attr).show();
        }

        else if(attr == "mage")  {
            $("."+attr).show();
        }

        else if(attr == "marksman")  {
            $("."+attr).show();
        }

        else if(attr == "support")  {
            $("."+attr).show();
        }
        else {
            $(".item").show();
        }
    });
});