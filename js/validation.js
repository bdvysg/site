(() => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault(); // емулюємо успішну «відправку»
        bootstrap.Toast.getOrCreateInstance(
          Object.assign(document.getElementById('sendToast') || createToast(), {delay: 4000})
        ).show();
        form.reset();
      }
      form.classList.add('was-validated');
    });
  
    function createToast() {
      const toast = document.createElement('div');
      toast.id = 'sendToast';
      toast.className = 'toast align-items-center text-bg-success position-fixed bottom-0 end-0 m-3';
      toast.innerHTML = `<div class="d-flex"><div class="toast-body">Форму відправлено 🎉</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>`;
      document.body.append(toast);
      return toast;
    }
  })();
  