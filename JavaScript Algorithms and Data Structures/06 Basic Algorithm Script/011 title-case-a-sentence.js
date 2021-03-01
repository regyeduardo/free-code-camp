function titleCase(str) {
  function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}
  return toTitleCase(str);
}

titleCase("I'm a little tea pot");