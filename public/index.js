function search(x) {
  $.post("/search", {"key": x}, function (data) {
    $.("#results").text(data)
});
};
