//1.add button even handler 
document.getElementById('post-button').addEventListener('click', function () {
    //2.create user comment 
    const commentBox = document.getElementById('post-comment');
    const addParagraph = commentBox.value;
    //3.create paragraph
    const newComment = document.createElement('p')
    newComment.innerText = addParagraph;
    //4. append comment 
    const commentContainer = document.getElementById('comment-container')
    commentContainer.append(newComment)
    //5. clean the box
    commentBox.value = '';
})

/* document.getElementById('comment-button').addEventListener('click', function () {
    const commentBox = document.getElementById('comment-box');
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;
    const commentContainer = document.getElementById('comment-container')
    commentContainer.append(newComment)
    commentBox.value = ''

}) */