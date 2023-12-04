
var musicPaths = ["",
 "Valiant - Expensive beats in a Panama.mp3",
"Halle - Angel.mp3",
"Aqyila - Hello.mp3",
"Najeeriii - Paddle Boat.mp3",
"Ice Spice Nicki Minaj - Barbie World Clean.mp3",
"KAKA HIGHFLAMES  - FLAMEZ ROCK.mp3",
"Flamez rock - Kaka Highflames (sped up).mp3", 
"Valiant - Mad Out.mp3",
"DJ Mac x Teejay - Drift.mp3",
"450 - Bad Gyal.mp3",
"450 - Millions.mp3",
"450 x Shaneil Muir - Crawsis.mp3",
"Malie Donn - V6.mp3",
"Valiant x Stalk Ashley - Narcissist .mp3",
"Beyoncé - CUFF IT.mp3",
"Rema & Selena Gomez - Calm Down.mp3",
"sometimes you just know - daniel beddingfield.mp3", 
"Years & Years - Breathe.mp3",
"Say Yes - Michelle Williams ft. Beyoncé, Kelly Rowland.mp3",
"Kirk Franklin - I Smile.mp3", 
"Whitney Houston - I Look To You.mp3", 
"The Weeknd  - Call Out My Name.mp3",
"The Weeknd - Wasted times.mp3",		  
"Mavado_ High Life.mp3",
"Chronic Law - Area 51.mp3", 
"Chronic Law - Empty.mp3",
		  "Squash - Surgery.mp3",
		 ];




var x, i, j, l, ll, selElmnt, a, b, c;

var musicSelection = localStorage.getItem("MusicSelection");

/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  a.dataset.customVariable ="bar";





/*loadOption();



function loadOption() {
        var y, i, k, s, h, sl, yl;
        s = document.getElementsByClassName("select-selected")[0];
        sl = s.length;
        ///h = this.parentNode.previousSibling;


if(i == "" || i == null){
	i = 1;
}
s.selectedIndex = i;

           // h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
    }

*/

















  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
c.dataset.indexValue = j;
c.setAttribute("onclick" ,"selectMusic(" + j + ")");

    c.innerHTML = selElmnt.options[j].innerHTML;

   if(musicSelection == j){
     a.innerHTML = selElmnt.options[j].innerHTML;
playMusic(musicPaths[j]);
   }

    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;


        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;



            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


function selectMusic(index){
   localStorage.setItem("MusicSelection", index);
playMusic(musicPaths[index]);
}

var isPaused = true
;
function muteMusic(){
	var aud = document.getElementById("audio");
   		var audioSrc = document.getElementById("audio-source");
var muteButton = document.getElementById("muteButton");

if(isPaused){
	isPaused = false;
	aud.play();
	muteButton.innerHTML = "MUTE";
}
else{
	isPaused = true;
	aud.pause();
	muteButton.innerHTML = "UNMUTE";
}

}



       
