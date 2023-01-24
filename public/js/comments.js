const newFormHandler = async (event) => {
  event.preventDefault();
const show_id = document.querySelector("#show-id").value.trim();

  const comment_text = document.querySelector("#comment-desc").value.trim();

  if (comment_text) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ comment_text, show_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/feed`);
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector(".form-new-comment")
  .addEventListener("submit", newFormHandler);
