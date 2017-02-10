// MODEL
var songs = [{
	songId: "song1",
	songNum: "#song1",
	title: "Art of the Gun",
	verse: "Do you wait to see if my love battles all",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2015,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song2",
	songNum: "#song2",
	title: "Chess",
	verse: "Make the right move or die",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2014,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song3",
	songNum: "#song3",
	title: "Dead on Arrival",
	verse: "Life is drawn like a tiger without soul",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2013,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song4",
	songNum: "#song4",
	title: "I will be Free",
	verse: "I never thought to look for it from the one that gave me life",
	author: "John Herrera",
	location: "San Francisco, CA",
	year: 2015,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song5",
	songNum: "#song5",
	title: "It’s you",
	verse: "Knowing our love means it, we have to rock it loose",
	author: "John Herrera",
	location: "San Francisco, CA",
	year: 2014,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song6",
	songNum: "#song6",
	title: "Passing Rites",
	verse: "My eyes were wide open looking for adventure in a dangerous world",
	author: "John Herrera",
	location: "San Francisco, CA",
	year: 2015,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song7",
	songNum: "#song7",
	title: "Twisted Scenery",
	verse: "Time runs dry, the desert, the sky full of moons",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2013,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song8",
	songNum: "#song8",
	title: "The Race",
	verse: "I won my medal of honor, I will come for more",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2014,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song9",
	songNum: "#song9",
	title: "Winner",
	verse: "One minute you're here then you are gone, anyone can take your life",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2014,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
	}, {
	songId: "song10",
	songNum: "#song10",
	title: "Love hits me down",
	verse: "Dreams are the ones alive",
	author: "John Herrera",
	location: "San Francisco, CA",
	year: 2013,
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

    this.carouselList = ko.computed(function() {
        return ko.utils.arrayFilter(self.songsArray(), function(song) {
            return song;
        });
    });

	$('.carousel-indicators li').addClass('active');
	$('.carousel-inner div div').addClass('active');





	this.navSongList = ko.computed(function () {
		return ko.utils.arrayFilter(self.songsArray(), function (song) {



		});
	});
};

ko.applyBindings(new Viewmodel());
