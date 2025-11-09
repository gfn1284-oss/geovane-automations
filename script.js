// script.js - small interactions
document.addEventListener('DOMContentLoaded', function(){
  // Example: smooth scroll for internal links (if needed)
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(ev){
      ev.preventDefault();
      var target = document.querySelector(a.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
});
