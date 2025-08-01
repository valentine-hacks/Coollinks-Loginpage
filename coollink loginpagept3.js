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

    const saveBtn = document.getElementById('saveBtn');
    const loader = document.getElementById('loader');
     const toast = document.getElementById('toast');

    saveBtn.addEventListener('click', function () {
      // Show loader
      loader.style.display = 'inline-block';
       toast.classList.add('show');

      // Disable button to prevent double clicks
      saveBtn.disabled = true;

      // Simulate save delay
      setTimeout(() => {
        loader.style.display = 'none';
        saveBtn.disabled = false;
      }, 2000);
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    });

 