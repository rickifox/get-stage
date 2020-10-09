function clickonme() {
    var btn= document.getElementById("header-links-btn");
    if (btn.className==="header-links"){
        btn.className+=" responsive";
        
    }else {
        btn.className="header-links";
    }
}