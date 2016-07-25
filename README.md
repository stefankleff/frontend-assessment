# Frontend challenge

## Introduction

For our aspiring ecommerce venture __treerific__ we need to provide a catalog page displaying all the beautiful trees that we want to sell.

The treerific frontend dev created the prototype in a hurry just before his parental leave. His product manager was satisfied, but after a technical review we came to the conclusion that there some issues that need to be resolved before we can launch. - So we need you help!


## Tasks:
Please read the entire task requirements (including the hints section) before you start.


### Setup
* `npm install` and `npm run dev`
* see [localhost](localhost:3000) for the current state
* jQuery is already available - feel free to add any library you need.


### 1. Tree drawing
Because of missing requirements the drawing function was created in a pretty static way. If new tree types are added to the product range that will not work at all.

_Please implement `drawTree(height, char)` appropriatly._


### 2. Data source
The trees are displayed based on external data from TIM (tree information management system). The data needs to be transformed into a different format in order to render it. Because of time pressure this was also done in a static way.

_Please implement `transformTreeObject(object)`._


### 2. Card layout
The product manager reviewed the catalog page again and changed added an additional requirement: all cards to have to have the same height. Furthermore the content below the "image" needs to be align across cards in the same row.

_Please update the CSS according to the new requirements._


## Hints

You have 60 minutes to complete the task above. Please have look at the files and folder structure before you continue. Please commit your solution in the end.

Don't worry if you can't complete everything in time. We would just like to see some clean and lean code. Feel free to improve any code that you dont't like.


## License

All files are released under the [MIT license](https://github.com/project-a/frontend-starter/blob/master/LICENSE.md).
