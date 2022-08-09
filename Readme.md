# Bot to add commits in GitHub
**Idea from Akshay Saini.**

**This is only for educational purpose.
That's why all the commits made from this repo are public in my profile.**

<img width="689" alt="687474703a2f2f692e696d6775722e636f6d2f6536446c7a66412e706e67" src="https://user-images.githubusercontent.com/67757251/183503742-3845ee01-376f-4bd2-a4ab-bb4843386aad.png">

### You can make patterns or write text.

## Main Idea
The main idea is that we are making commits in the past date. Whenever we make any commits to any repo, GitHub tracks them by associating those commits with a specific time (i.e. the date and time when we created that commit). So, here we are manipulating that time to some past date so we can make commits in the past. And when we push those commits with modified date and time, GitHub populates the contribution graph based on those past dates.

**Does this works for future date as well?**<br>
**If you are curious do try it out**

## Coding approach 
- As we need to manipulate the date, we will use a package called **[Moment](https://www.npmjs.com/package/moment)**. It is a JavaScript library for parsing, validating, manipulating, and formatting dates.<br>
- Next, we will use a package called **[simple-git](https://www.npmjs.com/package/simple-git)**. It helps us to run git commands like push, commit in node.js applications.<br>
- We will also use a **[jsonfile](https://www.npmjs.com/package/jsonfile)** package to write those manipulated date into a json file. Once we write those random dates into the json file, then we can commit them in GitHub. We will add that file into the `.add()` method from simple-git and will make the commit using `.commit()` method.
- Last package we will be using is **[random](https://www.npmjs.com/package/random)**. We will use this package to generate random integers which will be our random dates.<br>
#### Check the comments in [index.js](https://github.com/prajun7/github-commit-bot/blob/main/index.js) file for better undestanding.

## Installation
Clone and fork the repository to make the changes in your local system.
```git-bash
git clone https://github.com/prajun7/github-commit-bot.git
cd github-commit-bot
```
Now this command creates a directory named node_modules and installs all the required packages.
```javascript
npm install
```
Finally, to run the project.
```javascript
node index.js
```
You can see the commit date in terminal.

## Make design and text in your graph

```javascript
subtract(year, "y");
```
year here represents the year to start the commits. You can go, 1 year back from today or 2 years and so on

```javascript
add(week, "w");
add(days, "d");
```
#### Here you can modify the weeks and days to make commits at the specific point in the graph. Weeks are the x-Axis and days are the y-Axis.<br>
#### To modify weeks(x-Axis), you need to change this variable 'x' [here](https://github.com/prajun7/github-commit-bot/blob/main/index.js#L23) in line 23<br>
#### To modify days(y-Axis), you need to change this variable 'y' [here](https://github.com/prajun7/github-commit-bot/blob/main/index.js#L24) in line 24<br>
#### The top left corner of the contribution graph has the (0,0) coordinate.<br>
#### So, based on this information you can make commits at a specific point in the contribution graph and can make some beautiful pattern or text.<br>
<img width="689" alt="save" src="https://user-images.githubusercontent.com/67757251/183504543-3e3e239e-4e57-4494-9222-3cab7e59fe30.png">
<img width="689" alt="water" src="https://user-images.githubusercontent.com/67757251/183504549-2f56bf58-0dcc-44b9-aad4-3d4c15086e3e.png">

## Some improvement ideas for this project
- Moment.js is a big package, and it is slow. Read more [here](https://momentjs.com/docs/#/-project-status/). It is better to use other alternative packages like day.js.
- Instead of manually making commits in the contribution graph to make those design or text, we can automate this process. We can write a function that takes an array of the design that then generates the dates to draw those designs in the contribution graph. Or there might be other better approaches.

