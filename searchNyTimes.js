$(document).ready(function() {
  $("#btnSubmit").click(function() {
    alert("button");
  });
  function searchNewYorkTimesArticle(
    searchTerm,
    maxResults,
    beginYear,
    endYear
  ) {
    if (maxResults > 10) {
      maxResults = 10;
    }
    var resultFromSearch = [];
    var queryUrl =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=vmxhxL9nNPjWiC7Z1GjJJPp5YwCw75X2" +
      "&q=" +
      searchTerm +
      "&page=1" +
      "&begin_date=" +
      beginYear +
      "0101 +" +
      "&end_date=" +
      endYear +
      "0101";

    console.log(queryUrl);

    fetch(queryUrl)
      .then(function(resp) {
        console.log("Read Completed");
        return resp.json();
      })
      .then(function(data) {
        console.log("Displaying Response of Fetch : ");
        console.log(data.response.docs.length);
        for (var i = 0; i < maxResults; i++) {
          resultFromSearch.push({
            headline: data.response.docs[i].headline.main,
            url: data.response.docs[i].web_url,
            byline: data.response.docs[i].byline.original
          });
        }
        console.log(resultFromSearch);
        return resultFromSearch;
      });
  }
});
