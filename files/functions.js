// ===================================================================
// Author: George Margolin <george.margolin@verizon.net>
// ===================================================================
/* SOURCE FILE: functions.js */
function goToURL1(form)
{
  var myindex1=form.dropdownmenu.selectedIndex
  if(!myindex1=="")
   {
     window.location.href=form.dropdownmenu.options[myindex1].value;
   }
}
function generateDropdownEn(id,value)
{
 text ='<form name="Trips">';
 text+='<select name="dropdownmenu" size="1" onChange="goToURL1(this.form)">';
 text+='<option value="#" selected>Change page</option>';
 if (value=="../2020_sandy_hook/2020_sandy_hook.htm") {text+='<option selected value="../2020_sandy_hook.htm">Sandy Hook, 2020</option>';}
  else {text+='<option value="../2020_sandy_hook/2020_sandy_hook.htm">Sandy Hook, 2020</option>';}
 if (value=="../2019_perth_amboy/2019_perth_amboy.htm") {text+='<option selected value="../2019_perth_amboy.htm">Cornucopia Cruise, 2019</option>';}
  else {text+='<option value="../2019_perth_amboy/2019_perth_amboy.htm">Cornucopia Cruise Cruise, 2019</option>';}
 if (value=="../2019_cruise/2019_nyc.htm") {text+='<option selected value="../2019_cruise/2019_nyc.htm">New England - Canada Cruise, 2019</option>';}
  else {text+='<option value="../2019_cruise/2019_nyc.htm">New England - Canada Cruise, 2019</option>';}
 if (value=="../2019_philly/2019_philly.htm") {text+='<option selected value="../2019_philly/2019_philly.htm">Philadelphia, PA, 2019</option>';}
  else {text+='<option value="../2019_philly/2019_philly.htm">Philadelphia, PA, 2019</option>';}
 if (value=="../2019_lyndhurst/2019_lyndhurst.htm") {text+='<option selected value="../2019_lyndhurst/2019_lyndhurst.htm">Lyndhurst, NY, 2019</option>';}
  else {text+='<option value="../2019_lyndhurst/2019_lyndhurst.htm">Lyndhurst, NY, 2019</option>';} 
 if (value=="../2019_retro/2019_retro.htm") {text+='<option selected value="../2019_retro/2019_retro.htm">Back to Russia</option>';}
  else {text+='<option value="../2019_retro/2019_retro.htm">Back to Russia</option>';}
 if (value=="../2018_cuba/2018_miami.htm") {text+='<option selected value="../2018_cuba/2018_miami.htm">Havana Cruise, 2018</option>';}
  else {text+='<option value="../2018_cuba/2018_miami.htm">Havana Cruise, 2018</option>';}
 if (value=="../2018_longwood/2018_longwood.htm") {text+='<option selected value="../2018_longwood/2018_longwoodt.htm">Lonngwood Gardens, 2018</option>';}
  else {text+='<option value="../2018_longwood/2018_longwood.htm">Lonngwood Gardens, 2018</option>';}
 if (value=="../2018_houseboat/2018_houseboat.htm") {text+='<option selected value="../2018_houseboat/2018_houseboat.htm">Raystown Houseboat, 2018</option>';}
  else {text+='<option value="../2018_houseboat/2018_houseboat.htm">Raystown Houseboat, 2018</option>';}
 if (value=="../2018_old_bridge/2018_old_bridge.htm") {text+='<option selected value="../2018_old_bridge/2018_old_bridge.htm">Old Bridge, NJ, 2018</option>';}
  else {text+='<option value="../2018_old_bridge/2018_old_bridge.htm">Old Bridge, NJ, 2018</option>';}
 if (value=="../2018_cruise/2018_venice.htm") {text+='<option selected value="../2018_cruise/2018_venice.htm">East Mediterranian Cruise, 2018</option>';}
  else {text+='<option value="../2018_cruise/2018_venice.htm">East Mediterranian Cruise, 2018</option>';}
 if (value=="../poetry/kipling.htm") {text+='<option selected value=../poetry/kipling.htm">Poetry</option>';}
  else {text+='<option value="../poetry/kipling.htm">Poetry</option>';}
 if (value=="../2018_eugene/2018_eugene.htm") {text+='<option selected value=../2018_eugene/2018_eugene.htm">Port Liberte, 2018</option>';}
  else {text+='<option value="../2018_eugene/2018_eugene.htm">Port Liberte, 2018</option>';}
 if (value=="../2017_panama/2017_fll.htm") {text+='<option selected value=../2017_panama/2017_fll.htm">Panama Canal, 2017</option>';}
  else {text+='<option value="../2017_panama/2017_fll.htm">Panama Canal, 2017</option>';}
 if (value=="../2017_nyc/2017_moma.htm") {text+='<option selected value="../2017_nyc/2017_moma.htm">NYC, NY, 2017</option>';}
  else {text+='<option value="../2017_nyc/2017_moma.htm">NYC, NY, 2017</option>';}
 if (value=="../2017_quantico/2017_quantico.htm") {text+='<option selected value="../2017_quantico/2017_quantico.htm">Quantico, VA, 2017</option>';}
  else {text+='<option value="../2017_quantico/2017_quantico.htm">Quantico, Alexandria, VA, 2017</option>';}
 if (value=="../2017_petersburg/2017_petersburg.htm") {text+='<option selected value="../2017_petersburg/2017_petersburg.htm">St.Petersburg, 2017</option>';}
  else {text+='<option value="../2017_petersburg/2017_petersburg.htm">St.Petersburg, Tallinn, 2017</option>';}
 if (value=="../2017_cuba/2017_sky.htm") {text+='<option selected value="../2017_cuba/2017_sky.htm">Cruise to Havana, Cuba, 2017</option>';}
  else {text+='<option value="../2017_cuba/2017_sky.htm">Cruise to Havana, Cuba, 2017</option>';}
 if (value=="../2017_graduation/2017_graduation.htm") {text+='<option selected value="../2017_graduation/2017_graduation.htm">Anton\'s graduation, 2017</option>';}
  else {text+='<option value="../2017_graduation/2017_graduation.htm">Anton\'s graduation, 2017</option>';}
 if (value=="../2017_cruise/2017_civitavecchia.htm") {text+='<option selected value="../2017_cruise/2017_civitavecchia.htm">West Mediterranian Cruise, 2017</option>';}
  else {text+='<option value="../2017_cruise/2017_civitavecchia.htm">West Mediterranian Cruise, 2017</option>';}
 if (value=="../2017_Korneev/2017_liap.htm") {text+='<option selected value="../2017_Korneev/2017_liap.htm">LIAP reminiscence, 2017</option>';}
  else {text+='<option value="../2017_Korneev/2017_liap.htm">LIAP reminiscence, 2017</option>';}
  
 text+='<option value="../2016_washington/2016_washington.htm">Washington, DC, 2016</option>';
 text+='<option value="../2016_budapest/2016_budapest.htm">Budapest, Hungary, 2016</option>';
 text+='<option value="../2016_highlands/2016_highlands.htm">Highlands, NJ, 2016</option>';
 text+='<option value="../2016_sf/2016_sf.htm">San Francisco, 2016</option>';
 text+='<option value="../2016_kira_luda/2016_kira_luda_pa.htm">Kira & Luda in US, 2016</option>';
 text+='<option value="../2015_alaska/2015_vancouver.htm">Alaska, Yukon, 2015</option>';
 text+='<option value="../2015_middle_west/2015_cleveland.htm">Middle West, 2015</option>';
 text+='<option value="../2015_washington/2015_washington.htm">Hillwood Mansion, Washington, DC, 2015</option>';
 text+='<option value="../2015_natasha_us/2015_natasha_ny.htm">Natasha in US, 2015</option>';
 text+='<option value="../2015_kira_ny/2015_kira_ny.htm">Kira in NYC, 2015</option>';
 text+='<option value="../2015_botanical_garden/2015_botanical_garden.htm">Botanical Garden, January 2015</option>';
 text+='<option value="../2014_karasiks/2014_karasiks.htm">Karasiks, 2014</option>';
 text+='<option value="../2014_cruise/2014_cruise.htm">West Coast Cruise, 2014</option>';
 text+='<option value="../2014_new_haven/2014_new_haven.htm">East Haven, New Haven, 2014</option>';
 text+='<option value="../2013_caribbean_cruise2/2013_caribbean_cruise2.htm">West Caribbean Cruise, 2013</option>';
 text+='<option value="../2013_long_island/2013_long_island.htm">Down the river, Long Island, NY, 2013</option>';
 text+='<option value="../2013_houseboat/2013_houseboat.htm">Raystown Lake, PA, 2013</option>';
 text+='<option value="../2013_raritan_bay/2013_raritan_bay.htm">4th of July firework, 2013</option>';
 text+='<option value="../2013_caribbean_cruise/2013_caribbean_cruise.htm">East_Caribbean Cruise, 2013</option>';
 text+='<option value="../2012_train_steamboat/2012_train_steamboat.htm">Train, steamboat, submarine, CT, 2012</option>';
 text+='<option value="../2012_gardens/2012_gardens.htm">Grounds for Sculpture, Hamilton, NJ, 2012</option>';
 text+='<option value="../2011_newyork/newyork_2011.htm">The Karasiks in New York, 2011</option>';
 text+='<option value="../2011_fort_tryon/fort_tryon_2011.htm">The Cloisters in Fort Tryon Park, NYC, 2011</option>';
 text+='<option value="../2011_monticello1/monticello_2011.htm">Monticello, VA, 2011</option>';
 text+='<option value="../2011_henryville/henryville_2011.htm">Sunset Hill at Henryville, PA, 2011</option>';
 text+='<option value="../2011_prague/prague_2011.htm">Liberec, Prague, Karlovy Vary, Dresden, 2011</option>';
 text+='<option value="../2011_north_carolina/north_carolina_2011.htm">Kill Devil Hills, NC, 2011</option>';
 text+='<option value="../2011_dominican/dominican_2011.htm">Dreams La Romana, Dominican Republic, 2011</option>';
 text+='<option value="../2010_phila/2010_phila.htm">Philadelphia, PA, 2010</option>';
 text+='<option value="../2010_nyc/2010_nyc.htm">New York City, 2010</option>';
 text+='<option value="../2010_montauk/2010_montauk.htm">Montauk, NY, 2010</option>';
 text+='<option value="../2010_1000_islands/2010_1000_islands.htm">1000 Islands - Canada National Park, 2010</option>';
 text+='<option value="../2009_fishcreek/2009_fishcreek.htm">Fishcreek, NY, 2009</option>';
 text+='<option value="../2009_washington/2009_washington.htm">Washington, DC 2009</option>';
 text+='<option value="../2008_puerto_rico/puerto_rico_2008.htm">Puerto Rico, 2008</option>';
 text+='<option value="../2008_texas/texas_2008.htm">Texas and New Orleans, 2008</option>';
 text+='<option value="../2008_1000_islands/1000_islands_2008.htm">St.Lawrence River by Water, 2008</option>';
 text+='<option value="http://eugesok.99k.org/jamaica_2008/jamaica_2008.htm">Jamaica, 2008(Natasha, Eugene)</option>';
 if (value=="../2008_zacharov/2008_zacharov.htm") {text+='<option selected value="../2008_zacharov/2008_zacharov.htm">Zacharov in US, 2008</option>';}
  else {text+='<option value="../2008_zacharov/2008_zacharov.htm">Zacharov in US, 2008</option>';}
 text+='<option value="../2007_rideaucanal/rideaucanal_2007.htm">Rideau Canal, Canada, 2007</option>';
 text+='<option value="../2007_cape_cod/cape_cod_2007.htm">Cape Cod, MA, 2007</option>';
 text+='<option value="../2007_spain/spain_2007.htm">Spain, 2007</option>';
 text+='<option value="http://eugesok.99k.org/italy_2007/italy_2007.htm">Italy, 2007(Natasha, Eugene)</option>';
 text+='<option value="../2006_aruba/aruba_2006.htm">Aruba, 2006</option>';
 text+='<option value="../2006_trent/trent_2006.htm">Trent-Severn Waterway, Canada, 2006</option>';
 text+='<option value="../2006_montreal/montreal_2006.htm">Montreal Jazz Festival, Canada, 2006</option>';
 text+='<option value="../2005_dogsledding/dogsledding_2005.htm">Dog Sledding, Canada, 2005</option>';
 text+='<option value="../2005_1000_islands/1000_islands_2005.htm">1000 Islands from Alexandria Bay, NY, 2005</option>';
 text+='<option value="../2002_paris/paris_02.htm">Paris, 2002</option>';
 text+='<option value="../photoalbum/photoalbum.htm">Photo Album</option>';
 text+='<option value="../videoalbum/videoalbum.htm">Video Album</option>';
 text+='<option value="../home_parlin/home_parlin.htm">8 Wieczorkowski Ave</option>';
 text+='</select></form>';
 document.getElementById(id).innerHTML=text;
}
function generateDropdownRus(id)
{
 text ='<form name="Trips">';
 text+='<select style="font-family:Timesse Cyr,Couriere Cyr,Verdana" name="dropdownmenu" size="1" onChange="goToURL(this.form)">';
 text+='<option selected value="">Other trips';
 text+='<option value="../2015_middle_west/2015_cleveland.htm">Middle West, 2015';
 text+='<option value="../2015_natasha_us/2015_natasha_ny.htm">Natasha in US, 2015';
 text+='<option value="../2014_cruise/2014_cruise.htm">West Coast Cruise, 2014';
 text+='<option value="../2014_new_haven/2014_new_haven.htm">East Haven, New Haven, 2014';
 text+='<option value="../2013_caribbean_cruise2/2013_caribbean_cruise2.htm">West Caribbean Cruise, 2013';
 text+='<option value="../2013_caribbean_cruise/2013_caribbean_cruise.htm">East Caribbean Cruise, 2013';
 text+='<option selected value="">Другие поездки';
 text+='<option value="../2012_gardens/2012_gardens.htm">Grounds for Sculpture, Hamilton, NJ, 2012';
 text+='<option value="../2011_monticello/2011_monticello_rus.htm">Monticello, VA, 2011';
 text+='<option value="../2011_henryville/2011_henryville_rus.htm">Sunset Hill at Henryville, PA, 2011';
 text+='<option value="../2011_prague/2011_prague_rus.htm">Liberec, Prague, Karlovi Vari, Dresden, 2011';
 text+='<option value="../2011_north_carolina/2011_north_carolina_rus.htm">Кил Девил Хиллс (Kill Devil Hills), штат Северная Каролина, 2011';
 text+='<option value="../2011_dominican/2011_dominican_rus.htm">Дримс ла Романа (Dreams La Romana), Доминиканская республика, 2011';
 text+='<option value="../2010_phila/2010_phila.htm">Филадельфия, штат Пенсильвания, 2010';
 text+='<option value="../2010_nyc/2010_nyc.htm">New York City';
 text+='<option value="../2010_montauk/2010_montauk_rus.htm">Монтак (Montauk, NY), штат Нью-Йорк, 2010';
 text+='<option value="../2010_1000_islands/2010_1000_islands_rus.htm">1000 Островов - Национальный Парк Канады, 2010';
 text+='<option value="../2009_fishcreek/2009_fishcreek.htm">Фишкрик (Fishcreek, NY), штат Нью-Йорк, 2009';
 text+='<option value="../2009_washington/2009_washington_rus.htm">Вашингтон, округ Колумбия (Washington, DC), 2009';
 text+='<option value="../puerto_rico_2008/puerto_rico_2008_rus.htm">Пуэрто Рико 2008';
 text+='<option value="../texas_2008/texas_2008_rus.htm.htm">Техас и Новый Орлеан 2008';
 text+='<option value="../1000_islands_2008/1000_islands_2008_rus.htm">Река Св. Лаврентия и 1000 Островов 2008';
 text+='<option value="../rideaucanal_2007/rideaucanal_2007_rus.htm">Ридо Канал (Rideau Canal), Канада, 2007';
 text+='<option value="../cape_cod_2007/cape_cod_2007_rus.htm">Кейп Код (Cape Cod, МА), штат Масачусетс, 2007';
 text+='<option value="../2007_spain/spain_2007_rus.htm">Испания 2007';
 text+='<option value="http://eugesok.99k.org/italy_2007/italy_2007_rus.htm">Италия 2007';
 text+='<option value="../2006_aruba/aruba_2006_rus.htm">Аруба 2006';
 text+='<option value="../trent_2006/trent_2006_rus.htm">Трент-Северн водный путь (Trent-Severn Waterway), Канада, 2006';
 text+='<option value="../dogsledding_2005/dogsledding_2005_rus.htm">На собачьих упряжках, Канада, 2005';
 text+='<option value="../1000_islands_2005/1000_islands_2005_rus.htm">1000 Островов, Александрия Бей (Alexandria Bay, NY), 2005';
 text+='<option value="../2002_paris/paris_02_rus.htm">Париж, 2002';
 text+='</select></form>';
 document.getElementById(id).innerHTML=text;
}
function translateToRussian(id)
{
 var event=' onMouseOver="return escape(\'Click to translate to Russian\')"';
 var url=location.href;
 var url1=url.replace(/:/g,'%3A');
 var url2=url1.replace(/\//g,'%2F');

 text ='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=en&tl=ru&u='+url2+'" target="_blank"'+event+'>Rus</a><br>';
 text+='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=en&tl=ru&u='+url2+'" target="_blank"'+event+'>';
 text+='<img src="images/flag_russian.jpg" width="30" height="20" hspace="0" vspace="0">';
 document.getElementById(id).innerHTML=text;
}
function translateToEnglish(id)
{
 var event=' onMouseOver="return escape(\'Click to translate to English\')"';
 var url=location.href;
 var url1=url.replace(/:/g,'%3A');
 var url2=url1.replace(/\//g,'%2F');

 text ='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=ru&tl=en&u='+url2+'" target="_blank"'+event+'>En</a><br>';
 text+='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=ru&tl=en&u='+url2+'" target="_blank"'+event+'>';
 text+='<img src="images/flag_british.png" width="30" height="20" hspace="0" vspace="0">';
 document.getElementById(id).innerHTML=text;
}
function translateToSpanish(id)
{
 var event=' onMouseOver="return escape(\'Click to translate to Spanish\')"';
 var url=location.href;
 var url1=url.replace(/:/g,'%3A');
 var url2=url1.replace(/\//g,'%2F');

 text ='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=en&tl=es&u='+url2+'" target="_blank"'+event+'>Span</a><br>';
 text+='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=en&tl=es&u='+url2+'" target="_blank"'+event+'>';
 text+='<img src="images/flag_spanish.jpg" width="30" height="20" hspace="0" vspace="0" >';
 document.getElementById(id).innerHTML=text;
}
function translateToFrench(id)
{
 var event=' onMouseOver="return escape(\'Click to translate to French\')"';
 var url=location.href;
 var url1=url.replace(/:/g,'%3A');
 var url2=url1.replace(/\//g,'%2F');

 text ='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=en&tl=fr&u='+url2+'" target="_blank"'+event+'>Fra</a><br>';
 text+='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=en&tl=fr&u='+url2+'" target="_blank"'+event+'>';
 text+='<img src="images/flag_french.jpg" width="30" height="20" hspace="0" vspace="0">';
 document.getElementById(id).innerHTML=text;
}
function translateToGerman(id)
{
 var event=' onMouseOver="return escape(\'Click to translate to German\')"';
 var url=location.href;
 var url1=url.replace(/:/g,'%3A');
 var url2=url1.replace(/\//g,'%2F');

 text ='<a href="http://translate.google.com/translate?hl=ge&ie=UTF8&prev=_t&sl=en&tl=de&u='+url2+'" target="_blank"'+event+'>Ger</a><br>';
 text+='<a href="http://translate.google.com/translate?hl=ge&ie=UTF8&prev=_t&sl=en&tl=de&u='+url2+'" target="_blank"'+event+'>';
 text+='<img src="images/flag_german.jpg" width="30" height="20" hspace="0" vspace="0">';
 document.getElementById(id).innerHTML=text;
}
function translateToItalian(id)
{
 var event=' onMouseOver="return escape(\'Click to translate to Italian\')"';
 var url=location.href;
 var url1=url.replace(/:/g,'%3A');
 var url2=url1.replace(/\//g,'%2F');

 text ='<a href="http://translate.google.com/translate?hl=ge&ie=UTF8&prev=_t&sl=en&tl=it&u='+url2+'" target="_blank"'+event+'>Ita</a><br>';
 text+='<a href="http://translate.google.com/translate?hl=ge&ie=UTF8&prev=_t&sl=en&tl=it&u='+url2+'" target="_blank"'+event+'>';
 text+='<img src="images/flag_italian.jpg" width="30" height="20" hspace="0" vspace="0">';
 document.getElementById(id).innerHTML=text;
}
function translateToRussian_index(id)
{
 var event=' onMouseOver="return escape(\'Click to translate to Russian\')"';
 var url=location.href;
 var url1=url.replace(/:/g,'%3A');
 var url2=url1.replace(/\//g,'%2F');

 text ='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=en&tl=ru&u='+url2+'" target="_blank"'+event+'>Rus</a><br>';
 text+='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=en&tl=ru&u='+url2+'" target="_blank"'+event+'>';
 text+='<img src="images/russian.jpg" width="30" height="20" hspace="0" vspace="0">';
 document.getElementById(id).innerHTML=text;
}
function translateToEnglish_index(id)
{
 var event=' onMouseOver="return escape(\'Click to translate to English\')"';
 var url=location.href;
 var url1=url.replace(/:/g,'%3A');
 var url2=url1.replace(/\//g,'%2F');

 text ='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=ru&tl=en&u='+url2+'" target="_blank"'+event+'>En</a><br>';
 text+='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=ru&tl=en&u='+url2+'" target="_blank"'+event+'>';
 text+='<img src="/images/british.png" width="30" height="20" hspace="0" vspace="0">';
 document.getElementById(id).innerHTML=text;
}
function translateToSpanish_index(id)
{
 var event=' onMouseOver="return escape(\'Click to translate to Spanish\')"';
 var url=location.href;
 var url1=url.replace(/:/g,'%3A');
 var url2=url1.replace(/\//g,'%2F');

 text ='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=en&tl=es&u='+url2+'" target="_blank"'+event+'>Span</a><br>';
 text+='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=en&tl=es&u='+url2+'" target="_blank"'+event+'>';
 text+='<img src="images/spanish.jpg" width="30" height="20" hspace="0" vspace="0" >';
 document.getElementById(id).innerHTML=text;
}
function translateToFrench_index(id)
{
 var event=' onMouseOver="return escape(\'Click to translate to French\')"';
 var url=location.href;
 var url1=url.replace(/:/g,'%3A');
 var url2=url1.replace(/\//g,'%2F');

 text ='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=en&tl=fr&u='+url2+'" target="_blank"'+event+'>Fra</a><br>';
 text+='<a href="http://translate.google.com/translate?hl=en&ie=UTF8&prev=_t&sl=en&tl=fr&u='+url2+'" target="_blank"'+event+'>';
 text+='<img src="images/french.jpg" width="30" height="20" hspace="0" vspace="0">';
 document.getElementById(id).innerHTML=text;
}
function translateToGerman_index(id)
{
 var event=' onMouseOver="return escape(\'Click to translate to German\')"';
 var url=location.href;
 var url1=url.replace(/:/g,'%3A');
 var url2=url1.replace(/\//g,'%2F');

 text ='<a href="http://translate.google.com/translate?hl=ge&ie=UTF8&prev=_t&sl=en&tl=de&u='+url2+'" target="_blank"'+event+'>Ger</a><br>';
 text+='<a href="http://translate.google.com/translate?hl=ge&ie=UTF8&prev=_t&sl=en&tl=de&u='+url2+'" target="_blank"'+event+'>';
 text+='<img src="images/german.jpg" width="30" height="20" hspace="0" vspace="0">';
 document.getElementById(id).innerHTML=text;
}
function translateToItalian_index(id)
{
 var event=' onMouseOver="return escape(\'Click to translate to Italian\')"';
 var url=location.href;
 var url1=url.replace(/:/g,'%3A');
 var url2=url1.replace(/\//g,'%2F');

 text ='<a href="http://translate.google.com/translate?hl=ge&ie=UTF8&prev=_t&sl=en&tl=it&u='+url2+'" target="_blank"'+event+'>Ita</a><br>';
 text+='<a href="http://translate.google.com/translate?hl=ge&ie=UTF8&prev=_t&sl=en&tl=it&u='+url2+'" target="_blank"'+event+'>';
 text+='<img src="images/italian.jpg" width="30" height="20" hspace="0" vspace="0">';
 document.getElementById(id).innerHTML=text;
}


function openVideoWin(filename,width,height,loop,controller,autoplay)
{
//close an open window if open (delete these lines if you want multiple windows open, but give each window a new name using a random variable
if (newWindow && !newWindow.closed)
{
newWindow.close();
}
//all variables not passed to the function must be assigned here
//if controller is to be shown add 16 for Quicktime, 32 for Windows Media Player to the height
var controller_height = 26 //may need to calc based upon browser, etc
if(controller == 1) //add controller height
{
height = parseInt(height) + parseInt(controller_height);
}
text  = "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01 Transitional//EN'>";
text += "<html>\n<head>\n<title>"+filename+"</title>\n</head>\n";
text += "<body align='left' leftmargin='0' topmargin='0' bgcolor='#000000'>\n";
text += "<OBJECT CLASSID='CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95' " ;
text += "width='"+width+"' height='"+height+"'>\n";
//text += "CODEBASE='http://www.apple.com/qtactivex/qtplugin.cabversion=6,0,2,0'>\n";
text += "<PARAM NAME='controller' VALUE='" + controller + "'>\n";
text += "<PARAM NAME='type' VALUE='application/x-oleobject'>\n";
text += "<PARAM NAME='autostart' VALUE='" + autoplay + "'>\n";
text += "<PARAM NAME='target' VALUE='myself'>\n";
text += "<PARAM NAME='src' VALUE='" + filename + "'>\n";
text += "<PARAM NAME='loop' VALUE='" + loop + "'>\n";
text += "<PARAM NAME='pluginspage' VALUE='http://www.microsoft.com/windows/windowsmedia/player/11/default.aspx'>\n";
text += "<EMBED src='"+filename+"' ";
text += "type='application/x-mplayer2' ";
text += "width='"+width+"' height='"+height+"' ";
text += "controller='"+controller+"' ";
text += "target='"+controller+"' ";
text += "autostart='"+autoplay+"' ";
text += "loop='"+loop+"' ";
text += "bgcolor='#000000' ";
text += "pluginspage='http://www.microsoft.com/windows/windowsmedia/player/11/default.aspx'>\n";
text += "</EMBED>\n";
text += "</OBJECT>\n";
text += "</body>\n</html>\n";
//alert(text);
//text is written so now open a new window, write the text and focus the window
newWindow=window.open('','VideoPlayer','width=' + width + ',height=' + height + ',resizable') ;
newWindow.document.write(text);
newWindow.focus();
newWindow.document.close();
}

function playPause(id) {
 var myVideo=document.getElementById(id);
 if(myVideo.paused)
    myVideo.play();
 else
    myVideo.pause();
}
function makeBig(id) {
 var myVideo=document.getElementById(id);
     myVideo.width=600;
}
function makeSmall(id) {
    var myVideo=document.getElementById(id);
    myVideo.width=125;
}
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    myVar=setTimeout(carousel, 5000); // Change image every 3 seconds
};
function stopShow() {
  clearTimeout(myVar);
}
function startShow() {
  myVar=setTimeout(carousel, 3000); // Change image every 3 seconds
}

//var slideIndex = 1;
//showDivs(slideIndex);
//plusDivs(+1);

function plusDivs(n) {
  showDivs(slideIndex += n);
};
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1};
  if (n < 1) {slideIndex = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
};

function checkPass(pass) {
  var goDoc = "admin";
  if (pass == goDoc) {
    window.location="../docs/docs.htm";;
  }
  else{
    alert("Wrong password. Access denied.");window.location="../index.htm";
  }
};
function myClock() {
   var today = new Date();
   var h = today.getHours();
   var m = today.getMinutes();
   var s = today.getSeconds();
   m = checkTime(m);
   s = checkTime(s);
   document.getElementById('clock').innerHTML = "Time: " + h + ":" + m + ":" + s;
   var t = setTimeout(myClock, 500);
  }
  function checkTime(i) {
   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
   return i;
  }
function elapsedTime(start) {
  // later record end time
  var endTime = new Date();
  // time difference in ms
  var timeDiff = endTime - start;
  // strip the ms
  timeDiff /= 1000;
  // get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
  var seconds = Math.round(timeDiff % 60);
  // remove seconds from the date
  timeDiff = Math.floor(timeDiff / 60);
  // get minutes
  var minutes = Math.round(timeDiff % 60);
  // remove minutes from the date
  timeDiff = Math.floor(timeDiff / 60);
  // get hours
  var hours = Math.round(timeDiff % 24);
  // remove hours from the date
  timeDiff = Math.floor(timeDiff / 24);
  // the rest of timeDiff is number of days
  var days = timeDiff ;
  seconds = checkTime(seconds);
  minutes = checkTime(minutes);
  hours = checkTime(hours);
 //alert(hours + ":" + minutes + ":" + seconds);
  document.getElementById("elapsed").innerHTML = "Elapsed time: " + hours + ":" + minutes + ":" + seconds;
}












































































