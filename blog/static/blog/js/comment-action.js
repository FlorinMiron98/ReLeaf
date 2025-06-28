const comments = document.querySelectorAll(".comment");

const editCommentModalEl = document.getElementById("edit-comment-modal");
const editCommentModal = new bootstrap.Modal(editCommentModalEl);
const editCommentTextarea = document.getElementById("edit-comment");
const editCommentError = document.querySelector(".edit-comment-error");

const commentToastActionEl = document.getElementById("comment-toast-action");
const commentToastAction = new bootstrap.Toast(commentToastActionEl);
const commentToastActionMessage = document.querySelector(
  ".comment-toast-action__message"
);

const saveEditBtn = document.querySelector(".save-edit-btn");

const getCSRFToken = function () {
  return document.querySelector("[name=csrfmiddlewaretoken]").value;
};

const displayEditModal = function () {
  editCommentModal.show();
};

const displayToastAction = function (message) {
  commentToastActionMessage.textContent = message;
  commentToastAction.show();
};

const updateCommentUI = function (commentId, userComment) {
  comments.forEach((comment) => {
    if (+comment.dataset.commentId === commentId) {
      commentContent = comment.querySelector(".comment__content");
      commentContent.textContent = userComment;
    }
  });
};

const deleteCommentUI = function (commentId) {
  comments.forEach((comment) => {
    if (+comment.dataset.commentId === commentId) {
      comment.remove();
    }
  });
};

const displayCommentError = function (errorMessage) {
  editCommentError.textContent = errorMessage;
  editCommentError.classList.remove("d-none");
};

const hideCommentError = function () {
  editCommentError.classList.add("d-none");
};

const submitEditedComment = async function (commentId) {
  let url = window.location.href;
  let postSlug = url.split("blog")[1].slice(1);

  try {
    const response = await fetch(`${postSlug}/comments/${commentId}/edit/`, {
      method: "POST",
      headers: {
        "X-CSRFToken": getCSRFToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_comment: editCommentTextarea.value.trim(),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Comment must be between 10 and 300 characters"
      );
    }

    updateCommentUI(data.comment_id, data.user_comment);
    editCommentModal.hide();
    displayToastAction(data.message);
  } catch (error) {
    displayCommentError(error.message);
  }
};

const deleteComment = async function (commentId) {
  let url = window.location.href;
  let postSlug = url.split("blog")[1].slice(1);

  try {
    const response = await fetch(`${postSlug}/comments/${commentId}/delete/`, {
      method: "POST",
      headers: {
        "X-CSRFToken": getCSRFToken(),
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Comment deletion failed.");
    }

    deleteCommentUI(data.comment_id);
    displayToastAction(data.message);
  } catch (error) {
    displayToastAction(error.message);
  }
};

comments.forEach((comment) => {
  comment.addEventListener("click", (e) => {
    if (e.target.classList.contains("comment__buttons--edit")) {
      const commentId = e.target.closest("[data-comment-id]").dataset.commentId;
      editCommentModalEl.setAttribute("data-comment-id", commentId);
      const commentText =
        e.target.parentElement.previousElementSibling.textContent;
      editCommentTextarea.value = commentText.trim();
      hideCommentError();
      displayEditModal();
    }

    if (e.target.classList.contains("comment__buttons--delete")) {
      const commentId = e.target.closest("[data-comment-id]").dataset.commentId;
      deleteComment(commentId);
    }
  });
});

saveEditBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const commentId = this.closest("[data-comment-id]").dataset.commentId;
  submitEditedComment(commentId);
  hideCommentError();
});
