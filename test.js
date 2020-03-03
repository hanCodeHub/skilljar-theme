 // HEADERS
 document.getElementById('header-left').classList.add('course-page-header-left');
 document.getElementById('header-right').classList.add('course-page-header-right');

 // NAV BAR
 document.getElementById('nav-section').remove();

 // BANNER AND PROMO IMAGE
 const banner = document.querySelector("#skilljar-content > div.top-row-grey.padding-side");

 // loads the promo image into the background of the banner
 const promoImage = document.querySelector(".cp-promo-image > img");
 
 banner.style.background = `linear-gradient( rgba(5, 35, 50, .9), rgba(5, 35, 50, .7) ), 
 url(${promoImage.src}) right/cover no-repeat`;

 // removes promo image along with its container column
 document.querySelector('.cp-promo-image-wrapper').remove();

 // MAIN SUMMARY BLOCK
 const summary = document.querySelector('.cp-summary-wrapper');
 // only .course-page-summary class is non-skilljar defined in global theme
 summary.classList.add('course-page-summary', 'large-10');
 summary.parentElement.classList.add('padded-side-bottom');

 // TITLE
 document.querySelector('.break-word').classList.add('course-page-title');  

 // SUBTTILE
 const subtitle = document.querySelector(".cp-summary-wrapper h2");
 // clears the subtitle (in case no level is found), then reads in level
 subtitle.innerText = '';
 for (tag of skilljarCourse.tags) {
     if (["Practitioner", "Expert", "Master", "Partner"].includes(tag))
         subtitle.innerText = tag;
 }

 subtitle.classList.add('course-page-subtitle');  // defined in theme

 // SIGN IN TEXT
 const signIn = document.querySelector('.signin')
 if (signIn) signIn.remove();

// ENROLL BUTTON
const enrollBtn = document.querySelector('.purchase-button');
if (enrollBtn) enrollBtn.classList.add('course-page-enroll-btn');

