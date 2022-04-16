const clientId = '80804d1f9f054109b7e7cb5692f74b82';
const redirectUri = 'http://localhost:3000/'
const scopes = [
  'user-modify-playback-state',
  'user-read-recently-played',
  'user-read-playback-position',
  'playlist-read-collaborative',
  'app-remote-control',
  'user-read-playback-state',
  'streaming',
  'user-top-read',
  'playlist-modify-public',
  'user-library-modify',
  'user-follow-read',
  'user-read-currently-playing',
  'user-library-read',
  'playlist-read-private',
  'playlist-modify-private',
]
const authUrl = 'https://accounts.spotify.com/authorize'

const auth = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`

export function getToken() {
  const splitRes = window.location.hash.substring(1).split('&')
  let token = {}
  splitRes.forEach(i => {
    const parts = i.split('=')
    token = {
      ...token,
      [parts[0]]: parts[1]
    }
  })

  return token
}

export default auth