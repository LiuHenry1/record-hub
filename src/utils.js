export const getTimeSincePost = (postDate) => {
  postDate = new Date(postDate);
  const conversion = [31536000, 25920000, 86400, 3600, 60, 1];
  const suffix = ["y", "mo", "d", "h", "m" ,"s"];
  let elapsedTime = (Date.now() - postDate) / 1000;
  
  let largestElapsedTime;
  for (let i = 0; i < conversion.length; i++) {
    largestElapsedTime = elapsedTime / conversion[i];
    if (largestElapsedTime > 1) {
      return Math.floor(largestElapsedTime) + suffix[i];
    }
  }
}