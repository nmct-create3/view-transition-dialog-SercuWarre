document.addEventListener('DOMContentLoaded', function () {
  const showModalButton = document.getElementById('showModalDialog');
  const closeModalButton = document.getElementById('closeModalDialog');
  const modalDialog = document.getElementById('modalDialog');

  // Function to open the modal
  function openModal() {
    document.startViewTransition(() => {
      modalDialog.showModal();
      
    });
  }

  // Function to close the modal
  function closeModal() {
  

    document.startViewTransition(() => {
      modalDialog.close();
    });
  }

  // Event listener to open the modal
  showModalButton.addEventListener('click', openModal);

  // Event listener to close the modal
  closeModalButton.addEventListener('click', closeModal);

  // Close the modal if the escape key is pressed
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalDialog.hasAttribute('open')) {
      closeModal();
    }
  });

  // Prevent clicks outside the modal from closing it
  modalDialog.addEventListener('click', function (e) {
    if (e.target === modalDialog) {
      e.stopPropagation();
    }
  });
});
