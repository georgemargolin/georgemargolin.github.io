 // ===================================================================
 // Author: George Margolin <george.margolin@hotmail.com>
 // ===================================================================
/* SOURCE FILE: pagescripts.js */
 function generateMenu(id)
 {
  text ='<div align="left" class="horizontalcssmenu">';
  text+='<ul id="cssmenu1" style="border-left:1px solid #202020;">';
  text+='<li><a href="2019_philly.htm">Philadelphia<br></a></li>';
  text+='<li><a href="2019_mason.htm">Masonic Temple<br></a></li>';
  text+='</ul>';
  text+='<br style="clear: left;" /></div>';
  document.getElementById(id).innerHTML=text; 
 }

 function goToURL(form)
 {
   var myindex=form.subpage.selectedIndex
   if(!myindex=="")
    {
      window.location.href=form.subpage.options[myindex].value;
    }
 }
 
 function generateDropdownMenu(id,index) {
  text ='<form name="Trips">';
  text+='<select name="subpage" size="1" onChange="goToURL(this.form)">';
  if (index==0) {text+='<option value="#" selected>Select subpage</option>';} 
   else {text+='<option value="#">Select subpage</option>';} 
  if (index==1) {text+='<option value="2008_nyc1.htm" selected>New York City 1<br></option>';} 
   else {text+='<option value="2008_nyc1.htm">New York City 1<br></option>';} 
  if (index==2) {text+='<option value="2008_nyc2.htm" selected>New York City 2<br></option>';} 
   else {text+='<option value="2008_nyc2.htm">New York City 2<br></option>';}  
  if (index==3) {text+='<option value="2008_niagara1.htm" selected>Niagara Falls 1<br></option>';} 
   else {text+='<option value="2008_niagara1.htm">Niagara Falls 1<br></option>';} 
  if (index==4) {text+='<option value="2008_niagara2.htm" selected>Niagara Falls 2<br></option>';} 
   else {text+='<option value="2008_niagara2.htm">Niagara Falls 2<br></option>';}  
  if (index==5) {text+='<option value="2008_niagara3.htm" selected>Niagara Falls 3<br></option>';} 
   else {text+='<option value="2008_niagara3.htm">Niagara Falls 3<br></option>';}  
  text+='</select></form>';
  document.getElementById(id).innerHTML=text;
 }

 function plusSlides(n) {
    showSlides(slideIndex += n);
 }
 function currentSlide(n) {
    showSlides(slideIndex = n);
 }
 function autoShow() {
    showSlides(slideIndex += 1);
    myVar=setTimeout(autoShow, 3000); // Change image every 3 seconds
 }
 function stopShow() {
    clearTimeout(myVar);
 }
 function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var thumbs = document.getElementsByClassName("thumb");

    if (n > slides.length) {slideIndex=1}
    else if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) { slides[i].style.display = "none" }
    for (i = 0; i < thumbs.length; i++) { thumbs[i].style.border="0px none red" }
    slides[slideIndex-1].style.display="block";
    thumbs[slideIndex-1].style.border="2px solid red";
    document.getElementById('numbertext').innerHTML=slideIndex+' of '+slides.length+'<br>'; // show slide number
    thumbIndex = Math.ceil(slideIndex/thumbSize);showThumbs(0); // display thumbnails
 }
 function showThumbs(n) {
    var i;
    var thumbs = document.getElementsByClassName("thumb");
    thumbIndex += n;
    if (thumbIndex < 1) {thumbIndex=1}
    else if (thumbIndex > Math.ceil(thumbs.length/thumbSize)) {thumbIndex = Math.ceil(thumbs.length/thumbSize)}
    for (i = 0; i < thumbs.length; i++) {thumbs[i].style.display = "none"};
    for (i = (thumbIndex-1)*thumbSize; i < Math.min(thumbIndex*thumbSize,thumbs.length); i++) {thumbs[i].style.display = "inline-block"};
 }
 function playAud() {
    aud1.play();
 }
 function pauseAud() {
    aud1.pause();
 }
