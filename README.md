## **BirkheadC's Homepage**

The latest version of my homepage. Written with React and Typescript.

This application is designed for my own personal use, and as a place to improve myself.

As such, I have come to start using my Readmes less like a "Here's how to use this application," and more like a journal, documenting not only how the code works, but my thought process behind each decision and what I've learned.

# Focus

For this project, I am focusing on the following areas.

## TypeScript

I've been wanting to get into TypeScript for a while. Now that I have a good grasp on React, this seems like a good time to add TypeScript.

## Documentation

As with my ProjectsWebApi application, I am focusing on documentation.

Writing good documentation, comments, build instructions etc. has helped me get back into my own code after switching computers, or otherwise not working on the project for extended periods of time.

I intend to continue treating the non-code in my code with the same importance going forward.

# About the Code

## **Node** and **Packages**

I found some strange problems using certain versions of Node, and eventually settled on using v14.20.0 for this project. Using Node Version Manager makes it easy to swap between Node versions, so running `nvm use 14` before anything else made everything work smoothly for me.

This app was created first via **create-react-app**. Simply run `npx create-react-app` in the directory to build the app in.

Navigation uses **react-router-dom**, which can be installed via `npm install react-router-dom`

## **React** and **Props**

At the time of writing, I am wavering in several directions on best practices when performing certain functions, whether to let components do things themselves or call a method on a prop. Which is very vague and meaningless but here is an example from the code:

*From an early version of Navabar.tsx*
```
<button onClick={Theme.handleChangeTheme}>Theme</button>
```

This is the code for the button that toggles dark/light theme for the page. The way it is written, the button, when clicked, calls a function in Theme.ts which does all the work of toggling theme. It's very clean to look at but my worry is this:

*Should a **button** have the power to do this?*

Maybe it would be better to have a function in Navbar, and have the button call that function, like so:

```
const handleChangeTheme = (): void => {
    Theme.handleChangeTheme();
}

...

<button onClick={Theme.handleChangeTheme}>Theme</button>
```

At first glance this seems like just a more convoluted way of doing the same thing, and it does make the code a bit less concise. But it has two benefits:
- Easier to update later. If I want to change what happens when clicking the button -- maybe to add a sound effect-- I can just update the handleChangeTheme function.
- Removes autonomy from a simple button, which probably shouldn't be calling random functions willy-nilly.

Admittedly, the second point might be over-thinking the issues. Or... maybe it's not going far enough? Maybe giving the Navbar the power to change the theme is still not strict enough; maybe the Navbar should instead call a method on its prop, and let the root App do the theme changing?

**After putting all of this down in words, I've decided it's probably okay to leave the method on the button. I'm going to leave this section in for posterity's sake.**

## Separation of Duties in JavaScript

I've grown quite comforable with separation of duties in, say, C# or Java. One thing that I've noticed in my JS code however, is that outside of React Components, my code hierarchy begins to deteriorate.

Either I cram everything into one file which becomes way too large, or if I try to break things down, I break each-and-every function into its own file, when related functions should be, well, related.

I'm working on learning how to do better exporting and importing, keeping the source code better organized. At the moment, this can best be seen in the `/src/settings` folder, where the code to control the **language** and **theme** of the site can be found.

The pattern I've decided on is to group related functions into one file, then box them into one object, and export only that object, like:

```
function getLanguages() {
...
}

function handleChangeLanguage() {
...
}

const Language {
    getLanguages,
    handleChangeLanguage
}

export default Language;
```

This way, the functions can be called via `Language.getLanguages()`, which also makes it more obvious that an outside function is being called, as opposed to importing individual functions and calling them via `getLanguages()`, which personally always makes me stop and think *Wait wait where did this come from?*

I'm not sure how much of this is "Yes this is how everyone else does JavaScript, congratulations." and how much of it is "You are doing this all wrong."

Either way, this is how I am doing it for now.

## Font Awesome

This project uses Font Awesome for its icons. These icons act as text to the browser, making them easy to style. In order to use Font Awesome, it must be declared as a script in the `<head>` of `index.html`, like so:

```
    <script src="https://kit.fontawesome.com/f3565d31ff.js" crossorigin="anonymous"></script>
```

Then, icons should be searched for on [fontawesome.com](https://fontawesome.com). This will yield the code to generate the icon, which should look something like this:

```
<i class="fa-solid fa-copy"></i>
```

Simply include this html element and the icon should appear. (Make sure to replace `class` with `className` in React)

## Environment Variables

The following environment variables are required:

```
REACT_APP_PROJECTS_URL={https://projects.birkheadc.me}
```

Curly braces represent examples, but are also probably the correct value unless I've changed something.

In development, (maybe production, haven't looked into it yet), these variables can be declared by creating a file named `.env` in the root folder, and simply adding lines with the above syntax.