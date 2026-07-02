/* =========================================
   Contact Form JS
   File: contact-form.js
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contactForm");

  if (!form) return;

  /* Browser default validation off, JS alert on */
  form.setAttribute("novalidate", "novalidate");

  const phoneInput = form.querySelector('input[name="phone"]');

  /* Phone clean on typing */
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      this.value = cleanPhoneNumber(this.value);
    });

    phoneInput.addEventListener("paste", function (e) {
      e.preventDefault();

      const pastedText = (e.clipboardData || window.clipboardData).getData(
        "text"
      );

      this.value = cleanPhoneNumber(pastedText);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const locationInput = form.querySelector('input[name="location"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const submitBtn = form.querySelector('button[type="submit"]');

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const phone = phoneInput ? cleanPhoneNumber(phoneInput.value) : "";
    const location = locationInput ? locationInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (phoneInput) {
      phoneInput.value = phone;
    }

    /* Reset validation */
    form.querySelectorAll(".is-invalid").forEach(function (field) {
      field.classList.remove("is-invalid");
    });

    let isValid = true;
    let alertMessage = "";

    /* Name validation */
    if (nameInput && !name) {
      nameInput.classList.add("is-invalid");
      isValid = false;
      alertMessage = "Please enter your name.";
    }

    /* Email validation */
    else if (emailInput && !validateEmail(email)) {
      emailInput.classList.add("is-invalid");
      isValid = false;
      alertMessage = "Please enter a valid email address.";
    }

    /* Phone validation */
    else if (phoneInput && !validatePhone(phone)) {
      phoneInput.classList.add("is-invalid");
      isValid = false;
      alertMessage = "Please enter a valid 10 digit mobile number.";
    }

    /* Location validation */
    else if (locationInput && !location) {
      locationInput.classList.add("is-invalid");
      isValid = false;
      alertMessage = "Please enter your location.";
    }

    /* Message validation */
    else if (messageInput && !message) {
      messageInput.classList.add("is-invalid");
      isValid = false;
      alertMessage = "Please enter your message.";
    }

    if (!isValid) {
      alert(alertMessage);
      return;
    }

    /* Button loading start */
    if (submitBtn) {
      if (submitBtn.disabled) return;

      submitBtn.disabled = true;
      submitBtn.classList.add("loading");
      submitBtn.dataset.originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        Sending...
      `;
    }

    const formData = {
      name: name,
      email: email,
      phone: phone,
      location: location,
      message: message,
      formType: "Contact Form",
    };

    console.log("Contact Form Data:", formData);

    /*
      Backend/API submit yahan add hoga.
      Abhi demo ke liye success alert show hoga.
    */
    setTimeout(function () {
      alert("Thank you! Your message has been sent successfully.");

      form.reset();

      /* Button loading stop */
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove("loading");

        submitBtn.innerHTML =
          submitBtn.dataset.originalText || "Send Message";
      }
    }, 1000);
  });

  function cleanPhoneNumber(value) {
    let phone = value.replace(/\D/g, "");

    /* 00 / 0091 remove */
    phone = phone.replace(/^00+/, "");

    /* Starting 0 remove */
    phone = phone.replace(/^0+/, "");

    /* 91 country code remove */
    if (phone.startsWith("91") && phone.length > 10) {
      phone = phone.slice(2);
    }

    /* Again starting 0 remove after 91 clean */
    phone = phone.replace(/^0+/, "");

    /* Extra digits remove */
    if (phone.length > 10) {
      phone = phone.slice(0, 10);
    }

    return phone;
  }

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function validatePhone(phone) {
    return /^[6-9][0-9]{9}$/.test(phone);
  }
});