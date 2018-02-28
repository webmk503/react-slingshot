export function createLocalStorage() {
  localStorage.setItem('posts',JSON.stringify({}));
  localStorage.setItem('comments', JSON.stringify({}));
  localStorage.setItem('authors', JSON.stringify({}));

}
export function updatePosts(post) {
  const oldPosts = JSON.parse(localStorage.getItem('posts'));
  const newPosts = {
    ...oldPosts,
    [post.id]: {
      ...post
    }
  };
  localStorage.setItem('posts', JSON.stringify(newPosts));
}

export function updateComments(comment) {
  const oldComments = JSON.parse(localStorage.getItem('comments'));
  const posts = JSON.parse(localStorage.getItem('posts'));
  const newComments = {
    ...oldComments,
      [comment.id]: {
        ...comment
      }
  };
  localStorage.setItem('comments', JSON.stringify(newComments));
  const commentIntoPost = {
    ...posts,
    [comment.postId]: {
      ...posts[comment.postId],
      comments: [
        ...posts[comment.postId].comments,
        comment.id
      ]
    }
  };
  localStorage.setItem('posts', JSON.stringify(commentIntoPost));
}
export function updateAuthor(author) {
  const oldAuthors = JSON.parse(localStorage.getItem('authors'));
  const newAuthors = {
    ...oldAuthors,
    [author.id]: {
      ...author
    }
  };
  localStorage.setItem('authors', JSON.stringify(newAuthors));
}

export function getPosts() {
  return JSON.parse(localStorage.getItem('posts'));
}

export function getComments() {
  return JSON.parse(localStorage.getItem('comments'));
}

export function getAuthors() {
  return JSON.parse(localStorage.getItem('authors'));
}
