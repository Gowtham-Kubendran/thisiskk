(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  \n  \n\n  <div class=\"bodycontent\">\n<div class=\"topnav\" id=\"myTopnav\">\n    <a href=\"#contact\">Contact Me</a>\n    <a href=\"#Projects\">Projects</a>\n    <a href=\"#experience\">Experience</a> \n    <a href=\"#techstack\">Tech Stacks</a>\n    <a href=\"#about\">About</a>\n    <a href=\"javascript:void(0);\" class=\"icon\" >\n      <i class=\"fa fa-bars\"></i>\n    </a>\n  </div>\n  <div class=\"about\" id=\"about\">\n    <div class=\"abouttext\">\n    <p>Hey, My name is Gowtham KK</p>\n    <p>A Frontend Developer</p>\n  </div>\n  <div class=\"aboutpic\">\n    <img alt=\"myself\" class=\"mypic\" src=\"../assets/face.jpg\"/>\n\n  </div>\n  </div>\n<div class=\"techstack\" id=\"techstack\">\n\n<div class=\"techstackheading\">\n  My techstacks\n</div>\n\n  <div class=\"techstackitems\" >\n    \n    <span class=\"inditech\"><img class=\"techimg\" src=\"../assets/angular.svg\" /><p class=\"techtext\">Angular 9</p></span>\n    <span class=\"inditech\"><img class=\"techimg\" src=\"../assets/html.png\" /><p class=\"techtext\">HTML 5</p></span>\n    <span class=\"inditech\"><img class=\"techimg\" src=\"../assets/css.png\" /><p class=\"techtext\">CSS3</p></span>\n    <span class=\"inditech\"><img class=\"techimg\" src=\"../assets/javascript.png\" /><p class=\"techtext\">Javascript (ES6)</p></span>\n    <span class=\"inditech\"><img class=\"techimg\" src=\"../assets/java8.png\" /><p class=\"techtext\">Java 8</p></span>\n    <span class=\"inditech\"><img class=\"techimg\" src=\"../assets/spring-boot.png\" /><p class=\"techtext\">Spring Boot</p></span>\n    <span class=\"inditech\"><img class=\"techimg\" src=\"../assets/docker.png\" /><p class=\"techtext\">Docker</p></span>\n  </div>\n</div>\n\n\n<div class=\"experience\" id=\"experience\">\n\n  <div class=\"experienceheading\">\n    Experiences\n  </div>\n  <div class=\"experiencebody\">\n    <div class=\"exp\">\n      <div class=\"exptitle\">\n        Nissan Digital Hub - <span style=\"font-style: italic\">Software Engineer</span>\n      </div>\n      <div class=\"experiences\">\n        Nov 2018 - Present\n      </div>\n      <div class=\"nissanbody\">\n        i mostly work as Frontend Developer and sometimes worked as FullStack \n      </div>\n    </div>\n\n    <div class=\"exp\">\n      <div class=\"exptitle\">\n        Bank of Newyork Mellon Technologies - <span style=\"font-style: italic\">Application Developer</span>\n      </div>\n      <div class=\"experiences\">\n        Nov 2016 - Oct 2018\n      </div>\n      <div class=\"nissanbody\">\n        i was a Frontend Developer (Angular JS) and used to build REST APIs \n      </div>\n    </div>\n\n  </div>\n   \n  </div>\n\n  <div class=\"projects\" id=\"Projects\">\n      <div class=\"experienceheading\">\n          Projects\n        </div>\n    <div class=\"cardLayouts\">\n\n      <div class=\"cards\">\n        <img class=\"projectimg\" src=\"../assets/comming-soon.jpg\" />\n        <div class=\"procontent\">\n        Moideen Traders\n        <p class=\"propara\">\n          A static Portfolio Website for the Hardware Store developed in Angular 7.\n        </p>\n        \n          <button class=\"Gotobut\" [disabled]=\"true\" (click)=\"clicked()\">Go</button>\n        \n      </div>\n      </div>\n      <div class=\"cards\">\n          <img class=\"projectimg\" src=\"../assets/ayush.PNG\" />\n          <div class=\"procontent\">\n         Ayush Old Age Home\n          <p  class=\"propara\">\n            An Old Age Home Website which tell the services it offers , localtion and their contact Details.\n            It is developed in Angular 7.\n          </p>\n          \n          <a class=\"Gotobutlink\" target=\"_blank\"  href=\"https://ayushgarden-55c85.firebaseapp.com/\"><button class=\"Gotobut\" [disabled]=\"false\" (click)=\"clicked()\">Go</button></a>\n          \n        </div>\n        </div>\n        <div class=\"cards\">\n            <img class=\"projectimg\" src=\"../assets/comming-soon.jpg\" />\n            <div class=\"procontent\">\n           Lic \n            \n            <p  class=\"propara\">\n             A website for Users with rich UI which make users to understand all the policies ,suggets the best policy and have a option to purchase it online\n            </p>\n            \n              <button class=\"Gotobut\" [disabled]=\"true\" (click)=\"clicked()\">Go</button>\n            \n          </div>\n          </div>\n\n    </div>\n\n  </div>\n  <div class=\"contact\" id=\"contact\">\n      <p style=\"font-size: 1.5em;\">Gowtham K K</p>\n      <span ><img src=\"../assets/phone.png\" /></span><p>+91 9952823901</p>\n      <span ><img src=\"../assets/email.png\" /></span><p>1994gowtham@gmail.com</p>\n      <div class=\"social\">\n       <a target=\"_blank\" href=\"https://www.linkedin.com/in/gowtham-k-k-52583280/\" > <img src=\"../assets/linkedin.png\"/></a>\n       <a target=\"_blank\" href=\"https://www.facebook.com/gowtham.kuppal\" > <img src=\"../assets/facebook.png\"/></a>\n       <a target=\"_blank\" href=\"https://www.instagram.com/gowtham_k_k/\" ><img src=\"../assets/instagram.png\"/></a>\n      </div>\n    </div>\n  \n\n</div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  min-height: 100vh;\n  text-align: center;\n  color: #4b4b4b; }\n\na {\n  text-decoration: none; }\n\na:focus {\n  outline: 0;\n  border: 0; }\n\n.bodycontent {\n  z-index: 2; }\n\n.topnav {\n  overflow: hidden;\n  color: black; }\n\n.topnav a {\n  float: right;\n  display: block;\n  color: #525252;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 1em;\n  font-family: 'ABeeZee';\n  transition: 0.3s ease-in-out; }\n\n.topnav a:hover {\n  color: black;\n  font-size: 1.2em; }\n\n.topnav a.active {\n  background-color: #4CAF50;\n  color: white; }\n\n.topnav .icon {\n  display: none; }\n\n@media screen and (max-width: 600px) {\n  .topnav a.icon {\n    float: right;\n    display: block; } }\n\n.about {\n  line-height: 1em;\n  padding: 3em 0;\n  font-family: Abrifatface;\n  font-size: 3em;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around; }\n\n.aboutpic {\n  width: 5em;\n  height: 5em;\n  border-radius: 50%;\n  overflow: hidden; }\n\n.mypic {\n  display: inline;\n  margin: 0 auto;\n  height: 100%;\n  width: auto; }\n\n.techstack {\n  padding: 2em 0; }\n\n.experience {\n  margin: 4em 0;\n  padding: 1em 0 3em 0;\n  background-color: grey;\n  color: white; }\n\n.techstackitems {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap; }\n\n.techimg {\n  height: 4em; }\n\n.techtext {\n  font-family: 'ABeeZee';\n  color: #757575; }\n\n.techstackheading {\n  font-family: Abrifatface;\n  padding: 2em 0;\n  font-size: 3em; }\n\n.experienceheading {\n  font-family: Abrifatface;\n  padding: 1em 0;\n  font-size: 3em; }\n\n.experiencebody {\n  display: flex;\n  flex-direction: column; }\n\n.exp {\n  padding: 1em 0;\n  font-family: Alanta;\n  font-size: 1em; }\n\n.exptitle {\n  font-size: 2em; }\n\n.cardLayouts {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly; }\n\n.cards {\n  margin: 2em;\n  box-shadow: 0px 0px 10px 1px #dedede7a;\n  border-radius: 1em;\n  width: 20em;\n  height: 27em;\n  transition: 0.2s all ease-in-out;\n  font-family: Alanta;\n  flex-wrap: wrap; }\n\n.cards:hover {\n  transform: scale(1.1);\n  box-shadow: 0px 0px 10px 1px #c1c1c1; }\n\n.projectimg {\n  width: 100%;\n  height: 50%;\n  border-top-left-radius: 1em;\n  border-top-right-radius: 1em;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.procontent {\n  margin: auto; }\n\n.Gotobut {\n  cursor: pointer;\n  border: 2px solid #00BCD4;\n  color: #00BCD4;\n  display: inline-block;\n  width: 7em;\n  background-color: white;\n  border-radius: 2em;\n  height: 3em;\n  transition: 0.2s all ease-in-out; }\n\n.Gotobut:hover {\n  background-color: #00BCD4;\n  color: white; }\n\n.Gotobut:disabled {\n  cursor: not-allowed;\n  background: grey;\n  color: white;\n  border: 2px solid grey; }\n\n.propara {\n  text-align: justify;\n  padding: 0 1em; }\n\n.contact {\n  color: #949494;\n  width: 50%;\n  padding: 2em;\n  font-family: Alanta;\n  margin: auto;\n  margin-top: 4em;\n  text-align: center;\n  box-shadow: 0px 0px 10px 1px #d8d8d8;\n  border-radius: 3em; }\n\n.social {\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 2em; }\n\n@media screen and (max-width: 600px) {\n  .topnav.responsive {\n    position: relative; }\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0; }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left; }\n  .container {\n    padding: 1em; }\n  .about {\n    padding: 0em;\n    font-size: 2em; }\n  .inditech {\n    padding: 1em;\n    width: 7em;\n    height: 7em;\n    margin: 0.5em 0;\n    border-radius: 50%;\n    box-shadow: 0 0 10px 1px #dedede; }\n  .techimg {\n    height: 3em;\n    padding-top: 12px; }\n  .techstackheading {\n    padding: 1em 0; }\n  .experienceheading {\n    font-size: 2em; }\n  .exptitle {\n    font-size: 1.3em; }\n  .exp {\n    font-size: 1em; }\n  .contact {\n    padding: 2em 3em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxOREgwMDMxNFxcRGVza3RvcFxccG9ydGZvbGlvXFx0aGlzaXNray9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUdsQjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLFVBQVU7RUFDVixTQUFRLEVBQUE7O0FBR1Y7RUFFSSxVQUFTLEVBQUE7O0FBS2I7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUlkO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFFRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUVFO0lBQ0UsWUFBWTtJQUNaLGNBQWMsRUFBQSxFQUNmOztBQUlIO0VBRUUsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCLEVBQUE7O0FBRWpDO0VBRUksVUFBUztFQUNULFdBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBRUUsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUVmO0VBRUksY0FBYyxFQUFBOztBQUVsQjtFQUVFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFFZDtFQUVJLGFBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZUFBZSxFQUFBOztBQUduQjtFQUdJLFdBQVUsRUFBQTs7QUFJZDtFQUVFLHNCQUFzQjtFQUNwQixjQUFjLEVBQUE7O0FBRWxCO0VBRUksd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBRWxCO0VBRUUsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDWixjQUFjLEVBQUE7O0FBR2xCO0VBRUUsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUV4QjtFQUVFLGNBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYSxFQUFBOztBQUVmO0VBRUUsY0FBYSxFQUFBOztBQUdmO0VBRUUsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHFCQUFxQjtFQUNyQixvQ0FBb0MsRUFBQTs7QUFHdEM7RUFFRSxXQUFXO0VBQ1gsV0FBVztFQUNYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUduQjtFQUVFLFlBQVcsRUFBQTs7QUFFYjtFQUVFLGVBQWU7RUFDZix5QkFBeUI7RUFDMUIsY0FBYTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVcsRUFBQTs7QUFHYjtFQUVFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBVztFQUNYLHNCQUFxQixFQUFBOztBQUt2QjtFQUVFLG1CQUFtQjtFQUNqQixjQUFjLEVBQUE7O0FBR2xCO0VBRUUsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxrQkFBa0IsRUFBQTs7QUFFcEI7RUFFRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGdCQUFnQixFQUFBOztBQUlsQjtFQUNFO0lBQW9CLGtCQUFrQixFQUFBO0VBQ3RDO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNLEVBQUE7RUFFUjtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxZQUFZLEVBQUE7RUFFZDtJQUNFLFlBQVc7SUFDWCxjQUFhLEVBQUE7RUFFZjtJQUVFLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0NBQWdDLEVBQUE7RUFHbEM7SUFFRSxXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFFbkI7SUFFRSxjQUFhLEVBQUE7RUFFZjtJQUVFLGNBQWMsRUFBQTtFQUVoQjtJQUVFLGdCQUFnQixFQUFBO0VBRWxCO0lBRUUsY0FBYSxFQUFBO0VBRWY7SUFFRSxnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcclxue1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNGI0YjRiO1xyXG5cclxufVxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5hOmZvY3Vze1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm9yZGVyOjA7XHJcblxyXG59XHJcbi5ib2R5Y29udGVudFxyXG57XHJcbiAgICB6LWluZGV4OjI7XHJcbn1cclxuXHJcblxyXG5cclxuLnRvcG5hdiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjNTI1MjUyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBmb250LWZhbWlseTogJ0FCZWVaZWUnO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhOmhvdmVyIHtcclxuICAgIFxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IC5pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBcclxuICAgIC50b3BuYXYgYS5pY29uIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiBcclxuICAuYWJvdXRcclxuICB7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgcGFkZGluZzogM2VtIDA7XHJcbiAgICBmb250LWZhbWlseTogQWJyaWZhdGZhY2U7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4uYWJvdXRwaWNcclxue1xyXG4gICAgd2lkdGg6NWVtO1xyXG4gICAgaGVpZ2h0OjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuICAubXlwaWNcclxuICB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbi50ZWNoc3RhY2tcclxue1xyXG4gICAgcGFkZGluZzogMmVtIDA7XHJcbn1cclxuLmV4cGVyaWVuY2Vcclxue1xyXG4gIG1hcmdpbjogNGVtIDA7XHJcbiAgcGFkZGluZzogMWVtIDAgM2VtIDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnRlY2hzdGFja2l0ZW1zXHJcbntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG4udGVjaGltZ1xyXG57XHJcbiAgICBcclxuICAgIGhlaWdodDo0ZW07XHJcbiAgICBcclxufVxyXG5cclxuLnRlY2h0ZXh0XHJcbntcclxuICBmb250LWZhbWlseTogJ0FCZWVaZWUnO1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbn1cclxuLnRlY2hzdGFja2hlYWRpbmdcclxue1xyXG4gICAgZm9udC1mYW1pbHk6IEFicmlmYXRmYWNlO1xyXG4gICAgcGFkZGluZzogMmVtIDA7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxufVxyXG4uZXhwZXJpZW5jZWhlYWRpbmdcclxue1xyXG4gIGZvbnQtZmFtaWx5OiBBYnJpZmF0ZmFjZTtcclxuICBwYWRkaW5nOiAxZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcblxyXG4uZXhwZXJpZW5jZWJvZHlcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uZXhwXHJcbntcclxuICBwYWRkaW5nOjFlbSAwO1xyXG4gIGZvbnQtZmFtaWx5OiBBbGFudGE7XHJcbiAgZm9udC1zaXplOjFlbTsgXHJcbn1cclxuLmV4cHRpdGxlXHJcbntcclxuICBmb250LXNpemU6MmVtO1xyXG59XHJcblxyXG4uY2FyZExheW91dHNcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4uY2FyZHN7XHJcbiAgbWFyZ2luOiAyZW07XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCAjZGVkZWRlN2E7XHJcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gIHdpZHRoOiAyMGVtO1xyXG4gIGhlaWdodDogMjdlbTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBlYXNlLWluLW91dDtcclxuICBmb250LWZhbWlseTogQWxhbnRhO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNhcmRzOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4ICNjMWMxYzE7XHJcbn1cclxuXHJcbi5wcm9qZWN0aW1nXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxZW07XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFlbTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnByb2NvbnRlbnRcclxue1xyXG4gIG1hcmdpbjphdXRvO1xyXG59XHJcbi5Hb3RvYnV0XHJcbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwQkNENDtcclxuIGNvbG9yOiMwMEJDRDQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA3ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gIGhlaWdodDogM2VtO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uR290b2J1dDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCQ0Q0O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uR290b2J1dDpkaXNhYmxlZFxyXG57XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJvcmRlcjoycHggc29saWQgZ3JleTtcclxufVxyXG5cclxuXHJcblxyXG4ucHJvcGFyYVxyXG57XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG59XHJcblxyXG4uY29udGFjdFxyXG57XHJcbiAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgZm9udC1mYW1pbHk6IEFsYW50YTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4ICNkOGQ4ZDg7XHJcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG59XHJcbi5zb2NpYWxcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgcGFkZGluZy10b3A6IDJlbTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIHtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSAuaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIGEge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7ICAgIFxyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gIH1cclxuICAuYWJvdXR7XHJcbiAgICBwYWRkaW5nOjBlbTtcclxuICAgIGZvbnQtc2l6ZToyZW07XHJcbiAgfVxyXG4gIC5pbmRpdGVjaFxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHdpZHRoOiA3ZW07XHJcbiAgICBoZWlnaHQ6N2VtO1xyXG4gICAgbWFyZ2luOiAwLjVlbSAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4ICNkZWRlZGU7XHJcbiAgfVxyXG4gXHJcbiAgLnRlY2hpbWdcclxuICB7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIH1cclxuICAudGVjaHN0YWNraGVhZGluZ1xyXG4gIHtcclxuICAgIHBhZGRpbmc6MWVtIDA7XHJcbiAgfVxyXG4gIC5leHBlcmllbmNlaGVhZGluZ1xyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuICAuZXhwdGl0bGVcclxuICB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gIH1cclxuICAuZXhwXHJcbiAge1xyXG4gICAgZm9udC1zaXplOjFlbTtcclxuICB9XHJcbiAgLmNvbnRhY3RcclxuICB7XHJcbiAgICBwYWRkaW5nOiAyZW0gM2VtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'thisiskk';
    }
    AppComponent.prototype.clickNav = function () {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        }
        else {
            x.className = "topnav";
        }
    };
    AppComponent.prototype.clicked = function () {
        console.log("clicked");
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NDH00314\Desktop\portfolio\thisiskk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map