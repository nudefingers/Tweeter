const Tweeter = function () {
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let _postIdCounter = 3
    let _commentIdCounter = 7

    const _prefixP = `p`
    const _prefixC = `c`

    const getPosts = function () {
        return _posts
    }

    const addPost = function (text) {

        let post = { id: `${_prefixP}` + `${_postIdCounter}`, text: text, comments: [] }
        _posts.push(post)
        _postIdCounter++
    }

    const removePost = function (postID) {
        const index = _posts.findIndex(post => post.id === postID);

        if (index !== -1) {
            _posts.splice(index, 1)
        }
    }

    const addComment = function (postID, text) {
        for (let i = 0; i < _posts.length; i++) {
            if (_posts[i].id === postID) {
                let post = _posts[i]
                let comment = {
                    id: `${_prefixC}` + `${_commentIdCounter}`,
                    text: text
                }
                post.comments.push(comment)
                _commentIdCounter++
                break
            }
        }
    }

    const removeComment = function (postID, commentID) {
        for (let i = 0; i < _posts.length; i++) {
            if (_posts[i].id === postID) {
                let _comments = _posts[i].comments
                for (let k = 0; k < _comments.length; k++) {
                    if (_comments[k].id === commentID) {
                        _comments.splice(k, 1)
                    }
                }
            }
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}


// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}