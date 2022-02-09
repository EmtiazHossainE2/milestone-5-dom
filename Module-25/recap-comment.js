document.getElementById('post-button').addEventListener('click', function () {
    const commentBox = document.getElementById('comment-box');
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;
    const commentArea = document.getElementById('comment-area');
    commentArea.appendChild(newComment);
    commentBox.value = '';
})