var imageArray = [];
imageArray[0] = "./images/Rand/rand1.jpg";
imageArray[1] = "./images/Rand/rand2.jpg";
imageArray[2] = "./images/Rand/rand3.jpg";
imageArray[3] = "./images/Rand/rand4.png";
imageArray[3] = "./images/Rand/chip.jpg";
function random()
{
	var r  = Math.floor(Math.random() * 4);
	document.getElementById("active-slide").innerHTML =  "<img src = "+ imageArray[r] + " alt = image of pc parts class = slide title = Welcome to our E-commerce page id = first>";
}

/*$(document).ready(function(e)){
  $('.search-panel .dropdown-menu').find('a').click(function(e){
    e.preventDefault();
    var param = $(this).attr("href").replace("#","");
    var concept = $(this).text();
    $('.search-panel span#search_concept').text(concept);
    $('.input-group #search_param').val(param);
  });
});
*/
