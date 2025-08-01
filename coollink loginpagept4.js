 const openBtn = document.getElementById("openModalBtn");
    const modalBackdrop = document.getElementById("modalBackdrop");
    const modal = document.getElementById("logoutModal");
    const closeBtn = document.getElementById("closeModal");
    const cancelBtn = document.getElementById("cancelBtn");

    openBtn.onclick = () => {
      modalBackdrop.style.display = "flex";
      setTimeout(() => {
        modal.classList.add("show");
      }, 10);
    };

    const closeModal = () => {
      modal.classList.remove("show");
      setTimeout(() => {
        modalBackdrop.style.display = "none";
      }, 300);
    };

    closeBtn.onclick = closeModal;
    cancelBtn.onclick = closeModal;

    window.onclick = (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    };

    // Handle form submit with spinner + toast error
    document.getElementById('deviceForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const spinner = document.getElementById('spinner');
      const toast = document.getElementById('toast');

      spinner.style.display = 'inline-block';

      // Simulate 4s loading
      setTimeout(() => {
        spinner.style.display = 'none';

        // Show toast
        toast.classList.add('show');

        setTimeout(() => {
          toast.classList.remove('show');
        }, 3000);
      }, 2000);
    });