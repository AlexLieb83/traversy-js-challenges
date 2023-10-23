function displayLikes(likeArr) {
  let message = "";

  if (likeArr.length >= 4) {
    message = `${likeArr[0]}, ${likeArr[1]} and ${
      likeArr.length - 2
    } others like this`;
  } else if (likeArr.length === 3) {
    message = `${likeArr[0]}, ${likeArr[1]} and ${likeArr[2]} like this`;
  } else if (likeArr.length === 2) {
    message = `${likeArr[0]} and ${likeArr[1]} like this`;
  } else if (likeArr.length === 1) {
    message = `${likeArr[0]} likes this`;
  } else {
    message = `no one likes this`;
  }

  return message;
}

module.exports = displayLikes;
