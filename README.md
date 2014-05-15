# Macolumn Culkin
Responsive grid system based on two simple data attributes and a class



## How to use
In the example below we create a grid with 4 columns. On mobile/small devices it switches to two columns.

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



## Demo
Check out the [Demo](http://macolumnculkin.azurewebsites.net/) page.<br>


##  How does it work?
The Macolumn Culkin grid system is a grid system based on three factors: <br>
* A SASS loop creating a fixed amount of available columns (it's up to you how many you want - just change the **$maxColumns** value in the [_macolumnculkin.scss file](https://github.com/eplehans/macolumculkin/blob/master/style/extensions/_macolumnculkin.scss) <br>
* The gutter is the padding inside the .column divs the border-box model. Nested columns get half the gutter.<br>
* Instead of using media queries for breakpoints we give the body a data attribute ```html[data-device-size="small"]```. This is then used as a switch in the SASS loop.<br>


## Why?
* Because we all hate using float where it doesn't belong
* Because you don't wanna have to install a grid system through a command line to be able to use it.
* Because we all can agree that a number means more than a word