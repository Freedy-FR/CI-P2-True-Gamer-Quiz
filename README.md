# True Gamer Quiz

(Developer: Freedy Ramos)

![Responsive image](assets/docs/Responsive.PNG)

[Live page](https://freedy-fr.github.io/CI-P2-True-Gamer-Quiz/)


## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
    4. [Site Owner Stories](#site-owner-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colour)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-and-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#html-validation)
    2. [CSS Validation](#css-validation)
    3. [JavaScript Validation](#javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Device testing](#performing-tests-on-various-devices)
    7. [Browser compatibility](#browser-compatability)
    8. [Testing user stories](#testing-user-stories)
8. [Bugs](#bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)



## Project Goals

True Gamer Quiz was designed to be a fun game to test your knowledge and to bring a nostalgic felling to you.

### User Goals

- To play a fun and engaging quiz.
- Test your video games knowledge.
- To bring you a nostalgic feeling.

### Site Owner Goals

- To create an engaging and nostalgic quiz to test your knowledge.
- The app should be fully responsive in most screens.


## User Experience

### Target Audience

- Casual gamers.
- Users that like video game facts.
- Users looking to have fun and test their knowledge.

### User Requirements and Expectations

- An intuitive navigation system and an interactive system.
- Quick, easy, and fun to play.
- Links that work properly.
- Good presentation and a responsive design regardless of screen size.

### User Stories
1. As a user, I want to have an welcome message.      
2. As a user, I want to have a rule explanation page.
3. As a user, I want to know more about the game.    
4. As a user, I want to know what the correct answer if i choose the wrong one.
5. As a user, I want to see visual indication of my correct/incorrect answer.
6. As a user, I want to be able to insert my name to play.
7. As a user, I want to be able to see my final score.
8. As a user, I want to be able to retry the game.

### Site Owner Stories

9. As a site owner, I want the user to be able to check our github page.
10. As a site owner, I want the user to have a nostalgic feeling with the background image.


## Design

### Design Choices

The quiz was designed to bring a nostalgic felling to the user by using a retro fonts, dark and colorful shades of colors.

### Colour

The color palette was chosen to match the nostalgic retro 8-bit games with shades of dark grey and colorful red and green for the correct and incorrect answer.

<details><summary>Colour palette</summary>
<img src="assets/docs/color/true-gamer-pallete.webp">
</details>

### Fonts

For the fonts the VT323 8-bit was choosen for the text and paragraphs to give a retro game feel and GEO for the headings to give a modern feel.

### Structure

The website consists of four integrated pages:

- A homepage with 3 different views:
    - one main page for inserting your name.
    - one for answering the questions.
    - one that show the results to the user.
- A rules explanation page.
- An about the game page.
- A 404 page not found.

### Wireframes

<details><summary>Start screen</summary>
<img src="assets/docs/wireframes/homepage-wires.webp">
</details>

<details><summary>Questions screen</summary>
<img src="assets/docs/wireframes/quiz-wires.webp">
</details>

<details><summary>Result screen</summary>
<img src="assets/docs/wireframes/result-wire.webp">
</details>

<details><summary>Rules screen</summary>
<img src="assets/docs/wireframes/rules-wire.webp">
</details>

<details><summary>About screen</summary>
<img src="assets/docs/wireframes/about-wire.webp">
</details>


## Technologies Used

### Languages

- HTML
- CSS
- JavaScript

### Frameworks and Tools

- Git
- GitHub
- Gitpod
- Cloudconvert
- Balsamiq
- Font Awesome
- Favicon<span>.</span>io
- JSHint
- Lighthouse
- W3C Markup validation service
- W3C Jigsaw CSS validation service 
- WAVE WebAIM web accessibility evaluation tool
- Open Trivia Database


## Features

The site consist of 4 integrated pages and 8 features.

### Header

- Featured on all pages.
- Consists of the game title and homepage link on it.

<details><summary>Header</summary>
<img src="assets/docs/features/header.webp">
</details>
<br>
<br>

### Footer

- Featured on all pages.
- Consists of a section providing git hub link and a link to the about the game.
- User story covered: 3, 9.

<details><summary>Footer</summary>
<img src="assets/docs/features/footer.webp">
</details>
<br>

### Start screen

- Provides an "insert your name" input.
- Provide a challenge/welcoming message to the user.
- User story covered: 1, 6.

<details><summary>Start screen</summary>
<img src="assets/docs/features/start.webp">
</details>
<br>

### Game screen

- Consists of 7 different sections:
    - A section with the current question number.
    - A section with the current question text.
    - A section with the current answer buttons.
    - A section with the next button.
    - A section showing the correct and incorrect feedback message.
    - A section with the current score and total number of question.
    - Interactive shadowbox showing correct and incorrect answer.
    - A nostalgic background image showing retro and modern video game characters.
    - User stories covered: 4, 5, 10.

<details><summary>Game screen</summary>
<img src="assets/docs/features/game.webp">
</details>
<br>

### Result screen

- Consists of three sections
    - A section with a congratulation message.
    - A section with your final score.
    - A section with a retry button to restart the game.
    - A section with back button to get back to the homepage.
    - User stories covered: 7, 8.

<details><summary>Result screen</summary>
<img src="assets/docs/features/result.webp">
</details>
<br>

### Rules screen

- Provides a set of rules to be followed.
- A section with a back button.
- User story covered: 2.

<details><summary>Rules screen</summary>
<img src="assets/docs/features/rules.webp">
</details>
<br>

### About screen

- A section showing a brief description about the game.
- A section with a back button.
- User story covered: 3.

<details><summary>About screen</summary>
<img src="assets/docs/features/about.webp">
</details>
<br>

### 404 page

- A section showing the user that the page could not be found.

<details><summary>404 page</summary>
<img src="assets/docs/features/pagenotfound.webp">
</details>
<br>


## Validation

### HTML Validation

The W3C Markup Validation Service was used to validate the HTML of the website by URL and direct input.
All pages pass with no errors no warnings to show.

<details><summary>Home</summary>
<img src="assets/docs/validation/home-online.webp">
<img src="assets/docs/validation/home-direct.webp">
</details>
<details><summary>404 page</summary>
<img src="assets/docs/validation/pagenotfound-online.webp">
<img src="assets/docs/validation/pagenotfound-direct.webp">
</details>
<br>

### CSS Validation

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website by URL and direct input.
The page pass with no errors no warnings to show.

<details><summary>CSS</summary>
<img src="assets/docs/validation/CSS-online.webp">
<img src="assets/docs/validation/CSS-direct.webp">
</details>
<br>

### JavaScript Validation

JSHint Static Code Analysis Tool for JavaScript was used to validate the Javascript file.
No significant issues were found.

<details><summary>JavaScript File</summary>
<img src="assets/docs/validation/js-jshint.webp">
</details>
<br>

### Accessibility

The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards.
All pages pass with no errors.

<details><summary>Home</summary>
<img src="assets/docs/validation/home-wave.webp">
</details>
<details><summary>404 page</summary>
<img src="assets/docs/validation/pagenotfound-wave.webp">
</details>
<br>

### Performance 

Google Lighthouse in Google Chrome Developer Tools was used to test the performance of the website.

<details><summary>Home</summary>
<img src="assets/docs/validation/home-performance.webp">
</details>
<details><summary>404 page</summary>
<img src="assets/docs/validation/pagenotfound-performance.webp">
</details>
<br>

### Performing tests on various devices 

The website was tested on the following devices.

- Galaxy Samsung S10+
- Galaxy Samsung S22 Ultra
- Surface Pro 8 (Tablet and Desktop mode)

The website was tested with Google Chrome Developer Tools throughout the available screen sizes.

### Browser Compatability

The website was tested on the following browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

### Testing user stories

1. As a user, I want to have an welcome message.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Start screen | Load the homepage | Show the welcome/challenge message | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/user-stories/user-1-welcome.webp">
</details>     
<br>

2. As a user, I want to have a rule explanation page.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Rules screen | Click on the rules button | Shows the rules page to the user | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/user-stories/user-2-start.webp">
<img src="assets/docs/user-stories/user-2-rules.webp">
</details>     
<br>


3. As a user, I want to know more about the game.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| About screen | Click on the about section on the footer | Shows the rules page to the user | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/user-stories/user-3-footer.webp">
<img src="assets/docs/user-stories/user-3-about.webp">
</details>     
<br>


4. As a user, I want to know what the correct answer if i choose the wrong one.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Result screen | Select wrong answer | Load the correct feedback message | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/user-stories/user-4-answer.webp">
</details>     
<br>


5. As a user, I want to see visual indication of my correct/incorrect answer.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Result screen | Select wrong answer | Load the correct feedback boxshadow | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/user-stories/user-5-boxshadow.webp">
</details>     
<br>


6. As a user, I want to be able to insert my name to play.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Start screen | Insert your name | Shows warning message to insert your name | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/user-stories/user-6-name.webp">
</details>     
<br>


7. As a user, I want to be able to see my final score.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Result screen | Finish the game | Show final score to the user | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/user-stories/user-7-score.webp">
</details>     
<br>


8. As a user, I want to be able to retry the game.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Result screen | Click on the retry button | Restart the game to question 1 | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/user-stories/user-8-retry.webp">
</details>     
<br>


9. As a site owner, I want the user to be able to check our github page.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer | Click on the github icon | Open github on a new page | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/user-stories/user-9-git.webp">
</details>     
<br>


10. As a site owner, I want the user to have a nostalgic feeling with the background image.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Background Image | Load any page | Shows a background image with video game characters | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/user-stories/user-10-background.webp">
</details>     
<br>

## Bugs

| **Bug** | **Fix** |
| ----------- | ----------- |
| The score doesn't reset after the game is restarted | Add resetGame function |
| The question number jumps to 11 before loading result page | Add if conditional statement to show Questions Finished |
| Favicon icon not displaying on github pages | Add ? to end of meta href |

## Deployment

The  project was deployed using GitHub Pages by the following steps:

1. In the GitHub repository navigate to the Settings tab
2. On the left hand menu select Pages
3. For the source select Branch: master
4. After the webpage refreshes automaticaly you will se a ribbon on the top saying: "Your site is published at https://freedy-fr.github.io/CI-P2-True-Gamer-Quiz/"

You can for fork the repository by the following steps:

1. Go to the GitHub repository
2. Click on Fork button in upper right hand corner

You can clone the repository by the following steps:

1. Go to the GitHub repository 
2. Locate the Code button above the list of files and click it 
3. Select if you prefere to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7. Press Enter to create your local clone.

## Credits

Images/Pictures not listed below are owned by the developer.

### Media

- [Main-Background-Image](assets/images/wallpaperflare.com_wallpaper.webp) :Photo by Wallpaper Flare </a> on <a href="https://c4.wallpaperflare.com/wallpaper/950/753/310/video-game-characters-video-game-girls-games-art-render-digital-hd-wallpaper-preview.jpg">Wallpaper Flare</a>.

### Code

- API async code taken from <a href="https://www.youtube.com/@codecastcommunity8192">CodeCast Community</a>.
- General understand of functions taken from tutorials of <a href="https://www.youtube.com/@geekprobin1456">GeekProbin</a>.
- General understand of quiz structure taken from tutorials of <a href="https://www.youtube.com/@WebDevSimplified">Web Dev Simplified</a>.
- Documentation (README.md) standard structure skeleton taken from former Code Institute student <a href="https://github.com/4n4ru">Ana</a> from the project <a href="https://github.com/4n4ru/CI-P2-GuessingBee">PP-2</a>.
- API question and answer database data taken from <a href="https://opentdb.com/api_config.php">Open Trivia Database</a>.

## Acknowledgements

- My Mentor Victor Miclovich for the guidance, patience and motivation.
- To Code Institute for the support and attention.











