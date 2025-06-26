const comments = document.querySelectorAll(".comment");

const editCommentModalEl = document.getElementById("edit-comment-modal");
const editCommentModal = new bootstrap.Modal(editCommentModalEl);
const editContentTextarea = document.getElementById("edit-comment");

const getCSRFToken = function () {
  return document.querySelector("[name=csrfmiddlewaretoken]").value;
};

const displayEditModal = function () {
  editCommentModal.show();
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
