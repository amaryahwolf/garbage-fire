const deleteBtn = document.querySelector('#delete-btn')

const deleteShowHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/shows/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete show');
    }
  }
};

deleteBtn.addEventListener('click', deleteShowHandler)