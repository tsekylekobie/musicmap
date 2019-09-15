## Inspiration

Have you ever wondered how popular a song is in the United States? With MusicMap, you can visualize the popularity of a song with a heatmap of Spotify's US/Global Top/Viral 50 songs. 

## What it does
* Users can select songs from Spotify's top hits. They can play the song in a built-in web player and see the popularity of the song across the United States. The popularity is being displayed on a heat map, indicating which states the song is most popular in.
* This project utilizes the Spotify API to access the current hot songs across the nation. We chose to use a [Leaflet chloropleth map](https://leafletjs.com/examples/choropleth/) to display song popularity.
* All popularity and virality information has been sourced from Google Trends.

## How we built it
* React front-end
* Spotify API
* Google Trends
* Leaflet Chloropleth Map

## Challenges we ran into
* Tried to use an unofficial [Google Trends API](https://www.npmjs.com/package/google-trends-api), but we kept getting an error: `We're sorry, but you have sent too many requests to us recently. Please try again later.` Online, people said it's because a set of IP addresses might be sending too many requests. It kept not working, so we gave up using this API, but still integrated Google Trends regardless!
* No official Google Trends API
* Embedded Google Trends map was tiny (so we made our own!)
* Accessing currently played song from Spotify Web Player
* Registering Spotify application without web hosting
* Collecting interesting data on an international scale


## Accomplishments that we're proud of
* Learned how to create a React web app quickly
* Used cool APIs like Spotify and Google Trends to get popular songs and generate / process the popularity data
* Used Leaflet Chloropleth Map to create an interactive heatmap
* Worked together in a team and got a lot closer! :)

## What's next for Music Map
* Expand heat map to display worldwide popularity
* Twitter feed for the song
