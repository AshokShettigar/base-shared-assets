## Platform Common Assets
Common asset files that are going to shared by all web applications.

### To Build
The build step processes all source assets by optimizing and copying them to the `dist` folder.
 1. `npm i`
 1. `npm run build`

### Common Assets
#### SVGs
Collection of SVG icons.  These are compiled and put into a single file `sprites.svg`.
 * How to use: https://css-tricks.com/svg-use-external-source/
 * Reasons:
    * Vector icons are flexible in size controls and color changes.
    * We can leverage browser caching for this static file.
