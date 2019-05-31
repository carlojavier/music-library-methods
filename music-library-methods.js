var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function () {
    for(var key in this.playlists) {
      console.log(key+": "+this.playlists[key].name + " - " + this.playlists[key].tracks.length + " tracks");
    };
  },
  printTracks: function () {
    for (var key in this.tracks){
      console.log(key + ": " + this.tracks[key].name + " by " + this.tracks[key].artist + " (" + this.tracks[key].album + ")")
    };
  },
  printPlaylist: function (playlistId) {
    console.log(playlistId + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks")
      for (var key of this.playlists[playlistId].tracks) {
        console.log(key + ": " + this.tracks[key].name + " by " + this.tracks[key].artist + " (" + this.tracks[key].album + ")")
    };
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId)
      console.log(this.playlists);
    },
  addTrack: function (name, artist, album) {
    var t04 = {
      id: 't04',
      name: 'Chum',
      artist: 'Earl Sweatshirt',
      album: 'Doris'
  };
        this['tracks'] = t04;
          console.log(this.tracks);
  },
  addPlaylist: function (name) {
    var p03 = {
      id: 'p03',
      name: 'New Playlist',
      tracks: 't04'
  };
  this['playlists'] = p03;
  console.log(this.playlists);
}
}
library.printPlaylist("p01")
library.addTrackToPlaylist("t01", "p02")
library.addPlaylist("playlists")


