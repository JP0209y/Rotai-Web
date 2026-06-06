// -------- OPEN / CLOSE DROPDOWNS --------
document.querySelectorAll('.dropdown').forEach(drop => {
  drop.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== this) d.classList.remove('active');
    });
    this.classList.toggle('active');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
});

// -------- LOCATION --------
function selectLocation(el, e) {
  e.stopPropagation();
  const location = el.innerText;
  document.getElementById('timezone-value').innerText = location;
  const summary = document.getElementById('summary-location');
  if (summary) summary.innerText = location;
  el.closest('.dropdown').classList.remove('active');
}

// -------- PRODUCT --------
function selectProduct(el, e) {
  e.stopPropagation();
  const product = el.innerText;
  document.getElementById('product-demo-value').innerText = product;
  const summary = document.getElementById('summary-product');
  if (summary) summary.innerText = product;
  el.closest('.dropdown').classList.remove('active');
}

// -------- TIME --------
function selectTime(el, e) {
  e.stopPropagation();
  if (el.classList.contains('disabled')) return; // ❌ block past time

  const time = el.innerText;
  const section = el.closest('ul').previousElementSibling.innerText;

  document.getElementById('time-value').innerText = time;
  const summary = document.getElementById('summary-time');
  if (summary) summary.innerText = `${section} - ${time}`;

  el.closest('.dropdown').classList.remove('active');
}

// -------- DATE + TIME LOGIC --------
document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('appointment-date');
  const field = document.getElementById('date-value');
  const summary = document.getElementById('summary-date');
  const timeItems = document.querySelectorAll('li[onclick^="selectTime"]');

  if (!dateInput) return;

  // ---- SET TODAY ----
  const now = new Date();
  const yyyy = now.getFullYear();
  let mm = now.getMonth() + 1;
  let dd = now.getDate();

  if (mm < 10) mm = '0' + mm;
  if (dd < 10) dd = '0' + dd;

  const todayStr = `${yyyy}-${mm}-${dd}`;
  dateInput.value = todayStr;
  dateInput.min = todayStr;

  updateDateUI(new Date(todayStr));
  updateTimeSlots();

  // ---- DATE CHANGE ----
  dateInput.addEventListener('change', function () {
    const selectedDate = new Date(this.value);
    updateDateUI(selectedDate);
    updateTimeSlots();
  });

  // ---- UPDATE DATE UI ----
  function updateDateUI(date) {
    const formatted = date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    if (field) field.innerText = formatted;
    if (summary) summary.innerText = formatted;
  }

  // ---- TIME FILTER LOGIC ----
  function updateTimeSlots() {
    const selectedDate = new Date(dateInput.value);
    const today = new Date();

    timeItems.forEach(li => {
      const timeText = li.innerText;
      const timeDate = convertTimeToDate(timeText, selectedDate);

      // Today → disable past time
      if (selectedDate.toDateString() === today.toDateString()) {
        if (timeDate <= today) {
          li.classList.add('disabled');
          li.style.pointerEvents = 'none';
          li.style.opacity = '0.4';
        } else {
          enableTime(li);
        }
      } else {
        enableTime(li);
      }
    });
  }

  function enableTime(li) {
    li.classList.remove('disabled');
    li.style.pointerEvents = 'auto';
    li.style.opacity = '1';
  }

  // ---- CONVERT TIME STRING TO DATE ----
  function convertTimeToDate(time, baseDate) {
    const [t, meridian] = time.split(' ');
    let [hour, min] = t.split(':').map(Number);

    if (meridian === 'PM' && hour !== 12) hour += 12;
    if (meridian === 'AM' && hour === 12) hour = 0;

    const d = new Date(baseDate);
    d.setHours(hour, min, 0, 0);
    return d;
  }
});
