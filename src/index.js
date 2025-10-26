import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Set custom favicon and page title at runtime using the image in src/assets
import favicon from "./assets/images/download (19).jpeg";

// Set the browser tab title
document.title = "Barea Joudi portfolio";

// Update or create favicon link in the document head
function setFavicon(href) {
	let link = document.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement('link');
		link.rel = 'icon';
		document.getElementsByTagName('head')[0].appendChild(link);
	}
	link.href = href;
}

setFavicon(favicon);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
