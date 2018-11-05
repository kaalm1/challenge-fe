# Mars Mining Discovery Tournament

## My approach

I went with a React approach because it is what I'm most familiar with, as I mostly code in React Native, and seemed like the fastest way to get started. I also decided to use the Semantic React framework as that is a framework I've used extensively and could easily give me the grid-like structure. I like to just get a workable MVP and then add design and other functionality.

I started out by deciding to first just get the application to write "hello" 400 times in a 20x20 grid.
I did this by creating separate components for the rows and columns.
Once I had the basic structure set in place I placed a one-time api call (componentDidMount without a time-interval) to both "nodes" and "bots" to understand how the json file was built and to figure out how to look over them appropriately.
I then populated the appropriate squares filtering out for only those nodes and bots that fit that location.
With a white background filled with bots and nodes I then added the color schemes, border, and width to make sure the grid would stay intact no matter the screen size.

## Tradeoffs I made

I decided to use Semantic grids instead of building my own infrastructure for the grid outlay because it seemed like the fastest way to get going, and time was a factor obviously.

Though I would have preferred to build a mobile app with React Native, as grids (using Views and loops) is very simple and elegant, I decided not to use it because the project was a web application and not a mobile app.

## Future goals

With more time I would've implemented:
   * Cleaner design so that the names and nodes all flow better
   * Feature A, because it would've been really informative
   * Feature B, because I think it's really cool.

Feature A would've taken roughly another 30 minutes I think, but would add a lot more information. Still, I didn't want to ignore the write-up to implement feature A,
so I decided to leave it out.

Feature B is a much longer investment, but I think it'd be really cool because of reasons X,Y,Z.
