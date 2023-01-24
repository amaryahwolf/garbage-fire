// Global variables
const addBtn = document.querySelector('#add-btn')

// Function to send fetch response to db
const addShowHandler = async (event) => {
    const response = await fetch('/api/shows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/feed');
      } else {
        alert(response.statusText);
      }
};

addBtn.addEventListener('click', addShowHandler)