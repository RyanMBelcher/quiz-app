# quiz-app

## Description 

This a quiz that will test the user's knowledge of the rules of golf. Upon visiting the page, the user will get a quick breakdown on how the quiz will work. The user will then press the "Start Quiz" button and the quiz will begin. The user will be taken through a series of 5 questions regarding various rules of golf. The user has 60 seconds to answer the questions and any incorrect answers will incur a 10 second penalty. The user's score will be the amount of time left over at then end. Once the user gets through all the quesitons (or the time reaches 0), the user will be prompted to enter their intitals and submit their score. They will then be taken to the highscore page. Scores are stored in local storage an populated to the high score page so the user can try to see how good of a score they can received. 

## Installation 

This web app can be accessed at https://ryanmbelcher.github.io/quiz-app

## Usage

This is what the user will see upon page load. After pressing "Start Quiz" the user will be taken to the first question and the timer will start. Additionally, the user can click on "View High Scores" to see how they have done on previous attempts.

![Screenshot of the start page of the quiz app](./assets/images/QC_screenshot_1.png)

This is what the questions will look like. The user will choose one of four multiple choice answers. They will receive indication if their answer is right or wrong and then be taken to the next page. If their answer was wrong, ten seconds will be subtracted from their score. 

![Screenshot of the first question of the quiz app](./assets/images/QC_screenshot_2.png)

This is the final page and where the user will receive their score. They will enter their initials in the box and submit their score which will then be saved in local storage and be displayed on the high score page.

![Screenshot of the last page of the quiz app](./assets/images/QC_screenshot_3.png)

This is the high score page. 

![Screenshot of the high scores page of the quiz app](./assets/images/QC_screenshot_4.png)

## Credits 

Shout out to: Leif Hetland, Wesley Clements, and Dominique Clarke for helping me to understand JS enough to make it through this proect. 

Color palette provided by Muzli Clolors (https://colors.muz.li/palette/272643/ffffff/e3f6f5/bae8e8/2c698d).

https://clubmate.fi/button-reset helped me style my "View High Scores" button in a way that makes it look like regular text.

## MIT License

Copyright (c) 2022 RyanMBelcher

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
