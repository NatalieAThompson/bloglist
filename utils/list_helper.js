const dummy = (blogs) => {
  return 1;
}

const totalLikes = (listOfBlogs) => {
  return listOfBlogs.reduce( (total, blog) => {
    return total + blog.likes;
  }, 0);
}

const favoriteBlog = (listOfBlogs) => {
  const fav = listOfBlogs.sort( (a, b) => b.likes - a.likes )[0];

  return {
    title: fav.title,
    author: fav.author,
    likes: fav.likes
  }
}

const mostBlogs = (listOfBlogs) => {
  let blogs = {}

  listOfBlogs.forEach( blog => {
    let keys = Object.keys(blogs);

    if (keys.includes(blog.author)) {
      blogs[blog.author]++;
    } else {
      blogs[blog.author] = 1;
    }
  });

  let most = Object.entries(blogs).sort( (a, b) => b[1] - a[1] )[0];

  return {
    author: most[0],
    blogs: most[1]
  }
}

const mostLikes = (listOfBlogs) => {
  const blogs = listOfBlogs.reduce( (obj, blog) => {
    let keys = Object.keys(obj);

    if (keys.includes(blog.author)) {
      obj[blog.author] += blog.likes;
    } else {
      obj[blog.author] = blog.likes;
    }
    return obj
  }, {});

  let most = Object.entries(blogs).sort( (a, b) => b[1] - a[1] )[0];

  return {
    author: most[0],
    likes: most[1]
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}