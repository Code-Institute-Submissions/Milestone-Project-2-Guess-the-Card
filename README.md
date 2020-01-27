# Flavour Points

This website will be designed as a game to test and challenge the knowledge of MtG fans based on MtG flavour and lore.

Providing a short, quiz like structure as its basis, the game will present the user with clues about the identity of a Magic: The Gathering
card that they are trying to guess the name of. I will pull card data from the Scryfall API. The user will be challenged to guess the 
name of five cards, one at a time. The first clue will be the flavour text of the card (Which is traditionally an in game quote or flavourful text based on the card itself)
which is the free clue. Subsequent clues will then cost the user points against their final score in the game.

When a game is finished a pop up will display the user's scorecard and the option to share the game and thier results on social media.
The user can challenge friends to beat their score, or match their perfect score.

The game will contain small advert sections, providing advert revenue on a simple and shareable game with aims of going viral.
 
## UX

This game will suit a mobile first design, as the main user will be mtg players with a majority demographic of males aged from teens upwards. Magic: The Gathering
has made significant inroads into E-Sports recently with their release of MtG: Arena, with the majority of the games coverage being broadcasted on twitch. Most players use mobile devices to read strategy articles
or check card prices on trader websites while trading with other players, making them tech-savvy enough to navigate a intuitive mobile application. The main sources of player to player trading are social media groups and trading websites.

The secondary user would be a partner who advertising on the games single page platform. Their advert banner would generate footfall to their commerse page, which would increase
as the game is shared.

#### Hook

As the game will use JS/Jquery to pull 5 random cards, with flavour text, from a database of thousands, the game will have a variable difficulty every time it is played. This will make the experience new-ish each time.
This also means that while one person could get a really high score from an easy round, their friends may have a hard time beating it. This should cause a repepitive play pattern through the challenge. The sharing of the game and score is very key to this.

Example: 

Player A shares the link with a max score of 35 points. They challenge their MtG facebook friends to play the game and beat their score, each of them does the same. This will expose the advert banner to an ever expanding number of players. 
We can track footfall impact on the advertisers website to see if the process is working.

### Design mockups

Design some mock ups to go here!


 

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X