# randompassword generator

### Trilogy senior tutor 
### Trilogy Fullstack new pgm: Homework 03-Javascript

### ***   added shuffle to avoid to have always the firts characters in the same order, used(Fisher-Yates shuffle: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)


## Homework Description

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.

The user will be prompted to choose from the following password criteria:

* Length (must be between 8 and 128 characters)

* Character type:

  * Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))

  * Numeric characters

  * Lowercase characters

  * Uppercase characters

The application should validate user input and ensure that at least one character type is selected.

Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.

As a bonus, the user should also have the option to click a button to copy the password to their clipboard.