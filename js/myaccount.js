// ---------- Profile Edit ----------
const editProfileBtn = document.getElementById('editProfileBtn');
const profileDisplay = document.getElementById('profileDisplay');
const profileForm = document.getElementById('profileForm');
const cancelEditBtn = document.getElementById('cancelEditBtn');

editProfileBtn.addEventListener('click', () => {
// Prefill inputs from display
document.getElementById('nameInput').value = document.getElementById('nameDisplay').textContent;
document.getElementById('emailInput').value = document.getElementById('emailDisplay').textContent;
document.getElementById('phoneInput').value = document.getElementById('phoneDisplay').textContent;

profileDisplay.style.display = 'none';
profileForm.style.display = 'block';
});

cancelEditBtn.addEventListener('click', () => {
profileForm.style.display = 'none';
profileDisplay.style.display = 'block';
});

profileForm.addEventListener('submit', function (e) {
e.preventDefault();

const name = document.getElementById('nameInput').value.trim();
const email = document.getElementById('emailInput').value.trim();
const phone = document.getElementById('phoneInput').value.trim();

if (!name || !email || !phone) {
alert('Please fill all fields before saving.');
return;
}

document.getElementById('nameDisplay').textContent = name;
document.getElementById('emailDisplay').textContent = email;
document.getElementById('phoneDisplay').textContent = phone;

alert('Profile updated!');

profileForm.style.display = 'none';
profileDisplay.style.display = 'block';
});

// ---------- Addresses Edit ----------
const editAddressesBtn = document.getElementById('editAddressesBtn');
const addressList = document.getElementById('addressList');
const addressesForm = document.getElementById('addressesForm');
const cancelAddressesEditBtn = document.getElementById('cancelAddressesEditBtn');

editAddressesBtn.addEventListener('click', () => {
// Prefill form textarea values from list items
const items = addressList.querySelectorAll('li');
if (items.length >= 2) {
document.getElementById('billingAddress').value = items[0].textContent.replace('Billing:', '').trim();
document.getElementById('shippingAddress').value = items[1].textContent.replace('Shipping:', '').trim();
}

addressList.style.display = 'none';
editAddressesBtn.style.display = 'none';
addressesForm.style.display = 'block';
});

cancelAddressesEditBtn.addEventListener('click', () => {
addressesForm.style.display = 'none';
addressList.style.display = 'block';
editAddressesBtn.style.display = 'inline-block';
});

addressesForm.addEventListener('submit', function (e) {
e.preventDefault();

const homeVal = document.getElementById('billingAddress').value.trim();
const officeVal = document.getElementById('shippingAddress').value.trim();

if (!homeVal || !officeVal) {
alert('Please fill both address fields before saving.');
return;
}

// Update the addresses display list
addressList.innerHTML = `
<li class="list-group-item"><strong>Home:</strong> ${homeVal}</li>
<li class="list-group-item"><strong>Office:</strong> ${officeVal}</li>
`;

alert('Addresses updated!');

addressesForm.style.display = 'none';
addressList.style.display = 'block';
editAddressesBtn.style.display = 'inline-block';
});

// ---------- Wishlist Remove ----------
document.querySelector('#wishlistTableBody').addEventListener('click', function (e) {
if (e.target.closest('.btn-remove-wishlist')) {
const btn = e.target.closest('.btn-remove-wishlist');
const row = btn.closest('tr');
row.remove();
}
});