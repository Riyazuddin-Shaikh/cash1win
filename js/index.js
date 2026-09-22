 window.addEventListener('scroll', function() {
      const stickyHeader = document.getElementById('stickyHeader');
      if (window.scrollY > 50) {
        stickyHeader.classList.add('visible');
      } else {
        stickyHeader.classList.remove('visible');
      }
    });






    // Share Button Function (Link Copy ya Native Share)
function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: '1win account verification official website',
      url: window.location.href
    }).catch(console.error);
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  }
}





// second section start
function toggleVerifyForm() {
  const dropdown = document.getElementById('formDropdown');
  const card = document.getElementById('mainCard');
  const arrow = document.getElementById('arrowIcon');
  
  dropdown.classList.toggle('open');
  
  if (dropdown.classList.contains('open')) {
    arrow.style.transform = 'rotate(180deg)';
    card.style.borderRadius = '16px 16px 0 0';
  } else {
    arrow.style.transform = 'rotate(0deg)';
    card.style.borderRadius = '16px';
  }
}

// Form submit hone par data handle karne ke liye
document.getElementById('verificationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Aapka data successfully submit ho gaya hai!');
  // Yahan aap apna backend API ya database connection ka code add kar sakte hain.
});






// forth section start 


function toggleTelegramForm() {
  const dropdown = document.getElementById('telegramDropdown');
  const card = document.getElementById('telegramCard');
  const arrow = document.getElementById('telegramArrow');
  
  dropdown.classList.toggle('open');
  
  if (dropdown.classList.contains('open')) {
    arrow.style.transform = 'rotate(180deg)';
    card.style.borderRadius = '16px 16px 0 0';
  } else {
    arrow.style.transform = 'rotate(0deg)';
    card.style.borderRadius = '16px';
  }
}


