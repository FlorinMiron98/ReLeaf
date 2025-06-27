const comments = document.querySelectorAll(".comment");

const editCommentModalEl = document.getElementById("edit-comment-modal");
const editCommentModal = new bootstrap.Modal(editCommentModalEl);
const editContentTextarea = document.getElementById("edit-comment");

const saveEditBtn = document.querySelector(".save-edit-btn");

const getCSRFToken = function () {
  return document.querySelector("[name=csrfmiddlewaretoken]").value;
};

const displayEditModal = function () {
  editCommentModal.show();
};

const submitEditedComment = async function (commentId) {
  try {
    const response = await fetch(`comments/${commentId}/edit/`, {
      method: "POST",
      headers: {
        "X-CSRFToken": getCSRFToken(),
      },
      body: JSON.stringify({
        user_comment: editContentTextarea.value,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

comments.forEach((comment) => {
  comment.addEventListener("click", (e) => {
    if (e.target.classList.contains("comment__buttons--edit")) {
      const commentId = e.target.closest("[data-comment-id]").dataset.commentId;
      editCommentModalEl.setAttribute("data-comment-id", commentId);
      const commentText =
        e.target.parentElement.previousElementSibling.textContent;
      editContentTextarea.value = commentText.trim();
      displayEditModal();
    }
  });
});

saveEditBtn.addEventListener("click", function () {
  const commentId = this.closest("[data-comment-id]").dataset.commentId;
  submitEditedComment(commentId);
});
