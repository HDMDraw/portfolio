// Change la largeur de la side navivgation à 250px 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("openBtn").style.opacity = 0;
  }

// Change la largeur de la side navigation à 0 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("openBtn").style.opacity = 100;
  }

/* ====================== A DEBUGGER ====================== */
/*
// Change le thème de la page
function changementTheme() {
  alert(document.getElementById("theme").src)
  if(localStorage.getItem("theme") == 'light') {
    document.body.style.background = "linear-gradient(90deg, rgb(81, 76, 235) 0%, rgb(209, 78, 185) 100%)"
    document.getElementById("acc").src = "acc_img.png"
    document.getElementById("docs").src = "docs_img.png"
    document.getElementById("vt").src = "vt_img.png"
    document.getElementById("act").src = "act_img.png"
    document.getElementById("menu").src = "menu_img.png"
    document.getElementById("theme").src = "theme_img.png"
    document.h2.style.color = "black"
    document.h1.style.color = "black"
    localStorage.setItem("theme", "light")
  }
  else {
    if(localStorage.getItem("theme") == "dark") {
      document.body.style.background = "linear-gradient(90deg, rgba(57,53,210,1) 0%, rgba(220,0,181,1) 100%)"
      document.getElementById("acc").src = "acc_img_light.png"
      document.getElementById("docs").src = "docs_img_light.png"
      document.getElementById("vt").src = "vt_img_light.png"
      document.getElementById("act").src = "act_img_light.png"
      document.getElementById("menu").src = "menu_img_light.png"
      document.getElementById("theme").src = "theme_img_light.png"
      document.h2.style.color = "white"
      document.h1.style.color = "white"
    }
  } 
}

// Vérifier le thème de la page 
function verifTheme() {
  if (typeof localStorage.getItem("theme") === 'undefined') {
    localStorage.setItem("theme", "light")
    document.body.style.background = "linear-gradient(90deg, rgba(57,53,210,1) 0%, rgba(220,0,181,1) 100%)"
    document.getElementById("acc").src = "acc_img_light.png"
    document.getElementById("docs").src = "docs_img_light.png"
    document.getElementById("vt").src = "vt_img_light.png"
    document.getElementById("act").src = "act_img_light.png"
    document.getElementById("menu").src = "menu_img_light.png"
    document.getElementById("theme").src = "theme_img_light.png"
    document.h2.style.color = "white"
    document.h1.style.color = "white"
  }
  else {
    if(localStorage.getItem("theme") == 'light') {
      document.body.style.background = "linear-gradient(90deg, rgba(57,53,210,1) 0%, rgba(220,0,181,1) 100%)"
      document.getElementById("acc").src = "acc_img_light.png"
      document.getElementById("docs").src = "docs_img_light.png"
      document.getElementById("vt").src = "vt_img_light.png"
      document.getElementById("act").src = "act_img_light.png"
      document.getElementById("menu").src = "menu_img_light.png"
      document.getElementById("theme").src = "theme_img_light.png"
      document.h2.style.color = "white"
      document.h1.style.color = "white"
  }
  else {
    if(localStorage.getItem("theme") == 'dark') {
      document.body.style.background = "linear-gradient(90deg, rgb(81, 76, 235) 0%, rgb(209, 78, 185) 100%)"
      document.getElementById("acc").src = "acc_img.png"
      document.getElementById("docs").src = "docs_img.png"
      document.getElementById("vt").src = "vt_img.png"
      document.getElementById("act").src = "act_img.png"
      document.getElementById("menu").src = "menu_img.png"
      document.getElementById("theme").src = "theme_img.png"
      document.h2.style.color = "black"
      document.h1.style.color = "black"
    }
  }
}
*/