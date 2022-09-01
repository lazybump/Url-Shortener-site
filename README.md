# Url-Shortener-site

Full stack web app that allows you to enter a link and get a shortened version back, that you can copy to your clipboard.

**Tech used:** HTML, CSS, Vanilla JavaScript, Node, Express, Rebrandly API

**Process:** I started with the shrtcode API which requires no authentication and uses a simple GET request to shorten a link. Due to poor service, I switched to Rebrandly's API which required an API key. I encountered a problem where I needed a way to hide this key from the client side, so I learned a bit of Express.js and built a server to act as a middleman between the client and the 3rd party API. Everything worked out great from there
