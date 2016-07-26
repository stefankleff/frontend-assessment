# Frontend challenge


## Introduction

For our aspiring ecommerce venture __treerific__ we need to provide a catalog page displaying all the beautiful trees the ventures offers.

The treerific frontend dev created a prototype in great haste just before his parental leave started. The product manager was satisfied, but after a technical review we came to the conclusion that there are some issues that need to be resolved before we can launch. - So we need your help!

### Setup
1. clone this repository and create a feature branch
2. run `npm install` and `npm start dev` - [localhost](http://localhost:3000) should open automatically
3. jQuery is already available - feel free to add any library you want to use.


## Tasks:
Please read the entire task requirements (including the hints section) before you start.

### 1. Tree drawing
Because of missing requirements the drawing function was created in a pretty static way. If new tree types are added to the product range that will not work at all.

_Please implement `drawTree(height, char)` (tree-drawing.js) appropriately._


### 2. Data source
The trees are displayed based on external data from TIM (tree information management system). The data needs to be transformed into a different format in order to render it. Because of time pressure this was also done in a static way.

_Please implement `transformTreeObject(object)` (tree-data.js) appropriately._


### 3. Card layout
The product manager reviewed the catalog page again and added further requirements: cards within the same row should have same height and their content (below the "image") needs to be aligned. The trees look skewed - that needs to be fixed as well.

_Please update Markup (inside cards.js) and CSS (card.scss) according to the new requirements._


## Hints

You have 60 minutes to complete the tasks above. Feel free to improve any code that you don't like. Please create a pull request once you are done.


## License

All files are released under the [MIT license](https://github.com/project-a/frontend-starter/blob/master/LICENSE.md).
