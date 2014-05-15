<h1>Macolumn Culkin</h1>
<p>Responsive grid system based on two simple data attributes and a class</p>



<h3>How to use</h3>
<p>In the example below we create a grid with 4 columns. On mobile/small devices it switches to two columns.</p>

```html
 <div data-columns="4" data-mobile-columns="2">
	<div class="column">
		<div> Column 1 </div>
	</div>
	<div class="column">
		<div> Column 2 </div>
	</div>
	<div class="column">
		<div> Column 3 </div>
	</div>
	<div class="column">
		<div> Column 4 </div>
	</div>
</div>
```



<h3>Demo</h3>
Try on [Demo](http://macolumnculkin.azurewebsites.net/) page.<br>


<h4>How does it work?</h4>
<p>
	The Macolumn Culkin grid system is a grid system based on three factors: <br>
	* A SASS loop creating a fixed amount of available columns (it's up to you how many you want - just change the **$maxColumns** value in the [_macolumnculkin.scss file](https://github.com/eplehans/macolumculkin/blob/master/style/extensions/_macolumnculkin.scss) <br>
	* The gutter is the padding inside the .column divs the border-box model. Nested columns get half the gutter.<br>
	* Instead of using media queries for breakpoints we give the body a data attribute ```html[data-device-size="small"]```. This is then used as a switch in the SASS loop.<br>


</p>