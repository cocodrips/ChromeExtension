$(function(){
    var start = Date.parse("Apr 1, 2013");
    var end = Date.parse("Jun 1, 2013");

    chrome.history.search({
            "text":"",
            "startTime":start,
            "endTime":end
        },
        function (array){
            export_urls(array);
        });
});

var export_urls = function(array){
    var titles ="";
    for(var i in array){
        console.log(titles);
        titles = titles + "<a target='_blank' href=" + array[i].url + ">" + array[i].title + "</a><br>";

    }
    $("body").html(titles);
}