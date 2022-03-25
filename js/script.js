$(document).ready(function(){
    $(".btn").click(function(){
        var attr = $(this).attr("data-li");

        $(".btn").removeClass("active");
        $(this).addClass("active");

        $(".item").hide();

        if(attr == "tank")  {
            $("."+attr).show();
            document.getElementById("myInput").style.display = "none";
        }

        else if(attr == "fighter")  {
            $("."+attr).show();
            document.getElementById("myInput").style.display = "none";
        }

        else if(attr == "assassin")  {
            $("."+attr).show();
            document.getElementById("myInput").style.display = "none";
        }

        else if(attr == "mage")  {
            $("."+attr).show();
            document.getElementById("myInput").style.display = "none";
        }

        else if(attr == "marksman")  {
            $("."+attr).show();
            document.getElementById("myInput").style.display = "none";
        }

        else if(attr == "support")  {
            $("."+attr).show();
            document.getElementById("myInput").style.display = "none";
        }
        else {
            $(".item").show();
            document.getElementById("myInput").style.display = "block";
        }
    });
});