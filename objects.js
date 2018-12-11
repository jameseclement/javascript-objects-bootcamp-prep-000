<<<<<<< HEAD
var playlist = {artistName: 'songTitle'}

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = 'songTitle'
  return playlist
}

function removeFromPlaylist (playlist, artistName){
  delete playlist[artistName]
return playlist
  
=======
var playlist = {artist: 'song'}

function updatePlaylist (playlist, artistName, songTitle){
  playlist.artistName = 'songTitle'
  return playlist
>>>>>>> 1474c38fc20b043ef7c8a8b22888581866010163
}