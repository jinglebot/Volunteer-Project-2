// MODEL
var songs = [{
	songId: "song1",
	songNum: "#song1",
	title: "Art of the Gun",
	verse: "You have my heart inside of your hand...",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2015,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song2",
	songNum: "#song2",
	title: "Chess",
	verse: "You have my heart inside of your hand...",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2014,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song3",
	songNum: "#song3",
	title: "Dead on Arrival",
	verse: "You have my heart inside of your hand...",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2013,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song4",
	songNum: "#song4",
	title: "I will be free",
	verse: "You have my heart inside of your hand...",
	author: "John Herrera",
	location: "San Francisco, CA",
	year: 2015,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song5",
	songNum: "#song5",
	title: "It’s you",
	verse: "You have my heart inside of your hand...",
	author: "John Herrera",
	location: "San Francisco, CA",
	year: 2014,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song6",
	songNum: "#song6",
	title: "Love hits me down",
	verse: "You have my heart inside of your hand...",
	author: "John Herrera",
	location: "San Francisco, CA",
	year: 2013,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song7",
	songNum: "#song7",
	title: "Passing Rites",
	verse: "You have my heart inside of your hand...",
	author: "John Herrera",
	location: "San Francisco, CA",
	year: 2015,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song8",
	songNum: "#song8",
	title: "The Race",
	verse: "You have my heart inside of your hand...",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2014,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song9",
	songNum: "#song9",
	title: "Twisted Scenery",
	verse: "You have my heart inside of your hand...",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2013,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song10",
	songNum: "#song10",
	title: "Winner",
	verse: "You have my heart inside of your hand...",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2014,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}];


// VIEWMODEL
var Viewmodel = function () {
	var self = this;
	this.songsArray = ko.observableArray([]);
	songs.forEach(function(song) {
		self.songsArray.push(song);
	});
	console.log(self.songsArray());
	// this.displayDivider = ko.observable( function(index) {
	// 	console.log ($index);
	// 	return (true);
	// });


	    this.carouselList = ko.computed(function() {
	        return ko.utils.arrayFilter(self.songsArray(), function(song) {
	            // $('.carousel-indicators li:first').addClass('active');
	                // song.visibility = "visible";
	    //             locate.marker.setMap(map);
	    //             bounds.extend(locate.marker.position);
	    //             // console.log(locate.marker.position);
	    //             map.fitBounds(bounds);
	    //             map.setCenter(bounds.getCenter());
	    // console.log("index = " + $index());
	            return song;
	    //         } else {
	    //             locate.marker.setVisible(false);
	    //             locate.marker.setMap(null);
	    //             return false;
	    //         }
	        });
	    });

	    // this.checkIndex = ko.computed(function () {
	    	// if ($index == 0) {
			    // $('div div').addClass('active');
			// }
	    // });
		$('.carousel-indicators li').addClass('active');
		$('.carousel-inner div div').addClass('active');
    // (song.index.indexOf(self.searchBar().toLowerCase()) >= 0)) {





	this.navSongList = ko.computed(function () {
		return ko.utils.arrayFilter(self.songsArray(), function (song) {



		});
	});
};

ko.applyBindings(new Viewmodel());
