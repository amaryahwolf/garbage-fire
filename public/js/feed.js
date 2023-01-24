// Global variables
const addBtn = document.querySelector('#show-cards')

// Function to send fetch response to db
const addShowHandler = async (event) => {
  if (event.target.matches('button')) {

  
    const id = event.target.getAttribute('data-id');
    const response = await fetch('/api/shows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id})
      });
    
      if (response.ok) {
        document.location.replace('/feed');
      } else {
        alert(response.statusText);
      }
    }
};

addBtn.addEventListener('click', addShowHandler)
