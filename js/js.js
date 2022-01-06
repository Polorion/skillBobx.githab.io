window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#icon-burger').addEventListener("click", function(){
    document.querySelector('.burger').classList.toggle('burger-active')
  })
});

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#icon-burger').addEventListener("click", function(){
    document.querySelector('.header__body').classList.toggle('burger-open')
  })
});



document.querySelector(".find-point-search").addEventListener("click", function() {
  document.querySelector(".find-point__form").classList.add("find-point__form-active");
  document.querySelector('.find-point').classList.add('find-point-icon-active-bg')
  this.classList.add("find-point-icon-active");
});
document.querySelector(".exit__find").addEventListener("click", function() {
  document.querySelector(".find-point__form").classList.remove("find-point__form-active");
});





document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".find-point__form");
  if (!target.closest(".hero__find-point")) {
  form.classList.remove("find-point__form-active");
    form.querySelector("input").value = "";
    document.querySelector(".find-point-search").classList.remove("find-point-icon-active");
    document.querySelector(".find-point").classList.remove("find-point-icon-active-bg")
  }
})





const swiper = new Swiper('.swiper-gall', {
  // Optional parameters

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
      grid: {
        rows:1,
      },
   
    },
    767: {
      slidesPerView:2,
      spaceBetween: 34,
      slidesPerGroup: 2,
      grid: {
        rows:2,
      },
  
    },
    1450: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
      grid: {
        rows:2,
      },
  
    },
    
  },

  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-gall',
    type: 'fraction',
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper_button-next-gall',
    prevEl: '.swiper_button-prev-gall',
  },
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
});

document.addEventListener("DOMContentLoaded", function() {
document.querySelectorAll(".hero__link").forEach(item => {
item.addEventListener("click", function() {
  let btn = this;
  let dropdown = this.parentElement.querySelector(".hero-list__choice");
  
  document.querySelectorAll(".hero__link").forEach(el => {
    if (el != btn) {
      el.classList.remove("arrow-top_t");
    }
  });
  
  document.querySelectorAll(".hero-list__choice").forEach(el => {
    if (el != dropdown) {
      el.classList.remove("list-open");
    }
  })
  dropdown.classList.toggle("list-open");
  btn.classList.toggle("arrow-top_t")
})
})

document.addEventListener("click", function(e) {
let target = e.target;
if (!target.closest(".hero-list")) {
  document.querySelectorAll(".hero-list__choice").forEach(el => {
      el.classList.remove("list-open");
  })
   document.querySelectorAll(".hero__link").forEach(el => {
      el.classList.remove("arrow-top_t");
  });
}
})
});


const element = document.querySelector('#gall__choise');
const choices = new Choices(element, {
searchEnabled: false,
});



$( function() {
$( ".accordion" ).accordion(
  {
    heightStyle: "content"
  }
);
});



// document.addEventListener('DOMContentLoaded', function(){
// document.querySelectorAll('.catalog__acardion_item').forEach(function(tabPersona) {
//   console.log(tabPersona)
//   tabPersona.addEventListener('click', function(event) {
//     const path = event.currentTarget.dataset.path


//     document.querySelectorAll('.catalog__persona').forEach(function(tabContet) {
//       tabContet.classList.remove('catatalog__pesona-tab-active')
//     })

//     document.querySelector(`[data-target="${path}"]`).classList.add("catatalog__pesona-tab-active")
//   });
// });
// });








document.addEventListener("DOMContentLoaded", function() {
  function tabsActive(tabPath, tabTarget) {
    document.querySelectorAll(tabPath).forEach(item => {
    item.addEventListener("click", function(e) {
      let path = e.currentTarget.dataset.path;
      document.querySelectorAll(tabTarget).forEach(el => {
        el.classList.remove("active");
      })
      document.querySelectorAll(tabPath).forEach(el => {
        el.classList.remove("active");
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("active");
      
      this.classList.add("active");
    })
  })
  };

  tabsActive(".catalog__item_lang", ".catalog__tab-content")
  tabsActive(".catalog__acardion_btn", ".catalog__persona")
  tabsActive(".catalog__acardion_btn-mobil", ".catalog__persona")
})







const swiperHero = new Swiper('.swiper-hero', {
// Optional parameters
loop: true,
effect:"fade",
speed:3000,

autoplay: {
  delay:3000,

},

// If we need pagination
pagination: {
  el: '.swiper-pagination',

},

// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
scrollbar: {
  el: '.swiper-scrollbar',
},
});



let btn = document.querySelector(".event_btn");
const slider = document.querySelector('.event-swiper');
let allitems = document.querySelectorAll(".event-swiper-slide");
btn.addEventListener("click", function() {
  allitems.forEach(item => {
    item.style.display = "block";
  })
  
  this.style.display = "none";
  
})


let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
       autoHeight: true,
			slideClass: 'event-swiper-slide',
			pagination: {
				el: '.event-swiper-pagination',
				clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767 && slider.dataset.mobile == 'true') {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});





const swiperEdition = new Swiper('.swiper-edition', {
  // Optional parameters
  breakpoints: {
 1: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,

    },

    540: {
      slidesPerView:2,
      spaceBetween: 60,
      slidesPerGroup: 2,

    },
    767: {
      slidesPerView:2,
      spaceBetween: 34,
      slidesPerGroup: 2,

  
    },
   1030: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,

  
    },
    
  },

  
  // If we need pagination

  pagination: {
    el: '.swiper-pagination-gall',
    type: 'fraction',
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper_button-next-edition',
    prevEl: '.swiper_button-prev-edition',
  },
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar-edition',
  },
  });
  

  let button = ".h2-click";
let labels = ".checkbox--label";
let labelsList = ".checkbox-list";
let labelsListActive = "checklist-active";
let labelActive = "checkbox--label-active";
let animationClass = "animation-test";
let inputCheckbox = ".checkbox";

function checkboxToggle(a, b, c, labelsListActive, labelActive, animationClass, inputCheckbox) {
  let btn = document.querySelector(a);
  let labels = document.querySelectorAll(b);
  let listLabels = document.querySelector(c);
btn.addEventListener("click", toggleSpoiler);
  btn.addEventListener("keyup", function(e) {
    console.log(e.key);
    if (e.code === "Enter") {
      toggleSpoiler();
    }
  })    
function toggleSpoiler() {
    if (!listLabels.classList.contains(labelsListActive)) {
    listLabels.classList.add(labelsListActive);
    labels.forEach(item => {
     // item.classList.add("checkbox--label-active");
      animationItem(item, labelActive, animationClass, "add");
    })
  } else {
    listLabels.classList.remove(labelsListActive);
    labels.forEach(item => {
      if (item.querySelector(inputCheckbox).checked) {
      animationItem(item, labelActive, animationClass, "add");
      } else {
        animationItem(item, labelActive, animationClass, "remove");
      }
      });
  }
  labels.forEach(item => {
    item.addEventListener("click", function() {
      if (!listLabels.classList.contains(labelsListActive)) {
        animationItem(this, labelActive, animationClass, "remove");
      }
    });
  })
}
function animationItem(item, class1, class2, f) {
 if (f === "add") {
    item.classList.add(class1);
  setTimeout(function() {
    item.classList.add(class2)
  }, 100);

 } else {
     item.classList.remove(class2);
  setTimeout(function() {
    item.classList.remove(class1)
  }, 300);
  }
 
}


}



checkboxToggle(button, labels, labelsList, labelsListActive, labelActive, animationClass, inputCheckbox);




const swiperProject = new Swiper('.swiper-project', {
  // Optional parameters
  breakpoints: {
    1: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,

    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,

    },

    



    767: {
      slidesPerView:2,
      spaceBetween: 34,
      slidesPerGroup: 2,

    },
    900: {
      slidesPerView:2,
      spaceBetween: 49,
      slidesPerGroup: 2,

  
    },
    1450: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,

  
    },

    
  },
 

  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-project',
  
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper_button-next-project',
    prevEl: '.swiper_button-prev-project',
  },
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar-project',
  },
  });
  

  var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7(999)-999-99-99");
    im.mask(selector);



    new JustValidate('.contact__form', {
      messages: {
        name: {
          minLength: 'Минимум две буквы',
          required: 'Введите имя'

        },
        tel: {
          required: 'Введите телефон',
          function: 'Заполните телефон полностью'
        },

      },
      rules: {
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        },
        name: {
          required: true,
          minLength: 2,
        },
        email: {
          required: true,
          email:true,
        },
    },
  });

  

    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center:[55.760326022633905,37.61463947629234],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });
      var myPlacemark = new ymaps.Placemark([55.760326022633905,37.61463947629234], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/contact/Ellipse.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });
      myMap.geoObjects.add(myPlacemark);
 // удаляем геолокацию
      myMap.controls.remove('searchControl'); // удаляем поиск
      myMap.controls.remove('trafficControl'); // удаляем контроль трафика
      myMap.controls.remove('typeSelector'); // удаляем тип
      myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      myMap.controls.remove('rulerControl'); // удаляем контрол правил
      myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    }

    tippy('.project__tyltip-icon-max', {
      trigger: 'click',
      theme: 'tomato',
    });


    tippy('.project__tyltip-icon-min', {
      trigger: 'click',
      theme: 'tomato-m',
    });

    let buttonContact = document.querySelector('.contact__btn');
    function test (){
    let VW = document.documentElement.clientWidth
     
    if(VW > 750){
      buttonContact.textContent = 'Заказать обратный звонок'
    }
    else {
      buttonContact.textContent = 'Заказать'
    }
  }
  test()

  
    window.addEventListener("resize", function() {
   test()
    });
    document.addEventListener("DOMContentLoaded",function(){

   
    let buttonNextProject = document.querySelector('.swiper_button-next-project');
    buttonNextProject.setAttribute('aria-label', 'слайд вперед' );
    
    let buttonPrevProject = document.querySelector('.swiper_button-prev-project');
    buttonPrevProject.setAttribute('aria-label', 'слайд назад' );

    let buttonNextGall = document.querySelector('.swiper_button-next-gall');
    buttonNextGall.setAttribute('aria-label', 'слайд вперед' );
    
    let buttonPrevGall = document.querySelector('.swiper_button-prev-gall');
    buttonPrevGall.setAttribute('aria-label', 'слайд назад' );
    
    let buttonNextEdition = document.querySelector('.swiper_button-prev-edition');
    buttonNextEdition.setAttribute('aria-label', 'слайд назад' );
    console.log(buttonNextEdition)
    
    let buttonPrevEdition = document.querySelector('.swiper_button-next-edition');
    buttonPrevEdition.setAttribute('aria-label', 'слайд вперед' );

    let gallSlide = document.querySelectorAll('.swiper-slide-gall');
    
    for (let i = 0 ; i < gallSlide.length; ++i){
      gallSlide[i].setAttribute('aria-label', `слайд${i + 1}` )
    }


    let editionSlide = document.querySelectorAll('.swiper-slide-edition');
   
    for (let i = 0 ; i < editionSlide.length; ++i){
      editionSlide[i].setAttribute('aria-label', `слайд${i + 1}` )
    };

    let projectSlide = document.querySelectorAll('.swiper-slide-project');
  
   
    for (let i = 0 ; i <  projectSlide.length; ++i){
      projectSlide[i].setAttribute('aria-label', `слайд${i + 1}` )
    }
  })

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,

  })



   
   
 
