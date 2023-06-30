const tweeter = Tweeter()
const renderer = Renderer()
const posts = tweeter.getPosts()

renderer.renderPosts(posts)


function post() {
    let newText = $(`#container`).find(`#input`).val()
    if (newText != ``) {
        tweeter.addPost(newText)
        $(`#input`).val(``)
        renderer.renderPosts(posts)
    }
}


function deletePost() {
    let _id = $(this).closest(`.post`).data(`id`)

    tweeter.removePost(_id)
    renderer.renderPosts(posts)
}


function addComment() {
    let _text = $(this).closest(`.post`).find(`.comment-input`).val()
    if (_text != ``) {
        let _postId = $(this).closest(`.post`).data(`id`)

        tweeter.addComment(_postId, _text)
        renderer.renderPosts(posts)
    }
}


function deleteComment() {
    let _postId = $(this).closest(`.post`).data(`id`)
    let _commentId = $(this).closest(`.comment`).data(`id`)

    tweeter.removeComment(_postId, _commentId)
    renderer.renderPosts(posts)
}



$(`body`)
    .on(`click`, `.delete`, deletePost)
    .on(`click`, `.new-comment`, addComment)
    .on(`click`, `.delete-comment`, deleteComment)
