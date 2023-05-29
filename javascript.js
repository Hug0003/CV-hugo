// Javascript m'a permit de faire les animations

//  je créer de variables des elements que je veux utiliser 
 const card = document.querySelector(".card");
 const blocFocusTop = document.querySelector(".bloc-focus-top");
 const blocFocusBottom = document.querySelector(".bloc-focus-bottom");
 const blocInfo = document.querySelector('.bloc-info');


// je créer un TimeLine pour faire des animations j'ai utilisé gsap que j ai ajouter dans un fichier pour ne pas utiliser internet
 const TLANIM = gsap.timeline({ paused: true });

// j'appelle ma TimeLine
 TLANIM
// j'ecris quel élement fait quoi et va où en combien de temps donc là le bloc info et 
// les 2 blocs blancs vont aller se placer avec les coordonnées que je souhaite avec la durée de l'animation
   .to(blocFocusTop, { top: -30, left: 230, duration: 0.6 }, 0.3)
   .to(blocFocusBottom, { bottom: -30, left: -30, duration: 0.6 },0.3)
   .to(blocInfo,{left:400, top:150, duration: 0.6}, 0.3)

// je precise que c'est lorsque la souri survole la carte (ma photo) que la TimeLine va se faire
 card.addEventListener("mouseenter", () => {
   TLANIM.play();
 });

// je pourrais faire aussi quand la souri quitte la carte les animations reviennent a leur position originel 
// avec mouseleave et reverse
// mais ce n'est pas pratique pour lire le CV
