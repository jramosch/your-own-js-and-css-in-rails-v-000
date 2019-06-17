/*
var link = document.getElementById('hide_this');

function hideWhenClicked() {
  link.style.display = "none"
}

link.addEventListener("click", hiddenWhenClicked);
*/

function hideWhenClicked(event) {
  var $target = $(event.target);
  $target.hide();
}

$('#hide_this').click(hideWhenClicked);
