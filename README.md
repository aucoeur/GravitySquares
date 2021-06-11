# React Redux GravitySquares 

This tutorial recreates the classic arcade game Tetris with React, Redux & Electron

Part 1: [React Redux Tetris Tutorial](https://github.com/MakeSchool-Tutorials/web-7-react-redux-tetris-app)    
Part 2: [Desktop Apps with Electron](https://github.com/Make-School-Courses/FEW-2.4-Native-Development-with-JavaScript/blob/master/Lessons/Lesson-03.md)

## Objectives

**Part 1**
- [x] Define Application state
- [x] Create an app that manages application state with Redux
- [x] Implement React-Redux

**Part 2**
- [x] Build a desktop application with HTML/CSS/JS
- [x] Create an Electron project with React
- [x] Bundle for dist

## Todo
- [x] Reorganize utils
- [ ] More better styling
  - [ ] Add labels/key for controls
  - [ ] Add Start Screen
- [ ] Increment levels
- [ ] Track lines cleared
- [ ] Customize Settings
  - [ ] Hard/Fast Drop
  - [ ] Final Block Placement Preview/Outline
  - [ ] Zen Mode, speed stays the same
  - [ ] Increase speed by level

## Notes
- `REDUX_DEVTOOLS` might show 'no store' on reload, toggling devtools window should refresh without needing to quit/re-run
  
- If you're using `React.StrictMode`, React will call your reducer multiple times with the same arguments to test the purity of your reducer.
  - https://github.com/facebook/react/issues/16295#issuecomment-610098654
  
- `useEffect` comes with a handy feature just for such a thing: the cleanup function. The callback inside of useEffect is meant to perform side-effects, but if we `return` a function from our callback, that function will be executed when the component unmounts. Otherwise it would cause another event listener to be registered on every render. That's a memory leak!
  - https://www.caktusgroup.com/blog/2020/07/01/usekeypress-hook-react/

## Other Resources
- https://medium.com/folkdevelopers/the-ultimate-guide-to-electron-with-react-8df8d73f4c97
- https://medium.com/jspoint/packaging-and-distributing-electron-applications-using-electron-builder-311fc55178d9
- https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW8
