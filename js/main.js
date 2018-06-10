jQuery(document).ready(function(){!function(){"use strict";var e=document.querySelector(".overlay"),o=document.querySelector(".overlay-loader"),i=new TimelineMax,a=new TimelineMax;!function(){i.to(e,.6,{top:"100%",ease:Power4.easeInOut,delay:.25}),a.to(o,.5,{y:"40",opacity:0})}()}()}),$(function(){if($(window).width()>768){(new TimelineLite).staggerFromTo(".undertitle .line",2,{width:0},{width:"15.5%"},.2),(new TimelineLite).staggerFromTo(".title .line",2,{width:0},{width:"17%"},.2);var e=TweenMax.to(".image-container",1,{"background-position":"0 200px",ease:Linear.easeNone}),o=TweenMax.to(".massive-letters",1,{transform:"translateY(-70%)",ease:Linear.easeNone}),i=TweenMax.to(".subsection",1,{transform:"translateX(-100%)",ease:Linear.easeNone}),a=TweenMax.to(".contacts__bg",1,{"background-position":"0 -135px",ease:Linear.easeNone}),t=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:"body",triggerHook:0,duration:"100%"}).setTween(e).addTo(t),new ScrollMagic.Scene({triggerElement:"body",triggerHook:0,duration:"400%"}).setTween(o).addTo(t),new ScrollMagic.Scene({triggerElement:".dlaczego",triggerHook:0,duration:"400%"}).setTween(i).addTo(t),new ScrollMagic.Scene({triggerElement:".forwho_icons",triggerHook:0,duration:"100%"}).setTween(a).addTo(t)}});var controller=new ScrollMagic.Controller;if($(window).width()>768){var wipeAnimation=(new TimelineMax).fromTo(".dlaczego__title img",1,{opacity:1,x:"3%"},{opacity:0,x:"-20%",ease:Linear.easeNone},0).fromTo("section.panel.second",1,{opacity:0},{"z-index":1,opacity:"1",ease:Linear.easeNone},1).fromTo(".first_progress__line span",1,{width:0,opacity:0},{opacity:1,width:"25%",ease:Linear.easeNone},2).fromTo("section.panel.second .first_info",1,{opacity:0,x:"-200%"},{opacity:"1",x:"0%",ease:Linear.easeNone},2).fromTo("section.panel.second .first_step__text",1,{opacity:0,x:"200%"},{opacity:"1",x:"0%",ease:Linear.easeNone},2).fromTo("section.panel.second .first_info__fade",1,{opacity:1,x:"0"},{opacity:"0",x:"-200%",ease:Linear.easeNone},4).fromTo("section.panel.second .first_step__text",1,{opacity:1,x:"0"},{opacity:"0",x:"200%",ease:Linear.easeNone},4).fromTo("section.panel.third",1,{"z-index":0,opacity:0},{"z-index":2,opacity:"1",ease:Linear.easeNone},5).fromTo(".first_progress__line span",1,{width:"25%"},{width:"50%",ease:Linear.easeNone},5).fromTo("section.panel.third .first_info__fade",1,{opacity:0,x:"-100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},6).fromTo("section.panel.third .first_step__text",1,{opacity:0,x:"100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},6).fromTo("section.panel.third .first_info__fade",1,{opacity:1,x:"0"},{opacity:"0",x:"-100%",ease:Linear.easeNone},8).fromTo("section.panel.third .first_step__text",1,{opacity:1,x:"0"},{opacity:"0",x:"100%",ease:Linear.easeNone},8).fromTo("section.panel.fourth",1,{"z-index":0,opacity:0},{"z-index":3,opacity:"1",ease:Linear.easeNone},9).fromTo(".first_progress__line span",1,{width:"50%"},{width:"75%",ease:Linear.easeNone},9).fromTo("section.panel.fourth .first_info__fade",1,{opacity:0,x:"-100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},10).fromTo("section.panel.fourth .first_step__text",1,{opacity:0,x:"100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},10).fromTo("section.panel.fourth .first_info__fade",1,{opacity:1,x:""},{opacity:"0",x:"-100%",ease:Linear.easeNone},12).fromTo("section.panel.fourth .first_step__text",1,{opacity:1,x:""},{opacity:"0",x:"100%",ease:Linear.easeNone},12).fromTo("section.panel.fifth",1,{"z-index":0,opacity:0},{"z-index":4,opacity:"1",ease:Linear.easeNone},13).fromTo(".first_progress__line span",1,{width:"75%"},{width:"100%",ease:Linear.easeNone},13).fromTo("section.panel.fifth .first_info__fade",1,{opacity:0,x:"-100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},14).fromTo("section.panel.fifth .first_step__text",1,{opacity:0,x:"100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},14).fromTo("section.panel.fifth .first_info__fade",1,{opacity:1,x:""},{opacity:"1",x:"0",ease:Linear.easeNone},16).fromTo("section.panel.fifth .first_step__text",1,{opacity:1,x:""},{opacity:"1",x:"0",ease:Linear.easeNone},16).fromTo("section.panel.fifth .first_step__text",2,{opacity:1,x:""},{opacity:"1",x:"0",ease:Linear.easeNone},17);new ScrollMagic.Scene({triggerElement:"#whowe",triggerHook:"onLeave",duration:"1000%"}).setPin("#whowe").setTween(wipeAnimation).addTo(controller);var wipeAnimation2=(new TimelineMax).fromTo(".where__title",1,{opacity:1,y:"3%"},{opacity:0,y:"-150%",ease:Linear.easeNone},0).fromTo("section#map-second",1,{opacity:0},{"z-index":1,opacity:"1",ease:Linear.easeNone},0).fromTo(".map-second_info",1,{opacity:0,x:"-100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},1).fromTo(".map-second_img",1,{opacity:0,x:"100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},1).fromTo(".map-second_info__text p:first-child",1,{opacity:1},{opacity:"1",ease:Linear.easeNone},3).fromTo(".map-second_info__text p:nth-child(2)",1,{opacity:0},{opacity:"1",ease:Linear.easeNone},4).fromTo(".map-second_info__text p:nth-child(3)",1,{opacity:0},{opacity:"1",ease:Linear.easeNone},7).fromTo(".map-second_img__item:first-child",1,{opacity:1},{opacity:"1",ease:Linear.easeNone},3).fromTo(".map-second_img__item:nth-child(2)",1,{opacity:0},{opacity:"1",ease:Linear.easeNone},4).fromTo(".map-second_img__item:nth-child(2)",1,{opacity:1},{opacity:"1",ease:Linear.easeNone},5).fromTo(".map-second_img__item:nth-child(2)",1,{opacity:1},{opacity:"1",ease:Linear.easeNone},6).fromTo(".map-second_img__item:nth-child(3)",1,{opacity:0},{opacity:"1",ease:Linear.easeNone},7).fromTo(".where__title",2,{opacity:1},{opacity:0,ease:Linear.easeNone},8);new ScrollMagic.Scene({triggerElement:"#where",triggerHook:"onLeave",duration:"500%"}).setPin("#where").setTween(wipeAnimation2).addTo(controller);var wipeAnimation3=(new TimelineMax).fromTo("#services-first .services__title img",1,{opacity:1,x:0},{opacity:0,x:"-20%",ease:Linear.easeNone},0).fromTo("#services-second",1,{opacity:0,"z-index":1},{"z-index":1,opacity:"1",ease:Linear.easeNone},1).fromTo("#services-second .services_step_info",1,{opacity:0,x:"-100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},2).fromTo("#services-second .services_step_text",1,{opacity:0,x:"100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},2).fromTo("#services-third",1,{opacity:0,"z-index":0},{"z-index":2,opacity:"1",ease:Linear.easeNone},3).fromTo("#services-third .services_step_info",1,{opacity:0,x:"-100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},4).fromTo("#services-third .services_step_text",1,{opacity:0,x:"100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},4).fromTo("#services-fourth",1,{opacity:0,"z-index":0},{"z-index":3,opacity:"1",ease:Linear.easeNone},5).fromTo("#services-fourth .services_step_info",1,{opacity:0,x:"-100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},6).fromTo("#services-fourth .services_step_text",1,{opacity:0,x:"100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},6).fromTo("#services-first .services__title img",2,{opacity:1},{opacity:0,ease:Linear.easeNone},7);new ScrollMagic.Scene({triggerElement:"#services",triggerHook:"onLeave",duration:"1000%"}).setPin("#services").setTween(wipeAnimation3).addTo(controller);var wipeAnimation4=(new TimelineMax).fromTo(".forwho__title",1,{opacity:1,y:"3%"},{opacity:0,y:"-50%",ease:Linear.easeNone},0).fromTo("section#for-who-second",1,{opacity:0},{"z-index":1,opacity:"1",ease:Linear.easeNone},0).fromTo(".forwho_step_info",1,{opacity:0,x:"-100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},1).fromTo(".forwho_icons",1,{opacity:0,x:"100%"},{opacity:"1",x:"0%",ease:Linear.easeNone},1).fromTo(".forwho__title",2,{opacity:1},{opacity:0,ease:Linear.easeNone},2);new ScrollMagic.Scene({triggerElement:"#partners",triggerHook:"onLeave",duration:"500%"}).setPin("#partners").setTween(wipeAnimation4).addTo(controller)}$(document).ready(function(){$(window).scroll(function(){$(window).scrollTop()>=50?$(".header_top").addClass("header_fixed"):$(".header_top").removeClass("header_fixed")}),$(".contacts_job__form").fadeOut(),$(".contacts_job__title a").on("click",function(){$(".contacts_job__form").fadeToggle()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIm92ZXJsYXkiLCJxdWVyeVNlbGVjdG9yIiwibG9hZGVyIiwib3ZlcmxheVRMIiwiVGltZWxpbmVNYXgiLCJsb2FkZXJUTCIsInRvIiwidG9wIiwiZWFzZSIsIlBvd2VyNCIsImVhc2VJbk91dCIsImRlbGF5IiwieSIsIm9wYWNpdHkiLCIkIiwid2luZG93Iiwid2lkdGgiLCJUaW1lbGluZUxpdGUiLCJzdGFnZ2VyRnJvbVRvIiwiYmdwYXJhbGxheCIsIlR3ZWVuTWF4IiwiYmFja2dyb3VuZC1wb3NpdGlvbiIsIkxpbmVhciIsImVhc2VOb25lIiwidGV4dFBhcmFsbGF4IiwidHJhbnNmb3JtIiwic3ViUGFyYWxsYXgiLCJmdHJwYXJhbGxheCIsImNvbnRyb2xsZXIiLCJTY3JvbGxNYWdpYyIsIkNvbnRyb2xsZXIiLCJTY2VuZSIsInRyaWdnZXJFbGVtZW50IiwidHJpZ2dlckhvb2siLCJkdXJhdGlvbiIsInNldFR3ZWVuIiwiYWRkVG8iLCJ3aXBlQW5pbWF0aW9uIiwiZnJvbVRvIiwieCIsInotaW5kZXgiLCJzZXRQaW4iLCJ3aXBlQW5pbWF0aW9uMiIsIndpcGVBbmltYXRpb24zIiwid2lwZUFuaW1hdGlvbjQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZmFkZU91dCIsIm9uIiwiZmFkZVRvZ2dsZSJdLCJtYXBwaW5ncyI6IkFBR0FBLE9BQVFDLFVBQVdDLE1BQU0sWUFJckIsV0FFSSxhQUVBLElBQUlDLEVBQVVGLFNBQVNHLGNBQWMsWUFDakNDLEVBQVNKLFNBQVNHLGNBQWMsbUJBQ2hDRSxFQUFZLElBQUlDLFlBQ2hCQyxFQUFXLElBQUlELGFBRUEsV0FDZkQsRUFBVUcsR0FBSU4sRUFBUyxJQUFNTyxJQUFLLE9BQVFDLEtBQU1DLE9BQU9DLFVBQVdDLE1BQU8sTUFDekVOLEVBQVNDLEdBQUlKLEVBQVEsSUFBTVUsRUFBRyxL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QUcsT0FBUUMsUUFBUyxFQUFHRCxFQUFHLE9BQVFKLEtBQU1jLE9BQU9DLFVBQVcsR0FDbkdlLE9BQU8seUJBQTBCLEdBQUl6QixRQUFTLElBQUsyQixVQUFXLEVBQUczQixRQUFTLElBQUtMLEtBQU1jLE9BQU9DLFVBQVcsR0FDdkdlLE9BQU8sb0JBQXFCLEdBQUl6QixRQUFTLEVBQUcwQixFQUFHLFVBQVcxQixRQUFTLElBQUswQixFQUFHLEtBQU0vQixLQUFNYyxPQUFPQyxVQUFXLEdBQ3pHZSxPQUFPLGdCQUFpQixHQUFJekIsUUFBUyxFQUFHMEIsRUFBRyxTQUFVMUIsUUFBUyxJQUFLMEIsRUFBRyxLQUFNL0IsS0FBTWMsT0FBT0MsVUFBVyxHQUNwR2UsT0FBTyxpQkFBa0IsR0FBSXpCLFFBQVMsSUFBS0EsUUFBUyxFQUFHTCxLQUFNYyxPQUFPQyxVQUFXLEdBR3BGLElBQUlNLFlBQVlFLE9BQ1pDLGVBQWdCLFlBQ2hCQyxZQUFhLFVBQ2JDLFNBQVUsU0FFVE8sT0FBTyxhQUNQTixTQUFTUyxnQkFDVFIsTUFBTVIsWUFLZmQsRUFBR2hCLFVBQVdDLE1BQU0sV0FJaEJlLEVBQUVDLFFBQVE4QixPQUFPLFdBQ0EvQixFQUFFQyxRQUFRK0IsYUFDVCxHQUNWaEMsRUFBRSxlQUFlaUMsU0FBUyxnQkFFMUJqQyxFQUFFLGVBQWVrQyxZQUFZLGtCQU1yQ2xDLEVBQUUsdUJBQXVCbUMsVUFDekJuQyxFQUFFLDBCQUEwQm9DLEdBQUcsUUFBUyxXQUNyQ3BDLEVBQUUsdUJBQXVCcUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDdXN0b21cbiAqL1xualF1ZXJ5KCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gUHJlbG9hZGVyXG5cbiAgICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSxcbiAgICAgICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5LWxvYWRlcicpLFxuICAgICAgICAgICAgb3ZlcmxheVRMID0gbmV3IFRpbWVsaW5lTWF4KCksXG4gICAgICAgICAgICBsb2FkZXJUTCA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG4gICAgICAgIHZhciBhbmltYXRlT3V0XzIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG92ZXJsYXlUTC50byggb3ZlcmxheSwgLjYsIHsgdG9wOiAnMTAwJScsIGVhc2U6IFBvd2VyNC5lYXNlSW5PdXQsIGRlbGF5OiAuMjUgfSApO1xuICAgICAgICAgICAgbG9hZGVyVEwudG8oIGxvYWRlciwgLjUsIHsgeTogJzQwJywgb3BhY2l0eTogMCB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGFuaW1hdGVJbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgb3ZlcmxheVRMLmZyb21Ubyggb3ZlcmxheSwgLjYsIHsgdG9wOiAnMTAwJScsIGJvdHRvbTogMCB9LCB7IHRvcDogMCwgZWFzZTogUG93ZXI0LmVhc2VJbk91dCB9ICk7XG4gICAgICAgICAgICBsb2FkZXJUTC5mcm9tVG8oIGxvYWRlciwgLjUsIHsgeTogJzQwJywgb3BhY2l0eTogMCwgZGVsYXk6IC4zMCB9LCB7IHk6IDAsIG9wYWNpdHk6IDEsIGRlbGF5OiAuNiwgZWFzZTogUG93ZXIyLmVhc2VPdXQgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFuaW1hdGVPdXRfMigpO1xuXG4gICAgfSkoKTtcbn0pO1xuXG4vLyBXaGVuIHRoZSBET00gaXMgcmVhZHlcblxuJChmdW5jdGlvbigpIHtcblxuICAgIGlmICgkKCB3aW5kb3cgKS53aWR0aCgpID4gNzY4KSB7XG4gICAgICAgIHZhciB0MSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgICAgdDEuc3RhZ2dlckZyb21UbygnLnVuZGVydGl0bGUgLmxpbmUnLCAyLCB7d2lkdGg6IDB9LCB7d2lkdGg6ICcxNS41JSd9LCAwLjIpO1xuXG4gICAgICAgIHZhciB0MiA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgICAgdDIuc3RhZ2dlckZyb21UbygnLnRpdGxlIC5saW5lJywgMiwge3dpZHRoOiAwfSwge3dpZHRoOiAnMTclJ30sIDAuMik7XG5cbiAgICAgICAgLy9jcmVhdGUgVHdlZW4gTWF4IHR3ZWVuIHRvIGNoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIGltYWdlIGNvbnRhaW5lciAoYmFja2dyb3VuZCBwYXJhbGxheClcbiAgICAgICAgdmFyIGJncGFyYWxsYXggPSBUd2Vlbk1heC50bygnLmltYWdlLWNvbnRhaW5lcicsIDEsIHsnYmFja2dyb3VuZC1wb3NpdGlvbic6IFwiMCAyMDBweFwiLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9KTtcblxuICAgICAgICB2YXIgdGV4dFBhcmFsbGF4ID0gVHdlZW5NYXgudG8oJy5tYXNzaXZlLWxldHRlcnMnLCAxLCB7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTcwJSlcIiwgZWFzZTogTGluZWFyLmVhc2VOb25lfSk7XG5cbiAgICAgICAgdmFyIHN1YlBhcmFsbGF4ID0gVHdlZW5NYXgudG8oJy5zdWJzZWN0aW9uJywgMSwge3RyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9KTtcblxuICAgICAgICB2YXIgZnRycGFyYWxsYXggPSBUd2Vlbk1heC50bygnLmNvbnRhY3RzX19iZycsIDEsIHsnYmFja2dyb3VuZC1wb3NpdGlvbic6IFwiMCAtMTM1cHhcIiwgZWFzZTogTGluZWFyLmVhc2VOb25lfSk7XG5cblxuICAgICAgICB2YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XG5cbiAgICAgICAgdmFyIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICAgICAgICAgIHRyaWdnZXJFbGVtZW50OiAnYm9keScsXG4gICAgICAgICAgICB0cmlnZ2VySG9vazogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAnMTAwJSdcbiAgICAgICAgfSlcbiAgICAgICAgLy8uYWRkUGluKCdzZWN0aW9uLmdyZXknKVxuICAgICAgICAgICAgLnNldFR3ZWVuKGJncGFyYWxsYXgpXG4gICAgICAgICAgICAuYWRkVG8oY29udHJvbGxlcik7XG5cbiAgICAgICAgdmFyIHNjZW5lMiA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICAgICAgICB0cmlnZ2VyRWxlbWVudDogJ2JvZHknLFxuICAgICAgICAgICAgdHJpZ2dlckhvb2s6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogJzQwMCUnXG4gICAgICAgIH0pXG4gICAgICAgIC8vLmFkZFBpbignc2VjdGlvbi5ncmV5JylcbiAgICAgICAgICAgIC5zZXRUd2Vlbih0ZXh0UGFyYWxsYXgpXG4gICAgICAgICAgICAuYWRkVG8oY29udHJvbGxlcik7XG5cbiAgICAgICAgdmFyIHNjZW5lMiA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICAgICAgICB0cmlnZ2VyRWxlbWVudDogJy5kbGFjemVnbycsXG4gICAgICAgICAgICB0cmlnZ2VySG9vazogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAnNDAwJSdcbiAgICAgICAgfSlcbiAgICAgICAgLy8uYWRkUGluKCdzdWJzZWN0aW9uJylcbiAgICAgICAgICAgIC5zZXRUd2VlbihzdWJQYXJhbGxheClcbiAgICAgICAgICAgIC5hZGRUbyhjb250cm9sbGVyKTtcblxuICAgICAgICB2YXIgc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xuICAgICAgICAgICAgdHJpZ2dlckVsZW1lbnQ6ICcuZm9yd2hvX2ljb25zJyxcbiAgICAgICAgICAgIHRyaWdnZXJIb29rOiAwLFxuICAgICAgICAgICAgZHVyYXRpb246ICcxMDAlJ1xuICAgICAgICB9KVxuICAgICAgICAvLy5hZGRQaW4oJ3NlY3Rpb24uZ3JleScpXG4gICAgICAgICAgICAuc2V0VHdlZW4oZnRycGFyYWxsYXgpXG4gICAgICAgICAgICAuYWRkVG8oY29udHJvbGxlcik7XG4gICAgfVxuXG59KTtcblxuXG4vLyBpbml0XG52YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XG5cbi8vIGRlZmluZSBtb3ZlbWVudCBvZiBwYW5lbHNcbmlmICgkKCB3aW5kb3cgKS53aWR0aCgpID4gNzY4KSB7XG5cbiAgICB2YXIgd2lwZUFuaW1hdGlvbiA9IG5ldyBUaW1lbGluZU1heCgpXG5cbiAgICAvLyAuZnJvbVRvKFwiLmRsYWN6ZWdvX19pbWcgaW1nXCIsIDEsIHtvcGFjaXR5OiAxfSwge29wYWNpdHk6IDEsIGVhc2U6IExpbmVhci5lYXNlTm9uZX0sIDApXG4gICAgICAgIC5mcm9tVG8oXCIuZGxhY3plZ29fX3RpdGxlIGltZ1wiLCAxLCB7b3BhY2l0eTogMSwgeDogJzMlJ30sIHtvcGFjaXR5OiAwLCB4OiBcIi0yMCVcIiwgZWFzZTogTGluZWFyLmVhc2VOb25lfSwgMClcblxuICAgICAgICAuZnJvbVRvKFwic2VjdGlvbi5wYW5lbC5zZWNvbmRcIiwgMSwge29wYWNpdHk6IDB9LCB7J3otaW5kZXgnOiAxLCBvcGFjaXR5OiAnMScsIGVhc2U6IExpbmVhci5lYXNlTm9uZX0sIDEpXG4gICAgICAgIC5mcm9tVG8oXCIuZmlyc3RfcHJvZ3Jlc3NfX2xpbmUgc3BhblwiLCAxLCB7d2lkdGg6IDAsIG9wYWNpdHk6IDB9LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgd2lkdGg6ICcyNSUnLFxuICAgICAgICAgICAgZWFzZTogTGluZWFyLmVhc2VOb25lXG4gICAgICAgIH0sIDIpXG5cbiAgICAgICAgLmZyb21UbyhcInNlY3Rpb24ucGFuZWwuc2Vjb25kIC5maXJzdF9pbmZvXCIsIDEsIHtvcGFjaXR5OiAwLCB4OiBcIi0yMDAlXCJ9LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgICB4OiBcIjAlXCIsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmVcbiAgICAgICAgfSwgMilcbiAgICAgICAgLmZyb21UbyhcInNlY3Rpb24ucGFuZWwuc2Vjb25kIC5maXJzdF9zdGVwX190ZXh0XCIsIDEsIHtvcGFjaXR5OiAwLCB4OiBcIjIwMCVcIn0sIHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgICAgIHg6IFwiMCVcIixcbiAgICAgICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgICB9LCAyKVxuICAgICAgICAuZnJvbVRvKFwic2VjdGlvbi5wYW5lbC5zZWNvbmQgLmZpcnN0X2luZm9fX2ZhZGVcIiwgMSwge29wYWNpdHk6IDEsIHg6IFwiMFwifSwge1xuICAgICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgICAgeDogXCItMjAwJVwiLFxuICAgICAgICAgICAgZWFzZTogTGluZWFyLmVhc2VOb25lXG4gICAgICAgIH0sIDQpXG4gICAgICAgIC5mcm9tVG8oXCJzZWN0aW9uLnBhbmVsLnNlY29uZCAuZmlyc3Rfc3RlcF9fdGV4dFwiLCAxLCB7b3BhY2l0eTogMSwgeDogXCIwXCJ9LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgICAgICB4OiBcIjIwMCVcIixcbiAgICAgICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgICB9LCA0KVxuXG4gICAgICAgIC5mcm9tVG8oXCJzZWN0aW9uLnBhbmVsLnRoaXJkXCIsIDEsIHsnei1pbmRleCc6IDAsIG9wYWNpdHk6IDB9LCB7XG4gICAgICAgICAgICAnei1pbmRleCc6IDIsXG4gICAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmVcbiAgICAgICAgfSwgNSlcbiAgICAgICAgLmZyb21UbyhcIi5maXJzdF9wcm9ncmVzc19fbGluZSBzcGFuXCIsIDEsIHt3aWR0aDogJzI1JSd9LCB7d2lkdGg6ICc1MCUnLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9LCA1KVxuXG4gICAgICAgIC5mcm9tVG8oXCJzZWN0aW9uLnBhbmVsLnRoaXJkIC5maXJzdF9pbmZvX19mYWRlXCIsIDEsIHtvcGFjaXR5OiAwLCB4OiBcIi0xMDAlXCJ9LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgICB4OiBcIjAlXCIsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmVcbiAgICAgICAgfSwgNilcbiAgICAgICAgLmZyb21UbyhcInNlY3Rpb24ucGFuZWwudGhpcmQgLmZpcnN0X3N0ZXBfX3RleHRcIiwgMSwge29wYWNpdHk6IDAsIHg6IFwiMTAwJVwifSwge1xuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgeDogXCIwJVwiLFxuICAgICAgICAgICAgZWFzZTogTGluZWFyLmVhc2VOb25lXG4gICAgICAgIH0sIDYpXG4gICAgICAgIC5mcm9tVG8oXCJzZWN0aW9uLnBhbmVsLnRoaXJkIC5maXJzdF9pbmZvX19mYWRlXCIsIDEsIHtvcGFjaXR5OiAxLCB4OiBcIjBcIn0sIHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgICAgIHg6IFwiLTEwMCVcIixcbiAgICAgICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgICB9LCA4KVxuICAgICAgICAuZnJvbVRvKFwic2VjdGlvbi5wYW5lbC50aGlyZCAuZmlyc3Rfc3RlcF9fdGV4dFwiLCAxLCB7b3BhY2l0eTogMSwgeDogXCIwXCJ9LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgICAgICB4OiBcIjEwMCVcIixcbiAgICAgICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgICB9LCA4KVxuXG4gICAgICAgIC5mcm9tVG8oXCJzZWN0aW9uLnBhbmVsLmZvdXJ0aFwiLCAxLCB7J3otaW5kZXgnOiAwLCBvcGFjaXR5OiAwfSwge1xuICAgICAgICAgICAgJ3otaW5kZXgnOiAzLFxuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgZWFzZTogTGluZWFyLmVhc2VOb25lXG4gICAgICAgIH0sIDkpXG4gICAgICAgIC5mcm9tVG8oXCIuZmlyc3RfcHJvZ3Jlc3NfX2xpbmUgc3BhblwiLCAxLCB7d2lkdGg6ICc1MCUnfSwge3dpZHRoOiAnNzUlJywgZWFzZTogTGluZWFyLmVhc2VOb25lfSwgOSlcblxuICAgICAgICAuZnJvbVRvKFwic2VjdGlvbi5wYW5lbC5mb3VydGggLmZpcnN0X2luZm9fX2ZhZGVcIiwgMSwge29wYWNpdHk6IDAsIHg6IFwiLTEwMCVcIn0sIHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgICAgIHg6IFwiMCVcIixcbiAgICAgICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgICB9LCAxMClcbiAgICAgICAgLmZyb21UbyhcInNlY3Rpb24ucGFuZWwuZm91cnRoIC5maXJzdF9zdGVwX190ZXh0XCIsIDEsIHtvcGFjaXR5OiAwLCB4OiBcIjEwMCVcIn0sIHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgICAgIHg6IFwiMCVcIixcbiAgICAgICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgICB9LCAxMClcbiAgICAgICAgLmZyb21UbyhcInNlY3Rpb24ucGFuZWwuZm91cnRoIC5maXJzdF9pbmZvX19mYWRlXCIsIDEsIHtvcGFjaXR5OiAxLCB4OiBcIlwifSwge1xuICAgICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgICAgeDogXCItMTAwJVwiLFxuICAgICAgICAgICAgZWFzZTogTGluZWFyLmVhc2VOb25lXG4gICAgICAgIH0sIDEyKVxuICAgICAgICAuZnJvbVRvKFwic2VjdGlvbi5wYW5lbC5mb3VydGggLmZpcnN0X3N0ZXBfX3RleHRcIiwgMSwge29wYWNpdHk6IDEsIHg6IFwiXCJ9LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgICAgICB4OiBcIjEwMCVcIixcbiAgICAgICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgICB9LCAxMilcblxuICAgICAgICAuZnJvbVRvKFwic2VjdGlvbi5wYW5lbC5maWZ0aFwiLCAxLCB7J3otaW5kZXgnOiAwLCBvcGFjaXR5OiAwfSwge1xuICAgICAgICAgICAgJ3otaW5kZXgnOiA0LFxuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgZWFzZTogTGluZWFyLmVhc2VOb25lXG4gICAgICAgIH0sIDEzKVxuICAgICAgICAuZnJvbVRvKFwiLmZpcnN0X3Byb2dyZXNzX19saW5lIHNwYW5cIiwgMSwge3dpZHRoOiAnNzUlJ30sIHt3aWR0aDogJzEwMCUnLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9LCAxMylcblxuICAgICAgICAuZnJvbVRvKFwic2VjdGlvbi5wYW5lbC5maWZ0aCAuZmlyc3RfaW5mb19fZmFkZVwiLCAxLCB7b3BhY2l0eTogMCwgeDogXCItMTAwJVwifSwge1xuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgeDogXCIwJVwiLFxuICAgICAgICAgICAgZWFzZTogTGluZWFyLmVhc2VOb25lXG4gICAgICAgIH0sIDE0KVxuICAgICAgICAuZnJvbVRvKFwic2VjdGlvbi5wYW5lbC5maWZ0aCAuZmlyc3Rfc3RlcF9fdGV4dFwiLCAxLCB7b3BhY2l0eTogMCwgeDogXCIxMDAlXCJ9LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgICB4OiBcIjAlXCIsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmVcbiAgICAgICAgfSwgMTQpXG4gICAgICAgIC5mcm9tVG8oXCJzZWN0aW9uLnBhbmVsLmZpZnRoIC5maXJzdF9pbmZvX19mYWRlXCIsIDEsIHtvcGFjaXR5OiAxLCB4OiBcIlwifSwge1xuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgeDogXCIwXCIsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmVcbiAgICAgICAgfSwgMTYpXG4gICAgICAgIC5mcm9tVG8oXCJzZWN0aW9uLnBhbmVsLmZpZnRoIC5maXJzdF9zdGVwX190ZXh0XCIsIDEsIHtvcGFjaXR5OiAxLCB4OiBcIlwifSwge1xuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgeDogXCIwXCIsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmVcbiAgICAgICAgfSwgMTYpXG4gICAgICAgIC5mcm9tVG8oXCJzZWN0aW9uLnBhbmVsLmZpZnRoIC5maXJzdF9zdGVwX190ZXh0XCIsIDIsIHtvcGFjaXR5OiAxLCB4OiBcIlwifSwge1xuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgeDogXCIwXCIsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmVcbiAgICAgICAgfSwgMTcpO1xuXG4vLyBjcmVhdGUgc2NlbmUgdG8gcGluIGFuZCBsaW5rIGFuaW1hdGlvblxuICAgIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICAgIHRyaWdnZXJFbGVtZW50OiBcIiN3aG93ZVwiLFxuICAgICAgICB0cmlnZ2VySG9vazogXCJvbkxlYXZlXCIsXG4gICAgICAgIGR1cmF0aW9uOiBcIjEwMDAlXCJcbiAgICB9KVxuICAgICAgICAuc2V0UGluKFwiI3dob3dlXCIpXG4gICAgICAgIC5zZXRUd2Vlbih3aXBlQW5pbWF0aW9uKVxuICAgICAgICAuYWRkVG8oY29udHJvbGxlcik7XG5cbi8vIGluaXQgMlxuXG4gICAgdmFyIHdpcGVBbmltYXRpb24yID0gbmV3IFRpbWVsaW5lTWF4KClcblxuICAgICAgICAuZnJvbVRvKFwiLndoZXJlX190aXRsZVwiLCAxLCB7b3BhY2l0eTogMSwgeTogJzMlJ30sIHtvcGFjaXR5OiAwLCB5OiBcIi0xNTAlXCIsIGVhc2U6IExpbmVhci5lYXNlTm9uZX0sIDApXG4gICAgICAgIC5mcm9tVG8oXCJzZWN0aW9uI21hcC1zZWNvbmRcIiwgMSwge29wYWNpdHk6IDB9LCB7J3otaW5kZXgnOiAxLCBvcGFjaXR5OiAnMScsIGVhc2U6IExpbmVhci5lYXNlTm9uZX0sIDApXG4gICAgICAgIC5mcm9tVG8oXCIubWFwLXNlY29uZF9pbmZvXCIsIDEsIHtvcGFjaXR5OiAwLCB4OiBcIi0xMDAlXCJ9LCB7b3BhY2l0eTogJzEnLCB4OiBcIjAlXCIsIGVhc2U6IExpbmVhci5lYXNlTm9uZX0sIDEpXG4gICAgICAgIC5mcm9tVG8oXCIubWFwLXNlY29uZF9pbWdcIiwgMSwge29wYWNpdHk6IDAsIHg6IFwiMTAwJVwifSwge29wYWNpdHk6ICcxJywgeDogXCIwJVwiLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9LCAxKVxuXG4gICAgICAgIC5mcm9tVG8oXCIubWFwLXNlY29uZF9pbmZvX190ZXh0IHA6Zmlyc3QtY2hpbGRcIiwgMSwge29wYWNpdHk6IDF9LCB7b3BhY2l0eTogJzEnLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9LCAzKVxuICAgICAgICAuZnJvbVRvKFwiLm1hcC1zZWNvbmRfaW5mb19fdGV4dCBwOm50aC1jaGlsZCgyKVwiLCAxLCB7b3BhY2l0eTogMH0sIHtvcGFjaXR5OiAnMScsIGVhc2U6IExpbmVhci5lYXNlTm9uZX0sIDQpXG4gICAgICAgIC5mcm9tVG8oXCIubWFwLXNlY29uZF9pbmZvX190ZXh0IHA6bnRoLWNoaWxkKDMpXCIsIDEsIHtvcGFjaXR5OiAwfSwge29wYWNpdHk6ICcxJywgZWFzZTogTGluZWFyLmVhc2VOb25lfSwgNylcblxuICAgICAgICAuZnJvbVRvKFwiLm1hcC1zZWNvbmRfaW1nX19pdGVtOmZpcnN0LWNoaWxkXCIsIDEsIHtvcGFjaXR5OiAxfSwge29wYWNpdHk6ICcxJywgZWFzZTogTGluZWFyLmVhc2VOb25lfSwgMylcbiAgICAgICAgLmZyb21UbyhcIi5tYXAtc2Vjb25kX2ltZ19faXRlbTpudGgtY2hpbGQoMilcIiwgMSwge29wYWNpdHk6IDB9LCB7b3BhY2l0eTogJzEnLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9LCA0KVxuICAgICAgICAuZnJvbVRvKFwiLm1hcC1zZWNvbmRfaW1nX19pdGVtOm50aC1jaGlsZCgyKVwiLCAxLCB7b3BhY2l0eTogMX0sIHtvcGFjaXR5OiAnMScsIGVhc2U6IExpbmVhci5lYXNlTm9uZX0sIDUpXG4gICAgICAgIC5mcm9tVG8oXCIubWFwLXNlY29uZF9pbWdfX2l0ZW06bnRoLWNoaWxkKDIpXCIsIDEsIHtvcGFjaXR5OiAxfSwge29wYWNpdHk6ICcxJywgZWFzZTogTGluZWFyLmVhc2VOb25lfSwgNilcbiAgICAgICAgLmZyb21UbyhcIi5tYXAtc2Vjb25kX2ltZ19faXRlbTpudGgtY2hpbGQoMylcIiwgMSwge29wYWNpdHk6IDB9LCB7b3BhY2l0eTogJzEnLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9LCA3KVxuICAgICAgICAuZnJvbVRvKFwiLndoZXJlX190aXRsZVwiLCAyLCB7b3BhY2l0eTogMX0sIHtvcGFjaXR5OiAwLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9LCA4KTtcblxuLy8gY3JlYXRlIHNjZW5lIHRvIHBpbiBhbmQgbGluayBhbmltYXRpb25cbiAgICBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xuICAgICAgICB0cmlnZ2VyRWxlbWVudDogXCIjd2hlcmVcIixcbiAgICAgICAgdHJpZ2dlckhvb2s6IFwib25MZWF2ZVwiLFxuICAgICAgICBkdXJhdGlvbjogXCI1MDAlXCJcbiAgICB9KVxuICAgICAgICAuc2V0UGluKFwiI3doZXJlXCIpXG4gICAgICAgIC5zZXRUd2Vlbih3aXBlQW5pbWF0aW9uMilcbiAgICAgICAgLmFkZFRvKGNvbnRyb2xsZXIpO1xuXG4vLyBpbml0IDNcblxuICAgIHZhciB3aXBlQW5pbWF0aW9uMyA9IG5ldyBUaW1lbGluZU1heCgpXG5cbiAgICAgICAgLmZyb21UbyhcIiNzZXJ2aWNlcy1maXJzdCAuc2VydmljZXNfX3RpdGxlIGltZ1wiLCAxLCB7b3BhY2l0eTogMSwgeDogMH0sIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICB4OiBcIi0yMCVcIixcbiAgICAgICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgICB9LCAwKVxuICAgICAgICAvLyAuZnJvbVRvKFwiI3NlcnZpY2VzLWZpcnN0IC5zZXJ2aWNlc19faW1nXCIsIDEsIHtvcGFjaXR5OiAxfSwge29wYWNpdHk6IDAsIGVhc2U6IExpbmVhci5lYXNlTm9uZX0sIDApXG5cbiAgICAgICAgLmZyb21UbyhcIiNzZXJ2aWNlcy1zZWNvbmRcIiwgMSwge29wYWNpdHk6IDAsICd6LWluZGV4JzogMX0sIHtcbiAgICAgICAgICAgICd6LWluZGV4JzogMSxcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgICB9LCAxKVxuICAgICAgICAuZnJvbVRvKFwiI3NlcnZpY2VzLXNlY29uZCAuc2VydmljZXNfc3RlcF9pbmZvXCIsIDEsIHtvcGFjaXR5OiAwLCB4OiBcIi0xMDAlXCJ9LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgICB4OiBcIjAlXCIsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmVcbiAgICAgICAgfSwgMilcbiAgICAgICAgLmZyb21UbyhcIiNzZXJ2aWNlcy1zZWNvbmQgLnNlcnZpY2VzX3N0ZXBfdGV4dFwiLCAxLCB7b3BhY2l0eTogMCwgeDogXCIxMDAlXCJ9LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgICB4OiBcIjAlXCIsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmVcbiAgICAgICAgfSwgMilcblxuICAgICAgICAuZnJvbVRvKFwiI3NlcnZpY2VzLXRoaXJkXCIsIDEsIHtvcGFjaXR5OiAwLCAnei1pbmRleCc6IDB9LCB7XG4gICAgICAgICAgICAnei1pbmRleCc6IDIsXG4gICAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmVcbiAgICAgICAgfSwgMylcbiAgICAgICAgLmZyb21UbyhcIiNzZXJ2aWNlcy10aGlyZCAuc2VydmljZXNfc3RlcF9pbmZvXCIsIDEsIHtvcGFjaXR5OiAwLCB4OiBcIi0xMDAlXCJ9LCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgICB4OiBcIjAlXCIsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmVcbiAgICAgICAgfSwgNClcbiAgICAgICAgLmZyb21UbyhcIiNzZXJ2aWNlcy10aGlyZCAuc2VydmljZXNfc3RlcF90ZXh0XCIsIDEsIHtvcGFjaXR5OiAwLCB4OiBcIjEwMCVcIn0sIHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgICAgIHg6IFwiMCVcIixcbiAgICAgICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgICB9LCA0KVxuXG4gICAgICAgIC5mcm9tVG8oXCIjc2VydmljZXMtZm91cnRoXCIsIDEsIHtvcGFjaXR5OiAwLCAnei1pbmRleCc6IDB9LCB7XG4gICAgICAgICAgICAnei1pbmRleCc6IDMsXG4gICAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgICBlYXNlOiBMaW5lYXIuZWFzZU5vbmVcbiAgICAgICAgfSwgNSlcbiAgICAgICAgLmZyb21UbyhcIiNzZXJ2aWNlcy1mb3VydGggLnNlcnZpY2VzX3N0ZXBfaW5mb1wiLCAxLCB7b3BhY2l0eTogMCwgeDogXCItMTAwJVwifSwge1xuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgeDogXCIwJVwiLFxuICAgICAgICAgICAgZWFzZTogTGluZWFyLmVhc2VOb25lXG4gICAgICAgIH0sIDYpXG4gICAgICAgIC5mcm9tVG8oXCIjc2VydmljZXMtZm91cnRoIC5zZXJ2aWNlc19zdGVwX3RleHRcIiwgMSwge29wYWNpdHk6IDAsIHg6IFwiMTAwJVwifSwge1xuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgeDogXCIwJVwiLFxuICAgICAgICAgICAgZWFzZTogTGluZWFyLmVhc2VOb25lXG4gICAgICAgIH0sIDYpXG4gICAgICAgIC5mcm9tVG8oXCIjc2VydmljZXMtZmlyc3QgLnNlcnZpY2VzX190aXRsZSBpbWdcIiwgMiwge29wYWNpdHk6IDF9LCB7b3BhY2l0eTogMCwgZWFzZTogTGluZWFyLmVhc2VOb25lfSwgNyk7XG5cbi8vIGNyZWF0ZSBzY2VuZSB0byBwaW4gYW5kIGxpbmsgYW5pbWF0aW9uXG4gICAgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICAgICAgdHJpZ2dlckVsZW1lbnQ6IFwiI3NlcnZpY2VzXCIsXG4gICAgICAgIHRyaWdnZXJIb29rOiBcIm9uTGVhdmVcIixcbiAgICAgICAgZHVyYXRpb246IFwiMTAwMCVcIlxuICAgIH0pXG4gICAgICAgIC5zZXRQaW4oXCIjc2VydmljZXNcIilcbiAgICAgICAgLnNldFR3ZWVuKHdpcGVBbmltYXRpb24zKVxuICAgICAgICAuYWRkVG8oY29udHJvbGxlcik7XG5cbi8vIGluaXQgNFxuXG4gICAgdmFyIHdpcGVBbmltYXRpb240ID0gbmV3IFRpbWVsaW5lTWF4KClcblxuICAgICAgICAuZnJvbVRvKFwiLmZvcndob19fdGl0bGVcIiwgMSwge29wYWNpdHk6IDEsIHk6ICczJSd9LCB7b3BhY2l0eTogMCwgeTogXCItNTAlXCIsIGVhc2U6IExpbmVhci5lYXNlTm9uZX0sIDApXG4gICAgICAgIC5mcm9tVG8oXCJzZWN0aW9uI2Zvci13aG8tc2Vjb25kXCIsIDEsIHtvcGFjaXR5OiAwfSwgeyd6LWluZGV4JzogMSwgb3BhY2l0eTogJzEnLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9LCAwKVxuICAgICAgICAuZnJvbVRvKFwiLmZvcndob19zdGVwX2luZm9cIiwgMSwge29wYWNpdHk6IDAsIHg6IFwiLTEwMCVcIn0sIHtvcGFjaXR5OiAnMScsIHg6IFwiMCVcIiwgZWFzZTogTGluZWFyLmVhc2VOb25lfSwgMSlcbiAgICAgICAgLmZyb21UbyhcIi5mb3J3aG9faWNvbnNcIiwgMSwge29wYWNpdHk6IDAsIHg6IFwiMTAwJVwifSwge29wYWNpdHk6ICcxJywgeDogXCIwJVwiLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9LCAxKVxuICAgICAgICAuZnJvbVRvKFwiLmZvcndob19fdGl0bGVcIiwgMiwge29wYWNpdHk6IDF9LCB7b3BhY2l0eTogMCwgZWFzZTogTGluZWFyLmVhc2VOb25lfSwgMik7XG5cbi8vIGNyZWF0ZSBzY2VuZSB0byBwaW4gYW5kIGxpbmsgYW5pbWF0aW9uXG4gICAgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICAgICAgdHJpZ2dlckVsZW1lbnQ6IFwiI3BhcnRuZXJzXCIsXG4gICAgICAgIHRyaWdnZXJIb29rOiBcIm9uTGVhdmVcIixcbiAgICAgICAgZHVyYXRpb246IFwiNTAwJVwiXG4gICAgfSlcbiAgICAgICAgLnNldFBpbihcIiNwYXJ0bmVyc1wiKVxuICAgICAgICAuc2V0VHdlZW4od2lwZUFuaW1hdGlvbjQpXG4gICAgICAgIC5hZGRUbyhjb250cm9sbGVyKTtcblxufVxuXG5cbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBBZGQgY2xhc3Mgb24gc2Nyb2xsXG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICBpZiAoc2Nyb2xsID49IDUwKSB7XG4gICAgICAgICAgICAkKFwiLmhlYWRlcl90b3BcIikuYWRkQ2xhc3MoXCJoZWFkZXJfZml4ZWRcIik7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgJChcIi5oZWFkZXJfdG9wXCIpLnJlbW92ZUNsYXNzKFwiaGVhZGVyX2ZpeGVkXCIpO1xuXG4gICAgfSk7XG5cbiAgICAvLyBDViBmb3JtXG5cbiAgICAkKCcuY29udGFjdHNfam9iX19mb3JtJykuZmFkZU91dCgpO1xuICAgICQoJy5jb250YWN0c19qb2JfX3RpdGxlIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAkKCcuY29udGFjdHNfam9iX19mb3JtJykuZmFkZVRvZ2dsZSgpO1xuICAgIH0pO1xufSk7Il19