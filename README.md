# JavaScript Racing Game

## Overview

We're going to create a mini JavaScript racing game to practice event binding and other JavaScript concepts. For now, it will be a single html page with no back-end at all. Each player will advance their "car" by smashing some key.  For example, player 1 might be the "a" key and player 2 might be the "l" key.

The goal of this challenge is to practice JavaScript, jQuery, the DOM, and asynchronous event handling.

### Part One

There is no starting point for this challenge. You will have to write the HTML, CSS and JavaScript files yourself (and link them all together).  You should (but don't have to) start with building a simple two-player board which will be rendered via HTML.  There are a few ways you could do it, e.g., a table that looks like:

```html
<table class="racer_table">
  <tr id="player1_board">
    <td></td>
    <td class="active"></td>
    <td></td>
    <td></td>
    ... etc ...
  </tr>
  <tr id="player2_board">
    <td></td>
    <td></td>
    <td></td>
    <td class="active"></td>
    ... etc ...
  </tr>
</table>
```

Using CSS, you can provide styles like:

```css
.racer_table td {
  background-color: white;
  height: 20px;
  width: 20px;
}

.racer_table td.active {
  background-color: black;
}
```

Updating a player's position could be achieved by adding the `active` class to the appropriate `td`.  There are many other ways to achieve a similar board output - this is just one suggested way of accomplishing our goal here. Feel free to take this a different direction as long as you're accomplishing the goals of this challenge.

Make sure you're able to "manually" produce all the board layouts you might care about before you jump into the JavaScript.  However you choose to setup your race track, it should be easy for jQuery/JavaScript to manipulate.

Use something like [normalize.css][] to enable sane default styles.

### Part Two

You'll need a way for JavaScript to update the board state.  Create simple JavaScript functions that can update a particular player's position.  You'll give the functions a player position as input and it will update the underlying HTML to reflect the new position.

It could look something like:

```javascript
updatePlayerPosition('playerOne', 20);
```

### Part Three

Now we'll make the game interactive!  Bind to the [keyup][] event to detect when a player has "pressed" a key.  We don't bind to the [keydown][] or [keypress][] events because those events fire when the keyboard repeats the key, whereas the keyup event doesn't.

It'd be a silly game if you could just hold the key and go.  You want to bind to the `document`, like so:

```javascript
$(document).ready(function() {
  $(document).on('keyup', function(event) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
  });
});
```

### Part Four

The last part is to have starting and winning states so we can restart the game and declare a winner when the game is over!  Add these features (starting, playing, winning, and restarting) to finish this challenge.

Finished? Take a few minutes to look over your code and determine if there are areas to refactor. Then, submit your solution as a pull request with at least three files: an HTML file, a CSS file, and a JavaScript file. You can have more files, but all CSS and JavaScript should be linked externally from the HTML file.

## Additional Resources

* [jQuery][]
* [normalize.css][]
* [Moxilla documentation for: keyup][keyup]
* [Moxilla documentation for: keydown][keydown]
* [Moxilla documentation for: keypress][keypress]

[jQuery]: http://learn.jquery.com/about-jquery/
[normalize.css]: http://necolas.github.com/normalize.css/
[keyup]: http://api.jquery.com/keyup/
[keydown]: http://api.jquery.com/keydown/
[keypress]: http://api.jquery.com/keypress/
