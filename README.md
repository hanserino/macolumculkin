# Macolumn Culkin
Responsive grid system based on two simple data attributes and a class

## Demo
Check out the [demo](http://macolumnculkin.azurewebsites.net/).

## How to use

### Plain four column grid
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

### Nesting columns
```html
 <div data-columns="2" data-mobile-columns="1">
	<div class="column">
		<div data-columns="4" data-mobile-columns="2">
			<div class="column">
				<div>1</div>
			</div>
			<div class="column">
				<div>2</div>
			</div>
			<div class="column">
				<div>3</div>
			</div>
			<div class="column">
				<div>4</div>
			</div>
		</div>
	</div>
</div>
```


##  How does it work?
The Macolumn Culkin grid system is a grid system based on three factors: <br>
* A SASS loop creating a fixed amount of available columns. It's up to you how many you want - just change the **$maxColumns** value in the [_macolumnculkin.scss](https://github.com/eplehans/macolumculkin/blob/master/style/parameters/_macolumnculkin.scss) file. <br>
* The gutter is the padding inside the .column divs (thanks to the border-box model). Nested columns get half the gutter to align vertically with the parent columns.


## Why?
* Because inline-blocks are so much awesomer than floats.
* Because you don't wanna have to install a grid system through a command line and then have to learn a new syntax to be able to use it.
* Because we all can agree that numbers means more than words
* Because Macaulay Culkin wanted a better grid system.

## Browser support
Browsers supporting these features:<br>
* HTML and CSS data attributes
* Media queries
* CSS pseudo elements such as ```>, nth-child, fist-child and last-child```


## Licence
Source code can be found on [github](https://github.com/eplehans/macolumculkin), licenced under [WTFPL](http://www.wtfpl.net/).<br>
Developed by [Hans Kristian Smedsrød](http://about.me/eplehans).
