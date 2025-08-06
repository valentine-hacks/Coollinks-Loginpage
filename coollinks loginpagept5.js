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

    document.querySelectorAll('.menu-button').forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = button.getAttribute('data-id');
        document.querySelectorAll('.dropdown').forEach(drop => {
          drop.classList.toggle('active', drop.getAttribute('data-id') === id);
        });
      });
    });

    // Handle close buttons inside dropdown
    document.querySelectorAll('.dropdown .close-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.parentElement.classList.remove('active');
      });
    });

    // Close all if clicked outside
    window.addEventListener('click', () => {
      document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('active'));
    });
