// Challenge: Replace a part of phone number
const phone = "09123456789";
const substring = phone.slice(4, 7);
const signs = "****";
const finlalPhone = phone.replace(substring, signs);
console.log(finlalPhone);
