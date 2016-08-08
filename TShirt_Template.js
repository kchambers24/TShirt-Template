// console.log(location.hash);

$(document).ready(function(){
  var $mainShop = $(".mainContainer");
  var $imageView  = $('.imageView');
  var $checkout  = $('.checkout');

  // var $imagePage = $('.imageImagePage');


data.forEach(function(shirt){
  var shop = $(
    `<div class="mainTShirt">
    <div class="shirt">
    <img class="${shirt.id}" src="${shirt.image}" alt="no shirt for you" data-launch-view=${shirt.id}>
    <h2>T-SHIRTS</h2>
    <p class="innerText">Made of fresh All-American cotton<br>and some other stuff.</p>
    </div>
    <div class="navigationMenu">
    <ul>
    <li class="shirtTitle"><p>${shirt.name}</p></li>
    <li class="price"><p class="innerPrice"><strong>${shirt.price}</strong></p></li>
    </ul>
    </div>
    </div>`

  );
  $mainShop.append(shop);
});
});

$("img").click(function() {
	//logic that makes all shirt boxes disappear
	//then makes the one that got clicked reappear
})

// $("img").click(function() {
//
// })

$(document).ready(function (e) {

        function showView(shirtView) {
            $('.mainTShirt').hide();
    $('#' + shirtView.show());
    }
    //  $(.view).hide();

        $('[data-launch-view]').click(function (e) {
            e.preventDefault();
            var shirtView = $(this).attr('data-launch-view');
            showView(shirtView);
        });

    });



// Test JS
// function showPage(pageId) {
//     $(“.page”).hide();
//     $(pageId).show();
//
// }
//    location.hash = “”;
//    location.hash =“#a”;
//
//
// $(window).on(“hashchange”), function(){
//    //console.log(“hash changed! ” +location.hash);
//       showPage(location.hash);
// })
// End of Test JS
