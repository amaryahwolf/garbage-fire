const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#user-name").value.trim();
  const description = document.querySelector("#comment-desc").value.trim();

  if (name && description) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ name, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/show/${id}`);
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector(".form-new-comment")
  .addEventListener("submit", newFormHandler);
