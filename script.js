const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const trackingForm = document.getElementById('tracking-form');
const trackingNumber = document.getElementById('tracking-number');
const statusPill = document.getElementById('status-pill');

const trackingData = {
  'FUP-2048': {
    status: 'In transit',
    className: 'in-transit',
    eta: '2:40 PM',
    driver: 'Michael S.'
  },
  'FUP-3047': {
    status: 'Delivered',
    className: 'delivered',
    eta: 'Delivered at 9:15 AM',
    driver: 'Lerato M.'
  },
  'FUP-7781': {
    status: 'Delayed',
    className: 'delayed',
    eta: '3:15 PM',
    driver: 'Jason N.'
  }
};

if (trackingForm) {
  trackingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = document.getElementById('tracking-id');
    const code = (input.value || '').trim().toUpperCase();

    if (!code) {
      return;
    }

    const details = trackingData[code] || {
      status: 'In transit',
      className: 'in-transit',
      eta: 'Check with dispatch',
      driver: 'Assigned team'
    };

    trackingNumber.textContent = code;
    statusPill.textContent = details.status;
    statusPill.className = `pill ${details.className}`;

    const detailFields = document.querySelectorAll('.detail-grid strong');
    detailFields[2].textContent = details.driver;
    detailFields[3].textContent = details.eta;
  });
}

const quoteForm = document.querySelector('.quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = quoteForm.querySelector('button');
    const originalLabel = button.textContent;
    button.textContent = 'Request sent';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalLabel;
      button.disabled = false;
      quoteForm.reset();
    }, 1800);
  });
}
