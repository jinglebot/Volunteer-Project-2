	// var testi_idx = 0;
	// var testi_elem;
	// var testi_arr = [
	// 	"<h5>Art of the Gun</h5><div><h6>Song 1: put catchy song verse here </h6><small>Harry Herrera, John Herrera, <cite>San Francisco, CA 2015</cite></small></div></div>",
	// 	"<h5>Chess</h5><div><h6>Song 2</h6><small>John Herrera, Harry Herrera, <cite>San Francisco, CA 2014</cite></small></div>",
	// 	"<h5>Dead on Arrival</h5><div><h6>Song 3</h6><small>Harry Herrera, John Herrera, <cite>San Francisco, CA 2013</cite></small></div>",
	// 	"<h5>I will be free</h5><div><h6>Song 4</h6><small>John Herrera, <cite>San Francisco, CA 2015</cite></small></div>",
	// 	"<h5>It’s you</h5><div><h6>Song 5</h6><small>John Herrera, <cite>San Francisco, CA 2014</cite></small></div>",
	// 	"<h5>Love hits me down</h5><div><h6>Song 6</h6><small>John Herrera, <cite>San Francisco, CA 2013</cite></small></div>",
	// 	"<h5>Passing Rites</h5><div><h6>Song 7</h6><small>John Herrera, <cite>San Francisco, CA 2015</cite></small></div>",
	// 	"<h5>The Race</h5><div><h6>Song 8</h6><small>Harry Herrera, John Herrera, <cite>San Francisco, CA 2014</cite></small></div>",
	// 	"<h5>Twisted Scenery</h5><div><h6>Song 9</h6><small>Harry Herrera, John Herrera, <cite>San Francisco, CA 2013</cite></small></div>",
	// 	"<h5>Winner</h5><div><h6>Song 10</h6><small>Harry Herrera, John Herrera, <cite>San Francisco, CA 2014</cite></small></div>"
	// ];
	// function testi_next () {
	// 	testi_idx++;
	// 	testi_elem.style.opacity = 0;
	// 	setTimeout('testi_ofOne()', 7000);
	// 	if (testi_idx > (testi_arr.length - 1)) {
	// 		testi_idx = 0;
	// 	}
	// }
	// function testi_ofOne () {
	// 	testi_elem.innerHTML = testi_arr[testi_idx];
	// 	testi_elem.style.opacity = 1;
	// 	setTimeout('testi_next()', 7000);
	// }

var index = 0;
var carousel-elem;
function nextSlide () {
	index++;
	// setTimeout ( 'currentSlide ()', 4000 );
	if ( index > (songsArray.length - 1) ) {
			index = 0;
	}
}
function currentSlide () {
	carousel-elem.text = songsArray[index];
}