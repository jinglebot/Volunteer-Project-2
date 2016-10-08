// MODEL
var songs = [{
	songNum: "#song1",
	title: "Art of the Gun"
	}, {
	songNum: "#song2",
	title: "Chess"
	}, {
	songNum: "#song3",
	title: "Dead on Arrival"
	}, {
	songNum: "#song4",
	title: "I will be free"
	}, {
	songNum: "#song5",
	title: "It’s you"
	}, {
	songNum: "#song6",
	title: "Love hits me down"
	}, {
	songNum: "#song7",
	title: "Passing Rites"
	}, {
	songNum: "#song8",
	title: "The Race"
	}, {
	songNum: "#song9",
	title: "Twisted Scenery"
	}, {
	songNum: "#song10",
	title: "Winner"
	}];

// VIEWMODEL
var Viewmodel = function () {
	var self = this;
	this.songsArray = ko.observableArray([]);
	songs.forEach(function(song) {
		self.songsArray.push(song);
	});
	this.songList = ko.computed(function () {
		return ko.utils.arrayFilter(self.songsArray(), function (song) {
		});
	});
};

ko.applyBindings(new Viewmodel());
