const Renderer = function () {

    function renderPosts(posts) {
        $(`#posts`).empty()

        posts.forEach(function (post) {
            let postDiv = $(`<div>`).addClass(`post`)
            let postText = $(`<div>`).addClass(`post-text`).text(post.text)
            let deletePost = $(`<button>`).addClass(`delete`).text(`Delete post`)
            let commentInput = $(`<input>`).addClass(`comment-input`).attr(`type`, `text`)
            let addComment = $(`<button>`).addClass(`new-comment`).text(`Add comment`)
            let commentsDiv = $(`<div>`).addClass(`comments`)

            post.comments.forEach(function (comment) {
                let commentDiv = $(`<div>`).addClass(`comment`).attr(`data-id`, comment.id).text(comment.text)
                let deleteComment = $(`<span>`).addClass(`delete-comment`).text(`\u2715`)

                commentDiv.append(deleteComment)
                commentsDiv.append(commentDiv)
            })

            postDiv.attr(`data-id`, post.id)
            postDiv.append(postText, commentsDiv, commentInput, addComment, $(`<br><br>`), deletePost)
            $(`#posts`).append(postDiv)
        })
    }

    return {
        renderPosts
    }
}
