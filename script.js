function toggleContent() {
	var fullText = document.getElementById("fullText");
	var shortText = document.getElementById("shortText");
	var btn = document.getElementById("readMoreBtn");
  
	if (fullText.style.display === "none") {
	  fullText.style.display = "block";
	  shortText.style.display = "none";
	  btn.innerHTML = "Read Less";
	} else {
	  fullText.style.display = "none";
	  shortText.style.display = "block";
	  btn.innerHTML = "Read More";
	}
  }
  