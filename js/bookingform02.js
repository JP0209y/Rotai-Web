// -------- PHONE CLEAN --------
function cleanPhoneNumber(value) {
  let phone = value.replace(/\D/g, "");

  phone = phone.replace(/^0+/, "");

  if (phone.startsWith("91") && phone.length > 10) {
    phone = phone.slice(2);
  }

  if (phone.length > 10) {
    phone = phone.slice(0, 10);
  }

  return phone;
}

// -------- OPEN / CLOSE DROPDOWNS --------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown").forEach((drop) => {
    drop.addEventListener("click", function (e) {
      e.stopPropagation();

      document.querySelectorAll(".dropdown").forEach((d) => {
        if (d !== this) d.classList.remove("active");
      });

      this.classList.toggle("active");
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown").forEach((d) => {
      d.classList.remove("active");
    });
  });

  const dateInput = document.getElementById("appointment-date");
  const dateValue = document.getElementById("date-value");
  const summaryDate = document.getElementById("summary-date");
  const timeItems = document.querySelectorAll('li[onclick^="selectTime"]');

  const productValue = document.getElementById("product-demo-value");
  const productInput = document.getElementById("input-product");
  const summaryProduct = document.getElementById("summary-product");

  const phoneField = document.querySelector('input[name="phone"]');
  const bookingForm = document.querySelector("#bookappointmentModal form");
  const submitBtn = document.getElementById("appointmentSubmitBtn");
  const openBtn = document.getElementById("openAppointmentModalBtn");

  // -------- DEFAULT PRODUCT SET --------
  if (productValue && productInput) {
    const productText = `${productValue.innerText.trim()} - 30 mins`;
    productInput.value = productText;

    if (summaryProduct) {
      summaryProduct.innerText = productText;
    }
  }

  // -------- PHONE INPUT CLEAN --------
  if (phoneField) {
    phoneField.addEventListener("input", function () {
      this.value = cleanPhoneNumber(this.value);
    });

    phoneField.addEventListener("paste", function (e) {
      e.preventDefault();

      const pastedText = (e.clipboardData || window.clipboardData).getData("text");
      this.value = cleanPhoneNumber(pastedText);
    });
  }

  // -------- DATE + TIME LOGIC --------
  if (dateInput) {
    const now = new Date();
    const yyyy = now.getFullYear();
    let mm = now.getMonth() + 1;
    let dd = now.getDate();

    if (mm < 10) mm = "0" + mm;
    if (dd < 10) dd = "0" + dd;

    const todayStr = `${yyyy}-${mm}-${dd}`;

    dateInput.value = todayStr;
    dateInput.min = todayStr;

    updateDateUI();
    updateTimeSlots();

    dateInput.addEventListener("change", function () {
      updateDateUI();
      updateTimeSlots();

      const inputTime = document.getElementById("input-time");
      const timeValue = document.getElementById("time-value");
      const summaryTime = document.getElementById("summary-time");

      if (inputTime) inputTime.value = "";
      if (timeValue) timeValue.innerText = "Select Time";
      if (summaryTime) summaryTime.innerText = "Select Time";
    });

    function updateDateUI() {
      const selectedDate = new Date(dateInput.value);

      const formatted = selectedDate.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      if (dateValue) dateValue.innerText = formatted;
      if (summaryDate) summaryDate.innerText = formatted;

      const inputDate = document.getElementById("input-date");
      if (inputDate) {
        inputDate.value = dateInput.value;
      }

      const dateBox = dateInput.closest(".field-box");
      if (dateBox) dateBox.classList.remove("is-invalid-box");
    }

    function updateTimeSlots() {
      const selectedDate = new Date(dateInput.value);
      const today = new Date();

      timeItems.forEach((li) => {
        const timeText = li.innerText.trim();
        const timeDate = convertTimeToDate(timeText, selectedDate);

        if (
          selectedDate.toDateString() === today.toDateString() &&
          timeDate <= today
        ) {
          li.classList.add("disabled");
          li.style.pointerEvents = "none";
          li.style.opacity = "0.4";
        } else {
          enableTime(li);
        }
      });
    }

    function enableTime(li) {
      li.classList.remove("disabled");
      li.style.pointerEvents = "auto";
      li.style.opacity = "1";
    }

    function convertTimeToDate(time, baseDate) {
      const [t, meridian] = time.split(" ");
      let [hour, min] = t.split(":").map(Number);

      if (meridian === "PM" && hour !== 12) hour += 12;
      if (meridian === "AM" && hour === 12) hour = 0;

      const d = new Date(baseDate);
      d.setHours(hour, min, 0, 0);

      return d;
    }
  }

  // -------- APPOINTMENT FIELD VALIDATION --------
  function validateAppointmentFields() {
    const productInput = document.getElementById("input-product");
    const dateInputHidden = document.getElementById("input-date");
    const locationInput = document.getElementById("input-location");
    const timeInput = document.getElementById("input-time");

    let valid = true;

    document.querySelectorAll(".field-box").forEach((box) => {
      box.classList.remove("is-invalid-box");
    });

    if (!productInput || !productInput.value.trim()) {
      document
        .getElementById("product-demo-value")
        ?.closest(".field-box")
        ?.classList.add("is-invalid-box");

      valid = false;
    }

    if (!dateInputHidden || !dateInputHidden.value.trim()) {
      document
        .getElementById("appointment-date")
        ?.closest(".field-box")
        ?.classList.add("is-invalid-box");

      valid = false;
    }

    if (!locationInput || !locationInput.value.trim()) {
      document
        .getElementById("timezone-value")
        ?.closest(".field-box")
        ?.classList.add("is-invalid-box");

      valid = false;
    }

    if (!timeInput || !timeInput.value.trim()) {
      document
        .getElementById("time-value")
        ?.closest(".field-box")
        ?.classList.add("is-invalid-box");

      valid = false;
    }

    return valid;
  }

  // -------- BOOK BUTTON CLICK --------
  if (openBtn) {
    openBtn.addEventListener("click", function () {
      const isValid = validateAppointmentFields();

      if (!isValid) {
        alert("Please select Location and Time before booking.");
        return;
      }

      const modalElement = document.getElementById("bookappointmentModal");

      if (modalElement && typeof bootstrap !== "undefined") {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    });
  }

  // -------- FORM SUBMIT VALIDATION --------
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let valid = true;

      const nameInput = this.querySelector('input[name="name"]');
      const emailInput = this.querySelector('input[name="email"]');
      const phoneInput = this.querySelector('input[name="phone"]');

      [nameInput, emailInput, phoneInput].forEach((input) => {
        if (input) {
          input.classList.remove("is-invalid");
          input.style.border = "";
        }
      });

      if (!nameInput || !nameInput.value.trim()) {
        nameInput.classList.add("is-invalid");
        nameInput.style.border = "2px solid red";
        valid = false;
      }

      if (
        !emailInput ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())
      ) {
        emailInput.classList.add("is-invalid");
        emailInput.style.border = "2px solid red";
        valid = false;
      }

      const phone = phoneInput ? cleanPhoneNumber(phoneInput.value) : "";

      if (!/^[6-9]\d{9}$/.test(phone)) {
        phoneInput.classList.add("is-invalid");
        phoneInput.style.border = "2px solid red";
        valid = false;
      }

      const isAppointmentValid = validateAppointmentFields();

      if (!valid || !isAppointmentValid) return;

      phoneInput.value = phone;

      if (submitBtn) {
        if (submitBtn.disabled) return;

        submitBtn.disabled = true;
        submitBtn.classList.add("loading");
        submitBtn.innerHTML = "Submitting...";
      }

      this.submit();
    });
  }
});

// -------- LOCATION --------
function selectLocation(el, e) {
  e.stopPropagation();

  const location = el.innerText.trim();

  document.getElementById("timezone-value").innerText = location;
  document.getElementById("input-location").value = location;

  const summary = document.getElementById("summary-location");
  if (summary) summary.innerText = location;

  const box = document.getElementById("timezone-value").closest(".field-box");
  if (box) box.classList.remove("is-invalid-box");

  el.closest(".dropdown").classList.remove("active");
}

// -------- PRODUCT --------
function selectProduct(el, e) {
  e.stopPropagation();

  const product = el.innerText.trim();
  const productText = `${product} - 30 mins`;

  document.getElementById("product-demo-value").innerText = product;
  document.getElementById("input-product").value = productText;

  const summary = document.getElementById("summary-product");
  if (summary) summary.innerText = productText;

  const box = document.getElementById("product-demo-value").closest(".field-box");
  if (box) box.classList.remove("is-invalid-box");

  el.closest(".dropdown").classList.remove("active");
}

// -------- TIME --------
function selectTime(el, e) {
  e.stopPropagation();

  if (el.classList.contains("disabled")) return;

  const time = el.innerText.trim();

  document.getElementById("time-value").innerText = time;
  document.getElementById("input-time").value = time;

  const section = el.closest("ul").previousElementSibling.innerText.trim();
  const summary = document.getElementById("summary-time");

  if (summary) summary.innerText = `${section} - ${time}`;

  const box = document.getElementById("time-value").closest(".field-box");
  if (box) box.classList.remove("is-invalid-box");

  el.closest(".dropdown").classList.remove("active");
}