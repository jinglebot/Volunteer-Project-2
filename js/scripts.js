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
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	youtubeId: "https://www.youtube.com/embed/vr3SMhpyZpY"
	}, {
	songId: "song2",
	songNum: "#song2",
	title: "Chess",
	verse: "Make the right move or die",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2014,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	youtubeId: "https://www.youtube.com/watch?v=ns-dmqVFc6w"
	}, {
	songId: "song3",
	songNum: "#song3",
	title: "Dead on Arrival",
	verse: "Life is drawn like a tiger without soul",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2013,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	youtubeId: "https://www.youtube.com/watch?v=lU7DNBPblGg"
	}, {
	songId: "song4",
	songNum: "#song4",
	title: "I will be Free",
	verse: "I never thought to look for it from the one that gave me life",
	author: "John Herrera",
	location: "San Francisco, CA",
	year: 2015,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	youtubeId: "https://www.youtube.com/watch?v=bhqd3bq-kEY"
	}, {
	songId: "song5",
	songNum: "#song5",
	title: "It’s you",
	verse: "Knowing our love means it, we have to rock it loose",
	author: "John Herrera",
	location: "San Francisco, CA",
	year: 2014,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	youtubeId: "https://www.youtube.com/watch?v=f6U4eseD3xE"
	}, {
	songId: "song6",
	songNum: "#song6",
	title: "Passing Rites",
	verse: "My eyes were wide open looking for adventure in a dangerous world",
	author: "John Herrera",
	location: "San Francisco, CA",
	year: 2015,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	youtubeId: "https://www.youtube.com/watch?v=_WRtHNcvhFM"
	}, {
	songId: "song7",
	songNum: "#song7",
	title: "Twisted Scenery",
	verse: "Time runs dry, the desert, the sky full of moons",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2013,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	youtubeId: "https://www.youtube.com/watch?v=Gh5w0C6729A"
	}, {
	songId: "song8",
	songNum: "#song8",
	title: "The Race",
	verse: "I won my medal of honor, I will come for more",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2014,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	youtubeId: "https://www.youtube.com/watch?v=oZ3i4B8r3xU"
	}, {
	songId: "song9",
	songNum: "#song9",
	title: "Winner",
	verse: "One minute you're here then you are gone, anyone can take your life",
	author: "Harry Herrera, John Herrera",
	location: "San Francisco, CA",
	year: 2014,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	youtubeId: "https://www.youtube.com/watch?v=a__57HA-R58"
	}, {
	songId: "song10",
	songNum: "#song10",
	title: "Love hits me down",
	verse: "Dreams are the ones alive",
	author: "John Herrera",
	location: "San Francisco, CA",
	year: 2013,
	visibility: "hidden",
	reflection: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	youtubeId: "https://www.youtube.com/watch?v=iXOMO-3otLQ"
	}];


var contactInfo = [{
	medium: "Phone",
	link: "tel:+16502196585",
	icon: "glyphicon glyphicon-earphone"
	}, {
	medium: "Email",
	link: "mailto:stringxherrera@yahoo.com",
	icon: "glyphicon glyphicon-envelope"
	}, {
	medium: "Facebook",
	link: "https://www.facebook.com/stringx",
	icon: "fa fa-facebook"
	}, {
	medium: "Twitter",
	link: "#",
	icon: "fa fa-twitter"
	}, {
	medium: "Myspace",
	link: "https://myspace.com/johnhpo1/music/songs",
	icon: "glyphicon glyphicon-option-horizontal"
	}];

// VIEWMODEL
var Viewmodel = function () {
	var self = this;

	this.songsArray = ko.observableArray([]);
	songs.forEach(function(song) {
		self.songsArray.push(song);
	});
	console.log(self.songsArray());

	this.contactsArray = ko.observableArray([]);
	contactInfo.forEach(function(contact) {
		self.contactsArray.push(contact);
	});
	console.log(self.contactsArray());

 //    this.carouselList = ko.computed(function() {
 //        return ko.utils.arrayFilter(self.songsArray(), function(song) {
 //            return song;
 //        });
	// });

	$('.carousel-indicators li').addClass('active');
	$('.carousel-inner div div').addClass('active');

	// this.navSongList = ko.computed(function() {
	// 	return ko.utils.arrayFilter(self.songsArray(), function(song) {
	// 	});
	// });

};

ko.applyBindings(new Viewmodel());
