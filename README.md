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
Check out the [demo](http://macolumnculkin.azurewebsites.net/).<br>


##  How does it work?
The Macolumn Culkin grid system is a grid system based on three factors: <br>
* A SASS loop creating a fixed amount of available columns. It's up to you how many you want - just change the **$maxColumns** value in the [_macolumnculkin.scss](https://github.com/eplehans/macolumculkin/blob/master/style/extensions/_macolumnculkin.scss) file. <br>
* The gutter is the padding inside the .column divs (using the border-box model). Nested columns get half the gutter to align vertically with the parent columns.<br>
* Instead of using media queries for breakpoints we give the body a data attribute ```[data-device-size="small"]```. This is then used as a switch in the SASS loop.<br>


## Why?
* Because inline-blocks are so much awesomer than floats - yes, we get a pseudo space, but who cares? We got rid of it.<br>
* Because you don't wanna have to install a grid system through a command line and then have to learn a new syntax to be able to use it. <br>
* Because we all can agree that numbers means more than words<br>
* Because Macaulay Culkin wanted a better grid system. <br>
