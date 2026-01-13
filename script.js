// (function () {
//   emailjs.init("fp2ihnbxtgJ9bg1at"); // 🔴 replace with your EmailJS Public Key
// })();
// $(document).ready(function () {
//   // Scroll down sticky navbar script start
//   $(window).scroll(function () {
//     if (this.scrollY > 20) {
//       $(".navbar").addClass("sticky");
//     } else {
//       $(".navbar").removeClass("sticky");
//     }
//     // Scroll down sticky navbar script end

//     // Scroll up Button script start
//     if (this.scrollY > 500) {
//       $(".scroll-up-btn").addClass("show");
//     } else {
//       $(".scroll-up-btn").removeClass("show");
//     }
//     // Scroll up Button script end

//     // Fade In & Fade Out Elements on Scroll script start
//     $(".fadein").each(function (i) {
//       var bottom_of_element = $(this).offset().top + $(this).outerHeight();
//       var bottom_of_window = $(window).scrollTop() + $(window).height();

//       if (bottom_of_window > bottom_of_element) {
//         $(this).addClass("showme");
//       }
//       if (bottom_of_window < bottom_of_element) {
//         $(this).removeClass("showme");
//       }
//     });
//     // Fade In & Fade Out Elements on Scroll script end
//   });

//   // Scroll up Button script start
//   $(".scroll-up-btn").click(function () {
//     $("html").animate({ scrollTop: 0 });
//   });
//   // Scroll up Button script end

//   // animation Script for display
//   const animationScript = ["Web Developer", "Student in Engineering", "Your Tenny Author"];

//   // Typing animation script start
//   new Typed(".typing", {
//     strings: animationScript,
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true,
//   });

//   new Typed(".typing2", {
//     strings: animationScript,
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true,
//   });
//   // Typing animation script End

//   // toggle menu/navbar script start
//   $(".menu-btn").click(function () {
//     $(".navbar .menu").toggleClass("active");
//     $(".menu-btn i").toggleClass("active");
//   });
//   // toggle menu/navbar script end

//   // owl carousel script start
//   $(".carousel").owlCarousel({
//     margin: 20,
//     loop: true,
//     autoplayTimeOut: 2000,
//     autoplayHoverPause: true,
//     responsive: {
//       0: {
//         items: 1,
//         nav: false,
//       },
//       600: {
//         items: 2,
//         nav: false,
//       },
//       1000: {
//         items: 3,
//         nav: false,
//       },
//     },
//   });
//   // owl carousel script end
// });

// // Get the current year
// const currentYear = new Date().getFullYear();
// // Set the current year in the span with id "year"
// document.getElementById('year').textContent = currentYear;
// // Contact form EmailJS integration
// document.getElementById("contact-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const params = {
//     from_name: document.getElementById("name").value,
//     from_email: document.getElementById("email").value,
//     subject: document.getElementById("subject").value,
//     message: document.getElementById("message").value,
//   };

//   emailjs
//     .send(
//       "service_1tr6gbr",   // 🔴 EmailJS Service ID
//       "template_2beo738",  // 🔴 EmailJS Template ID
//       params
//     )
//     .then(
//       function () {
//         alert("✅ Message sent successfully!");
//         document.getElementById("contact-form").reset();
//       },
//       function (error) {
//         alert("❌ Failed to send message. Try again!");
//         console.error("EmailJS Error:", error);
//       }
//     );
// });


/*************** EMAILJS INIT *****************/
(function () {
  emailjs.init("fp2ihnbxtgJ9bg1at"); // Your EmailJS Public Key
})();

/*************** DOCUMENT READY *****************/
$(document).ready(function () {

  /* ===== NAVBAR SCROLL ===== */
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }

    $(".fadein").each(function () {
      const bottomOfElement = $(this).offset().top + $(this).outerHeight();
      const bottomOfWindow = $(window).scrollTop() + $(window).height();

      if (bottomOfWindow > bottomOfElement) {
        $(this).addClass("showme");
      } else {
        $(this).removeClass("showme");
      }
    });
  });

  /* ===== SCROLL UP BUTTON ===== */
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  /* ===== TYPING ANIMATION ===== */
  const animationScript = [
    "Web Developer",
    "Student in Engineering",
    "Your Tenny Author"
  ];

  new Typed(".typing", {
    strings: animationScript,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  new Typed(".typing2", {
    strings: animationScript,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  /* ===== MENU TOGGLE ===== */
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  /* ===== OWL CAROUSEL ===== */
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
    },
  });

  /* ===== CONTACT FORM (EMAILJS) ===== */
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();

    const button = $(this).find("button");
    button.prop("disabled", true).html("Sending...");

    const params = {
      from_name: $("#name").val(),
      from_email: $("#email").val(),
      subject: $("#subject").val(),
      message: $("#message").val(),
    };

    emailjs.send(
      "service_1tr6gbr",    // EmailJS Service ID
      "template_2beo738",   // EmailJS Template ID
      params
    ).then(
      function () {
        alert("✅ Message sent successfully!");
        $("#contact-form")[0].reset();
        button.prop("disabled", false).html('Send Message <i class="fas fa-paper-plane"></i>');
      },
      function (error) {
        alert("❌ Failed to send message. Try again!");
        console.error("EmailJS Error:", error);
        button.prop("disabled", false).html('Send Message <i class="fas fa-paper-plane"></i>');
      }
    );
  });

});

/*************** CURRENT YEAR *****************/
document.getElementById("year").textContent = new Date().getFullYear();


