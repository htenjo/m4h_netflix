function openMenu() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeMenu() {
    document.getElementById("mySidenav").style.width = "0";
}

function assignQR(socialIcon){
  var icon = document.getElementById('qr-icon-src');
  icon.src = "img/qr_" + socialIcon + ".png";
}
