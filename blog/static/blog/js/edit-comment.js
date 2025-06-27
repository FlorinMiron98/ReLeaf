const comments = document.querySelectorAll(".comment");

const editCommentModalEl = document.getElementById("edit-comment-modal");
const editCommentModal = new bootstrap.Modal(editCommentModalEl);
const editContentTextarea = document.getElementById("edit-comment");

const commentToastActionEl = document.getElementById("comment-toast-action");
const commentToastAction = new bootstrap.Toast(commentToastActionEl);
const commentToastActionMessage = document.querySelector(
  ".comment-toast-action__message"
);
const errorMessage = "Comment update failed.";

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
1;

const updateCommentUI = function (commentId, userComment) {
  comments.forEach((comment) => {
    if (+comment.dataset.commentId === commentId) {
      commentContent = comment.querySelector(".comment__content");
      commentContent.textContent = userComment;
    }
  });
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

    updateCommentUI(data.comment_id, data.user_comment);
    editCommentModal.hide();
    displayToastAction(data.message);
  } catch (error) {
    displayToastAction(errorMessage);
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

saveEditBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const commentId = this.closest("[data-comment-id]").dataset.commentId;
  console.log(commentId);

  submitEditedComment(commentId);
});
