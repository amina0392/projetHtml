$(document).ready(function(){ 
    // if(page=="accueil"){
    //     $("#linkIdee").removeClass("choix");
    //     $("#linkAccueil").addClass("choix");
    // }
    // if(page=="idees"){
    //     $("#linkAccueil").removeClass("choix");
    //     $("#linkIdee").addClass("choix");
    // }   
    if($("main").hasClass("accueil")){
        $("#linkIdee,#linkContact").removeClass("choix");
        $("#linkAccueil").addClass("choix");
    }
    if($("main").hasClass("idees")){
        $("#linkAccueil,#linkContact").removeClass("choix");
        $("#linkIdee").addClass("choix");
        }
    if($("main").hasClass("contact")){
        $("#linkAccueil,#linkIdee").removeClass("choix");
        $("#linkContact").addClass("choix");
        }
        
})