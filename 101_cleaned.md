## Box Model: Border

The border of an element sits just outside the padding and before the margin, usually invisible. In fact, all HTML Elements have a border but have a default value of `null`, meaning you won't see them (See, [Default CSS Values Reference](https://www.w3schools.com/cssref/css_default_values.asp)).

To make a border visible you need to set three values: `border-style`, `border-width`, and `border-color`. [Try it](https://codepen.io/)!

```html
  <p>Hello World</p>
```

```css
  p {
    border-style: groove;
    border-width: 12pt;
    border-color: #FF9633;
  }
```

Just like padding (and margin) there is a short-hand, `border`:

```css
  p {
    border: groove 12pt #AA9933;
  }
```

  > NOTE: Again, this short-hand comes with a warning: it is less readable than the long-hand form.

## More Long-Hand

To complicate things a little more there are properties that allow us to style each side of the border differently. This isn't all that common but it becomes VERY useful when you're creating strange and interesting shapes on the screen. [Try it](https://codepen.io/)!

```css
  p {
    border-style: groove;
    border-top-color: blue;
    border-top-width: 75pt;
    border-right-color: green;
    border-right-width: 40pt;
    border-right-style: dotted;
    border-bottom-color: purple;
    border-bottom-width: 100pt;
    border-left-color: red;
    border-left-width: 60pt;
    border-left-style: dotted;
  }
```

Above you can see there are properties for each side so you are able to control `-style`, `-color`, and `-width` of each side as you please!!

## Border Counts for Total Width

There's a small "gotcha" with borders. Because borders are often invisible they don't have a value on the screen which means that count in the total amount of "available space". But, when you start add value to the `border-width`, it will start to push outward affecting the element's neighbor(s). The docs will say: "Although an element's border is bound to the element itself, border settings will affect neighboring elements."
  
  > NOTE: Check out the docs ahead to see all the values these properties can take.



## Additional Resources

* [W3S Docs - Border](https://www.w3schools.com/css/css_border.asp)s
* [CodePen - Box Model Visualizer](http://codepen.io/carolineartz/pen/ogVXZj/)
* [W3S Docs  - Default CSS Values Reference](https://www.w3schools.com/cssref/css_default_values.asp)
## Box Model: Margin

Continuing on with our Box Model properties, we arrive now at `margin`.

Beyond the edge of the `border` lies the `margin`. If you add margin to any side of an element, it will push against other elements near it and create an invisible barrier between the elements. If you were looking at an image gallery, the margins would create the **gutter** between each column and row of images.

Just like `padding` and `border` we can set the values of all four margins like the following:

```css
p {
  margin-top: 10%;
  margin-right: 15%;
  margin-bottom: 1%;
  margin-left: 15%
}
```

## The Margin Short-Hand

Again, like `padding` and `border` there are short-hands versions that are harder to read. However, if you have uniform margin on all for side it maybe be easier to just write something like this:

```css
/* In this example, 15pt of margin will be applied to all four sides of the element */
.margin-on-all-sides {
  margin: 15pt;
}
```

And if you have equal margins on the left and right and equal margins on the top & bottom you could right it like this:

```css
/* In this example, 15pt will be applied to the TOP and BOTTOM margins, 30pt to the LEFT and RIGHT margins*/
.TopBottom-LeftRight {
  margin: 15pt 30pt;
}
```

This is a very common form of the short-hand to center an element:

```css
.topBottom-leftRight-centered {
  margin: 15pt auto;
}
```

## The Worst Short-Hand

The last two short-hands are so confusing they're not really worth mentioning but just so you have them as a reference here they are:

```css
/* the TOP margin will be 15pt, the RIGHT 30pt, the BOTTOM 25pt, the LEFT 20pt (clockwise)*/
.T-R-B-L {
  margin: 15pt 30pt 25pt 20pt;
}

/* :yuck: */

/* In this example, 15pt on the TOP margin, 30pt on LEFT and RIGHT margins, 45pt on BOTTOM margin*/
.Top-LeftRight-Bottom {
  margin: 15pt 30pt 45pt;

  /* :barf: */
}
```

You can do the same thing but with a little more typing that results in **far more readable code**!

```css
.T-R-B-L {
  margin-top: 15pt;
  margin-right: 30pt;
  margin-bottom: 25pt;
  margin-left: 20pt;
}

/* YAY, MUCH MORE READABLE CODE WE'LL GET HIRED FOR!!!!! */
```  



## Additional Resources

* [W3S Docs - Margin](https://www.w3schools.com/css/css_margin.asp)
* [CodePen - Box Model Visualizer](http://codepen.io/carolineartz/pen/ogVXZj/)
* [W3S Docs - Default CSS Values Reference](https://www.w3schools.com/cssref/css_default_values.asp)

## Box Model: Padding

After we've decided how big an element's content should be using `height:` and `width:` we should starting thinking about the space between the content and the border, the **padding**.

Padding is the space between the element's border and the content itself. If you had a bird's-eye-view of a pool table, you can think of the padding as the cushions or banks between the wooden outside border and the content inside, the billiard balls and green felt.

As you saw before there are for properties that address the padding of an element:

* `padding-top` - holds the value of the padding at the top of the element
* `padding-right` - holds the value of the padding on the right side of the element
* `padding-bottom` - holds the value of the padding at the bottom of the element
* `padding-left` - holds the value of the padding on the left side of the element

Each of these properties gives you control of the four different sides of the element. However, if you intend to have equal padding on either side and a different amount of padding for the top & bottom you might try the short-hand property: `padding` and write them with only two values:

```css
  /* The element(s) with the class name: my-other-element will have 20 points of padding on the top & bottom and 10 points of padding on the right & left */
  .my-element {
    padding: 20pt 10pt;
  }
```

And if you wanted to have an equal amount of padding all the way around you could write it like this:

```css
  /* The element(s) with the class name: my-other-element will have an absolute padding of 20 points on all four sides*/
  .my-other-element {
    padding: 20pt;
  }
```

While you *can* use four values to specify the four sides in this short-hand it gets **hard to read and remember the order**: TOP, RIGHT, BOTTOM, LEFT (clockwise)

```css
  /* The element(s) with the class name: my-last-element will have 20 points of padding on the top, 5 points on the right, 10 points on the bottom and 1 point of padding on the left*/
  .my-last-element {
    padding: 20pt 5pt 10pt 1pt;
  }
```

For **code readability**, you should use the long-hand form of the padding properties to specify 4 different values:

```css
  .my-readable-code {
    padding-top: 20pt;
    padding-right: 5pt;
    padding-bottom: 10pt;
    padding-left: 1pt;
  }
```

## Additional Resources

* [W3S Docs - Padding](https://www.w3schools.com/css/css_padding.asp)
* [CodePen - Box Model Visualizer](http://codepen.io/carolineartz/pen/ogVXZj/)
* [W3S Docs - Default CSS Values Reference](https://www.w3schools.com/cssref/css_default_values.asp)



# Content Width & Height + New Length Units

Since you already know these two values let's take some time to cover them quickly but **also** introduce to you some other useful values/**length units** you can use for margin, padding, and border as well as height and width.

## New Length Units

By default, the dimension of an element is the size of the content contained within the element. This means that when you create an `<article>` element it won't have a height that you can see on the screen because there is nothing inside of it. But as soon as you add content you'll be able to see it grow to fit the amount of content. We can, of course, make the element larger than the content by changing its width and height properties.

The width and height properties take the traditional `px`(pixel) unit like the other properties you've read about so far, but now we'll throw a curve ball at you: All of the properties you've read about take far more length units than just the traditional `px`, including: `in`, `cm`, `mm`, `em`, `rem`, `vh`, `vw`, `%`, `pt` and many more.

"Why so many?" That's a good question that doesn't really need to be answered right now. Suffice it to say that there have been many additions to the CSS language trying to accommodate for designers working on computers. The ones I'd like you to focus your attention on right now are `%` and `pt`.

### Percentage is Dynamic

`%`, or **percentage**, tells the child element to be displayed at a specified percentage, or proportion, of its parent element. Check out the example below:

```html

<article>
  <p>The red fox jumped over the green turtle.</p>
</article>

<style>
  /* style.css file */
  article {
    width: 500px;
    height: 600px;
  }

  article > p {
    width: 90%;
    height: 50%;
  }
</style>
```

In the example above, the `<article>` element, or parent element, will be `500px` by `600px` while the `<p>` element, or child element, will be rendered at 450px(`90%`) by 300px(`50%`) because it is set to be a percentage of its parent element.

This is really useful when parent elements are set to be sized in proportion to their parent element like maybe . . . `<body>`. See the example below:

```html

<article>
  <p>The red fox jumped over the green turtle.</p>
</article>

<style>
    /* style.css file */

  /* The <body> element will be automatically set to the height and width of the viewport, or display of the computer, tablet, or phone's window */
  body {
    width: auto;
    height: auto;
  }

  /* Then the <article> element will be set to 50% as wide as the whole <body> and 100% as tall as the <body> */
  article {
    width: 50%;
    height: 100%;
  }

  /* Can I assume you can guess what the paragraph element will do? */
  article > p {
    width: 90%;
    height: 50%;
  }
</style>
```

Using percentages is advantageous because you will never know all the sizes of screens that will view your web pages; this way you can tell elements to be a specific percentage of the available area instead of **hard coded** pixels!

#### Follow It Up with Min- & Max-

When using percentages as values it's important to include the `min-width`/`max-width` and `min-height`/`max-height` properties so as to avoid your elements being rendered in sizes that are unmanageable for the user. See below:

```css
body {
  width: auto;
  height: auto;
  min-width: 100pt; /* <--- Notice the use of the pt unit */
  max-width: 1000pt;
  min-height: 150pt;
  max-height: 1500pt;
}
```

Above you saw the use of `pt` or **points**. These are a little more reliable than `px` which are relative to the number of pixels in a user's display and [other factors](http://inamidst.com/stuff/notes/csspx). The `pt` value is equal to 1/72nd of an inch so you can calculate a little more easily the size of your elements.

### View-height & View-Width

The last units you should know about are `vh` and `vw` which stand for **view-height** and **view-width**, respectively. These are very useful units except for the fact that they are not supported on all previous versions of mobile browsers.

## Additional Resources

* [W3S Docs - Height & Width](https://www.w3schools.com/css/css_dimension.asp)
* [CodePen - Box Model Visualizer](http://codepen.io/carolineartz/pen/ogVXZj/)
* [W3S Docs - Default CSS Values Reference](https://www.w3schools.com/cssref/css_default_values.asp)



********************************************






********************************************

# Class One: Hosting Your Landing Page








## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE: Review previous knowledge and engage on a deeper level. Ask why do we need to do these things?.*

- [ ] Intro of Instructor + Staff - 15 mins
    * [ ] Student Intros - 30 mins
    * [ ] Welcome to the class space with quick tour - 3 mins
- [ ] Questions for Student Led Discussion
    * [ ] Account Setup/Check-In - 20 mins
    * [ ] Downloads Review - 10 mins
- [ ] Creation Time
    * [ ] Host Your Landing Page - 45 mins
- [ ] Interview Questions: Blog to Show You Know
- [ ] Exit Recap, Attendance, and Reminders
    * [ ] Learning Structure and Expectations - 10 mins
    * [ ] What's next? - 2 mins

### Intros

- [ ] Intro of Instructor:

    * [ ] Who you are?
    * [ ] What you do for full-time employment?
    * [ ] Why you teach?
    * [ ] How you like to work within the class and the expectations you have for students?

- [ ] Intro to:

    * [ ] the school,
        * [ ] Why it was created?
        * [ ] What we do?
        * [ ] How we do it?
    * [ ] the program and what you'll learn in it,
        * [ ] Why - We teach to industry standards while meeting students where they are by ramping their learning curves
        * [ ] What - Full-stack web development
        * [ ] How - Flipped classroom, student owns their learning with the guidance on classroom facilitation as a small piece of everything they learn.
    * [ ] this course and what we'll learn during it,
        * [ ] Front-end web development
        * [ ] Minimal programming but lots of interaction with websites
    * [ ] the textbook and how to navigate it
        * [ ] There are always Pre-Class Lessons (homework) to complete.
        * [ ] Look ahead into each class and write down your questions to be asked during class.

- [ ] Intro of support staff: Campus Director and Tutor(s) + [Tutor Page](https://austincodingacademy.com/tutors)

    * [ ] invitation to RocketChat or email anytime
    * [ ] set up tutoring sessions
    * [ ] important: come to tutoring sessions on the weekends

#### Ice Breaker

 - [ ] **3 mins** - Look across the table and find a classmate, someone that is interested in the same career as you and ask them the following questions to get to know them:
    * [ ] What's your name?
    * [ ] What do you currently do?
    * [ ] Why do you want to get into Web Development?
    * [ ] What do you like to do to exercise your mind?
 - [ ] **3 mins** - Now turn to your left or right and find another aspiring developer. Ask them these questions:
    * [ ] What's your name?
    * [ ] Have you always lived in Austin? Where?
    * [ ] What do you know about the tech world?
    * [ ] Do you have any pets? Species? Names?
 - [ ] **3 mins** - Now turn the opposite way and find another collaborator. Ask them these questions:
    * [ ] What's your name?
    * [ ] Tell me about an interesting book or article you've read lately?
    * [ ] What do you think about when you watch the stars?
    * [ ] What is a dream of yours you are willing to work toward and figure out how to bring it to fruition?
 - [ ] **3 mins** - Last time, get up and walk to the other side of the classroom to find a different colleague to ask them these questions:
    * [ ] What's your name?
    * [ ] What's your Zodiac sign?
    * [ ] What daily self-care methods do you practice to maintain good health?
    * [ ] What is a fear you have about this course?
    * [ ] How do you plan to overcome it?
 - [ ] **15 mins - Show-And-Tell**, Finally, stop where you are, turn toward the rest of the class, and as you feel the need, raise your hand to introduce your new (last/most recent) friend to the class. Example:

  > "Hello, my friend, James, is a Libra, born Oct 15th. He says that journaling, drinking water, and running help him sleep soundly and have bright useful days. He's nervous that he doesn't know computers well enough but he thinks if he keeps reading, breathing, and resting his mind he can stay focused on the marathon and not just the dash!"

**Everyone should introduce their new friend.**

Now that we know each other let's sit down and get to work!

### Questions for Student Led Discussion, 35 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-1.md)

*****

### Accounts, Downloads, and Git Software Check-In, 30 minutes

In this section we'll take things step at a time with time to slow down and get help, we'll call them **Pause and Partner** where students that were successful in the steps will partner with students that weren't to help them through any troubles. This will help conserve class time so your instructor can teach thing everyone needs to learn.

We'll be using these two programs tonight and for the rest of class. If you didn't get both of them downloaded and opened up, ask your new friends if they did so they can help you out.

1. The **IDE**: [Visual Studio Code](https://code.visualstudio.com/download)
  
    * Plus the extension: [Live-Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

2. The version control software: Git

=== "For Windows"
    
    1. [How To Install Git on Windows](https://www.youtube.com/embed/J_Clau1bYco)
    2. Install [Git](https://git-scm.com/download/windows)

=== "For Mac"

    1. Install [HomeBrew](https://brew.sh/) - `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
    2. Install [Git](https://git-scm.com/download/mac) - `brew install git`

  > NOTE: There is no icon for this program, just go to your terminal/shell/commandPrompt/bash and type git + ++enter++

  > **Pause and Partner:**
    > Did anyone NOT get these downloaded? Did anyone not get them opened? Partner up and help each other.

*****

### Create a Repo on GitHub

1. First, Sign-in to GitHub. At the top-right of the screen click on the "+" icon and select "New Repository"
2. In the "Repository Name" field type: web101_firstName_lastName

    > NOTE: remember to change firstName for your actual first name and lastName for your actual last name.

3. In the "Description field" type: "This is my portfolio website!"
4. Make it "Public" by clicking the radio button next to Public. So your instructor can view it.
5. Check the box to "Initialize this repository with a README.md"
  
    > NOTE: This is a file we'll use later on and you'll understand why it's important to use later on.

6. Click "Create Repository". After this you should see a screen that looks like this:

![gitHub-new-emptyRepo](./../images/gitHub-new-emptyRepo.png)

7. Find your Portfolio Folder in the terminal by either:

    * dragging and dropping the folder in the terminal
    * Use the command `cd` to change directories until you're inside the folder.

8. Type `pwd` to confirm your in the correct folder.
9. Then use these commands one after another. They're modified a little from the image above.

    * `git init` - this will initialize the folder as a folder for the git software to watch.
    * `git add -A` - this adds all the files you created for your Portfolio Landing Page.
    * `git commit -m "first commit"` - This stages your new files to be added to the remote remote, you're "committing" to the changes.
    * `git branch -M main` - [GitHub recently changed the name of the "main" branch](https://www.theserverside.com/feature/Why-GitHub-renamed-its-master-branch-to-main#:~:text=The%20master%20branch%20is%20no,like%20any%20other%20Git%20branch.) from `master` to `main`. This command ensure you're using `main` as your "main" branch.
    * `git remote add origin https://github.com/YOUR-USERNAME/web101-firstName_lastName.git` - Attaches the remote repo to this local folder.
      >  NOTE: be sure you replace the link wit the link given to YOU from gitHub.
    * `git push -u origin main` - pushes your committed files up to the remote repo.

10. Watch the progress in your terminal then refresh the tab with your GitHub Repo to see if the files are there. In your terminal you're looking for feedback that looks like this:

![successful-Git-Push](./../images/successful-Git-Push.png)

  > **Pause and Partner:**

* What problems have you encountered?
* Is there anyone that was rejected by GitHub? Password? Username?
* Let's partner up according to our problems and help each other get through them! Who's successful and who is struggling?
* [Follow-Up Video: Creating a Repo and Using Git](https://vimeo.com/391317916)
* Is anyone having a trouble `push`ing? Maybe your configurations aren't set correctly. See next section: Git Configurations

  > NOTE: Mac users can learn to setup the `code .` path for VS Code in this video.

#### Git Configurations

When you're pushing code to a repo, Git needs to know who you are so it can sign-in to GitHub. It uses your username/email and password to do this. If you don't setup this configuration, git will populate your email with an address assigned to your computer that doesn't match your account on GitHub.

  > NOTE: if while doing these steps you'll see a strange looking screen pop up, it might be your computer's [default text editor, VIM or VI](https://en.wikipedia.org/wiki/Vim_(text_editor)). Just follow the instructions below and/or watch the video to use it.

##### Set up Git Config(urations) All Machine Users

1. Set your git username. In your terminal, copy/paste this code and replace YOUR-USERNAME with your GitHub username: `git config --global user.name "YOUR-USERNAME"` + ENTER

2. Now, set your email. In your terminal, copy/paste this code and replace YOUR EMAIL with the email you used to create your GitHub account: `git config --global user.email "YOURemail@address.com"` + ENTER

    > Note: If it asks you for a password this is your GitHub account password

##### VIM/VI - How to Use It

When doing your git config you may see a more unusual window in your terminal. it will have a bunch of `~` or `#` along the left side. This is a built-in text editor like VS Code but very stripped down. It allows you to change files and write code. For this step you'll be changing your `.gitconfig` file to contain your username and email.

VIM has two modes: **Insert** (input text) and **Command** (move around and do stuff). For now, we really only need to insert text, but you'll need to know how to get in and out of the two different modes.

  * To start the **Insert Mode**: Press `i` to enter **Insert mode** and press `esc` to begin **Command mode**. You'll know which one you're in because "insert" will appear at the bottom of the screen when you enter insert mode.

  * While **Command Mode** is active you navigate around the page with your arrow keys (d-pad). When you need to type in your email or anything else, press `i`. You're then free to type in whatever you need.

  * In this `.gitconfig` file all lines that begin with `#` are read as "comments" meaning the computer doesn't read them. Make sure you remove them from the important lines. Ask your instructor.

  * When you're finished inserting, press `esc` to move back to **Command mode**. Then to exit and save the file type `:wq` + ENTER. This simply says to the computer: "I'm about to give you a command(`:`), write the file(`w`) then quit the program(`q`)."

    > NOTE: If you're lost, it's totally fine. VIM is an old relic that's stuck around and become a hipster text editor but really it's there so you can always change files, no matter what!

If you're having trouble: [Git Config How-To Video](https://vimeo.com/384020788)

  > **Pause and Partner:** How we doing? Try `git push`ing again. Who hasn't been able to push?

*****

### Practice It Again: Add A file and Push It

Now that you've configured your git software and learned the `status`, `add`, `commit`, `push` process, let's practice using git again.

1. Create another file in the same directory called: `.gitignore`. Then copy/paste this code into that file:

  ```yaml
    ### macOS ###
    # General
    .DS_Store
    .AppleDouble
    .LSOverride

    # Icon must end with two \r
    Icon

    # Thumbnails
    ._*

    # Files that might appear in the root of a volume
    .DocumentRevisions-V100
    .fseventsd
    .Spotlight-V100
    .TemporaryItems
    .Trashes
    .VolumeIcon.icns
    .com.apple.timemachine.donotpresent

    # Directories potentially created on remote AFP share
    .AppleDB
    .AppleDesktop
    Network Trash Folder
    Temporary Items
    .apdisk

    ### Windows ###
    # Windows thumbnail cache files
    Thumbs.db
    Thumbs.db:encryptable
    ehthumbs.db
    ehthumbs_vista.db

    # Dump file
    *.stackdump

    # Folder config file
    [Dd]esktop.ini

    # Recycle Bin used on file shares
    $RECYCLE.BIN/

    # Windows Installer files
    *.cab
    *.msi
    *.msix
    *.msm
    *.msp

    # Windows shortcuts
    *.lnk

    # Sensitive Environment Variables
    .env

    # VS CODE
    .vscode/settings.json 

    # End of https://www.toptal.com/developers/gitignore/api/macos,windows
  ```

  > NOTE: This step is mainly for Mac users but really all users should know how to use `.gitignore` which is a file that git software looks for and will ignore whatever you write inside of it. Its good practice to include this file with all projects you do in the future.

2. To move this file up to your remote repo by running these commands in order:

    * `git status` - check to see what files you've changed and that you hit "SAVE"
    * `git add .gitignore` - Adds the changed file to the staging area.
    * `git commit -m "to git to ignore certain files"` - Commits the file changes with a descriptive message about the changes made.
    * `git push` - pushes the change from the staging area to the remote repo.

13. Make a note for yourself!! Every time you make substantial changes to your code bases you'll run these commands in this order EVERYTIME!

**Pause & Partner**: How we doing? Any questions about these four commands? Who didn't get this `.gitignore` file into their repo?

### Serve Your Landing Page

Now that your web page is hosted on a publicly available computer, GitHub's server, you can change the permissions and allow for it to seen by the world!

1. Go back to the repo you just created on GitHub then go to the "Settings Tab".

![gitHub-pages-settings-1](./../images/gitHub-pages-settings-1.png)

2. Under the Settings, scroll down almost to the bottom of the page until you see "GitHub Pages".

![gitHub-pages-settings-2](./../images/gitHub-pages-settings-2.png)

3. Click the None dropdown and select `main` branch and then click "Save".

![gitHub-pages-settings-3](./../images/gitHub-pages-settings-3.png)

4. Now, scroll back down to the "GitHub Pages" section and you'll see a section that says "Your site is ready to be published at `https://yourusername.github.io/`." - This is the ROOT of your live site. In order to see your live site, you need to put in the rest of the URL's **path**.

![gitHub-pages-settings-4](./../images/gitHub-pages-settings-4.png)

5. Use your browser to navigate to: `https://YOUR-GITHUB-USERNAME.github.io/ACA_web101_FIRSTNAME_LASTNAME/myPortfolio/index.html`

  > NOTE: Do you see how the forward-slashes `/` in the URL look the exact same as the path names in our `<link/>` tags? That's because server-computers hold files the same way your personal computer does and the structure of the directories are the same, i.e. the current path to your portfolio looks like: `documents/DevFolder/myPortfolio/index.html`. All computers are built the same way and talk the same way.

  > **Pause & Partner**
    * Where are we? Is anyone able to see their site live? It can take a few minutes to populate.
    * Who's lost?

#### Turning in Your Assignments

Your instructor will show you where and how to turn your assignments in using this live GitHub link as an example.



#### Important Notes About Git and GitHub

DON'T make changes to your code using the tools on GitHub like editing, deleting, creating, or uploading any files.

![gitHub-NoNos-1](./../images/gitHub-NoNos-1.png)

![gitHub-NoNos-2](./../images/gitHub-NoNos-2.png)

Only make changes in your editor (VS Code) and push them up EVERY TIME. No exceptions. If you don't it may cause you some headaches.

Git software is powerful but confusing for beginners. If something goes wrong while using git follow these steps:

1. PLEASE DON'T delete your local folder with work in it that is not on GitHub. That is your precious time you are deleting! THIS IS WHY WE KEEP OUR CODE IN A REPO IN THE FIRST PLACE!!
2. Check the branch you're on: `git branch`
3. Change branches to see if the code you're looking for is on that branch: `git checkout <NameOfBranch>`
4. Replace the "broken" folder with a new folder:

    * Rename your folder on your computer `web101_firstName_lastName` to `web101_firstName_lastName-broken`
    * Re-clone your repository from GitHub `git clone https://github.com/username/ACA_web101_firstName_lastName.git`
    * Copy over all changed files from `ACA_web101_firstName_lastName-broken` folder into the new `ACA_web101_firstName_lastName`
    * `git add -A` - Add all new files
    * `git status` - See green
    * `git commit -m "fixed my mess-up"` - to commit the changes
    * `git push origin main` or `master` - push your code up to GitHub.
    * ONLY AFTER you've confirmed that all changes are on GitHub, delete the broken repo folder.



*****

### Student Presentation Organization

  Knowledge is best when it's learned not taught. In this program instructors and the learning portal guide the student's learning journey but our students own their learning experience. You'll be assigned to teach your classmates specific topics that are related to concepts and techniques being taught throughout the course and program. This process has been proven to deepen student's understanding, boost retention, and strengthen community and interpersonal communication skills.

  Let's take some time look over the topics and get prepared for them. Next class we'll organized who and when each person is going for each topic.

  [List of Student Daily Presentations](./../additionalResources/studentPresentations.md)

  

*****
*****

## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Blogs to Show You Know

[Blog Prompts](./../additionalResources/blogPrompts.md)

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create Class One Blog assignment
- [ ] Review [Class Structure & Expectations of Students](./../index.md#class-structure-and-expectations)
- [ ] Answer the following questions:
    * [ ] How would you describe programming?
    * [ ] How would you describe coding?
    * [ ] What does Clone mean?
    * [ ] What's a Local Machine?
    * [ ] What's a Repo?
- [ ] Mentally prepare for [your presentations](./../additionalResources/studentPresentations.md).
- [ ] Next class we'll be adding an image gallery to your website so make sure you study CSS Grid & Box Model tonight and tomorrow. We'll see you then!












 # Class 2: NASA Contact Page






*Share your ideas and gratefully listen to others.*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE: Applying recently learned concepts to real world challenges, let's learn to use what we learn immediately.*

- [ ] Questions for Student Led Discussion
- [ ] Interview Challenge: Wireframe the NASA Web Page together - 25 mins
- [ ] Organize Student Presentations - 15 mins
- [ ] Creation Time
    * [ ] NASA Contact Page - 75 mins
    * [ ] use CSS Flex & Box Model
    * [ ] create a new repo,
    * [ ] host it, and turn it in
- [ ] Push Yourself Further
- [ ] Interview Questions: Blog to Show You Know
- [ ] Exit Recap, Attendance, and Reminders

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-2.md)

### Interview Challenge, 25 mins



[See Your Challenge Here](./../additionalResources/interviewChallenges.md)


![NASA-Contact-Page](./../images/NASA-Contact-Page.png)

### Student Presentations, 15 mins

  Let's take some time to assign & document individual students and groups of students to present the coming topics.

  [List of Student Daily Presentations](./../additionalResources/studentPresentations.md)

## Creation Time, 60-90 mins

* Instructor to Demonstrate with Examples, Explain and Set Expectations
* Group Students in pairs
  * plan and implements
* Partner with other groups for elaboration
* Share with the class for evaluation (potentially carry into the next class)

*****

- [ ] Draw a wireframe with HTML tags denoting each element
- [ ] Create a repo on GitHub with a `README.md`
- [ ] `git clone` it to your local machine.
- [ ] Create an `index.html` and `style.css` file and link them together.
- [ ] Using `display: flex;` and the box model, follow the mock-up below to build the NASA landing page.
- [ ] Use [PixaBay](https://pixabay.com/) to download an image that is similar to the one on your mockup.
- [ ] Use [GoogleFonts](https://fonts.google.com/) to find the font closest to the font on the mockup.
- [ ] Use [ColorPick Eyedropper](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en) to get the right colors.
- [ ] Push your local changes up to your remote repo:
    * [ ] `git status`,
    * [ ] `git add .`,
    * [ ] `git status`,
    * [ ] `git commit -m "your meaningful message"`,
    * [ ] `git push`,
    * [ ] `git status`
- [ ] Go to the settings of this repo and host it with GitHub Pages.
- [ ] Copy/Paste the URL into Zollege.com.

  > In case you need it, here's a [Follow-Up Video for the NASA Page](https://player.vimeo.com/video/296667713).

### Push Yourself Further

- [ ] Use a Form & Input elements to create the form in the mockup.
- [ ] Link your new NASA Page to your Portfolio website by creating a portfolio page in your Portfolio website folder that has a list of links with one of them as: "NASA Contact Page". This way you have 2 hosted pages and one of them links to the other. Go do it! You have the skills now. Get messy and play!!
- [ ] Remember to link your `portfolio.html` file to your `index.html` file in your Portfolio folder and `push` your changes again.
- [ ] Add a [slide show of images](https://www.w3schools.com/howto/howto_js_slideshow.asp) to your NASA Contact Page.
- [ ] [Add an Overlay Zoom](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_overlay_zoom) to the page.

## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Blogs to Show You Know

[Blog Prompts](./../additionalResources/blogPrompts.md)

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create NASA Contact Page Assignment
- [ ] Create Class 2 Assignment
- [ ] Prepare for next class by completing all of your pre-class lessons

- [ ] Over the next few days you'll learn about CSS Grid and how to wireframe so that you can build more efficiently and confidently!












 # Class 3: Resume






*Interesting people want to work with interesting people.*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE: After this class students will have a firm understanding of: The application and use of CSS Grid as it is used in professional web development*

- [ ] Questions for Student Led Discussion
- [ ] Interview Challenge
- [ ] Student Presentations
- [ ] Creation Time
    * [ ] Choose and build a resume for your Portfolio project - 75 mins
- [ ] Push Yourself Further

- [ ] Exit Recap, Attendance, and Reminders

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-3.md)

### Interview Challenge, 15 mins



[See Your Challenge Here](./../additionalResources/interviewChallenges.md)


### Student Presentations, 15 mins

[See Student Presentations List](./../additionalResources/studentPresentations.md)

## Creation Time, 60-90 mins

Today you're going to **first** wireframe then build an online resume. It will not be your resume, but for someone else besides you; the point is that you shouldn't feel personally connected to the content so you don't struggle to come up with the content but instead focus on the structure so that it can hold anyone's content. Later on, we'll convert this resume to represent you and have your content but for now, just build the structure.

First plan, then code. Trust this process; it will save you **so** much time!

- [ ] Choose one of the mockups below or the one in the [Daily Interview Training](#interview-challenge) section to build.
- [ ] Draw out your wireframe into detail to help you plan your code. *Remember, the code is just a tool, you are the thinker. How to you think up the plan before you execute with the tool?*
- [ ] You're going to build this online resume into your ACA_web101_firstName_lastName folder and link it to the Landing Page so users can access your resume.
- [ ] Using your terminal, navigate to `ACA_web101_firstName_lastName` O*bviously switching out `firstName` & `lastName` with your real name...*
- [ ] Open the folder in VS Code
- [ ] Create a new file called resume.html and another called resume-style.css
- [ ] Generate your **boilerplate** HTML in that file and link the stylesheet to it. (`html:5` + ++enter++)
- [ ] Then go to the `index.html` and link your *resume.html* file to the "Resume" a tag at the top of the page by changing the href= value to the pathname that points to the new *resume.html* you just created.
- [ ] From there, test your link by Live-Serving your page and clicking on the "Resume" link.
- [ ] From here, you can start building!
- [ ] Once you're finished, `git status`, `add`, `commit`, `push` your changes then turn in the url to the resume page, NOT the url to the landing page. So the url you turn in should have something like `/resume.html` at the end of it.

### Tips

* Build a resume for Kobe Bryant (RIP), Barack Obama, Michelle Williams, Jeff Bezos, Elon Musk, Ryan Holiday or some other figure you can find on wikipedia. *This will be easier building one for yourself!*
* If you don't want to type content, then copy/paste [Lorem Ipsum](https://getlorem.com/) to get words into your page. Lorem Ipsum is a tried & true industry practice to get word spacing and aesthetics across without the wait time of **copy** to be created.

### Example Mockups

1. [Mockup One](https://www.resume-now.com/wp-content/uploads/2018/02/RB_Modern2_CTP1_rsm_1664x2153-hi_res.png)
1. [Mockup Two](https://img.resume.com/templates/2.png)
1. [Mockup Three](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_OJu366oz6ps7JRkLbnMfo5moNM6strMT1qTpUBrbdbEOdMzKg)
1. [Canva Resume Templates](https://www.canva.com/resumes/templates/)

=== "Other One"
    ![resume-example-one](./../images/resume-example-one.png)

=== "Other Two"
    ![resume-example-two](./../images/resume-example-two.png)

### Follow-Up Video

- [ ] [Vimeo, Clayton@ACA - Building a Resume Page](https://vimeo.com/292956427/ae48516429)
- [ ] [YT, Clayton@ACA - Whiteboarding](https://www.youtube.com/watch?v=iXf5DSCeyAA)

### Push Yourself Further

- [ ] Add an image to the resume.
- [ ] Link the resume to actual social media platforms.
- [ ] Comment your code. Go through, and write in comments to help yourself or other developers later.
- [ ] Use the `<span>` tag to make text pop on `:hovers`.
- [ ] Look ahead to next class's material, and see if you can make the resume responsive.
- [ ] Learn [how to read documentation](https://sweetcode.io/art-reading-documentation/).

## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create Resume Assignment
- [ ] Prepare for next class by completing all of your pre-class lessons
- [ ] Remind students to bring paper and pencils to all future classes.
  > **Wireframes are required for all future projects**! You'll turn these in via pictures that are added to your code base so they get turned in with your code.
- [ ] Complete the feedback survey(if applicable)
- [ ] Exit Questions:
    * [ ] What does **Boilerplate Code** mean?
    * [ ] What does **copy** mean?

Next class we'll be making our webpages responsive to mobile devices to read up, practice and get ready!!












 # Class 4: Responsive Website






*Teach someone something new. And today you shall learn something new!*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE: After this class students will have a firm understanding of: The application and use of CSS Grid-Template-Areas & Media Queries to design responsive websites for professional web development*

- [ ] Questions for Student Led Discussion
- [ ] Interview Challenge
- [ ] Student Presentations
- [ ] Creation Time: Responsive Website
- [ ] Push Yourself Further
- [ ] Interview Questions: Blog to Show You Know
- [ ] Exit Recap, Attendance, and Reminders

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-4.md)

### Interview Challenge, 15 mins



[See Your Challenge Here](./../additionalResources/interviewChallenges.md)


### Student Presentations, 15 mins

[See Student Presentations List](./../additionalResources/studentPresentations.md)

## Creation Time, 60-90 mins

Bringing together all the skills you've learned you're now asked to build a website for a small company. Make sure you practice good file structure, use css grid, flex, media queries, and the box model to build a well-built and responsive website.



Our company needs this website up really soon, please make judgments about colors and layout that we haven't specifically laid out. Don't worry about content, use the lorem ipsum we provided for now or find your own. Remember to work from outside to in, commit often, plan your code, and comment your CSS code so our next developers know what you built.

- [ ] Use the Mockups & Specs below to draw your wireframes and plan your code, FIRST.
- [ ] Make a new repo called `First-Responsive-Website` and initialize it with `README.md`
- [ ] `git clone` it to your local machine and get to working.
- [ ] Once you're finished, `git status`, `add`, `commit`, `push`.
- [ ] Host your website with GitHub pages.
- [ ] Then turn in the url for your instructor to grade it.

=== "Laptop View"
    ![responsive-website-project-laptopView](./../images/responsive-website-project-laptopView.png)

=== "Mobile View"
    ![responsive-website-project-mobileView](./../images/responsive-website-project-mobileView.png)

=== "Break Points"
    | Target | Media Query |
    | --- | --- |
    | Phone | `@media (min-width: 576px) { ... }`|
    | Desktop | `@media (min-width: 992px) { ... }` |

## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Blogs to Show You Know

[Blog Prompts](./../additionalResources/blogPrompts.md)

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create Responsive Website Assignment
- [ ] Create Class 4 Blog Assignment
- [ ] Prepare for next class by completing all of your pre-class lessons
- [ ] Complete the feedback survey(if applicable)

Next week we'll be digging into the surface of JavaScript to make our web pages interactive. We'll start by building a calculator but we'll soon be fetching data from remote sources and rendering it on our pages with the CSS and HTML we've learned so far. Keep reading, watching, and practicing all of the concepts you learn about.











 # Letting Go Of Self-Importance and Shame

Beyond our inner emotions it's important to understand how interconnected we are to each other. COVID-19 is/has painted a picture right of how physically connected we are from air particles, virus and bacteria exchange, to financial vulnerabilities across the globe. And with this sudden crisis it's opening us up to understanding how mentally, socially, spiritually, and emotionally connected we are. We are one. We are one people, not separate sovereign countries. From San Francisco to New Delhi and Cape Town to St. Petersburg, we are all human, connected by our air, water, ground, food, birth, and death. Now, how does that affect you? How can you pull yourself up from yourself and into that enormous and beautiful world so that we can experience these things together?


<iframe width="655" height="368" src="https://www.youtube.com/embed/mgBs_W5CFnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Develop Series: Mindfulness



<iframe src="https://player.vimeo.com/video/392739581" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>



In the video below, Andy Puddicombe ingeniously describes the way our minds can go haywire and distract us from the task at hand while causing distress at the same time.

<iframe width="655" height="368" src="https://www.youtube.com/embed/qzR62JJCMBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The truth is, it takes less than 10 minutes. Start with 1 second, just breathe and see what arises. Then try again for another second. Breathe in. Breathe out. Imagine letting the thoughts that arise in that 1 second as balloons that drift away without you reaching out for their strings.

When you come back, try for 3 seconds and let those balloons go too. Repeat this a few times. Soon you'll be up to 10 seconds. Then a minute. Then you'll long for 5 minutes.

Soon you'll think 10 minutes isn't long enough. I promise! There are a few meditation apps to help you in this journey but remember, there are no rules. There are no "right ways" to do it. Just watch your own mind and notice how the focus on your breath can slow those thoughts down and deny them energy to grow into anxiety.

Here are some apps to try:

* [Headspace](https://www.headspace.com/)
* [Calm](https://www.calm.com/)
* [Insight Timer](https://insighttimer.com/)

No matter what your practice looks like, you will see huge benefits in your relationships, your self-motivation, your coding, and your overall mood. Give it a try for the rest of this course and see what you think.

# Pre-Class Lesson 16: Develop Series, Self Motivation

Look, you started class with us and you trust our program so far. I need you to take that trust and build it upon yourself now. I've seen our graduates get jobs before they graduate, 1 month after, 3 months, and even 10 months after. The difference is in how much they believe in themselves. This very crucial piece is why these "Develop Series" are in your textbook—to help you find that beautiful strength within yourself so you can latch on to it and take yourself wherever you want to go.

Scott Geller has a marvelous understanding of self-motivation that you can use for yourself. Tune in, turn off, and listen.

<iframe width="655" height="368" src="https://www.youtube.com/embed/7sxpKhIbr0E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

********************************************





********************************************

# Flex and Relevant Properties



![lipstick-shop-flex-wireframe](./../images/lipstick-shop-flex-wireframe.png)

Above we see three different products inside a single horizontal row. The code for one of these products might look something like this:

```html
  
  <article>
    <div class="item-banner">
      <button onclick="savePin(this)"><img src="./images/pic-tac.png"></button>
      <span class="sale"><img src="./images/sale-tag.png"></span>
    </div>
    <img src="./images/amet-lipstick.png" />
    <div class="item-description-price">
      <h3>Amet Lipstick</h3>
      <p><span class="sale-price">£40.00</span>£28.00</p>
    </div>
  </article>
```

And some of the CSS might look like this:

```css
  /* shop-styles.css */
  .item-banner {
    display: flex;
    background: transparent;
    margin-bottom: -5%; /*approximate*/
  }

  /* more CSS Code here */

  .sale-price {
    text-decoration: line-through;
  }
```

To create the other two products we could copy/paste the HTML we see above and change out the values, BUT, that would only stack them below each other like all the other web pages we've built. In our next project we want to lay the items out horizontally like this screenshot. To do this we would need to "wrap" all of these items inside a "container" elements that can control the flow of the element. In this example we'll use a Section element:

```html
  
  
  <section> 
    <article>
      <div>
      
        <h3>Amet Lipstick</h3>
        <p><span class="sale-price">£40.00</span>£28.00</p>
      </div>
    </article>

    <article>
      <div>
      
        <h3>Aps Lipstick</h3>
        <p><span class="sale-price">£40.00</span>£28.00</p>
      </div>
    </article>

    <article>
      <div>
      
        <h3>BB Cream</h3>
        <p><span class="sale-price">£40.00</span>£28.00</p>
      </div>
    </article>
  </section>
```

The CSS to make it work looks like this:

```css
  /* shop-style.css */
  section {
    display: flex;
    justify-content: space-evenly;
  }
```

## How Does Flex Work

See, `flex`, formally known as: flexbox, is a value that can be given to the display property on any block element that would normally contain other elements, i.e. section, article, footer, header, nav. When added to an element, it gives us control of how its child elements inside that element will be rendered. Take a look at the code snippets below and then check out the following screenshot to see if you can figure out how the flex value on the property display works before reading on.

=== "HTML"

    ```html
    
    <section class="truthful-statements">
      
      <article>A connected life is the best life.</article>
      <article>People have dogs. Some have cats.</article>
      <article>Human activity is capturing heat at an alarming rate!</article>
    </section>
    ```
=== "CSS"

    ```css
    /* the CSS to make it happen */
    .truthful-statements {
      display: flex;
    }

    article {
      border-color: blue;
      border-style: solid;
      border-width: 1pt;
      margin: 20pt 5pt;
      padding: 2pt 5pt;
    }
    ```

=== "Result"
    ![truthful-statements-flex-demo](./../images/truthful-statements-flex-demo.png)

You figure it out?

If not, that's cool. Think about it like this: the `flex` value allows us to flexibly display child elements within a parent element. Unlike the inline and block values, `flex` doesn't do anything to the way the parent element is displayed in relation to its sibling elements. `flex` only changes the way its child elements are rendered inside of it.

When we add `flex` to an element's display property, it comes with some other properties that can be tweaked, including these properties and their potential values:

* **flex-direction** - values include: row(the default), column & column-reverse
* **flex-wrap** - wrap (default), no-wrap, wrap-reverse
* **justify-content** - flex-start (default), center, end, space-between, space-evenly, stretch
* **align-items** - stretch (default), flex-start, center, baseline, flex-end
* **align-content** - stretch (default), center, flex-end, space-around, space-between

  > NOTE: If you like using shorthand code you'll enjoy: flex-flow = flex-direction & flex-wrap

## Practice It: CSS Tricks - Flex Guide

[Try it](https://codepen.io)!! Go to CodePen and create Section element to be your "Flex" Container. Then create three Article elements inside of it:

```html
  <section class="my-flex-container">
    <article class="square-one"></article>
    <article class="square-two"></article>
    <article class="square-three"></article>
  <section>
```

Then use the CSS snippet you see above but apply it to the class: `.my-flex-container`.

Then size all of your articles to be just simple square blocks:

```css
  .my-flex-container {
    border: 5pt solid EE621F;
    display: flex;
  }

  article {
    border: 5pt solid #FDEFE1;
    height: 144pt;
    width: 144pt;
  }

/* Just for fun ;) */
  article:hover {
    border-color: #EE2D7A;
    border-style: dotted;
  }
```

Now open up this website, [A Complete Guide to Flex(box)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). This website will be your guide in flex display from here until the end of time so you might as well get familiar with it now.

On the left side of the guide you'll see all the properties that can be given to the Parent Element, The "Container" element. Start with `flex-direction` and work through all the values of `flex-direction`.

Then move on to `flex-wrap` and do the same thing. Then move on to `justify-content`, and so forth and so forth.

Do NOT move on until you've worked through all the properties available to the display container. In the next lesson we'll cover the properties for items of a "Container" element.

## Additional Resources

* [MDN Docs - CSS Flex Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
* [W3S Docs - Flex/Flex Box](https://www.w3schools.com/css/css3_flexbox.asp)

# Display: Grid

*“The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.” ―J.R.R. Tolkien, **The Fellowship of the Ring***

## Overview

Now that wireframing is fresh on your mind and you're thinking about the way websites get planned and laid out let's introduce a new tool that will help you code these well designed websites, CSS Grid.

[Grids are used all over the place](https://www.smashingmagazine.com/2017/12/building-better-ui-designs-layout-grids/): spreadsheets, shelves, cities, and even art paintings. If you've ever thought about the way newspapers, books, magazines, or in-general: **print work** is laid out, they use a grid to structure composition. Over time, the grid was brought over to the web because again, our whole society shifted from print to digital media.

When we begin building a website, laying out the overall structure is the first thing we do. It's like framing a house before deciding which wallpaper we'll put in. The skeleton of the page is, undoubtedly, the first part you should arrange every time you work on a project. Therefore, it is only fitting that we introduce it, sooner rather than later. Let's get to it.

Like CSS Flex, [CSS Grid](https://gridbyexample.com/what/) is a value in CSS we can assign to the `display` property of an HTML element to lay out our page in a specific way. Once we've applied the `grid` value to the `display` property, you can then use columns and rows to layout the Child Element within the selected Parent Element. This is a really useful way to lay out your page quickly and sustainably.


With the exception of the CSS Grid properties you see in the code given to you for your Portfolio Landing Page, you've been working with elements that stack below one another, due to normal document flow. But, as you know, typical websites have multiple elements across the screen and not just stacked on top of one another. This can be done with the value: flex given to the property display of the element we want. Let's dig into that.

Remember that each of the elements in an HTML file have many properties behind them that we can access with CSS and JavaScript(JS). One of these properties is the display property. Through it we can change the way the element is rendered on the screen and how its child elements are arranged within it.

### See It - Display: Grid

<iframe src="https://player.vimeo.com/video/392757781" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

To set an area of your webpage as a grid to layout out other elements on, just give it the property & value: display: grid;. Let's say we want our `<body/>` element to have a grid, simply select the `body` in your CSS file and set the property `display` to `grid` like so:

```css
  body {
    display: grid;
  }
```

Easy. Right?

From here on, we'll refer to our body element as our **Grid Container**. You will need one of these **Parent Grid Containers** every time you would like to arrange elements, or **Grid Items**, just the same way you use a **Flexible Box Container** for flexed items.

### Grid Template Properties

After that you'll need to set up the number of columns, `grid-template-columns`, and rows, `grid-template-rows`, you desire in the Grid Container. Let's say we want our `body` to have 2 equally sized columns and 4 equally sized rows:

```css
  body {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 25% 25% 25% 25%;
  }
```

Do you see how we assigned multiple values to `grid-template-columns` and `grid-template-rows`? The number of values we assign equals the number of columns or rows and the percentage represent how much space they'll take up.

  > NOTE: Make sure your percentages add up to 100%.

Now our `body` element will have a grid with two columns that are 50% of the display wide and 4 rows that are each 25% of the total display's height.

Now we can place our Grid Items inside the Grid Container. Lets say we want our HTML element, maybe a `<section>` element, with the class name: `our-grid-item`, to be positioned at the bottom-right corner of our grid (in the last row of the right column). Take a look at the HTML and CSS snippets below and then the resulting screenshots the follows. [Try it yourself](https://replit.com)!

=== "index.html"
    ```html
    
    <link href="./index-style.css" />
    

    <body>
      <section class="our-grid-item">Know thyself. You're all you'll ever have.</section>
    </body>
    ```

=== "index-style.css"
    ```css
    body {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 25% 25% 25% 25%;
      width: 500pt; /* Add some dimension and color for us to see it better */
      height: 500pt;
      border: solid red 1pt;
    }

    .our-grid-item {
      grid-column: 2/3;
      grid-row: 4/5;
      border: solid black 2pt; /* add color and dimension to see more easily */
      margin: 20pt 5pt;
      padding: 2pt 5pt;
    }
    ```

=== "Result"
    ![grid-example-result](./../images/grid-example-result.png)

Do you see that? We specify the grid-lines we want the element to start & end on to tell the browser where to place the element on the grid!

We use the property `grid-column` on the **Grid Item** and give it the value we want the element to start at and end on separated by a `/`. This tells the browser to find the line in the grid you specified on the left-side of the `/` and end on the number you gave on the right-side. The screenshot below is of the same code sample but with Chrome Inspector Tool turned-on so we can see a visual representation of the grid we created...

  ![grid-example-result-with-inspector-tool](./../images/grid-example-result-with-inspector-tool.png)

Here's another example, but now our element will be in the top-left of our document (top-row of the left-column).

=== "index-style.css"
    ```css
    .our-grid-item {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    ```

=== "index.html"
    ```html
    
    <link href="./index-style.css" />
    

    <body>
      <section class="our-grid-item">Forgiveness is key.</section>
    </body>
    ```

=== "Result"
  ![grid-example-result-top-left](./../images/grid-example-result-top-left.png)

  # The Display Property

*"The things you do for yourself are gone when you are gone, but the things you do for others remain as your legacy." ―Kalu Ndukwe Kalu*

With our new understanding of the Box Model Properties we can now size and shape our elements. But if you've noticed, our elements still "stack" below each other one after another. This is the default behavior of HTML called **Normal Document Flow**. Elements will appear on screen as they are read in the HTML file: top-to-bottom-left-to-right.

But what if we wanted to create a section on our page that had multiple element side by side? Like the you see below:

![lipstick-shop-flex-demo](./../images/lipstick-shop-flex-demo.png)

In this example we have three images inside three "containers" which are inside a larger "container" that lays them out horizontally rather than vertically(like, normal document flow). Look again.

![lipstick-shop-flex-wireframe](./../images/lipstick-shop-flex-wireframe.png)

In this screenshot we see a bunch of new boxes laid on top of the original screenshot. These boxes represent elements we would build in HTML. We use these **wireframes** to help us navigate the composition and construction of a web page. For now, notice the largest teal colored rectangle labeled `<section style="display: flex;">`. This element is what we want to focus on because this one has the property we need to use to lay out child elements (the images and text below) horizontally rather than vertically. But before we get to making a `flex`ible display let's quickly cover this `display` property.

## The Display Property + Possible Values



All HTML elements can be divided into categories based on their default value of this property! The two main values, and therefore categories, are `block` and `inline`.

The default `block` elements are element that create an entire "block across the screen and consequentially force other block elements to be on new separate lines, i.e. **Normal Document Flow**. Elements included in the category are Section, Article, Div, H1-H6, and P and [a whole list more](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements). Block elements are usually used to create structure on the page and generally have other elements, both inline and block, inside of them.

If we were to write this property in CSS it would look like like this:

```css
  .all-block-elements {
    display: block;
  }
```

  > NOTE: We don't have to declare the value of Block elements to be block elements because that's their default value.

  > Thanks [@ACRamirez1](https://github.com/ACRamirez1)

The other main category is `inline` elements. These are elements that don't require a new line so they can start in the middle of a P Element if you'd like. These elements include: Span, Anchor, Button, Code, Img, and Input elements but you can find the entire list at [MDN Docs - Inline HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements). Inline elements don't have space inside of them for other elements to go inside.

And if we had to write this property in code it would look like this:

```css
  .all-inline-elements {
    display: inline;
  }
```

  > NOTE: Same as before, we don't have to declare this value because this is the default value. Only if we want to change this do we need to declare a new value.

Another value you can use is `none`, as in `display: none;`. When you add JavaScript to your page you can change the visibility of an element based on a certain condition by using this value.

But but what about the other possible values of the `display` property? Turns out there's a hybrid between the two main categories called `inline-block`. This value gives the associated element the flexibility of both properties allowing for it to act like an `inline` element where neighboring content will flow around it but still have the structure to hold child elements inside of it like a `block` element.

  > NOTE: While you won't use this property often in the beginning you shouldn't forget about it because it will prove very useful when your building more creative web pages.

## Display: Flex;

Beyond these newly discovered `display` values: `inline`, `block`, and `inline-block` there are a couple more value to learn: `flex` and `grid`. Within each are `inline-flex`, `inline-grid`, so forth. For this next lesson we'll learn about `flex` and its relevant properties. We'll get `grid` after our next class!

## Know Your Docs

* [MDN Docs - The Display Property & Its Values](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

## Additional Resources

* [Display and Box Model](http://learn.shayhowe.com/html-css/opening-the-box-model/)
* [Video - How to Use Display Flex](https://player.vimeo.com/video/391868529)

# Flex Item Properties

Now that you have a basic understanding of using the value `flex` with the property `display` for a "Container" element/Parent element and the associated properties to position the Child elements its time now to see some of the specific properties for the child elements.

As we move deeper in to these properties you'll notice a pattern emerge: properties of HTML Elements set by CSS come in groups because they are associated with each other. For instance, we've covered the Box Model Properties which include `height`, `width`, `padding`, `border`, and `margin` along with all of the sub-properties associated with each of them: `margin-top`, `margin-bottom`, `padding-top`, `border-top`, so forth and so forth. Soon you learn about the `position` property and the `top` and `left` together because they are associated with each other. Now we're in the Display Flex property/value with `justify-content` and `flex-wrap` and all the others.

This pattern is important because it will help you learn faster and deeper! By now, you already have a good understanding HTML element just being objects with properties, methods, and events. You know that JS functions can be triggered by an event on an element like `onclick` and that methods are just built in functions that we don't have to write ourselves. As you move forward trust that you have a good basis to build from and that you CAN learn these seemingly complicated technologies. You got this!!

## The Properties

Items inside a "Container"/Parent Element with its `display` property set to `flex` are said to be **flex items**. When these items are rendered inside a flex display they get unique properties not available outside of the flex container.

As you saw in the [CSS Tricks Flex Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) they include:

* [order](https://www.w3schools.com/cssref/css3_pr_order.asp) - specifies the order of the flex items. You can tell the 3rd item to be the 1st item to be displayed.
* [flex-grow](https://www.w3schools.com/cssref/css3_pr_flex-grow.asp) - specifies how much a flex item will grow relative to the rest of the flex items. Items can be bigger than others.
* [flex-shrink](https://www.w3schools.com/cssref/css3_pr_flex-shrink.asp) - how much a flex item will shrink relative to the rest of the flex items. They can also be smaller!
* [flex-basis](https://www.w3schools.com/cssref/css3_pr_flex-basis.asp) - specifies the initial length of a flex item. Add as much as you like.
* [align-self](https://www.w3schools.com/cssref/css3_pr_align-self.asp) - specifies the alignment for the selected item inside the flexible container and overrides the align-items of the parent container.

  > NOTE: Again, if you like shorthand (and don't mind less code readability), the `flex` property combines flex-grow, flex-shrink, and flex-basis into one.

## Practice It - Giphy Gallery

1. Fork the [Giphy Gallery - https://codepen.io/austincoding/pen/pozQRyQ](https://codepen.io/austincoding/pen/pozQRyQ)

2. Take a look at the HTML file. Can you find the `<section class="row portrait-gallery">` code on line 2? Inside this section you'll see three `<img>` elements. The `<img>` element has an attribute/property called `src=`, which stands for source, which is where the image comes from. In this case the images are coming from [giphy.com](https://giphy.com).

3. After that we see another attribute/property called `alt=`, which stands for alternate text. This is for people with blindness that can't see the image we put on the screen. It's important for you to create a descriptive alternate text for them to hear read to them.

4. After that we see `height=` and `width=` which, of course, determine how big the images are.

5. Go ahead and copy/paste this line: `<img src="" alt="what the image is" height="360" width="240">` and add it into the `<section> `tag with the class name `row gallery-two` on line 7, so it looks like this:

    ```html
      <section class="row gallery-two">
          
          <img src="" alt="what the image is" height="360" width="240">
          <img src="https://media.giphy.com/media/CBnvmgOvK1d9C/giphy.gif" alt="what the image is" height="360" width="240">
      </section>
    ```

6. Use the suggested links below to copy/paste in between the " " of src="" attribute:

    * [https://media.giphy.com/media/l1KVcrdl7rJpFnY2s/giphy.gif](https://media.giphy.com/media/l1KVcrdl7rJpFnY2s/giphy.gif)
    * [https://media.giphy.com/media/l4FGoQFXF7xdU6O7m/giphy.gif](https://media.giphy.com/media/l4FGoQFXF7xdU6O7m/giphy.gif)
    * [https://media.giphy.com/media/cJSjCgihYx9GqHXzDN/giphy.gif](https://media.giphy.com/media/cJSjCgihYx9GqHXzDN/giphy.gif)
    * [https://media.giphy.com/media/1rK68yfkG1Q8Aw87Lv/giphy.gif](https://media.giphy.com/media/1rK68yfkG1Q8Aw87Lv/giphy.gif)
    * [https://media.giphy.com/media/1xlqOpx8T0dlV3ZoHV/giphy.gif](https://media.giphy.com/media/1xlqOpx8T0dlV3ZoHV/giphy.gif)
    * [https://media.giphy.com/media/3ohjV5W5NYvGnjJLTa/giphy.gif](https://media.giphy.com/media/3ohjV5W5NYvGnjJLTa/giphy.gif)

7. Remember to change the `alt=""` value to describe the gif so that we meet 503 compliance.

8. Repeat this a few times.

    > NOTE: You can also go to giphy.com and find a gif you'd like to use. You'll need the "Gif Link" NOT the "Short Link", "HTML5 Video" or "Embed" link to copy/paste in between the " " of the src="" attribute.

9. Now create a CSS rule for `gallery-two` on line 25 in the CSS file to make it flexible.

    ```css
      .gallery-two {
        display: flex;
      }
    ```

10. Do that again for the third row: `gallery-three`.

11. Once you have at least 9 total images, look at the ones you've added and compare them to the three you started with in the first row: `row portrait-gallery`. What's different? Why?

12. Can you make them match?

13. Change the `order` of your gifs.

14. Can you `-grow` or `-shrink` your gifs?

## Practice It - Flex Box Froggy

Now it's time to have some silly fun with serious results. Go and play, [Flex Box Froggy](https://flexboxfroggy.com/)!

* [How To Froggy](https://player.vimeo.com/video/365836717)

## Know Your Docs

Again, I cannot over-emphasize this, read your docs! This is a crucial tool you will use throughout your career and learning to work through them now is **vital** to your success in the future.

* [W3S - Flex](https://www.w3schools.com/css/css3_flexbox.asp)
* [MDN - Flex](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

# Media Queries

*“If you're reading this... Congratulations, you're alive. If that's not something to smile about, then I don't know what is.” ―Chad Sugg, Monsters Under Your Head*

## Overview

People access the web using a dizzying number of different types of devices: desktops, iPhones, Android phones, iPads, Kindles, smartWatches, smartTVs — and the list is increasing every fiscal quarter. With so many different screens and physical interfaces available, designers have the challenge of designing for each of these views while developers have the problem of rendering the chosen content and style for each of them.

One way to tailor styling according to device type is using a media query. A **media query** identifies the type/size of device requesting the page, and specific media features — most frequently the width of the browser's [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport).

<iframe src="https://player.vimeo.com/video/393460619" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

### Responsive Web Design

Responsive Web Design
[About 56%](https://marketingland.com/mobile-top-sites-165725) of all web traffic is mobile. This is a huge portion of the overall traffic, and you need to be a part of it! Take any website you're fond of — say, [SmashingMagazine](https://www.smashingmagazine.com/2013/05/the-state-of-responsive-web-design/). Navigate there, making sure you're not in full-screen mode; grab the edge of the window, and shrink it to the width of a phone. What happens?

This is responsive web design; most web pages have this functionality built in, and now we're going to learn to create it ourselves!

As the name implies, we'll be building web pages that respond to the type/size of the device that is requesting the website or web app we built. Our job as developers is to create pages that can accommodate all devices, whether this means building separate views for each device we expect our web app to be viewed on, or simply using **fluid grids** and **flexible images** and **text**. As you grow in your career you'll learn about all of the many queries you can make on a device and how you can change the content you deliver to it, but for the purpose of "learning employable skills quickly" we'll focus this lesson on the most popular and easiest media query, @media and target just three of the many existing types of devices: **phones**, **desktops**, and **tablets**. while providing you optional ways to query and deliver.

## @media in Action

Remember those two examples of `grid-template-area` from the last lesson? Here's a way you can use them to adapt your web pages' view quickly and easily

Using the same HTML from last time:

=== "index.html"
    ```html
    
      <header>header</header>
      <nav>
        <ul>
          <li><a href="#">nav 1</a></li>
          <li><a href="#">nav 2</a></li>
          <li><a href="#">nav 3</a></li>
        </ul>
      </nav>
      <main>
        <h1>Main Title</h1>
        <p>Main content</p>
      </main>
      <aside>aside</aside>
      <div class="banner">div.banner</div>
      <footer>footer</footer>
    </body>
    ```

=== "index-style.css"
    ```css
    /* Same colors and names as before*/
    header {
      background-color: bisque;
      grid-area: header;
    }
    main {
      background-color: cadetblue;
      grid-area: main;
    }
    nav {
      background-color: coral;
      grid-area: nav;
    }
    aside {
      background-color: crimson;
      grid-area: aside;
    }
    .banner {
      background-color: darkkhaki;
      grid-area: banner;
    }
    footer {
      background-color: darkslategrey;
      grid-area: footer;
    }

    .container {
      display: grid;
    }
    ```

**Notice** we gave our `body` element the `grid` value to its `display` property. This way our body is always going to be a grid. But then we do something interesting...

```css
  @media (min-width: 700px) {
    .container {
      grid-template-columns: 1fr 3fr;
      grid-template-areas:
        "header  header"
        "nav     aside"
        "main   main"
        "footer  banner";
    }
    nav ul {
      display: flex;
      justify-content: space-evenly;
    }
  }
```

Do you see the `@media (min-width: 700px) {` line? This is a block of CSS code that will only be used if the device reading the web page is above `700px`.

The reason we do this is for us to serve specific CSS to those devices. We can then create new **rules** for other devices:

```css
  @media (max-width: 699px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-areas:
        "header "
        "nav"
        "aside"
        "main"
        "footer"
        "banner";
    }
    nav ul {
      display: flex;
      justify-content: space-evenly;
    }
  }
```

Do you see the `@media (max-width: 699px) {` line? This is called a **Break-Point**. If you pasted both of these code snippets into a CodePen or your text editor you could resize your browser window to see the two rules go into effect as you get smaller and back to bigger when you cross the **break-point** of `699px` to `700px`.

[Try it yourself](https://replit.com)!

### Popular Media Queries

To have your CSS respond to different screen sizes, you can simply ask, or "query", the screen size, and apply special CSS rules. Here is a cheat sheet listing pretty much all the media queries you'll ever need!

Normally we design for the smallest screen first, and move up from there using the `min-width` query to step up. The `max-width` would only be used for half-step where you need extreme specificity.

```css
  /* Extra Small and up (Portrait Phones) */

  /* Small and up (Landscape Phones) */
  @media (min-width: 576px) {

  }

  /* Medium and up (Tablets) */
  @media (min-width: 768px) {

  }

  /* Large and up (Desktops) */
  @media (min-width: 992px) {

  }

  /* Extra Large and up (Wide Screen Desktops) */
  @media (min-width: 1200px) {

  }
```

## Practice It - Media Queries

1. Create your own rules

- [ ] Create a new folder and copy/paste the previous code snippets into it.
- [ ] Live-serve it to see see the changes as you resize your browser window.
- [ ] Add new rules to it like changing font-color, size, border, background-color, text-align or any other rules you've already learned!!
- [ ] Create a new repo and put this code into it to practice your git software skills.

2. [Responsive Navbar](https://codepen.io/hipperger/pen/MPQBje/)

- [ ] Open up the CodePen in a new tab.
- [ ] Be sure you're not in full-screen mode .
- [ ] Grab the edge of the window and shrink it to the width of a phone.
- [ ] Watch the navigation button on the left side.
- [ ] Cool, right?

### Optional Method

A media type can be queried in the head of an HTML document, using the media attribute on a `<link /> `element. Essentially, you ask what size the device is and then serve it a specific CSS file instead of doing the `@media()` in a single CSS file just the same way you link your normal style.css file.

```html
  
  
  <head>
    <link rel="stylesheet" media="(max-width: 400px)" href="my400wide-style.css" />
    <link rel="stylesheet" media="(max-width: 800px)" href="my800wide-style.css" />
  </head>
```

  > The method we covered in depth is the preferred but with this other way you can query other properties as you need them.

## Additional Resources

- [ ] [YT, DevTips - Responsive Website Basics](https://youtu.be/h3IdEqpjMvQ)
- [ ] [YT, Kevin Powell - Learn CSS Media Queries < 5mins](https://youtu.be/2KL-z9A56SQ)



## Know Your Docs

* [MDN Docs - Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)



# More CSS Selectors

*“Listen to the mustn'ts, child. Listen to the don'ts. Listen to the shouldn'ts, the impossibles, the won'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.” ―Shel Silverstein*

## Overview

Today we're going to spend some solid time on [how to select the right element](https://css-tricks.com/the-difference-between-id-and-class/) in your HTML file so you can style and manipulate to your pleasure.

  > NOTE: This can be a little trickier than you may first realize. *Remember the "Cascade"? In this lesson, we're going to talk a little more about that and learn how to get to exactly the element on the document we want!*

Today you'll learn to:
  1. Reference elements by selectors and why you'd use different selectors.
  1. Select and style an element based on pseudo-elements and pseudo-classes.
  1. Implement [inheritance](https://css-tricks.com/latest-ways-deal-cascade-inheritance-specificity/) and learn to work with it using the Rules of Specificity.

<iframe src="https://player.vimeo.com/video/393464823" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## The Selectors

The reason for all the many **selectors** is because of the way the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) is built under-the-hood. As the browser loads your HTML it reserves space for each of the elements in the file, then assigns them properties and values based on what it finds in your CSS and JS files. As it does this it will rewrite those values when it finds a new value assignment, but... if no property & value is found for each child elements during the build, they will *Inherit* the properties & values of their Parent Elements. This process of **Inheriting** and reassigning values as the page is built is the **Cascade** of **C**ascading **S**tyle **S**heets. But the Cascade can be overwritten using the *Rules of Specificity*, hence why we need so many selectors.

**The 5 Main of Selectors**

*****

1. `ids` - This is added inside the element's opening tag and denoted with a "#". html `<article id="element_ID">` text goes here `</article>`
1. `classes` - This is denoted by the keyword: class="someClassNameHere" html `<article class="element_class">` text goes here `</article>`
1. `attributes` - `<input disabled >` For a full list of [HTML attributes](https://www.w3schools.com/html/html_attributes.asp).
1. `pseudo-classes` are selectors used on an element when something is done to them like when you hover over an element with your cursor: `:hover { }`

### Type Selector

=== "index.html"
    ```html
      <a href="https://google.com">Google</a>
    ```

=== "index-style.css"
    ```css
      a {
        /* removes the underline */
        text-decoration: none;
      }
    ```

This selector is useful at saving you typing time by setting generic rules for all of your `<p>` tags, or all of your `<section>` tags so that they all have the same general style, but then you can give them a `class` name or `id` when you want each one to look/do something different than the other `<p>` and `<section> `tag.

### id Selector

The `id` selector is used for a unique element, which means that an `id` should only be used one time, on one element, per page. Simply add an id `attribute` and a value.

=== "index.html"
    ```html
      <div id="mario"></div>
      <div id="wario"></div>
    ```

=== "index-style.css"
    ```css
      #mario {
        color: red;
      }

      #wario {
        color: yellow;
      }
    ```

  > You should only use an `id` once but you can use multiple ids on a page.

### Class Selector

The `class` selector is very similar to the id selector, but `class` can be shared with more elements. You can apply classes multiple times on a page to any element you want.

=== "index.html"
    ```html
      <div class="luigi"></div>
      <div></div>
      <div class="luigi"></div>
    ```

=== "index-style.css"
    ```css
      .luigi {
        color: green;
      }
    ```

### Attribute Selector

You are not restricted to the two attributes, class and id. You can specify other element-specific attributes by using `[square brackets]`. Inside the brackets you put the attribute name, optionally followed by a matching operator and a value.

=== "index.html"
    ```html
      <a disabled>I'm a disabled link!</a>
      <input type="button">
    ```

=== "index-style.css"
    ```css
      [disabled] {
        color: gray;
      }

      [type="button"] {
        font-size: 16px;
      }
    ```

### Psuedo-class Selectors

A CSS pseudo-class is a keyword added to one of the selectors covered above that specifies a special *characteristic* or **state** of the element you're selecting. For example `:hover` will apply a style when the user's cursor hovers over the element specified by the selector. You won't see these special state attributes explicitly written in HTML, but they are present nonetheless, as **Element Properties** ready to be manipulated using CSS.

```css
  /* The Syntax looks like this: */
  selector:pseudo-class {
    property: value;
  }
```
=== "index.html"
    ```html
      <section></section>
    ```

=== "index-style.css"
    ```css
      section {
        display: block;
        background-color: blue;
      }

      section:focus {
        background-color: yellow;
      }
    ```

### Practice It - Common CSS Selectors

1. Fork the [CSS Selector CodePen](https://codepen.io/austincoding/pen/pempxa/)
    - [ ] Give every other `<li>` element the class name "other"
    - [ ] Make the font color of "other" `brown`.
    - [ ] Make the [font style](https://www.cssfontstack.com/Verdana) of "other `verdana`.
    - [ ] Give different `id` attributes to each of the `<p>` elements.
    - [ ] Use the `id`s to give them different background colors.
    - [ ] Select the `body` element an get the text to be centered in the middle of the page.

2. Fork the [Pseudo Selector CodePen](http://codepen.io/mistakevin/pen/grVaJL/)

    - [ ] Make an `<h1></h1>` tag in the html
    - [ ] In the CSS, pseudo-select the h1 with a :hover and make it change to the font color of your choice when you hover on it.
    - [ ] copy/paste the tr:nth-child(odd) rule and see if you can add a hover selector on top of it to make the light blue backgrounds change to yellow when hovered on.
    - [ ] Do the same to the even numbered trs but give them a different background color.

3. Fork the [CSS Selector Practice Exercise CodePen](https://codepen.io/austincoding/pen/YQWNjK/)

    - [ ] Follow the directions in the comment section of the CSS to learn more about selectors.
    - [ ] **--or--** follow these instructions
    - [ ] Give the `<body>` element a background: #bdc3c7;
    - [ ] Make the `<h1>` element color: #9b59b6;
    - [ ] Make all `<h2>` elements color: orange;
    - [ ] Make all `<li>` elements blue(Use this [tool](https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka?hl=en) to pick your own hexadecimal blue)
    - [ ] Change the background on every paragraph to be background: `yellow`;
    - [ ] Make all inputs have a `border: solid red 3px`;
    - [ ] Give everything with the class '`hello`' a `white` background
    - [ ] Give the element with id 'special' a 2px solid blue border(pick your own rgb blue) #special {`border: #ff0000`}
    - [ ] Make all the `<p>`'s that are nested inside of divs 25px font(font-size: 25px)
    - [ ] Make only inputs with type 'text' have a gray background
    - [ ] Give both `<p>`'s inside the 3rd `<div>` a pink background
    - [ ] Give the 2nd `<p>` inside the 3rd `<div>` a 5px white border
    - [ ] Make the `<em>` in the 3rd `<div>` element white and 20px font(font-size:20px)
    - [ ] **BONUS CHALLENGES**
        * [ ] You may need to research some other selectors and properties
        * [ ] Make all "checked" checkboxes have a left margin of 50px(margin-left: 50px)
        * [ ] Make the `<label>` elements all UPPERCASE without changing the HTML(definitely look this one up
        * [ ] Make the first letter of the element with id 'special' green and 100px font size(font-size: 100)
        * [ ] Make the `<h1>` element's color change to blue when hovered over
        * [ ] Make the `<a>` element's that have been visited gray

## Additional Resources

- [ ] [Article, CSS Tricks - Difference btw `id` and `class`](https://css-tricks.com/the-difference-between-id-and-class/)
- [ ] [Article, CSS Tricks - Inheritance](https://css-tricks.com/latest-ways-deal-cascade-inheritance-specificity/)
- [ ] [Reference, CSSFontStack - Verdana](https://www.cssfontstack.com/Verdana)



## Know Your Docs

* [W3S Docs - HTML attributes](https://www.w3schools.com/html/html_attributes.asp)



# More Grid Properties

Just like with flex, when we use grid we have a load more properties that we get to use to get our web pages to look exactly the way our designers laid them out to be. We'll cover many of them here but be sure to checkout the **Know Your Docs** section to see more, get your short-hand code (if you like), and reference all the properties available with `grid`.

## Grid Gaps

Between each of the Grid Items are gutters or gaps. You can adjust the size of these Gaps with the following properties: `grid-column-gap` and `grid-row-gap`

```css
.grid-container-element {
  display: grid;
  grid-column-gap: 8pt;
  grid-row-gap: 2pt;
}
```

## Justify-Content & Align

Justify-Content & Align
Since you're already familiar with the additional properties with `flex` you'll be happy to know that you can do the same thing with `grid`:

```css
.grid-container-element {
  display: grid;
  /* position on the x-axis */
  justify-content: space-evenly;
  /* position on the y-axis */
  align: center;
}

/* You can also use: space-between, space-around, start, end, and center */
```

## The Unit: fr

So far we've given our rows and columns percentages of the display. But as you work with other people's code you'll likely come across `fr`, a unit of fractions. It stands for a fraction of the total available space.

In the snippet below we have 4 equally sized columns. They are laid out the same way as we saw earlier by giving 4 values to the `grid-template-column` property. But instead of `%` we'll use `fr`.

```css
.our-parent-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
```

In the next snippet we'll see 4 columns again but now the two on the left will be half the width and the one on the right will be twice the width:

```css
.our-parent-container {
  display: grid;
  grid-template-columns: .5fr .5fr 1fr 2fr;
}
```

When using frs it's important to make sure the numbers add up to the **whole number equal to the number of columns** just the same way we make sure that our percentages total 100. So if we have 5 columns, our `frs` need to add up to 5, i.e. `1fr 2fr 1fr .5fr .5fr`, `1fr 1fr 1fr 1fr 1fr` or `.5fr 1fr 1fr 2fr .5fr`, etc.

## The Short-Hands

We won't cover these in detail because you don't necessarily need them right away but just incase you want to advance your skills let's make you aware of them:

`grid-area` property can be used as a shorthand property for the `grid-row-start`, `grid-column-start`, `grid-row-end` and the `grid-column-end` properties.
`grid-template-areas` [take values of elements with the Parent Container and arrange them depending on their order](https://www.w3schools.com/cssref/pr_grid-template-areas.asp).

## Practice It - CSS Grid

### Part One: FR & Gap

[fr & CSS Gap CodePen](https://codepen.io/austincoding/pen/OzZQoY/)
    - [ ] Fork the CodePen,
    - [ ] In the CSS file, change the values on line 4 but be sure to maintain the total value of the number of columns,
    - [ ] On line 11, change the width of the gaps.
    - [ ] MUST DO! the CSS Grid Garden

### Part Two - Grid Garden!!

- [ ] **MUST DO**: Play [CSS Grid Garden](http://cssgridgarden.com/).

  > If you get stuck, there are two hints for 26 and 28 below in the scrambled text.

=== "Warning!"
    ```markdown
    In the next tab there are answers to #26 and #28.
    But first, push yourself to see if you can work through these two problems on your own.
    ```

=== "Hidden Answers"
    ```markdown
      **WARNING ANSWERS BELOW**

    > //////////////////////////////////////////////

    > 88 : 00 = 5% 6^ 7& 8* 9() 1! 2@ 3# 4$ 5% 6^ 7&
    > 88 : 00 = 5% 6^ 7& 8* 9() 1! 2@ 3# 4$ 5% 6^ 7&
    > *26: grid-template-rows: 50px 0 0 0;* 1! 2@ 3#
    > 88 : 00 = 5% 6^ 7& 8* 9() 1! 2@ 3# 4$ 5% 6^ 7&
    > *28: 1fr 50px/ 20% 80%;*  1! 2@ 3# 4$ 5% 6^ 7&
    > 88 : 00 = 5% 6^ 7& 8* 9() 1! 2@ 3# 4$ 5% 6^ 7&

    > //////////////////////////////////////////////
    ```

## Additional Resources

- [ ] [YT, LayoutLand - Easy Layout with CSS Grid](https://www.youtube.com/embed/tFKrK4eAiUQ)
- [ ] [Article, CSS Tricks - Intro to FR Units](https://css-tricks.com/introduction-fr-css-unit/)
- [ ] [Article, Alligator IO - Grid Areas](https://alligator.io/css/css-grid-layout-grid-areas/)
- [ ] [Article, SmashingMagazine, Best Practices with Grid](https://www.smashingmagazine.com/2018/04/best-practices-grid-layout/)

## Know Your Docs

* [W3S Docs - Grid](https://www.w3schools.com/css/css_grid.asp)
* [W3S Docs - Grid Container](https://www.w3schools.com/css/css_grid_container.asp)
* [W3S Docs - Grid Item](https://www.w3schools.com/css/css_grid_item.asp)
* [CSS Tricks - Grid Trick](https://css-tricks.com/snippets/css/complete-guide-grid/)


# Responsive Layouts & Grid Areas

*“There is neither happiness nor misery in the world; there is only the comparison of one state with another, nothing more. He who has felt the deepest grief is best able to experience supreme happiness. We must have felt what it is to die, [...] that we may appreciate the enjoyments of life. —Alexandre Dumas*

## Overview

Now that you have a solid understanding of CSS Grid, let's turn our attention toward the multiple layouts needed for different screen sizes like the view of a laptop to a phone to a tablet. It's almost ridiculous to mention the need for these layouts because we see it all over the place but its important to remember, that everything you see on the web was built by someone, just like you that learned the same thing you're learning now. Again, front-end developers are responsible for building all the possible views for a website or web app so let's figure out the best ways do this.

<iframe src="https://player.vimeo.com/video/393485080" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Grid Areas

Along with being an introduction to responsive design, we'll also be getting a deeper dive into CSS Grid by studying `grid-template-areas`. If you didn't get that far in your latest pre-class lessons, here you go. This property is an incredibly powerful property to use with `display: grid`; because it allows you to shuffle child elements around by just changing the value assigned to the `grid-template-areas` property! If you can imagine, this will make it very easy for us to develop a view for a phone and then a tablet and then a laptop!

Before moving ahead, I'd like you to read [this short article on Grid-Template-Areas](https://www.smashingmagazine.com/understanding-css-grid-template-areas/). When you finish, come back and follow along with the examples below.

*I'll wait...*

### Grid Areas Part One

First, let's layout our elements in HTML. We'll create a body element with the class name `container` so we know that it will be our parent element for this page.

```html
<body class="container">
  <header>header</header>
  <nav>
    <ul>
      <li><a href="#">nav 1</a></li>
      <li><a href="#">nav 2</a></li>
      <li><a href="#">nav 3</a></li>
    </ul>
  </nav>
  <main>
    <h1>Main Title</h1>
    <p>Main content</p>
  </main>
  <aside>aside</aside>
  <div class="banner">div.banner</div>
  <footer>footer</footer>
</body>
```

In our CSS file we declare each child element's `grid-area` property with a value we deem to be useful, i.e. the `<nav></nav>` element should get `grid-area: nav;`.

  > NOTE: The name we pass in as the value will be used to arrange the elements when we get back to changing the CSS rules of our parent element.

```css
header {
  /* give each element some color to see more easily */
  background-color: bisque;
  /* notice this property on each rule, though, we'll use it when we're laying out the Parent Element's grid-template-area */
  grid-area: header;
}
main {
  background-color: cadetblue;
  grid-area: main;
}
nav {
  background-color: coral;
  grid-area: nav;
}
aside {
  background-color: crimson;
  grid-area: aside;
}
.banner {
  background-color: darkkhaki;
  grid-area: banner;
}
footer {
  background-color: darkslategrey;
  grid-area: footer;
}
```

Fantastic! Now each of our child elements have a name we can reference them by when we tell them where to be in the "template-area".

In this next snippet, look at the number of `-columns` and `-rows` we create and then checkout the `grid-template-areas` property. Do you see the way we use the "names" of the child elements to position them on the screen?

  > NOTE: to play with this for yourself, copy/paste these code snippets into a [CodePen](https://replit.com) or your text editor. **This is your responsibility and privilege now.**

=== "Grid Area Styling"
    ```css
      .container {
        display: grid;

        grid-template-columns: auto auto auto auto;
        grid-template-rows: 45pt 55pt 180pt 180pt 25pt 45pt;

        grid-template-areas:
          "header header header"
          "nav nav aside"
          "main main aside"
          "main main aside"
          "... banner ..."
          "footer footer footer"
      }
    ```

=== "Result"
    ![grid-area-example](./../images/grid-area-example.png)

### Grid Areas Part Two

Before we dive into Media Queries in the next pre-class lesson let's first see how we can use the same HTML from above, and the same child element rules but change just the values of the `grid-template-areas` on the parent element to completely change the look on the screen.

  > NOTE: the `...` you see in the code stand for "blank" space on the screen. You saw this in the first example too: `"... banner ..."`.

=== "Grid Area CSS Code"
    ```css
      .container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: 45pt 55pt 180pt 180pt 25pt 45pt;

        grid-template-areas:
          "... header ..."
          "... aside ..."
          "... main ..."
          "... main ..."
          "... banner ..."
          "... footer ..."
          "... nav ..."
      }
    ```

=== "Result"
    ![grid-area-part-two-example](./../images/grid-area-part-two-example.png)

  > Do you see how they're stacked upon one another now?

## Practice It - CSS Grid Areas

1. [Responsive CodePen](https://codepen.io/austincoding/pen/vdLQmo/)

    - [ ] Open the CodePen up and resize your browser's window while watching the content at the bottom of the screen.
    - [ ] Fork the CodePen and then try rearranging the grid-areas. Have fun. Seriously!
    - [ ] Can you guess how Media Queries work before the next lesson?

2. [Nested Grids](https://codepen.io/austincoding/pen/JMvLvx/)

    - [ ] You can also nest columns within columns. Let your curiosity over come you in the CodePen above to find out how!

## Additional Resources

- [ ] [Article, Smashing Magazine - Grid Areas](https://www.smashingmagazine.com/understanding-css-grid-template-areas/)
- [ ] [CSS Properties Cheatsheet](https://websitesetup.org/css3-cheat-sheet/)

## Know Your Docs

* [W3S Docs - Grid-Template-Areas](https://www.w3schools.com/cssref/pr_grid-template-areas.asp)

# Specificity and Combinators

Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.

Remember this order - it is critical for understanding how to properly apply (and debug) CSS.

| Least Specific |           More Specific              | Most Specific  
| -------------- | ------------------------------------ | ------- |
| Type selectors and pseudo-elements | Class selectors, attribute selectors and pseudo-classes | ID selectors |
| `h1`, `:before`, etc... | `.example`, `[type="radio"]`, `:hover`, etc	| `#example` |

Universal selector (`*`), combinators (`+`, `>`, `~`, `' '` (space)) and negation pseudo-class (`:not()`) have no effect on specificity. (The selectors declared inside :`not()` do, however.)

Inline styles added to an element (e.g., `style="font-weight:bold"`) always overwrite any styles in external stylesheets - in a sense they can be considered to have the highest specificity.

Take a look at the following code and determine what color the paragraph is going to be. Then *uncomment* the CSS and see if you are correct!

## CSS Combinators

If you haven't picked up on this yet, you can stack multiple selectors on top of one another separated by a comma like so:

```css
  body, h1, p, section, div {
    border: 1px solid black;
  }
```

to give the same properties & values to multiple elements without typing them over and over again. The snippet above would make all `body`, `h1`, `p`, `section`, `div` elements have a 1-pixel-wide-solid-black-border around them.

If you don't put a comma between the selectors you'll create **Descendent Selectors** which select an element that is a descendant/child element/grandchild element of another specified element. These rules will apply to all descendants within that specified parent element. In short, descendant selectors are separated by a space with the parent selector on the left and the descendant on the right which is the one that is actually getting targeted.

```css
  /* "body" is the parent and "h1" is the targeted descendant element */
  body h1 {
    font-size: 1.75em;
  }

  /* "section" is the grandparent and ".warning" is the parent and "p" targeted descendant element */
  section .warning p {
    color: red;
    font-weight: bold;
  }
```

Perhaps the most useful are **Child selectors** which match an element that is a direct child of another. It will not include grandchildren and down. It is more restrictive than a descendant selector. It uses a `>`.

```css
  body > main {
    font-size: 1.75em;
  }

  section > article > h2.title {
    color: red;
    font-weight: bold;
  }
```

### Practice It - Specificity

**MUST DO: [CSS Diner](https://flukeout.github.io/)!!**

## Additional Resources

* [YT, Clayton@ACA - CSS](https://youtu.be/XnwlIF6pSWU)
* [YT, DevTips - CSS Basics pt. 3](https://youtu.be/emMO3iCpvrc)

## Know Your Docs

* [Article, Carl Camera - CSS Poker](https://carl.camera/default.aspx?id=95)
* [W3S Docs - Pseudo Classes](https://www.w3schools.com/css/css_pseudo_classes.asp)
* [Article, SmashingMagazine - CSS Inheritance and Cascade](https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/)

# The CSS Box Model

*Maybe everyone can live beyond what they're capable of.*

 ―Markus Zusak, I Am the Messenger

<iframe src="https://player.vimeo.com/video/391834446" width="900" height="600" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

Throughout this course and the rest of the program you'll be introduced to many "models". We mean models by the way we can understand how computers interact with the world around them. They don't see models or know about models, rather models are just ways we humans can conceptualize the way a computer keeps up with memory and transfers that information to other computers.

Today we're going to learn about the "[CSS Box Model](https://css-tricks.com/the-css-box-model/)"  which is, put shortly, a model that helps us understand how to change the size, shape and overall appearance on an HTML element on the screen.

Think, every element we put in our HTML code has a representation on the screen. That thing on the screen is just a box or rectangle. But with CSS we can change its properties to be taller, wider, centered, have a border and even change the shape to *not be a box*... The box model properties used to change the appearance of our rectangles are:

1. `height`
  * `min-height`
  * `max-height`
2. `width`
  * `min-width`
  * `max-width`
3. `margin` - (short-hand of the following 4 properties)
    * `margin-top`
    * `margin-right`
    * `margin-bottom`
    * `margin-left`
4. `border` - (short-hand of the following 3 properties)
  * `border-style`
  * `border-color`
  * `border-width`
5. `border-radius`
6. `padding` - (short-hand of the following 4 properties)
    * `padding-top`
    * `padding-right`
    * `padding-bottom`
    * `padding-left`

The six properties listed above comprise most of the Box Model properties. There are, of course, many more properties that allow you [very fine-tuned control over the shape and size of your elements](https://getflywheel.com/layout/create-shapes-css3/). But for much of our lessons we won't have time to cover them all (you'll have to do that on your own time!).

To help you understand how the short-hand properties (seen above) can represent all of the long hand properties, below are two CSS declarations that style a Section Element the exact same way. Notice the differences...

```css
section {
  background-color: #b1deef;
  height: 200px;
  width: 200px;
  margin: 1% auto;
  padding: 5% auto;
  border: 1px solid #264653;
}
```

The same properties could have been written this way, as well:

```css
section {
  background-color: #b1deef;
  height: 200px;
  width: 200px;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5%;
  padding-top: 5%;
  padding-right: auto;
  padding-left: auto;
  border-width: 1px;
  border-style: solid;
  border-color: #264653;
}
```

Did you pick it up? If not, look again until you understand it for yourself. Do not move on until you got it!

## Box Model Visualizer

We'll definitely be re-visiting this visualizer but it may be a good introduction for you now. This CSS Box Model Visualizer is a nifty tool built by [Caroline Artz](https://github.com/carolineartz) to help people see how each property on the element effects the visual representation of the element on the screen. Each of the sliders are labeled with the actual properties you could type in CSS and the values you see are actual values you could code in CSS. And the changing box at the bottom right is what the element would look like. Try it!

* [Box Model Visualizer](http://codepen.io/carolineartz/pen/ogVXZj/)

In the upcoming lessons we'll dig a little deeper into the four categories of the CSS Box Model:

> Content Height & Width
> Margin
> Border
> Padding

In addition to knowing the Box Model in your head, your browser's developer Tools offer a visualization of each element. Just open your browser's devtools, hover over an element, then click to select the element. In the DevTool Tray you should see the "Elements" Tab highlighted at the top-left and to the right you'll see two sub-tabs named "Styles" and "Computed".

The "Styles" tab will list all of the CSS rules that are applied to that element including rules that are overridden (denoted by a strike-through). Under the "Computed" tab you'll see a box with colors of blue(content), green(padding), yellow(border), orange(margin) along with numbers indicating the value in pixels.

![chrome-devtools-box-model-gif](./../images/chrome-devtools-box-model-gif.gif)

Keep this tool handy as you learn the properties of the Box Model and for the rest of your career!!

## Additional Resources

* [See It - The Box Model](https://player.vimeo.com/video/391834446)
* [CSS Tricks: The CSS Box Model](https://css-tricks.com/the-css-box-model/)
* [Box Model, Sizing, Shadow](https://youtu.be/GvIP6QtCVSg?t=21)




********************************************





********************************************

# UX, UI, & Wireframes

*“No product is an island. A product is more than the product. It is a cohesive, integrated set of experiences. Think through all of the stages of a product or service – from initial intentions through final reflections, from first usage to help, service, and maintenance. Make them all work together seamlessly.” —Don Norman, inventor of the term “User Experience”*

## Overview

<iframe src="https://player.vimeo.com/video/392746957" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## UX & UI Design

First off, what are they? UI Design stands for **User-Interface Design** which means the layout of a web page on the screen for which our users will interact with our web app. UX stands for **User-Experience Design** which incorporates UI along with the flow of the app, the marketing of the app, the data collection and storage, the story that's told to the user from first advertisement through sign-on and day-to-day use. To be frank, it's a very wide and all encompassing craft; which begs the question: why are we talking about it here?

Most apps are built with distinct intention so that users adopt them into their daily life, use them with frequency, talk about them to their friends, and generate revenue for the company that built them. Behind these intentions are UX Designers who think about the way users might use the apps, how to improve them, and plan for future features. The decisions of these Designers will filter down through your team lead and onto your desktop to figure out how to implement into code. By learning about UI and UX Design now, you can practice on your own websites and prepare yourself for understanding why certain decisions are made. Don't worry, you don't have to be great at design to understand and do your job as a Front-End Dev.

One of the tools used to communicate between designers, product managers, product owners, clients, front-end developers, and graphic designers are **Wireframes**.

To really understand these two trades **PLEASE** see the video "Bad Doors = Bad Design" in the [Additional Resources](#additional-resources) below!

## Wireframes

Just as a blueprint is drafted for the construction of a house or building, **wireframes** are created to communicate the structure and functionality of a website or app. When a design, or **mockup** is given to you from your design team it will be your job to translate that mockup into code that is read by browsers of all sorts and shipped across the world. *Big stuff, right?*

Yeah, so we'll use a wireframe to help us, the Front-End Developer, to make a plan for our code before we get into the difficult tasks of seeing the big picture while typing out one. Line. At. A. Time.

It's important to understand that for designers, wireframing usually comes before a mockup because they're working out the rough ideas first. But, you can also use wireframing to draw on top of the mockups you get to create a plan for your code. This is what we'll be doing everyday in class from now on so you're really good at it.

### Constructing a Wireframe

Before beginning to wireframe, a designer would decide on the objective of their webpage. What idea are they trying to communicate? What do they want their user to do with it?

  > "Website wireframes are 90% thinking/planning and just 10% drawing" - *Design and Function*

The wireframe is a visual guide that gives us a framework, or plan, on which to build our website. We use it to lay our site's elements to best support our specific [purpose or goal](https://www.market8.net/b2b-web-design-and-inbound-marketing-blog/what-site-architecture-is-and-how-to-get-it-right-for-b2b).

Examples of Page Goals include:

* encourage a button to be clicked,
* earn your users' confidence,
* prove your social credibility,
* persuade your users to download an eBook,
* motivate your users to complete a payment,
* reaching potential customers in order to sell a product,
and much, much more....

**No doubt!** Wireframing can save you hours of time. As you saw in the video above, if you are worried about perfect alignment, or other details, when you're working on your basic layout, you're wasting time, and causing yourself needless stress. Break apart your tasks, and do them in the correct order. Planning visually on paper or in a wireframing tool before you think about the coding will save you time in the long run, because you will have a clear idea of what you're working toward, and won't waste work that will have to be redone. Do yourself a favor, and wireframe **every** project you work on — **every one**.

Your code may be efficient and elegant, and provide awesome functionality, but none of that will matter if users aren't sure where to click. That is why it's important to spend time focusing on the **user interface** (UI) and **user experience** (UX). A UX designer's job is to positively influence perception of products and companies, so as to encourage people to use them more. A couple of examples of excellent UX designs are [Spotify.com](https://www.spotify.com/us/) and [Apple.com](https://www.apple.com/). Examples of the opposite extreme might be [arngren.net](http://arngren.net/) and [RockAuto.com](https://www.rockauto.com/). Dig deeper into what makes for good (and bad) UX design [here](https://www.appcues.com/blog/bad-ux-mistakes).

Again, checkout the videos in the [Additional Resources](#additional-resources) to get some tips and tool for creating wireframes.

### Practice It - Build a Wireframe

![build-a-wireframe-practice](./../images/build-a-wireframe-practice.png)

Using a paper and pencil,

- [ ] sketch out the boxes you see in the picture above;
- [ ] think about the way you might code it in HTML;
- [ ] ask yourself which of the elements that you've learned so far would work best to create these boxes (i.e. `<div></div>` , `<article></article>`, etc.).
- [ ] What CSS rules might you need?
- [ ] Go get yourself some graph paper. It will make drawing in this class much easier.

### Push Yourself Further - Mobile Version

Here's a mobile version of the same website. Can you turn it into code, as well?

![build-a-wireframe-practice-mobile](./../images/build-a-wireframe-practice-mobile.png)

## Mockups

We've talked about [Mockups](https://en.wikipedia.org/wiki/Website_wireframe) coming down from a design team and landing on your desk but what are they in the first place? Think of a mock up as a non functional web page. It's a design, a complete layout of a web page but the buttons don't work and the picture & videos are static. It's meant to be a direct representation of what the web page will look like when you, the Front-End Dev(you), gets done making it functional.

![mockup-example](./../images/mockup-example.png)
![mockup-example-mobile](./../images/mockup-example-mobile.png){ :align=left}

### Tools

#### For Creating Wireframes

- [ ] [Figma](https://www.figma.com/)
- [ ] [wireframe.cc](https://wireframe.cc/)
- [ ] [Adobe XD](https://www.adobe.com/products/xd.html)
- [ ] [Adobe Comp](https://www.adobe.com/products/comp.html)

#### For Creating Mockups

- [ ] [Marvel](https://marvelapp.com/)
- [ ] [inVision](https://www.invisionapp.com/)
- [ ] [proto](https://proto.io/)

## Additional Resources

- [ ] [YT, Vox - Bad Doors = Bad UX](https://youtu.be/yY96hTb8WgI)
- [ ] [YT, Jessie Showalter - UX Crash Course](https://www.youtube.com/watch?v=_lyzy-vChh4)
- [ ] [YT, CharlieMarie-TV - How To Wireframe a Website](https://www.youtube.com/embed/PmmQjLqJQlY)
- [ ] [YT, ACA-Clayton - Wireframing and Code Planning](https://www.youtube.com/embed/iXf5DSCeyAA)
- [ ] [Tutorial, Market8 - How to Make Useful Wireframes](https://www.market8.net/b2b-web-design-and-inbound-marketing-blog/how-to-make-useful-website-wireframes-tutorial)



# The Button Element

*“Hold fast to dreams,*<br/>
*For if dreams die*<br/>
*Life is a broken-winged bird,*<br/>
*That cannot fly.”*<br/>
*―Langston Hughes*<br/>

## Overview

As you learned in the Form Elements lesson earlier, `input` elements can be changed to accept all sorts of data including *buttons* by changing the value of their `type=` attribute. Here we'll cover the actual `<button>` element because the real reason to use it over a `<input type="button">` element is for styling.

If you're wanting to but content or images inside of a button then you'll have to use the `<button></button>` element. Plain and simple, that's it!

However, if you want to use a `<button>` element on a form you have to set its `type= `attribute to "submit": `type="submit"` and *poof*, you have a submission button.

But learning about this new element brings us closer to a topic we've only briefly covered so far, Event Listeners.

<iframe src="https://player.vimeo.com/video/395038529" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Follow Along

We're about to learn how to use Event Listeners in the next lesson. To get familiar with what they are and how to use them, we'll use the familiar Button Element as a leaping off point. Go ahead and open the `101-onlineClothingStore` folder you started earlier and add this bit of code to the `index.html` file.

```html

 <body>
   <button></button>
 </body>
```

Turn on your [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and see what's on the screen. Is there a tiny grey button at the top-left of your white screen? Good, that's how it should look. Your browser comes with "[Default Visual Styles](https://gist.github.com/ambidexterich/34828a904dd97dd2a345)" of content created in HTML. So all elements will come with some sort of, albeit, ugly styling. Button styling is defaulted to grey and is as wide and tall as the content inside them, the **innerText**.

  > **innerText** is a property on ALL HTML elements. It holds the value of the text inside. When we learn how to build with `<p>`, `<a>`, and all the `<h*>` elements, we'll see they all have a property on them called innerText. Write that down and draw it for yourself. This is part of your Object Modeling in your own mind.



Let's now add some "innerText" to this button. Between the opening tag and the closing tag type "Click Me".

```html

 <body>
   <button>Click Me</button>
 </body>
```

When we learn a little more JavaScript we'll be able to change this `innerText` property dynamically by writing some JS code like `button.innerText = "Oh, Click Me Again!"` For now, we'll **statically** set it in HTML by putting the text between the opening and closing tags.

Now that we have the first **property** of ALL HTML elements including the `button` element let's play with one of its events! Again, all elements have Properties, Methods, and [Events](https://www.w3schools.com/tags/ref_eventattributes.asp) we get to use to build with. By reading the documentation of these **members** we learn more about them and how to use them.

[W3S Docs - Button Element](https://www.w3schools.com/tags/tag_button.asp)





### The "onclick" Event + Inline JavaScript

Most HTML elements have the `onclick` event as one of their **members** but Button depends on this **event** because what else do you do with a button besides click it?

As mentioned before, **Events** are like triggers that fire each time the interactions happens. But until we add a function to that trigger the Event is firing a blank. Even though we don't see code that represents it, our `button` object currently has an **undefined** function attached to its `onclick` event. We don't typically write undefined events, but if we did write it in code it would look like this:

```html

 <body>
   <button onclick="">Click Me</button>
 </body>
```

  > Notice the **empty quotes**? Inside those quotes, after the `=` sign is the value of this event. This is a **key/value** pair. the key is `onclick` and the value is `""`.
  
Let's write a value for this button's `onclick` key. Type this in and run it to see what happens in the browser.

```html

 <body>
   <button onclick="function sayHello(){ alert('Hello!') }; sayHello();">Click Me</button>
 </body>
```

The line of code we just added between the `""` marks is actually JavaScript but it's written **inline** with the HTML code. This isn't a common practice anymore but it's the way developers wrote it *back in the day* and a good way for us to begin to learn what's going on. Take a close look at this new code and spend time trying to understand it. The best place to start is dividing it in half at the `;`.

  > NOTE: Traditionally, lines of JavaScript are ended with `;`(semi-colons) although the latest versions of the language don't require it. Nevertheless, we'll use them in our first lessons as we get acquainted with the language.

Before the first semi-colon we see `function sayHello(){ alert('Hello!') }`. With the **keyword**, **function** we are declaring a function named "sayHello()" and defining what it's supposed to do when called, which is: `{ alert('Hello')}`. This segment of code is called a **Declaration Block**, it's where we declare to the computer the instructions we want for it to run when the function is run/executed/called/invoked. We can put any set of instructions we want between the `{ }` but this one's pretty simple, it calls another function named `alert`.

  > NOTE: These words: run, execute, call, invoke all mean the same thing: "To perform the instructions of a particular function." You can interchange them as much as you like but this digital book will try to use the words "called" and "invoke".

`alert()` is a function that opens a drop-down window that "alerts" you of something. It's typically used to forewarn the user they are about to submit a form or override a security measure, etc. *Actually*, the alert is a [Method of the Window object](https://www.w3schools.com/jsref/met_win_alert.asp) which means we could have written the code like, `{ window.alert('Hello')}` as well. We don't have to do this because "alert" isn't a method on the Button object, the Body object, or the Document object, only on the Window object so when we call it, the browser will keep going up the levels of objects until it finds the first "alert" method it comes to. We'll learn more about these [Window Object Methods](https://www.w3schools.com/jsref/obj_window.asp), known also as **Global Methods**, as we build more and more.

The last two parts of this code are: `'Hello!'` and `sayHello();`. The first of these is easy. It's an **argument**. **Arguments** are values we, as developers, get to decide to pass into functions and the functions return different things based on what we pass into them. Try it.

Change the `'Hello!'` argument to something like: `'Hello, Clayton!'`. Did you see the change?

What about that last part? `sayHello();`. This is what's called a **Function Invocation**. It invokes/runs the function. The way it works is by naming the function we want to invoke/call. In this case, it's `sayHello` then we add those trailing parenthesis afterward `()` to communicate to the computer we want it to run the instructions inside the **Declaration Block** of the function we just named. See how this is written the same as `alert()`? ...`sayHello()`...`alert()`...? Name the function and then invoke the function/



#### New Word Clarification

We just covered a lot of new terms so let's take a moment to revisit some of those tricksters.

* **Function Declaration** - This is where a function is declared and defined. Until it's called/invoked, it isn't doing anything except taking up memory like a recipe in your cookbook.

```js
 function myFunctionExample(a, b) {
   let sum = a + b
   return sum
 }
```

* The **Declaration Block** is the part between the `{}` where the step-by-step instruction goes.

* **Function Invocation** - This the code that calls/invokes the Function Declaration. It tells the computer to execute the instructions in the Declaration Block.

```js
 myFunctionExample(2, 3)
```

* **Function Arguments** - These are values you can pass into functions. In the example above `2` and `3` are two arguments passed into the `myFunctionExample` function. Based on the instructions in the Function Declaration and the arguments passed into it, the result would be 5.

* **Attribute/Property/Method** - If you visited the [Button Element Docs page](https://www.w3schools.com/tags/tag_button.asp) your probably saw the use the word **Attributes** instead of **Property**, **Event** or **Method**. This is because HTML was created to represent visual Elements on a screen so all of the properties and their values were originally written together, in line with the elements like the line of JavaScript we just broke down. The word **Attribute** means the same thing as **Property**, **Event** or **Method** but specifically refers to something written in HTML rather than in CSS or JavaScript. Anything you see written inside the opening tag of an element is an **Attribute** but it refers to the **Properties**, **Events**, and **Methods** of that object. Example:

```html
 <h3 id="fish-fry" >Example Title</h3>
```

The H3 Element above has an `id` attribute. This attribute assigns the value of  `"fish-fry"` the the `id` property of that object.

 > NOTE: If this all doesn't gel right now, don't worry. With practice and in time it'll all come together.



### A Better Way to Write JavaScript

The line of JavaScript we just broke down was a little hard to read because it was all on one line. Thankfully there's a better way to write it, with the `<script>` Element!

The Document Object has a `scripts` property to hold scripts. When we create a Script Element we are giving the `scripts` property a value. And just like with our Human object, if we want them to be able to do new things we need to give them new functions like: `rideBicycle()` or `cutWatermelon()`. With the `<script>` element we can give our Document Object new values inside of its `scripts` property.

Let's move our current **inline JavaScript** into our `<script>` element.

```html

 <body>
   <button onclick="sayHello();">Click Me</button>
 
   <script>
     function sayHello(){ alert('Hello!') };
    
   </script>
 </body>
```

Make these changes and run your page again. It should be working just as before. Now let's create another button and have it also call `sayHello` when its `onclick` event is ...clicked.

```html

 <body>
   <button onclick="sayHello();">Click Me</button>
   <button onclick="sayHello();">Click Me Too</button>
 
   <script>
     function sayHello(){ alert('Hello!') };
    
   </script>
 </body>
```

Now build another function called `sayHi` but this time call the Console object's method named `log()` and pass into it a different **string**.

```html

 <body>
   <button onclick="sayHello();">Click Me</button>
   <button onclick="sayHi();">Click Me Too</button>
 
   <script>
     function sayHello(){ alert('Hello, Window.alert Method!') };
     function sayHi(){ console.log('Hi, Console.log Method!') };
    
   </script>
 </body>
```

> NOTE: In order to see this you'll have to open your DevTools and go to the Console Tab. Click on both buttons and see what happens.



## Summary

In the next lesson we'll learn how to tie Input Elements and Button Elements together but at this point you know know how Event Listeners work, even if you've only used one: `onclick=`. Essentially, you figure out what action you'd like the user to do then attach it to a **invocation** to call a function you wanted executed when that action is done!

Let's look at the Input Element and then move to see a more Event Listeners.

# Class 5: TicTacToe + About.html






*"Today will never happen again. Don't waste it with a false start or no start at all." —Og Mandino*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE: After this class students will have a firm understanding of:*

1. *Build with HTML Table Elements*
2. *How to access & use Element Properties like `innerHTML`*
3. *Use Event Listener Methods like `getElementById`*

*****

- [ ] Questions for Student Led Discussion
- [ ] Interview Challenge
- [ ] Student Presentations
- [ ] Creation Time
    * [ ] Student Time Part 1 - Tic Tac Toe Board - 65 mins
    * [ ] Student Time Part 2 - About Page - 60 mins
- [ ] Push Yourself Further

- [ ] Exit Recap, Attendance, and Reminders

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-5.md)

### Interview Challenge, 15 mins



[See Your Challenge Here](./../additionalResources/interviewChallenges.md)


### Student Presentations, 15 mins

[See Student Presentations List](./../additionalResources/studentPresentations.md)

## Creation Time, 60-90 mins

### Part One: Tic Tac Toe

- [ ] Fork and clone the [TicTacToe-101 Repo](https://github.com/AustinCodingAcademy/TicTacToe-101) into your `devFolder` or wherever you've been building your projects:
  * `git clone https://github.com/AustinCodingAcademy/TicTacToe-101.git`
- [ ] Go to the `README.md` file to find the rest of your instructions.

[Follow up video](https://player.vimeo.com/video/395004475)

### Part Two: About.html

Your Portfolio Website has been up for a couple weeks now but doesn't have an About Me Page to help people know more about you. Let's change that.

1. Draw up a wireframe of an about page you think will represent you well. **Don't let great be the enemy of good**.
  
  > MEANING: Don't spend to much time on the design or content but instead decide quickly and start coding. You're in a coding school not a design school. It can be a simple page!

1. Your design must be for mobile, tablet, and laptop!
1. You can use other websites as inspiration:

    * [About 8-hour Day](http://eighthourday.com/studio)
    * [About Kero1](https://www.kero1.com/about/)
    * [About Nike](https://about.nike.com/)

1. Now go find your Portfolio Folder from Day 1 of this course, open it up and create a new `.html` file called `"aboutPage"` then create a `.css` file called `"about-styles"` to build this page in.

1. Use all of the tools you've learned about so far and take this About Page to the next level.
1. Remember to link the new page to your Portfolio's landing page.
1. Remember your design must be designed for mobile, tablet, and laptop!
1. `git` `status` `add` `status` `commit` push your work up to its repo.
1. Then go to the URL that the website is hosted at and navigate to the "aboutPage" and copy/paste that URL to turn it in.

## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create TicTacToe Assignment for a [pull request](https://youtu.be/rgbCcBNZcdQ?t=54) link.
- [ ] Prepare for next class by completing all of your pre-class lessons
- [ ] Bring pencil and paper to class for wireframing!
- [ ] Complete the feedback survey(if applicable)

Next class we'll work more with DOM Event Listeners and Properties to build a calculator. Spend extra time reviewing what you've learned the past few days and what's between now and next class.












 # Class 6: Forms - Calculator and About Page






*Rise to the occasion.*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE: After this class students will have a firm understanding of:*

  * *How to access & use Element Properties like innerHTML*
  * *Use Event Listener Methods like getElementById*
  * *Use the fundamental pieces of JavaScript: variables and functions*

*****

- [ ] Questions for Student Led Discussion
- [ ] Interview Challenge
- [ ] Student Presentations
- [ ] Creation Time - Contact Page - 60 mins
- [ ] Push Yourself Further
- [ ] Interview Questions: Blog to Show You Know
- [ ] Exit Recap, Attendance, and Reminders

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-6.md)

### Interview Challenge, 15 mins



[See Your Challenge Here](./../additionalResources/interviewChallenges.md)


### Student Presentations, 15 mins

[See Student Presentations List](./../additionalResources/studentPresentations.md)

## Creation Time, Contact Page

* Group Students in pairs
  * plan and implements
* Partner with other groups for elaboration
* Share with the class for evaluation (potentially carry into the next class)

Just like the About Page you built for your Portfolio Website last class, tonight you're going to build a Contact Me Page that is responsive to mobile, tablet, & laptop that includes the following:

- [ ] `<input>` for Email that is required and validates for an actual email address
- [ ] `<textarea>` that has a placeholder "comments" and limits the user to 500 characters and minimum of 20.
- [ ] A section of checkboxes that asks the user: "How did you hear about me?"

    * [ ] Classmate
    * [ ] Resume Submission
    * [ ] LinkedIn
    * [ ] Coding Academy Rec

- [ ] A section of radio buttons that asks if the user wants to be contacted back: Yes or No
- [ ] Offer to give an optional Birthday Wish by submitting their birth date through a `date` input.
- [ ] Remember your design must be designed for mobile, tablet, and laptop!
- [ ] Remember to have a submit button and create a `result.html` to capture the values for now until we get to building servers that can receive and hold the data.
- [ ] After you've completed the contact page turn in the live link to in your Zollege Textbook.

  > HINT: You could use this [repo](https://github.com/AustinCodingAcademy/html-form-practice-101) to get started faster!

### Push Yourself Further

- [ ] For your checkpoint, you'll be building a small business's website
- [ ] Look ahead and start wireframing what that will look like.
- [ ] Look ahead and see if you can get a jump on git branching.

## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Blogs to Show You Know

[Blog Prompts](./../additionalResources/blogPrompts.md)

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create Contact Page Assignment
- [ ] Create Class 6 Blog Assignment
- [ ] Prepare for next class by completing all of your pre-class lessons
- [ ] Complete the feedback survey(if applicable)
- [ ] Bring pencil and paper to class for wireframing!

In the next few lessons we'll slow down a bit but keep deepening our understand of building in HTML, CSS, JS, and HTTP. The pass will be a little different but it all leads to the same place, you as an excellent developer!!














 # Class 7: JS Continued, Calculator App





*“You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.” ―John Lennon*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE: slow down a bit, and review our JavaScript understanding with a new project.*

*****

- [ ] Gravatar Check
- [ ] Questions for Student Led Discussion
- [ ] Last Night's Challenge Show-and-Tell
- [ ] Interview Challenge
- [ ] Student Presentations
- [ ] Creation Time - Calculator App
- [ ] Push Yourself Further

- [ ] Exit Recap, Attendance, and Reminders

### Gravatar Check - 5 mins

What is a Gravatar? Why do you need one?

The instructor will now walk the room to see all students have created a Gravatar. Remember, it's important for Student Services to know you as a person which will help you with job placement upon graduation.

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-7.md)

### Challenge Show-and-Tell

Would anyone like to share something they built during the challenge of the Document Object lesson?

### Interview Challenge, 15 mins



[See Your Challenge Here](./../additionalResources/interviewChallenges.md)


### Student Presentations, 15 mins

[See Student Presentations List](./../additionalResources/studentPresentations.md)

## Creation Time, 60-90 mins

As a class,

- [ ] Fork and clone the [Calculator App Repo](https://github.com/AustinCodingAcademy/calculator-app-101) into your `devFolder` or wherever you've been building your projects: `git clone https://github.com/AustinCodingAcademy/calculator-app-101.git`
- [ ] Go to the `README.md` file to find the rest of your instructions.
- [ ] Multiple students will explain aloud how this program works.

> NOTE: Here is an [Overview Video of the repo](https://vimeo.com/395247060/835ad9038f).



### Push Yourself Further

- [ ] Rebuild another [Calculator](https://codepen.io/lalwanivikas/pen/eZxjqo) if you're up for it!



## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create Calculator App Assignment
- [ ] Create a Checkpoint Assignment for the Small Business Page
- [ ] Prepare for next class by completing all of your pre-class lessons
- [ ] Complete the feedback survey(if applicable)

This week will mostly be review of the tools and concepts you've learned in the form of practice, practice, practice. Be sure you play with all code snippets you get in your homework and prepare yourself for the building a small business website for your first checkpoint project!










# Class 8: Checkpoint - Barbershop Site





*“When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.” ―Paulo Coelho*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE:After this class students will have a firm understanding of:*

*Project Planning*
*Reuse of Code*
*Special Elements of HTML*

*****

- [ ] Questions for Student Led Discussion
- [ ] Interview Challenge
- [ ] Student Presentations
- [ ] Creation Time
    * [ ] Small Business Website - 85 mins
- [ ] Push Yourself Further
- [ ] Interview Questions: Blog to Show You Know
- [ ] Exit Recap, Attendance, and Reminders

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-8.md)

### Interview Challenge, 15 mins



[See Your Challenge Here](./../additionalResources/interviewChallenges.md)


### Student Presentations, 15 mins

[See Student Presentations List](./../additionalResources/studentPresentations.md)

## Creation Time, 60-90 mins

As we learn more skills, we practice them, thereby deepening our understanding of their purpose. Today, a close friend of yours will ask you if you could build them a website for their new hair salon. They cut great hair but they have no way for people to find out about them. They found a couple sites they like and have sent them to you (the mockups are below.) They want all the pages that are there, they don't care about having the exact content right now, they just want to have a site that looks like them and their style so using Lorem Ipsum is fine right now.

Since each of you have different friends, the name of the salon or barbershop will be named differently. You can come up with the name of it and then use some creativity to change up the site just a little from the examples below but not so much that you get overwhelmed with design instead of building a site. *Don't let great be the enemy of good.*

### The Mockups

Use the following website to build and you may use artistic licensing to make reasonable adjustments to the website. But, you must create all of the pages that are in the website: Landing, About, Contact, Gallery, and Blog/News page.

- [ ] [Zizurz Hair Salon](http://demo.html5xcss3.com/demo.php?cat=html5themes&host=freewebsitetemplates&temp=hairstylesalon)


### Instructions

- [ ] Decide on the website style you'd like to design. Decide on the name of the company you're building it for.
- [ ] Look at the assignments you've already created: About Page, Contact Me, Image Gallery, Landing Page, and NASA page for your blog/news. What can you reuse? How can you leverage the code you've already written to build this massive project? They want it in a week. You'll need to get creative.
- [ ] After looking at your other pages, draw up your wireframes for your chosen website, for mobile, tablet, and desktop.
- [ ] Create a new repo with a `README` file called: "hairSalonWebsite".
- [ ] Suggestions:
        * [ ] Search for images on [Unsplash](https://unsplash.com/) to download and use.
        * [ ] Use [GoogleFonts](https://fonts.google.com/) to get the best fonts
- [ ] Make it mobile! As you structure your page, be sure to test on both desktop, tablet, and mobile.
- [ ] `git status`, `add`, `commit` often!

    > NOTE: This is something you should start doing as you code, to back up your work in case your computer goes down, water is spilled, or whatever. `git commit`!

    > NOTE 2: This project will be due a week from now so get going smartly, swiftly, and safely!

- [ ] Host the website on GitHub and turn in the live URL for your grade.

#### The Specifications/Rubric

- [ ] Responsive for phone, tablet, and laptop - **50pts**
- [ ] A Landing page - **10pts**
- [ ] An About page - **10pts**
- [ ] A Contact page - **10pts**
- [ ] A Gallery page - **10pts**
- [ ] A Blog/News page - **10pts**

### Follow-up Video

While these websites aren't built in this video, you can certainly use its flow and guidance if you get stuck.


* [YT, ACA@Clayton - Breaking into Your First Project]

### Push Yourself Further

- [ ] Add a page to this website for stylist schedules, like [Bird's Barbershop](https://birdsbarbershop.com/all-locations/?id=8) in Austin.
- [ ] Build the *other* site, the one you *didn't* choose the first time.
- [ ] Teach yourself [how to add a form to an image](https://www.w3schools.com/howto/howto_css_form_on_image.asp).

## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Blogs to Show You Know

[Blog Prompts](./../additionalResources/blogPrompts.md) 

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create Checkpoint1-Small Business Site Assignment
- [ ] Create Class 8 Blog Assignment
- [ ] Prepare for next class by completing all of your pre-class lessons
- [ ] Complete the feedback survey(if applicable)

This project isn't due *this* Sunday, it's due *next* Sunday, but that doesn't mean you shouldn't begin working on it now! Get going tonight by wireframing, copy/pasting code from other projects, and draw up a plan of action to break this large project into smaller projects.









# Common Event Listeners

Since our web pages are built for a human user to interact with it would make sense that we have some built in tools to capture their actions and do something with it. For this purpose, think of a user interaction with the web page as an **Event** and we won't our pages to be **Listening** for them. Remember, with programming we just need one action to trigger another action to trigger another action. So as we learn more about programming in JavaScript all you have to remember is that if you want a user to trigger a script you built, just go back and find the event listener that will capture that event. Here's a list of a few of the **common** event listeners:

### Common Mouse Events

* `dblclick`: when the mouse button is rapidly clicked on an element
* `mousedown`: when the mouse button is pressed on an element
* `mouseup`: when the mouse button is released on an element
* `onclick`: when the mouse button is pressed & released on an element

### Common Keyboard Events

* `keydown`: when a key is pressed,
* `keyup`: when a key is released

### Common Form Events

As if you didn't have enough to remember about Forms, there are event specific to them!

* `onfocus`: when a user bring into focus a form element either by clicking on it or tabbing to it.
* `onblur`: this is the opposite, as soon as they move away from the element.
* `onchange`: when a value of an input is changed
* `onsubmit`: when a form is submitted.

  > NOTE: onsubmit triggers a page reload. When you use this event listeners you'll also have to use `event.preventDefault()` to [prevent the default page reload](https://www.w3schools.com/jsref/event_preventdefault.asp).

### Common Window Events

* `window.resize`: when the window is resized
* `window.onhashchange`: when an anchor tag has changed
* `window.onload`: when the page has finished loading
* `window.unload`: when the page has been closed

We've just thrown a lot of event listeners at you. It important to breathe and just know you only have to be aware of them so you can use them when you need. You don't have to memorize them right now. Just take notes, use this book as a reference, and remember that these methods are built-in and ready for you to use at anytime.

## Know Your Docs

- [ ] [W3S Docs - Event Listener Attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)

# Develop Series: Building the Brain

## Overview

<iframe src="https://player.vimeo.com/video/395975320?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Develop Series: Building the Brain"></iframe>

As we've stated before, this program isn't just about creating a web developer out of you but so so much more! We want you to create your own business, develop deep and rich relationships, serve your community, and rise to your full human potential! You can do all of this through web development but you can't do it without developing yourself while you do.

In the firsts few week we learned how to practice mindfulness and how it trains you to focus your thoughts, energy, and emotions toward what you want when you want it then we learned about self-motivation and what it means to tie yourself to what you're doing and do it for you and not for others.

This week we'll look a how all the "regular" and "normal" habits we do are actually tearing away at our creative abilities and our chance at conscious happiness and purpose but how we can accept change in our life to improve our heath in all of our realms: physical, mental, and spiritual. Let's get to work.

## Habits for Good Brain Health

In the article, [7 Modern Life Habits That Can Be Incredibly Bad For Your Brain Health](https://getpocket.com/explore/item/7-modern-life-habits-that-can-be-incredibly-bad-for-your-brain-health), Thomas Oppong relates known clinical studies to the daily habits of our workplaces and suggests ways to stimulate our mental health in a conscious and effective way!

 > HINT: If you're being blocked by Medium or any other website for not having a subscription, try opening articles in an incognito window and then a different browser. Or create another email account so you can read 10 free articles/month (looking at you NY Times!).

Take the time that is needed to read this article and practice your mindful practice so you can take charge of your life and really make monumental changes with a conscious and awakened approach.

But if you want to continue the asleep and unfulfilling path of *TL;DR*:

* Physical Inactivity = Mental Slowdown
* Multitasking = Low Concentration Ability
* Overload = Overstimulation = Lower IQ
* Physical Sitting = Mental Slog
* Screen Time = Low Emotional Wellbeing = Low Mental Wellbeing
* Loud Music = Dementia
* No Sleep = No mental health

In addition to rewiring your daily routines you should try some of these bio-hacks created by very successful entrepreneurs like Tim Ferris and Dave Asprey:

- [ ] [BUTTER COFFEE: FIVE REASONS YOU SHOULD START YOUR MORNING WITH IT](https://brainflow.co/index.php/2018/06/25/butter-coffee-five-reasons-you-should-start-your-morning-with-it/)
- [ ] [7 Biohacks to Master Before Worry about Other Biohacks](https://www.theatlantic.com/health/archive/2019/03/top-biohacks/584584/)

The following articles take a closer look at why these 7 hacks work. Take special note of the first one, start there and you'll do well.

- [ ] [Time in Nature](https://www.psychologytoday.com/us/blog/the-new-resilience/201801/why-connecting-nature-elevates-your-mental-health)
- [ ] [Eating Good Food](https://www.healthline.com/nutrition/11-brain-foods)
- [ ] [Moving Your Body](https://www.health.harvard.edu/blog/regular-exercise-changes-brain-improve-memory-thinking-skills-201404097110)
- [ ] [Sense of Purpose](https://www.psychologytoday.com/us/blog/the-new-resilience/201509/sense-awe-and-life-purpose-increases-your-mental-health)
- [ ] [Connection to People and Dogs](https://www.newportacademy.com/resources/well-being/pets-and-mental-health/#:~:text=Pets%20Support%20Recovery%20from%20Mental%20Illness&text=As%20a%20result%2C%20researchers%20found%20evidence%20that%20having%20a%20pet,people%20with%20mental%20health%20conditions.&text=All%20of%20them%20had%20been,or%20post%2Dtraumatic%20stress%20disorder.)
- [ ] [Moderate Wealth](https://news.berkeley.edu/2014/12/09/dominancebehavior/)

To summarize, if you consciously approach these tactics and the challenges you have in life from child raising, rent payments, car troubles, learning to code, and family dynamics - you can learn to remove your personal emotions and see everything from a higher perspective which will give you the space and time to make better decisions as to how you react and what in your life needs to be removed, changed, and added. It's all about perspective and all we have to do to [obtain newer and higher perspectives](https://www.treeoflifeteachings.com/6-getting-a-higher-perspective/) is to become aware of ourselves in each of the challenging situations we find ourselves in...the rest will follow.

## Coding Music

Coding Music
Now to the fun, easy stuff....Yeah, music!!

When you're coding it's important that you maintain concentration. Yes, that constantly vanishing substance our maniacal "fast and forward" society regards as a by-product, concentration. Each of us has our own way of creating that concentration but if you haven't begun learning about yourself and what works for you then now is the best time to do so!!

- [ ] First suggestion, get some [good noise cancelling headphones](https://www.amazon.com/Sennheiser-HD-4-50-Headphones-Cancellation/dp/B01MSZSL4I/ref=sr_1_4?crid=1HJO73UU4HY7A&keywords=sennheiser+wireless+headphones&qid=1583262042&sprefix=sennheiser%2Caps%2C169&sr=8-4).
Then find the music that works for you. Try these out:
- [ ] YouTube
    * [ ] [Chill lofi Beats to Code To](https://www.youtube.com/watch?v=bmVKaAV_7-A)
    * [ ] [4hrs of Ambient Study Music](https://www.youtube.com/watch?v=sjkrrmBnpGE)
    * [ ] [2hrs Study Music](https://www.youtube.com/watch?v=zzk5ohWYtAU)
    * [ ] [2hrs of Study Jazz](https://www.youtube.com/watch?v=PErqizZqLjI)
    * [ ] [2hrs of Electronic Study](https://www.youtube.com/watch?v=a4fv-BtzNmY)
- [ ] Spotify
    * [ ] [Electronic Concentration on Spotify]()
    * [ ] [Code Crazy]()
    * [ ] [Flying with Glass]()
- [ ] And third, learn about music that also helps you not concentrate but instead relaxes you: [Reduce Anxiety with This Song](https://medium.com/inc./neuroscience-says-listening-to-this-song-reduces-anxiety-by-up-to-65-percent-d69ae1343a27)
- [ ] Try [listening to a song on repeat](https://writingcooperative.com/creativity-tools-listening-to-one-song-on-repeat-fdbace6c61e8).

## Gravatar

The days of anonymity on the web are long gone. Nowadays we don't hide behind silly usernames like we did on AOL. Instead we show off who we are. We recognize the internet as part of our real world and therefore we express ourself and represent ourselves in it. We also find jobs, get hired and work on the internet now. Because we use it and [rely on it so much](https://www.allconnect.com/blog/americas-broadband-divide-revealed), shouldn't the internet be free and unfettered like say, [Net Neutrality](https://www.wired.com/story/guide-net-neutrality/)? I digress... The point is, you need a good picture to show who you are to your colleagues and employers. Gravatar is a way to do that.

Gravatar is a service provided by WordPress that connects your email and picture so that anywhere you go that uses Gravatar (about 35% of the internet) you will have a picture/avatar.

### Gravatar Action Items

Right now, go to Campus Manager/OpenEdX and click on the image in the top-left of your profile. This will navigate you to [Gravatar](https://en.gravatar.com/). Follow the video below and get a good looking, clear photo of your mug up in Campus Manager/OpenEdX, your email and anywhere you use your email address. We'll be checking for your Gravatar in class.

  > NOTE: Be sure to use the email attached to CampusManager/OpenEdX/Canvas

<iframe width="655" height="368" src="https://www.youtube.com/embed/HxTBCTObRAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# The Document Object

With all this talk of the Window, Buttons, and Input Elements it feels as if we kicked the Document object to the curb. "It has feelings too, guys!"

## Document Methods

Check it, the document has access to all elements because it is the **root** element. It is the *Mother of All Elements*, it creates elements, removes elements, and changes their contents. The Document is THE OBJECT. It's why there is a **Document Object Model**, because all objects are born, live, and die within the Document object.

To begin learning the powers of this omnipotent goddess let's create yet another button we can call a function with. Go ahead and do this by yourself in that `101-onlineClothingStore` folder we've been in and out of.

You got this, just create a new button with "Create New Object" as its innerText. Then give the `onclick=` attribute the value of `createNewObject()`.

In JavaScript create a new function called `createNewObject` and write a `console.log("TESTING")` to make sure it's working before we move on.



## The `createElement()` Method

Now that you got that in order let's build out that function's declaration block. Let's first create a variable to hold a reference to an object:

```html


 <script>
   // and more JS code here...
 
   function createNewObject() {
     let newObject = document.createElement("H3")
 
   }
 </script>
```

The variable is called `newObject` and its value is a new H3 object/element the Document created with its `createElement()` method. That's right! We're now using properties, events, and methods!!!

Now let's create another variable that will hold a reference to a Text Object/Node. We'll give it some basic text for now.

```html


 <script>
   // and more JS code here...
 
   function createNewObject() {
     let newObject = document.createElement("H3")
     let text = document.createTextNode("THIS IS A TEST.")
 
   }
 </script>
```

Now we need to append that Text Node/Object to our `newObject`.

```html


 <script>
   // and more JS code here...
 
   function createNewObject() {
     let newObject = document.createElement("H3")
     let text = document.createTextNode("THIS IS A TEST.")
 
     newObject.appendChild(text)
 
   }
 </script>
```

Notice that the `newObject` has this `.appendChild()` method on it as if by magic! It's not magic it **inheritance**. Even though it's a brand-spankin’ new H3 object, it's inheriting all of the Global Methods that are available to all HTML elements. The last step is to append our `newObject` to our Body object.

```html


   <script>
     // and more JS code here...
 
     function createNewObject() {
       let newObject = document.createElement("h3")
       let text = document.createTextNode("THIS IS A TEST.")
 
       newObject.appendChild(text)
       document.body.appendChild(newObject)
 
     }
   </script>
 </body>
```

### Quick Review

Wow!! That was a lot, let's slow this train down and look at it more closely. Inside our functions declaration block, we declared 4 steps for the computer to do.

1. Create a new variable and use the Document's `createElement` method to place a new H3 element as its value
2. Then create another variable and use the Document's `createTextNode` method to place a Text Node/Object with `"THIS IS A TEST"` as dummy data.
3. Use the Global method, `appendChild()` to stick the Text Node/Object into the new H3 Object.
4. Use the same method to stick the new H3 Object into the Body of the Document object.

That wasn't so bad, was it?







## Summary & Challenge Yourself

We've covered a lot of information in this lesson from Button Elements and their methods like `onclick` to JavaScript keywords like `let` that communicates to our computer when we want to hold data in a variable or the keyword `function` that tells the computer to create a function and remember the instructions inside its declaration block and how to invoke a function with the trailing `()`. We began working with methods of the Window, Console, and Document Object to create new windows, logs, and elements.

I know this is a lot, but I hope this quick but deeper dive into the building blocks of web pages and the properties, methods, and events that compose them helps you start seeing this stuff as less "computer-sciency" and more practical. Sure, you have JavaScript and HTML syntax to learn, but that WILL come with practice. Just keep reading, studying, and saving your docs and do your Challenges!!

### Challenge

What can you create with this handful of new methods? Show us and impress us. In the next class we'll invite everyone to share what they created.

Feel free to use this repo for an idea/starting point: [https://github.com/AustinCodingAcademy/101-important-to-do-list](https://github.com/AustinCodingAcademy/101-important-to-do-list).

If you want, start with the `README.md` file, read the entire instructions, then clone it and begin completing it.

 > NOTE: There's curve ball: there's a new method introduced in this code, `getElementById()`. Just read the comments and look up the documentation if you don't understand it.

## Know Your Docs

* [W3S Docs - if Statement](https://www.w3schools.com/js/js_if_else.asp)
* [W3S Docs - Name Attribute](https://www.w3schools.com/tags/att_name.asp)
* [W3S Docs - getElementById()](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)

## Additional Resources

* [Wikipedia - D.R.Y Principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [Medium - AirBNB Code Style](https://medium.com/dailyjs/dot-notation-vs-bracket-notation-eedea5fa8572)

# The Form Element

*Be a self-starter. Do it now! When you don't know how to do something, start. Beware of the paralysis of analysis. Be a person of action. —Mamie McCullough*

Let's zoom in a little from those higher-level view and talk about a specific element we haven't worked with yet, the Form Element. As you might have guessed it's used to create forms! Or as defined by [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form):

 > "The HTML `<form>` element represents a document section containing interactive controls for submitting information."

The Form element is an object in HTML that presents to the human-user a place to input information/data but also gives us a place to store that data until they complete the form and click the submit button which triggers a fetch request to send that data to a server then to a database.

To use Form elements properly we have to learn their attributes(properties and methods).





## Attributes of the Form

Like all other HTML Elements, the Form Element has all the [Global Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) (events and methods) along with a few special ones of its own. Let's break them into two categories: Required and Optional

### Required Attributes/Properties: action, enctype, method, novalidate, target

These properties are required to be defined for your forms to work properly so let's look at them and how they're used. We'll be using the following code as a reference point.

```html

 <form action="https://www.singlesingerssite.com/signin.htm" method="post" autocomplete="off">
   <div>
     <label for="email">Email</label>
     <input type="text" name="email" id="email" required>
   </div>
   <div>
     <label for="password">Password</label>
     <input type="password" name="password" id="password" required>
   </div>
   <div>
     <input type="submit" value="Subscribe!">
   </div>
 </form>
 
 
 
 
 
```

* `action=` - The value of this must be a URL like the one you see above. This tells the form where to send the data when it's submitted by the human-user. However, the preference for this technique has been replaced with creating a function that uses `fetch` to handle the HTTP request and calling it `onclick=` of a `submit` button, i.e. `<input type="submit" onclick="handleSubmit()">,`

* `method=` - If you choose to use the `action=` attribute to define the URL that will process your forms data, then you have to define the method as a POST. Later in this lesson, you'll learn about the multiple values you can use here to send different types of Requests over HTTP(S). For now, the two values you can use here are `"post"` and `"get"`. If you use the preferred `fetch` alternative then you will need to declare the Request as a POST in the `fetch` because the default value of the Form Element's `method=` is `get`, see below:

```js
// inside a <script> element or in .js file

 fetch('https://fakestoreapi.com/products', {
   method:"POST",
   body: {}
 })
```

#### Properties that are Required but have Implied Default Values

* `enctype=` - This defines the type of encoding the data should go through before it's sent over HTTP. The values you can use are:
 * `"application/x-www-form-urlencoded"`: The default value and used for most forms. You don't see it defined and declared in the code above because it's the default value if you don't type out one of the following instead.
 * `"multipart/form-data"`: If your form accepts files as a possible input then you need to declare it using this value.
 * `"text/plain"` - Introduced by HTML5 for debugging purposes.

* `target=` - this property specifies where the Response object should load; that is, after the form is submitted and there's a response from the other page, site, or server where should the response go? The option you have are:

 * `_self`: Load the response into the same browsing context(window/tab) as the current one. This is the default if the attribute is not specified.
 * `_blank`: Load the response into a new unnamed browsing context — usually a new tab or window, depending on the user’s browser settings.
 * `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
 * `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.

 >NOTE: later on we'll override this behavior with a `.preventDefault()` but more on that later.

* `novalidate` - The default attribute is `validate` which translate to `validate=true`. The reason this is defaulted to `validate` is because form validation is the first step in preventing hackers’ attacks. It's not the end-all-be-all but it is the first layer of security in building apps. **Form Validation** is part of a larger practice called **Client-side Validation** and HTML comes with built-in measures that we'll get into when we learn about the Input Element. For now, in the code example notice `required` and `type=email` and `type=password`. These are form validation measures built into HTML because they require the human-user to fill them out and the Email Type Inputs require a `@` and `.com` while the Password Type Inputs mask the password with `••••••`. Try it. Throw the code into a new HTML file and serve it up. Do you see the `•s`? Try submitting an email with the `@`.

Most of the time you do want to `validate` so you won't type `novalidate` and don't need to specify `validate` because its default value is implied.

### Optional Form Attributes/Properties

* **[autocomplete=](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#the_autocomplete_attribute_and_login_fields)** - allows the human-user's browser to auto-fill the form if they have their information stored in their browser. You can toggle this with the values: `"on"` and `"off"` however many browsers are opting to not read `"off"` for login fields.

 > NOTE: If you are building a page that allows the human-user to update their password you can use the third value: `autocomplete="new-password"` to prevent the browser from auto-filling the inputs on that form.

* **accept-charset=** - sets the language/[Character Set](https://developer.mozilla.org/en-US/docs/Web/Guide/Localizations_and_character_encodings) the form can take like German, Cyrillic, Japanese, so forth. For most languages, including English this is "utf-8" as in: `<form accept-charset="utf-8">`. However, you don't have to set this property/attribute because it defaults to the character set/[Content Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding) you have in the Head Element to set the character set of your page: `<meta charset="utf-8">`

* **rel=** - this gives you a place to give an annotation or explanation of the form is something is unclear. Most of the time you won't use this property.



## Inputs

The Form element has many elements that go inside of it but, by far, the most common elements are the Label and Input Element:

```html
 <label for="password">Password</label>
 <input type="password" name="password" id="password" required>
```

This is because the Input element is a versatile element that can be used for all sorts of inputs from text and numbers to files and colors.

> NOTE: The HTML snippet above has a Label element with a `for` attribute set to `"password"`. In this way it is now tied to the Input element `id="password"` and NOT the `name` or `type` attributes. You see that? The label is `for` the `id` of the input.

The list below tells you most of the values you can give to the `type` attribute of an Input element.

`<input type="text">`: defines a one-line text input field. If you need a bigger area for lots of text you'll use a TextArea element.
`<input type="password">`: defines a password field.
`<input type="submit">`: defines a button for submitting form data.
`<input type="radio">`: defines a radio button.
`<input type="checkbox"`>: defines a checkbox.
`<input type="button">`: defines a button.
`<input type="date">`: creates a date selector
`<input type="color">`: provides a color picker wheel
`<input type="submit" value="Submit">`: creates a button that is registered automatically with its parent form element as a "submit" button AND it doesn't need a partner Label element.
`<input type="reset" value="Reset">` - creates a button that defaults to call the Form's `.reset()` method to clear all of it's fields.



### Other Attributes of the Input Element

**Form validation** means we're verifying the data a user puts in, such as the type, length, validity, and shape we want so we can properly save it to a database.

> NOTE: Later in this full-stack program you'll see that data must be in the same format, or shape, as the other bits of data being saved with it else the computer can't read it. It is costly both in time and money to send the data from the user to our databases only for it to be in the wrong format. A shorter, safer, and cheaper first filter we can use is HTML's built-in form validation, and you've actually already seen one of the tools, `type`, which specifies the type of data that can go into an input.

We'll not cover them all in extreme detail because you'll have docs to reference later. But because you need a good introduction of **form validation** and some tools to do it, let's look at a few of the other attributes we can leverage on Input elements.

* `maxlength=`: limits the maximum number of characters that can go into the input
* `minlength=`: limits the minimum number of characters that can go into the input
* `max=` and `min=`: creates upper and lower limits on a data input
* `required`: forces the user to fill out the input
* `type="email"`: verifies that the input has a @ and .com
* `type="phone"`: verifies that it is a legit phone number
* `autocomplete="on"`: let's the browser offer autocompletion of the form
* `type="password"`: blots out the characters in this field automatically
* `placeholder=`: isn't a validation attribute but it does give the user a hint about what goes in the field

```html
 <label for="price">Price ($)</label>
 <input type="number" name="price" id="price" placeholder="$10.00" onkeyup="updateNewProduct(this)" min="1" max="100000" required>
```

* [MDN Docs - Input Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)



### Other Elements That Belong to the Form Element

Besides Input, there are a few other form elements you should know about but don't concern yourself with them *too much*. Remember, there are a lot of tools built into HTML that were developed over years of trial and error and there is no way for us to learn every detail to perfection right now. Take this as a very superficial survey of these other elements:

* `<fieldset>` & `<legend>`: The fieldset groups related data together and the legend acts the same way as the Label does for the Input. In this way, `<fieldset>` and `<legend>` always go together.
* `<textarea>`: As mentioned before, it is for large sections of text like this page you're reading now!!! ;)
* `<datalist>`: gives you a "pre-fill" menu for your inputs
* `<output>`: of course, shows you the output of some script you've built. You might try using this in your calculator app.
* `<select>`: offers a dropdown menu to your user.

The last thing we'll say about the HTML Form elements is that they can all be styled just like your other HTML elements. Have fun, let your creativity run wild, and enjoy building!!

* [MDN Docs - All Form Elements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements)





## Practice It - Forms

1. You have two projects to do in class. Go ahead and start on one of them now.
2. If you want something more to work with try fiddling with this [Example Form CodePen](https://codepen.io/austincoding/pen/awBGPx/).

Next class you'll be building a Contact Me Page & a Calculator. Look ahead to see the specifications for it and wireframe it tonight.

## Know Your Docs

* [MDN Docs - All Form Elements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements)
* [MDN Docs - Input Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

## Additional Resources

* [YT, Richard Barkinskiy - Styling Form Elements](https://www.youtube.com/watch?v=2ACrHs5o9LM)]
* [YT, Web Dev Simplified - Learn HTML Form Elements](https://youtu.be/fNcJuPIZ2WE)
* [YT, InfoQ - Styling Form Validation Messages](https://youtu.be/bb4NqVycr-4)
* [CodePen, Code Snippet - Example Form Starter](https://codepen.io/austincoding/pen/awBGPx/)

# The Internet/Web, Our Job as Developers, and Ways to Think About It

As we learn this new language called JavaScript it's important we start to create a new perspective in our minds about how computers interact with the world and how code is used to communication intentions to a computer because our website and apps will only grow in size from here on. It all works the same as HTML and CSS but requires a different way of thinking.

## How The Internet Works

In this course we're learning how to build websites. No, not apps yet but trust that the technology used for apps is the same technology used to build website and anything you'll ever want to build in the future, is also built on the foundations we'll learn in this course.

So where to begin? Assuming we know nothing about how the internet work, how computers function but someone told us we would like coding let's start from there. How does information/data that represents text, pictures, video, audio, and interactions move from one computer to another computer through wires and even air(WiFi).

![internetOfThings](./../images/internetOfThings.png)



The simple answer to this could be "magic". A better would be "science" but either way, you got into this coding program because you want to become the magician, right?

### What is the Internet?

The internet is a continuous connection of various computer and devices that includes your phone, computer, watch, and doorbell. They are all connected through various means including coax, CAT5, fiber, WiFi, bluetooth, 3G, 4G, LTE, & 5G. Through all of these connections and the millions of devices they connect to the internet is created. But this still doesn't answer our question: "How does it work??"

### How Does it Work?

In order for these devices to talk to one another they must rely on a series of steps that detail how, when, and what data transfers look like. There's a word, we don't often hear, called [protocol](https://www.dictionary.com/browse/protocol) that refers to a series of agreed upon steps taken when something happens as in: "Firemen have a protocol for leaving the firehouse and responding to a fire." The internet and its devices depend on an agreed about series of steps and organization of data to ensure that your computer knows how to interpret the information sent to it from Target or Netflix. This protocol is called HTTP or HTTPS, yes the prefix in your browser's address bar.(Go look.) HTTP/HTTPS stands for [Hypertext Transfer Protocol (secure)](https://en.wikipedia.org/wiki/HTTPS). This protocol, or series of agreed upon steps and how data transfers look, is what computers/machines use when they need to move data between one another. While this course will not dig into all the technical details of HTTP(S) we will learn much more about this protocol in 311 when we learn how to plan, design, and build databases and servers(computers without screens/The Cloud). For now, it's enough to know that what we will be learning in this 101 course, HTML, JS, & CSS, are languages that create data that fits within the HTTProtocol and represent to a web browser(Safari, Chrome, etc...) what content we want on our pages, what our pages will look like and how they interact with people(users).






# The Body Object & The Elements of Web Pages

Now that we understand a bit about Requests and Response objects and have our Req/Res Drawing handy let's examine where we've been working for these past few weeks.

We'll be referencing the code below because it is the minimum amount of code needed to build a web page. All other HTML elements/objects and their properties, methods, & events will stem from this basic code.

You can quickly generate this **boilerplate code** by going to VS Code, then creating an `index.html` file and typing on the first line: `html:5` + ++enter++. Go ahead and try it. Create folder called `101-onlineClothingStore` and create an `index.html` file you can use to follow along with in this lesson and revisit in a few upcoming lessons. *I'll wait.*

```html


<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
 </head>
 <body>
  
 </body>
</html>
```

## index.html

In most of the  projects you've built, you've been working in a file called `index.html`. The name of this file is incredibly important because it is the default file that is served FIRST. `index.html` is the **root** file for ALL websites. When you navigate to Facebook.com or Target.com you will receive their `index.html` file. If you click on links to go to other page you'll be given other pages like: `about.html` or `termsofagreement.html`. You are allowed to name your `.html` files whatever you want but **the very first file** you want served must be named: `index.html` and in the **root** directory/folder, meaning it can not be hidden in another folder, it must be at the top-level of the entire project's folder.

Furthermore, the `.html` extension denotes a file written in HTML code while `.css` denotes CSS code and `.js` denotes JavaScript code.

  > There's no requirement for you to use the name `index` for CSS or JS files but it may be helpful to you as a developer to name your files similarly so they can be grouped together in your mind and organized in folders. For instance, `index-styles.css` and `index-scripts.js` might be styles and scripts used only on the `index.html` file while `about-styles.css` and `about-scripts.js` might be used only on the `about.html` file. You'll figure it out as you go!



### DOCTYPE Tag

At the very top of all HTML files we see this strange looking, **self-closing tag**: `<!DOCTYPE html>`. This is a hold-over from older versions of the HTML language. It was originally used to declare the type of this document is ("HTML" and not "XML"), as well as, the version of HTML it's written in but now everyone uses HTML5+ so we only have to write `html` to declare that the document the computer is going to read is in HTML5.

It also communicates to the browser to build a Document object. *Remember, code is used for communication*. In this case, this bit of code is communicating to the browser, "Hey, inside your Window object go ahead and create a Document object so we can build some more objects inside of it." To us, humans, we can read this code and visually imagine a Document object being built with other objects to be added as we go along. See a version of this object modeling below!!

![Window-Document-Objects-101-1-2](./../images/Window-Document-Objects-101-1-2.png)

* [W3S Docs - doctype Element](https://www.w3schools.com/tags/tag_doctype.asp)

### html Element

The next bit of code we see in `<html></html>`. This code represents the `html` object. It is what's know as the **root element/object**. It's the actual **Document Object** that's being rendered on your screen. We call it the **root** element because all other elements/objects are children or descendants of it including Head and Body and all the elements we'll build inside them. This is the beginning(the **root**) of our **Document Object Model**, the first object that all other objects get put inside of; hence the moniker: "Mother of All Objects".

The second takeaway here is to make sure you define the human speaking language you're page is written in. For instances, `<html lang="en">` stands for English while `<html lang="fr">` would stand for French. You can find [all the Global Languages codes here](https://www.w3schools.com/tags/ref_language_codes.asp).

* [W3S Docs - html Element](https://www.w3schools.com/tags/tag_html.asp)

![WinDocHead-Object-101-1-2](./../images/WinDocHead-Object-101-1-2.png)



### Head Element

As discussed earlier, the `<head>` element contains machine-readable information (**metadata**) about the documents content, like its title(the bit you see in the tab of your browser), scripts(JS)*see note*, and style sheets(CSS).

The elements/objects that go inside `<head>` are:

  * `<base>` - create base URLs for all links on a page (we'll learn about this later)
  * `<link>` - used to tell the browser where to find CSS files that define styles/the way our page is supposed to look
  * `<meta>` - multi-purpose including viewport sizing, Search Engine keywords, web services, and data about data (metadata); it contains information about the page. This includes information about styles, scripts, and data to help software (search engines, browsers, etc.) use and render the page.
  * `<style>` - an older and abandoned way of including styling to a page; use `<link>` element instead
  * `<title>` - the words that are displayed in the tab at the top of your browser

Aside from the content between the opening and closing tags of the `<title></title>` element/object, none of the code in the `<head>` element/object is displayed to the user. It is only read by the browser to know how to display the `<body>` and its content.

 > NOTE: Before going any further we need to clear up some terminology so we're all on the same page and can stop reading multiple words that refer to the same thing.
 > So far we know that computers use objects to store information. So to a computer, everything is an object. But in the HTML language, we often say the word "element". As in the `<body></body>` element has an **opening-tag**: `<body>` and a **closing-tag**: `</body>`. Together they create an HTML Element called the Body. This is just a language-specific way to describe an object. In HTML we say *element* instead of *object*. But as we dig into JavaScript and other languages we only say the word **Object**. Both are one and the same as far as the computer knows, they're just building blocks with their own properties, methods, and events.
 > "Element" is the HTML way of saying "Object" but because Elements are Objects that have visual representations on the screen we call them, Elements. From now on, if we're talking in HTML we'll use the word "**Element**" but just know in your mind it's the same thing as an **Object**. Just a thing with properties, methods, and events.

* [W3S Docs - Head Element](https://www.w3schools.com/tags/tag_head.asp)

![WinDocHead-Object-101-1-2](./../images/WinDocHead-Object-101-1-2.png)

  > ** NOTE: Usually scripts(.js files) are linked to HTML files at the bottom of the Body with a `<script href="">` element but with the new `defer` keyword it is acceptable to link your scripts in the Head element now.



### Body Element

Finally, we come to the exciting element: The Body Element!

Inside the Body Element is where ALL of the contents of a page live. Whatever page you navigate to on the web, you are viewing the contents of the page.

**Try it.** Go to [https://developer.mozilla.org/en-US/docs/Web/HTML/Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) and open the Chrome Developer Tools (DevTools). Right-click > inspect > then click on the Console tab. Where the cursor's flashing, type or copy/paste this line of code: `document.head.parentNode.removeChild(document.head);` and press ENTER.

![removeHead](./../images/removeHead.png)

 > You should see a significant change in the appearance of the page. This is because you just removed the Head Element from the document and the Head Element contains links to stylesheets. The code you just wrote is a line of JavaScript that says, "Hey Console, go the document object and access its Head object, then find the property parentNode on the Head object. From there, invoke the removeChild method so the Head removes itself." It's a little lengthy but it gets the job done.

Now that we can see the content clearly without all that CSS in the way. Let's talk about it.

Click on the tiny button in the top-left with the arrow or type CMD + SHIFT + C (mac)/Ctrl + SHIFT + C(Windows). Now move your mouse along the page to see all the elements of the page highlight as you hover over them.

 > NOTE: If the elements are not highlighting repeat the previous instructions. You may have turned them off when they were already on.

![ElementSelector](./../images/elementSelector2.png)

Move your cursor around until you can find the Header Element. How many Article Elements can you find? Can you find the HTML element? All of these elements are various building blocks (Objects) that were arranged in a certain way to build this page. Check it out:

Back in the Console type: `document.querySelectorAll("h1").length` + ENTER. What number was returned?

You should have gotten 1 because there is only 1 `<h1>` element and there should only ever be 1 `<h1>` on any page! Try it again. Type: `document.querySelectorAll("a").length` How many Anchor elements are there? What about `document.querySelectorAll("article").length`? Go ahead and change the **argument** between the `()` to any of the elements you see on the page or currently know about to see how many there are on the entire page.

Do you know what this script is doing? Can you read it?

It goes like this: "Hey Console, ask the Document object to invoke its "querySelectorAll" method with `"a"` as its argument to find all Anchor elements, then give us the value of the length property on the object that method returns." The `querySelectorAll` method selects/finds all elements that match the **argument** you pass into. Give it `"h1"` and it'll return 1, give it `"section"` and it'll return 1, `"a"` will return 481. Go ahead and try any or all of the [115 different HTML elements](https://eastmanreference.com/complete-list-of-html-tags) to see what you find!

* [W3S Docs - Body Element](https://www.w3schools.com/tags/tag_body.asp)
* [W3S Docs - .querySelectorAll() Method](https://www.w3schools.com/jsref/met_document_queryselectorall.asp)

![images/WinDocHeadBody-Objects-101-1-2](./../images/WinDocHeadBody-Objects-101-1-2.png)



## Indentation

Code is used to communicate programming intentions to a computer but the computer doesn't have eyes it just has 0s and 1s so space/whitespace doesn't matter to it. In fact, when your HTML, CSS, and JS code files are prepared for a **production environment**(open for the world to see) they are **minified** which means all of the **whitespace** is removed including space between words, space between lines of code, and indentations. Your files will be minified/compress so they are faster for the computer to run and lighter for the internet to transfer. So why indentation?

Because code is also used to communicate to humans, we use indentation to organize objects; or rather representation of objects in our code. When you auto-generated your **boilerplate** HTML earlier there likely wasn't any indentation before the `head` and `body` elements/objects but in this code example there is. This extra **whitespace** is to help you start seeing these different objects using different vertical layers, **indentation**.

```html

 
<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
 </head>
 <body>
   <header></header>
   <main>
     <h1>Hello World</h1>
     <section></section>
     <section></section>
   </main>
   <footer></footer>
 </body>
</html>
```

The `html` element is the the top-level/root element so it is slammed up against the far-left side of file. But `head` and `body` are direct descendants of `html` and siblings to one-another; therefore they are indented one tab (2-4 spaces). Objects directly inside the `head` and `body` are thusly tabbed in again: `meta`, `meta`, and `title`. These element can be described as **Siblings Elements**.

In the `body` we see some new elements. Can you guess which elements are direct descendants of the `body` element and siblings to one another?



## In Summary: The Building Blocks of a Web Developer

All web pages and sites are built with the same HTML Elements(objects). These are our building blocks as web developers. Learning about them and their properties, methods, and events is what we will be doing in this course. In the next lesson we'll break the surface of how to capture interactions between humans and computers and how to give instructions to the computer when those Events/interactions occur.

* [W3S Docs - HTML Events](https://www.w3schools.com/tags/ref_eventattributes.asp)

> NOTE: When you see these links ^ saying something about "Docs" or "Know Your Docs" you should bookmark them in a bookmarks folder called HTML Docs or CSS Docs or JS Docs for the language they relate to. Documentation is one of the top three tools of developers. Every developer depends on them because there's so much "invisible" stuff to learn we mere-humans can't remember it all. What we can do is spend our energy creatively building with these technologies and relying on documentation(docs) to help us find the path when we're lost and exploring.



## Know Your Docs

* [W3S Docs - doctype Element](https://www.w3schools.com/tags/tag_doctype.asp)
* [W3S Docs - html Element](https://www.w3schools.com/tags/tag_html.asp)
* [W3S Docs - Head Element](https://www.w3schools.com/tags/tag_head.asp)
* [W3S Docs - Body Element](https://www.w3schools.com/tags/tag_body.asp)
* [W3S Docs - HTML Events](https://www.w3schools.com/tags/ref_eventattributes.asp)
* [W3S Docs - .querySelectorAll() Method](https://www.w3schools.com/jsref/met_document_queryselectorall.asp)

# Pre-Class Lesson 2: HTTP Req/Res + HTML Elements as our Building Blocks/Objects

A few days ago we learned about Objects, Object Modeling and Code as Communication let's now look at how computers communicate through HTTP(s) and why & how that informs the way our web pages are built the way they are. For this lesson, let's back away from the code and take a slower and higher approach to understanding how our web pages are built and delivered.

## Request and Response Objects: The High Overview

Again everything to a computer is an *object*. And we can visualize those objects with Object Modeling. With this in mind, let's now envision your web browser (Chrome, Safari, etc...) navigating to a URL. This act of *navigation* is actually a **request** for information or resources that are sitting at unique addresses in the internet, just like a street address for a house or building. All devices and files on the internet have a unique address we call a [URL, Unique Resource Locator](https://en.wikipedia.org/wiki/URL). So when you "Live Serve" your web pages you use a program to create a mini-internet on your computer and serve that web page at a URL called `localhost:5500` as in, your computer is the `localhost` and the exact address/port it's using is `5500`. This is the exact same process when you navigate to a website on the the real internet. Large computers are holding files at specific addresses(URLs) in the internet and giving them to browsers when they request those files/resources. And this is where we'll begin to explore **requests** and **response** objects as they relate to the way our web pages are built.






### The Head and Body

While we won't get into the deep details of these two object in this course we will need to understand the basic gist of these objects to make better sense of our files and why they're arranged the way they are. You'll need paper and pen to continue this section.

**Here's the gist: When a computer makes a request or a response it sends them both in the exact same shape: an object with a head and a body.**

> Title this drawing: "Req/Res"
> Go ahead and draw a computer on the middle-left-side of your page (that's your computer)
> Now draw another computer on the middle-right-side of your page (that's a server/the "Cloud")
> Now draw an arrow from your computer to the server labeled "request"
 > Below that arrow draw a box, then draw a line cutting that box in half horizontally.
 > Label the top half of the box "Head"
 > And the bottom half of the box is "Body"
> You can now draw an arrow from the server computer to your computer and label that "response"
 > Draw another box, cut it in half, label them "Head" and "Body"

The drawing you should have is the premise of how the internet works and the basis for everything we will learn in the next few months. All data exchanges are just requests and response objects with two other objects inside of them called **Head** and **Body**. In the **Head** object there is what we call **metadata**. Or just simply, bits of information that tell the receiving computer something about the contents of the **Body** of the request or response object. And the **Body** object is the actual content of the **request** or the **response**.

When you navigate to a page your browser sends a request object that has a property called `method` and its value is `get` as in, get whatever resources are at this address while the body is empty because there's nothing for your browser to send. When the computer in the "Cloud" receives your request it will put together a response object. In this response object, there will be some metadata in the Head like `title`, `charset`, and `styles`. This is information the browser needs to properly render the content in the Body. Take a look at the page you built a few days ago. Notice any similarities?

```html

 
<!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <link rel="stylesheet" href="./style.css">
     <title>My Portfolio</title>
   </head>
   <body>
    
   </body>
 </html>
```

In the code above we see a `head` object and a `body` object. These two objects/elements represent in the HTML language/code the same **Head** and **Body** objects of our Response object and they serve the same purpose, the Head describes needed information about the content in the Body. But for now, we're going to have to set aside our short exploration of Request and Response objects in HTTP(S) protocol because we don't need to know their details to build web pages and websites. All we really need to know is that this code represents the response object. Plus, we'll be learning and using the finer details of requests and responses in our 311 course: Servers and Databases.

What we'll do with this information now, though is to assume when we navigate to a URL the **Response** object we get back is the code you see above, from `<!DOCTYPE html>` to `</html>`. In this course, 101: Intro to the Web, we're building the contents of the **Body Object** of the Response Object so that when other people's browsers navigate to our URL they will get the web page we built. Look back at your Req/Res drawing to know where you are and let's get into some code.

* [W3S Docs - HTTP, Request/Response](https://www.w3schools.com/whatis/whatis_http.asp)



## Know Your Docs

* [W3S Docs - HTTP, Request/Response](https://www.w3schools.com/whatis/whatis_http.asp)

# The Image Element

*“Hope can be a powerful force. Maybe there's no actual magic in it, but when you know what you hope for most and hold it like a light within you, you can make things happen, almost like magic.” ―Laini Taylor,* **Daughter of Smoke & Bone**

HTML is the only language that web content is encoded in. No matter what programming language you work in, if you're serving your software through the web you'll be encoding that software's content to the user in HTML. Because HTML is the only language for the web, it has to be super flexible to handle all of the crazy cool stuff we see on the web. Just stop and think for a moment about [some of the coolest websites](https://www.awwwards.com/) you've seen. All of that was built in HTML!!

So when you're wondering when you'll know everything there is to know about HTML, well maybe never...but the upside is that there is always something to learn! In this lesson, we'll spend time on the Image Element, `<img />` because during class and your upcoming career you'll need to display the images.

We won't cover all of the "special HTML elements" a.k.a **[Replaced Elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)**: in this lesson like: `<video>`, `<embed>` and `<iframe>` but just know if you're wanting to build videos into a web page you can read the docs on these two elements and all the other HTML elements!!


<iframe src="https://player.vimeo.com/video/395992193" width="655" height="368" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

## Using the Image Element

You've probably already recognized the Image Element, `<img />`, from a Learn-to-Code event or from your Portfolio Landing page. This takes the fear out of learning yet another *Object-Thing*!

To begin, the `<img />` known as a **self-closing** or **void** element because it doesn't keep its content between the opening- and closing-tags like most other HTML elements do, instead it uses two properties/**attributes** to *source* its content:

* `src=""` - the source of the actual image in the form of a URL or pathname
* `alt=""` - A description used to replace the image if a person who is blind is using your web page.

Take a look at the following code snippet:

```html
  <img 
    src="https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
    alt="Grapefruit wedges spaced evenly apart on orange background."
  />
```

![grapefruitWedges](./../images/grapefruitWedges.png)

Similar to `src=` attribute on the Script Element, `<script src="">`, the Image element sources its image with the same attribute, `src=""`. While the `alt=""` attribute stands for "alternative text" and is used in place of the image when it is not being displayed or when someone with a visual impairment visits your page. This "alt" text is required for screen readers—accessibility devices used primarily by the visually impaired—to be able to communicate image content to their users. For this reason, you should put lengthy and descriptive alternative text so that screen readers can actually communicate what is in the image.

  > NOTE: It's important to know that a pathname and a URL are essentially the same thing but differ in a small but large ways: a pathname refers to a path from one file on your computer to another file on your computer, but a URL refers to a path from a file on your computer to a file on another computer that is connected to your computer through the internet. Both do the same thing because the storing structure of your computer, my computer, and everyone else's computers are the same. However, with a URL we use HyperText Transfer Protocol or HTTP(S).

* [W3S Docs - Image Element](https://www.w3schools.com/tags/tag_img.asp)

### Styling Images

Styling Images can be tricky because they are a "special element" known as a **Replaced Element**. This means they don't quite follow the same CSS rules as most other elements. So the best way style an image is to put it inside a Div element and style the Div:

=== "The HTML"

    ```html
      <div id="image-container">
        <img 
          src="https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_960_720.jpg"
          alt="folded blue and white knit sweater on white background">
      </div>
    ```

=== "The CSS"

    ```css  
        #image-container {
          margin: 1% auto;
          text-align: center;
          padding: 5% auto;
        }
    ```

In addition to styling an Image with a **"wrapper" Div**, Image elements have two special properties on them that control the content(the actual image) held within the Image Element object. They're called:

* [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) - determines the size of the content(image) inside the Image object/element.
* [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) - determines the position of the content(image) inside or outside the Image object/element.

The following code snippet would be paired with the code snippets you just saw above:

 ```css
   /* styles.css file */
 
   #image-container > img {
     object-fit: contain;
     object-position: 50% 50%;
     width: 250px; /* <-- image height is proportionally controlled with the width property */
   }
 ```

Try it. Go to the MDN Docs on [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) & [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) and play!

### Image as Background Technique

An alternative to styling an Image Element is setting the background of a Div Element to the image you want displayed:

=== "The HTML"

    ```html
      
      <div id='elephant-pic'></div>
    ```

=== "The CSS"

    ```css
    /* the CSS */
    .elephant-pic {
      width: 300pt;
      height: 200pt;
      background-image: url(./images/Elephant-At-Sunrise.png);
      background-size: cover;
      background-repeat: no-repeat;
    }
    ```

=== "The Result"
    ![Elephant-At-Sunrise](./../images/Elephant-At-Sunrise.png)

This last technique is convenient but comes with the drawback of not being **Semantic**. For now, that's shouldn't be of high concern to you though.

The videos below demonstrate how you would use both techniques.

## Additional Resources on Styling Images

- [ ] [YT, Dani Krossing - Inserting Images](https://youtu.be/_w6N_nplmAw)
- [ ] [YT, Chris Walker - IMG for Images](https://youtu.be/PDfWeUP09TA)

## Know Your Docs

- [ ] [MDN Docs - Replaced Elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)
- [ ] [W3S Docs - Image Element](https://www.w3schools.com/tags/tag_img.asp)
- [ ] [MDN Docs - object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
- [ ] [MDN Docs - object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
 


# The Input & Creating Objects

With this new knowledge, you are able to build some pretty awesome stuff already, even if you don't recognize that yet. Yet, before you take on the world let's learn just two more skills: Input elements and how to create new Elements.

## Using the Input Element

The first is actually very easy and will boost your skillset tremendously! The `input` element is by far the most used element on the web simply because it can be for so many things: checkboxes, radio buttons, email, password, paragraph, sliders, file uploaders, color pickers, and more!! The full list can be found at [W3S Docs - Input Element](https://www.w3schools.com/tags/tag_input.asp).

Its default mode is a short input box: `<input />`. But using the `type=` attribute we can change it to be any of the types of input listed above including a button! Try it.

 > In the same file create an `<input type="submit"></button` element.

The reason we have this option is that Input Elements normally go inside the Form Element and we need to distinguish them as submit buttons & reset buttons versus input type inputs. We'll get into the Form Element soon but for right now let's figure out how we can use the Input Element to take input from a human to later do something with it!

The Input element, just like the Button element has many Events we can use to capture interactions and pass along data. The event we'll use for this example is the `onkeydown` event which gets fired when a human-user presses any key down while inside the input field. Other events get fired including `onkeyup` & `onkeypress`, you can study the full list of [Global Events here, aka Event Listeners](https://www.w3schools.com/tags/ref_eventattributes.asp).

In the same fashion, we made our Buttons call a function when they were clicked let's make our input element call a function when a human-user's key is lifted.

```html

 <body>
     
   <input value="" onkeyup="setValue(this.value)"/>
 
   <script>
     // and more JS code is here...
 
     function setValue(input) {
       console.log({input})
     }
   </script>
 </body>
```

  > NOTE: To view your [Browser's Console](https://developer.chrome.com/docs/devtools/shortcuts/) object you'll need to open your DevTools (Mac) ++cmd+opt+j++ ; (Windows) ++ctrl+shift+j++ ; or just right-click >> Inspect >> Console

Everything works well? Can you see your input in the Console? The only new bits of syntax you see here are `this.`, `value="`, and `{input}`.

* `this` is actually pretty easy, it refers to the exact object that is calling the function. If we created a new input and it called the same function the computer wouldn't know what to do because it wouldn't know how to call it. So we use the keyword `this` to communicate that the context were calling the function from is *this object* and not *that object* or any other object besides `this` object.

* `value=` is also easy because it's an attribute just like the other attributes we've been writing and refers to the property `value` on that object. Its current value is an **empty string**, `""` but as we type, the value will change under-the-hood. To see this change we need to pass that value along to a function to do something with it.

* The last bit is super easy. You can see the input appear in the console without the `{}` but with the **curly-braces** we just see the data in a cleaner format: an object with a key called `input` that has a value of whatever the `input` is. If this is confusing, just remove the `{}` around `{input}`.

## Using Variables To Hold Values

We already know how to create variables with the `let` keyword and we know that we need to use variables to hold on to pieces of data. Let's create a variable that can hold onto our user's input so we can do other things besides logging it in the Console object...

```html

 <body>
     
   <input value="" onkeyup="setValue(this.value)"/>
 
   <script>
     let usersInput;
     // and more JS code is here...
 
     function setValue(input) {
       usersInput = input
       console.log({usersInput})
     }
   </script>
 </body>
```

  > Note the changes in the code: We're now saving our data to a variable and logging the value of the variable, `usersInput` instead of directly logging what comes into the function's **parameter**, `input`.



## Additional Resources

- [ ] [Article, Geeks4Geeks - Button vs Input](https://www.geeksforgeeks.org/button-tag-vs-input-typebutton-attribute/)

# Intro To JavaScript

*“I believe that imagination is stronger than knowledge. That myth is more potent than history. That dreams are more powerful than facts. That hope always triumphs over experience. That laughter is the only cure for grief. And I believe that love is stronger than death.” ―Robert Fulghum, All I Really Need to Know I Learned in Kindergarten: Uncommon Thoughts On Common Things*

## Intro to JavaScript

<iframe src="https://player.vimeo.com/video/393472545" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

First off, JavaScript(a front-end language) is nothing even close to Java(a back-end language). [Please do not confuse the two](https://medium.com/@benastontweet/lesson-1a-the-history-of-javascript-8c1ce3bffb17). The naming of JavaScript was a marketing tactic at the time of creation to make programmers feel comfortable with the new language and increase its popularity. This marketing ploy worked and now its the only programming language browsers can read, but, from here on out remember: **Java is to JavaScript as car is to carpet**.

So, HTML creates a structure of "things", or objects/elements for us to manipulate the **properties** and **methods** of. Remember, HTML stands for **Hyper Text Markup Language**. This means that the elements we create with it do much more than just create text or images on a screen, they are interactive, they have **properties** that can be changed with CSS, and **methods** that can be used with JavaScript. In this way, each of these HTML elements are pieces that can be played with to do what we want. We're just learning a new language that will launch us into a new way to access and play with these Hyper-Text Elements!! So let's get to it...but first, let's take a high perspective look at what's going on.

# Our Job as Web Developers

At any given point of a web developer's typical work day they are doing one these three jobs:

1. Storing Data
2. Moving & Manipulating Data
3. Rendering Data

## Data & Our Three Jobs

These are the three jobs of a web developer(along with researching how to store, move, or render data ;). These three tasks might not mean much to you right now but moving forward we will use these as template for solving any problem we come across while developing web-based software. Let's clear up the meaning of these jobs so we can come back to them again and again in the future:

First, data is another word for information. It's a broadly used term to describe anything that describes something else. I.e. data about you could be your age, address, phone number, email, parents, list of friends, type of car you drive, pets, books you've read, etc... Other data might include how many people have entered and exited a store within a window of time(COVID-19) or how many purchase someone has made online versus in stores. Data also includes the colors we see on our screen and scrolling effects and the font sizes. For now, all of it is data to us and we must learn to think of it as a ubiquitous term that is omnipresent in all future work.

Second **Storing Data** has to do with holding data in a certain place whether that be a database, local storage, cookies, or a variable. Store data is critically important because we need to use that data later and computers can only do one thing at a time. (more on this later!)

Next, **Moving & Manipulating Data** means that data has to move from storage to render or render to storage and all other place in-between. But sometimes, the data we get is hard to give to the browser so we have to kneed it a little to get the exact bits of data we want and leave the bits we don't want. 

  > Moving & Manipulating is where we'll spend the first part of this course and most of 211 learning and practicing.

Finally, **Rendering Data** is the act of converting numbers and letters into visual and auditory elements that people(users) can see, hear, and interact with. When we say render the data, we mean, "get it on the screen".



# Table Element + nth Child Selector

*“It's really a wonder that I haven't dropped all my ideals, because they seem so absurd and impossible to carry out. Yet I keep them, because in spite of everything, I still believe that people are really good at heart.” ―Anne Frank*

# Overview

<iframe src="https://player.vimeo.com/video/395031110" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

Before the days of `grid` and `flex` many developers used `<table>` to position elements on a "grid-like" structure. It was very hacky but it got the job done. Today, `<table>` isn't used as often but it is still a viable way to structure pieces of our page especially if we need to represent something in a table chart. We'll learn to use the `<table>` element and its dedicated child elements as we build our Tic Tac Toe board next class!!

## What Are HTML Tables

But first, what is an HTML Table? Well, it looks a lot like a spreadsheet:

=== "HTML"
    ```html
      <table>
        <thead>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </tbody>
        <tfoot>Notes about the companies would go here.</tfoot>  
      </table>
    ```

=== "Result"
    ![html-table-example](./../images/html-table-example.png)

### The Tags of the Table

So what's happening? Notice how there are HTML tags you haven't seen before like: `<td>`, `<tr>`, and `<th>`? These elements are reserved for use **only** within the `<table></table>` element because the `<table>` element has properties reserved for those elements: `<td>`, `<tr>`, and `<th>`, so that each of them "snaps" into place when they're written inside the dedicated parent element, `<table>`.

Check it out: the `<tr>` element stands for **Table Row** which, as you guessed, creates a row in our tables.

The `<th>` element creates another table row but is actually called a **Table Header** because it labels the columns of our table.

The `<td>` element creates the columns within each row. This element is used within the `<tr></tr>` element.

Then, of course, there's `<thead>`, `<tbody>`, and `<tfoot>` which you might have guessed stand for **Table Head**, Table Body, and Table Footer. These elements are used as sort of a "Parent Row" to section off the top of the table, then the main part of table: `<tbody>`, and the footer of the table: `<tfoot>`. They are optional elements but very useful when creating an organized table.

### Special Attributes

The child elements of `<table>`: `<tr>` and `<td>` have the same styling properties as the other elements you've learned about so far like `border`, `padding`, `text-align` and so forth. In addition to those typical properties we have the option to use the two attributes: `colspan` and `rowspan`.

We might use `colspan` to create a header that covers multiple columns like: `<th colspan="2">Employee Name</th>` where the first column might be the employee's first name and the second column could be their last name but we want them both to be labeled under one cell: "Employee Name". Essentially, it just makes that specific "cell" traverse or "span" the number of columns specified in the value.

The same goes for `rowspan`. When using this attribute, the cell will traverse multiple rows: `<tr rowspan="3">`Top Three Earners:`</tr>` could be a cell on the far left of your table that relates to the three rows to the right of it... as in, it spans the height of three rows!

## A new CSS selector: :nth-child()

The `:nth-child()` selector isn't specific to the `<table>` element but this is a nice place to learn about it because of the nature of a table chart: many rows and columns.

With the `:nth-child()` pseudo selector we can select a specific number *(n)* of child elements. Let's say in the table we want the rows to be easier to read by having differently shaded backgrounds. In the `()` of `:nth-child()` we can specify odd and even to apply the background color we want for any number of rows that might be present in the table.

The following code snippets will produce the screenshot you see below them:

=== "HTML"
    ```html
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>80</td>
        </tr>
      </table>
    ```

=== "CSS"
    ```css
      table tr:nth-child(even) {
        background-color: lightgrey;
      }
      
      table tr:nth-child(odd) {
      background-color: white;
      }
      
      table th {
        background-color: black;
        color: white;
      }
    ```

=== "Result"
    ![nth-child-table-example](./../images/nth-child-table-example.png)

Did you notice in the CSS how the `:nth-child()` is placed on the `tr` element which is the one we want to be colored? Then did you notice how it was placed after the parent element: `table`? If not, go back and look at how the CSS code is laid out. Try it yourself.

And lastly, don't be scared of this selector. `n` just stands for a number to be specified, `th` is just a stand-in suffix for the general numbers like *-nd*, *-rd*, and *-st* as in *"2nd"*, *"3rd"*, and *"1st"*. But *"th"* is the most common so the developers of CSS decided on `th`. And `-child` just means its meant to be used on child elements, and with the exception of `<body>`, all elements are children of some other element/object.

## Know Your Docs

As you already know, the best place to learn about everything web development - is in the docs! Here are the docs for:

- [ ] [W3S Docs - HTML Tables](https://www.w3schools.com/html/html_tables.asp)
- [ ] [W3S Docs - nth Child Selector](https://www.w3schools.com/cssref/sel_nth-child.asp)

## Practice It

1. Rebuild the `:nth-child()` example from above in a CodePen or a new repo.
2, Next, using a new CodePen or a new Repo build the mockup below.
    * [ ] Start first with the top row.
    * [ ] Then build your second row.
    * [ ] Use a class name to color your first column in CSS
    * [ ] Remember, break it down into smaller pieces.
    * [ ] Can you use the `<caption></caption>` element to make the title of the table?
    * [ ] How can you build the borders?
    * [ ] Can you use Google Fonts to get a font similar to the one you see?
    * [ ] Can you use `:nth-child()` to color your columns?

![multiplication-table-mockup](./../images/multiplication-table-mockup.png)

# The DOM + JS Intro Part Two

## The Document

The **document** or `document` is the *Mother of All Objects*. It is where your `body`, `header`, `footer`, `title`, `meta`, and all other HTML elements are created. This *"Mother of All Objects"* has a whole list of properties and methods we can use, some of which you'll see in the video below.

  > In this video , we'll cover a few things in a slow and careful way. Take your time through it and make sure you re-create the task on your own either in a new repo or a codePen.

<iframe src="https://player.vimeo.com/video/393569778" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

  > The following will make more sense if you watch the video above first.

<iframe src="https://player.vimeo.com/video/395213797" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

To begin, a Method is a special type of Property; in that, a property just holds a value like: `font-size: 12pt`. While a method looks the same as a property it is actually a **Function** stored in the value of the property name, i.e. `write: function(){// code that writes to the document}`. This subtle difference helps us understand what we're talking about in the future.

* **Property** - holds a value that represents a particular attribute.
* **Method** - a functionality of the object stored in an accessible location.
* **Event Listener** - a special function that "listens" for certain events, or interactions, in order to trigger a specified action when the "event" happens.

In either case, when we access a property or a method we use **Dot-Notation**, aka the **Member Operator**. It looks like this: `.`. Seriously, to get the property `write()` on the Document Object, we type `document.write()`. Remember, the Document Object Model is a way we, as humans, can visualize the way these HTML Elements are written under-the-hood.

  > NOTE: The following code snippet is **not** real code, just a representation that can help you visualize what methods look like on the Document Object:

```json
document = {
  addEventListener: // a function that attaches an event handler to the document
  adoptNode: // a function that adopts a node from another document
  close: // a function  that closes the output stream previously opened with document.open()
  createAttribute: // a function that creates an attribute node
  // createComment:  a function that creates a Comment node with the specified text
  createDocumentFragment: // a function that creates an empty DocumentFragment node
  createElement: // a function that creates an Element node
  createEvent: // a function that creates a new event
}
```

STOP! It's important you don't get overwhelmed with all of these **methods**. You don't need to know all of them or even most of them. You'll only use a few of them for the majority of your career. In the video above we only use `document.getElementById()`.

For a full list of the available `document` methods [visit and bookmark the docs page](https://www.w3schools.com/jsref/dom_obj_document.asp).

### document.getElementById()

Just like we use Selectors in CSS to access a specific element and change its properties, in JavaScript, we have access to a few methods that help us get elements by their specific attributes or type. The `getElementById()` method is a very common method that accesses an element by an id. In the video above we use it to "grab" an element then change its `style.display` property.

There are many other methods to get an element by its `class` name or `data` or type. For now, all you need to know is that they exist and when you need to use them there are [docs you can reference](https://www.w3schools.com/jsref/dom_obj_document.asp).

### `onclick=` & Event Listeners

It's a little confusing at first but I think you'll get the hang of it. While the Document Object has methods like the one we just discussed, each and every HTML element also has methods available to them. The methods are usually associated with the action of a user interacting with it so we call them **Event Listeners**. They listen for **Events**, or interactions, between the user and objects in the Document Object Model(**DOM**).

One of the most common Event Listeners to use is `onclick`. It, of course, listens for a click from the user's mouse. When the user clicks on that element an event **bubbles** up and we we can point that action to trigger something to happen, like a function to load more pictures or login. In the video above, we use the user's click to trigger a function that sets the element's `display` property to `none` so it disappears from the page.

=== "HTML"
    ```html
      <button onclick="sayHello()">Click To See a Greeting</button>
    ```

=== "JS"
    ```js
    function sayHello() {
      window.alert("Hello")
    }
    ```

There are many Event Listeners so just breathe for now and be happy that you know this one. But if you're looking for more there are always [more docs to study](https://www.w3schools.com/jsref/dom_obj_event.asp).

## JS Keywords

### Use `let` to Declare Variables

Just the same way CSS and HTML have specific words that mean something to the browser, so does JavaScript. In HTML we have words like `<section>` and `class=""` and in CSS we have `color:` and `solid`. JavaScript has a whole set of keywords we'll learn to use in time but the first one we need is: `let`, as in *let* me store something here.

When we program we usually need a place to store data. This data could be a number, a word, an HTML Element, or a function. Whatever it is, we need to store it for later use. In the above video we used two variables to hold two numbers: `70` & `5`. Then we add them together by referencing their variable name and not the numbers themselves.

We also used the keyword `const` but you'll regularly see `let` and `var`. I will now break these three words down once and for all while I continue to reinforce how/when to use them as we learn more about programming.

* `var` is the **old way** to declare a variable. We don't use it anymore but you will still see it in old code bases.
* `let` is used when we expect for the value of the variable to change.
* we use `const` when we expect for the value to stay the same.

We'll get into the nitty gritty of this later on but for now just know that's why there are two different words to do the "same" thing. For now, *let*'s just use the keyword `let` to **declare** and **define** all of our variables.

```javascript
let aVariable = 7
let anotherVariable = "hello"
```

### Function Signatures

In the video you two different ways to declare functions:

```javascript
  function myFunction() {
    // this is the old way of declaring a function in JS
  }

  const myFunction2 = () => {
    // this is the new and preferred way of declaring a function in JS
  }
```

  > Again, there is an old way and a new way to write functions in JS. You'll still see the old way so we must teach you it but you'll learn to write functions in the new format.

You also so something like this written in the HTML:

```javascript
  myFunction() // this is how we invoke a function in JS
  myFunction2() // no matter how the function is declared in JS
```

The difference between these two examples is subtle but vastly different! 

The first, `const myFunction2 = () => {}` & `function myFunction() {}`, is a **Function Signature** or **Function Declaration**. This is where we write the instructions to be used later.

The second, `myFunction()` & `myFunction2()`, is a *Function Invocation* which means we're calling the function or saying, "Hey, do your thing now!" This is when we use the instructions previously written.

  > If none of that made sense, here's Joe, who might be able to explain it better.

<iframe src="https://player.vimeo.com/video/373457883" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Know Your Docs

- [ ] [W3S Docs - Document Object](https://www.w3schools.com/jsref/dom_obj_document.asp)
- [ ] [W3S Docs - DOM Event Listeners](https://www.w3schools.com/jsref/dom_obj_event.asp)

## The Two Perspectives + Object Modeling

* Perspective One: Objects are how the computer keeps up with memory and interacts with the world and people around it?
* Perspective Two: We use code to organize our thoughts about how to access that memory and give instructions on what to do with that memory to both the computer and other human-beings(fellow developers).

In the next session we'll explore the following questions:

  * How do we accomplish the invisible task of seeing the memory of computers?
  * How does code represent our programming intentions to the computer?

To do this we'll break them down in three parts: **Objects**, **Object Modeling**, **Code as Communication**.



### Part One: Objects

Computers don't have eyes or ears...yet. They can't see a dog and hear a bark; therefore, they can't perceive the animal before them is a canine and not a feline. Instead they rely on objects, and categories of objects to interact with the world. So that dog would become an object with properties like: `wagsTail=true, barks=true, licks=true, species="canine"`. With this object and its properties the computer could categorize the animal as a dog type object but when it is given another animal with properties: `wagsTail=false, barks=false, licks=true, species="feline", isSelfCentered=true` then it can categorize that animal as a cat type object.

Everything is an object to the computer. It's how it relates to the world around it. People are objects, foods are objects, vehicles are objects. With so many objects, it would stand to reason that there would be types of objects/categories to put similarly related types of objects in. So cars, trucks, motorcycles, buses, scooters they could all be Vehicle type objects, objects that are of Vehicle type.

This is the same with the components you see on your screen when you open a page. Your browser creates an object called `window`. And the website you navigate to sends information back to your browser to create another object called `document` which gets **mounted** inside of `window`. Inside this `document` object there are many other objects. Typical objects inside the `document` object include `header`, `body`, and `footer`, among many more. These are by no means all of the possible objects but they are the general first objects to build a web page.

  > Try it out:

  * Go to any website and right-click your mouse, 
  * Then click "Inspect" to open your Developer Tools. 
  * Next click on Console and type `window` + ENTER where the cursor is flashing. 
  * You should get something like this returned on the next line: 
    * `Window {window: Window, self: Window, document: document, name: "", location: Location, …}` 
  * What you did was ask the `console` object to access the `window` object and give you information about it.
  * What you're seeing is the **object literal** (literally the object written in JS) with its properties: `window`, `self`, `document`, `location`, etc...

We'll be using the console much more in the future and diving much deeper into all the objects mentioned above but before we do we have to get a mental "model" of all of these objects in our minds! The *third thing to keep in mind*!



### Part Two: Object Modeling

Object Modeling is the process of seeing the objects of the computer and how they relate to one another in our minds so we can effectively communicate with ourselves and one another about what is happening inside and between computers. To model these objects, we can imagine them in our minds, draw them on whiteboards, and even have graphic representations for them on our screen. This type of thinking is the intermediary between what the computer understands and what we humans understand. It is imperative that we practice Object Modeling every time we approach the building of a site or page because it will act as our map and compass for solving problems we've never seen.

Objects are just slots of memory that represent real-world things. So what does an object look like? What model can we use to describe them? Try first to write it down, draw it, and then imagine it. This will take some time. 

  > But try!

  * Draw a large box nearly the size of a sheet of notebook paper. At the top label it `window`. Inside draw another box nearly 3/4 the size of the first box. Label this one `document`.
    * Inside the `window` box create two lists titled: "Properties" & "Methods"
    * Under the "Properties" list write down the first five properties you find at this website: [W3S Window Object](https://www.w3schools.com/jsref/obj_window.asp) *NOTICE: The 2nd property is "Console" and the 4th is "Document"* These are two objects you've already come across; the "Console" is the one you opened in your Inspect > Developer Tools earlier and typed "window". And the "Document" is the other box on your page!!
    * In the "Methods" list write the first 5 methods you see on that same website: [W3S Window Object](https://www.w3schools.com/jsref/obj_window.asp)
    * Repeat these steps for the smaller box, the "Document" object, but with this page instead: [W3S Document Object](https://www.w3schools.com/jsref/dom_obj_document.asp)
    
      > *NOTE: the ones with parenthesis, `()` following them are methods and the ones without are properties.*
  
  * What you see on your paper is a simple model of two objects, Window and Document, and shorts lists of each of their properties and methods. This is Object Modeling. And this is how we will talk about EVERYTHING we learn. Everything is an object with properties, methods, and events.

To continue on this Object Modeling exploration we'll need to cover some new terms: **Properties**, **Methods**, and **Events**. These three new terms are called the **members** of an object.



#### Properties

All objects have **properties**. Properties are descriptions of the object. If you were an object you would have properties that might include: `name:`, `gender:`, `height:`, `weight:`, `age:`, `DOB:`, `job:`. The same goes for our web page objects. All visible objects have `color:`, `height:`, `width:`, `z-index:`, `font-size:`, etc... Properties are things that describe what something is, what it contains, and what it looks like when rendered. You'll also see properties referred to as **attributes** and **keys** while the value that is assigned to each of them (the part after the colon and before comma) is called a **value** leading to the common expression: **key/value pairs**, i.e. `name: "Rebecca",`, `age: 33,` or `width: 500px,`

#### Methods

Most objects have **methods**. Methods are like special properties in that they don't describe the object but instead they describe actions the object can do! You might have methods like `eat()`, `sleep()`, `run()`, and `beStill()`. However, as you saw in your exercise, objects on our web pages might have methods like: `confirm()`, `clearInterval()`, `createElement()`, `execCommand()` and `open()` because they are computer object-things and not human-being things with needs like food, water, and shelter.

Methods are also called **built-in functions** because they work like functions. They're small sets of instructions that can be executed just like other functions. Now, we haven't fully covered functions yet but suffice it to say that if you just learned how to mix cocktails you would now have two new functions written into your system that are maybe called: `mixIngredients()` and `shakeVigoursly()`. So every time you need to make a cocktail for your party you would first call `mixIngredients()` then `shakeVigoursly()`. Not everyone needs or wants to learn how to make cocktails but everyone needs to eat, sleep, and drink. So the good Lord gave us all built-in functions/**methods** called: `sleep()`, `eat()`, and `drink()`. In web development, the reason we have methods is because some functions need to be called regularly, by all developers for most apps and don't need to be special or customized. So the engineers of HTML created "built-in functions" that are readily available to be used by us. The "built-in" functions are **methods**.

#### Events

Most objects also have a third category of **members** called **Events**. You can think of events as interactions. Interactions that happen between objects and other objects or objects and humans. See, we can move our mouse, place our cursor on an element on our screen, and click on that element. In that single move there are three distinct events/interactions that happen: 1) `onmousemove`, `onmouseenter`, and `onmousedown`. The events are built into objects so that they can be interacted with. We people have events like: `lookedAt`, `smiledAt`, `handShaked`, `poked`, `hugged`, `shoved`, `greeted`. All of these are ways in which our bodies are interacted with in the world around them.

In web development terms, these Events are used to "capture" an interaction and then trigger an action because of it. For the most part all of these built-in events are attached to a "blank"; in that, they fire every time the event happens but nothing is triggered. It's up to us, the developer to create the reactions and then attach them to the events. So we might say something like: `onmouseenter="openGreetingWindow()"`. This could be equivalent to our bodies being programmed with: `smiledAt="smileBack()"`.

At this point you may be a bit confused on the difference between **methods** and **events** so for now separate them by this distinctions:
  
  * **Events** capture interactions with the object from the outside world, in order for us to attach instructions to be carried out when the event happens.
  * **Methods** are actions(built-in functions) the object can use to outwardly interact with its world.
  * And **properties** are bits of information that describe the object. Often called **attributes**, as well.

While object modeling is a great way to understand how a computer interacts with the world it is not how we communicate to the computer our programming intentions. The computer, frankly doesn't know anything about this Object Modeling stuff. It just knows about objects because what we interpret as a "model" is the complete and total reality of a computer. It knows nothing else. Because of this, we have to use a language that communicates to the computer our intentions with its objects and their subsequent properties, methods, and events. This language is what we generally call **code**. The great thing about you learning code now is that you've already built things with three different coding languages and you've been reading code in all of these textual examples.



### Part Three: Code as Communication

In order for us to communicate our programming needs and intentions we need a language that can be interpreted by the computer and understood by humans. This is what we call **code**. Code comes in many different names and flavors that we call languages, or **programming languages**.

We use programming languages to communicate to both humans and computers what our programming needs and intentions are. Notice earlier, we used the word "interpret" for computers and "understand" for humans. This is because, as long as your fellow developers know the syntax and semantics of the language you chose to write, they will understand what you meant. But the computer must "interpret" what you wrote because the computer doesn't actually know JavaScript from Closure or Haskell. Our computers use interpreters that convert your programming language of choice to binary before it executes the program you built.

Programming languages are similar to our human languages in that they were all created to represent and communicate our needs and intentions. It doesn't matter what language you are speaking...as long as you are speaking to someone who understands the language they will know what you're saying. This goes for computers as well. When we're building websites and web app we're talking to web browsers who know three languages: HTML, JS, and CSS. If we are building iOS apps we're talking to an operating system that understands Swift and if we're build apps for Android we're talking to a system that understands Java. All languages are built in similar ways because they all have to accomplish the same goals: store data, move data, and render data. In this way, you can feel confident that once you now how to program in JavaScript, learning to program with Python, Swift, Java, Go, or C# will come much easier!

This layer of "abstraction" is not so important for us to learn, so much, as it is helpful for us to understand that programming languages like JavaScript are just languages with nouns, verbs, sentence structure, actions, and objects that all represent to the computer our programming needs and intention of how to we would like to move, manipulate, and display the objects our computers know about.



## In Summary: Our Three Jobs, Object Modeling & Code as Communication

Now that we've learned our three jobs as web developers are to store, move, and render data inside an invisible world with 10 levels of abstractions on a computer that sees only objects with properties, methods, & events and interprets only code it recognizes we have our work cut out for us. How do we do it?

We first have to remember that our three jobs as web developers is to store data, move data, and render data. The next is to always draw out our objects on paper, whiteboard and in our mind so we don't forget that everything is an object. Third, we have to practice gratitude for the languages we get to learn and be happy that we get to create stories and books with these programming languages instead of new words for every thought. After that, we must always reference our docs. [Docs are how to learn and remember object, properties, methods, and events](https://www.w3schools.com/jsref/obj_window.asp). And lastly, we have to keep learning and trusting that **you can do this**!




# The Video Element

*“In a time of destruction, create something.” ―Maxine Hong Kingston*

## Overview

Continuing on with our *Special HTML Element Week*, we're going to cover two important elements today: `<video>` & `<iframe>`. These elements are similar to the `<img/>` element but have some funny but useful attributes to play with.


<iframe src="https://player.vimeo.com/video/396008957" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

### The Video Element & Its Attributes

The `<video>` tag creates an HTML Video Element that will embed a media player into a page. This allows the user to interact with video playback inside the `document`. Just as you learned with the `<img />` element, the video element will get its content via the path to the media file specified inside a `src=""` attribute. Videos also come with the `width` & `height` attribute just like the <img/> element. But a few more attributes you haven't seen before include:

* `autoplay` - sets the element's `autoplay` property to true which tells the browser to play the video as soon as the page loads.
* `controls` - sets the element's `controls` property to true which provides built-in play/pause buttons and a tracking slider.
* `poster` - means thumbnail, which is the initial image you see before a video plays. If this attribute isn't specified the browser will use the first frame in the video. This attribute takes a pathname or URL.
* `muted` - sets the element's `muted` property to true which means the video will begin with no volume.
* `loop` - sets the element's `loop` property to true which means the video will play again when it finishes.

```html
  <video 
    src="./videos/myMovie.mp4" 
    width="320" height="240" 
    poster="./images/myMovieThumbnail.png" 
    autoplay controls
  >
  <video>
```

### Video Sources

The `<video>` element is pretty versatile. In fact, you can use it to provide multiple types of video files for multiple browsers. Say if you used [`.webm`](https://www.webmproject.org/about/) as a video format for Chrome but a user came to your site using Safari which only supports `.mp4` format you could deliver to them the "same video" through different formats by creating two `<source> `elements as child elements inside the parent `<video>` element. Check it out.

```html
  
  <video width="320" height="240" poster="./images/myMovieThumbnail.png" autoplay controls muted >

      
      <source src="./videos/myMovie.webm"
              type="video/webm" />

      
      <source src="./videos/myMovie.mp4"
              type="video/mp4" />

      
      <p>Your browser doesn't support the HTML5 Video Element. Here is a
          <a href="https://www.youtube.com/myhandle/myVideo">link to the video instead.
          </a>
      </p>
  </video>
```

  > NOTE: the `<source />` tag, like `<img />`, is self-closing, having no closing tag paired with it. In the new HTML5 specifications, it is optional to include the slash (conventionally written with a space preceding it) before the final angle bracket (*i.e., `<source>` works just as well as `<source />`*). HTML5 simply ignores the slash, but some technologies that intersect with HTML (*such as XML, and the JSX language used with React*) do require the slash; so it doesn't hurt to develop the habit of using it in elements that don't have closing tags, which are called **void elements**.

  > NOTE 2: Do you see where we placed a `<p>` tag in our `<video>` element? This serves as something like an `alt=""` text? In case the video doesn't load for the user, we explain the reason for this in the `<p>` tag, and provide a URL link to the youTube version of the same video in the `<a>` tag.

## The IFrame Element

So the `<video>` element is pretty straight-forward but remember, it is only used when you own the content, as in, it resides on your server. So what do you do if you don't own the content? Say for a youTube video? Well, that's where we use an [Inline Frame element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).

The `<iframe>` represents a nested browsing window, which effectively embeds another HTML page within the current page. You can include any number of `<iframe>` elements inside the `<body>` of a document, each of them displaying a separate page in the area covered by the `<iframe>`. While it can be used to display video, the `<iframe>` can **also** be used for things like games, code snippets for CodePen or Repl.it, and advertising. When it comes to video, `<iframe>` is used primarily when we are linking to the video on YouTube or Vimeo rather than storing the file on our server.

### IFrame Caution

You should know there are some security risks involved with the `<iframe>` element. The risk revolve around the fact that you are "effectively embed[ding] another HTML page within the current page". We won't go into the technicalities of this because it is beyond the scope of this course but you should be aware as you move forward. Read this short article, [3 Reasons You Might Not Want To Use Iframes](https://www.ostraining.com/blog/webdesign/against-using-iframes/) by Alex Smirnov to get an idea of the problems surrounding this special element.

## Additional Resources

- [ ] [YT, Kody Simpson - How to Use Video Tag](https://youtu.be/Ynuz1UGPoTg)
- [ ] [YT, tipswithpunch - Embed YouTube Video](https://youtu.be/9YffrCViTVk)
- [ ] [YT, Dani Krossing - HTML5 Video Embed](https://youtu.be/OOy764mDtiA)

  > NOTE: In the last video you'll learn about the CSS property `position` which is **very useful hack** to making element do what we want!

## Know Your Docs

- [ ] [MDN Docs - iFrame Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
- [ ] [MDN Docs - Video Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [ ] [W3S Docs - Getting Elements from inside an IFrame Element](https://www.w3schools.com/howto/howto_js_element_iframe.asp)







# Ways Of Thinking

Now that we have a better understanding of what we'll be doing in our next job role let's get into ways of thinking that will help us grasp the invisible medium we will be working with: electrons & binary!

Electrons. The [way computers work](https://www.youtube.com/watch?v=QZwneRb-zqA) does seem like magic. There's a lot going on "under-the-hood" that most of us have never been introduced to. Don't worry, most people have no idea that there is a grid underneath their phone's screen that catches their finger presses in an x-y coordinate and uses resistors to interpret where the press was and where the swipe ends. No doubt, there's some seriously fancy engineering going on in there that we don't need to understand but nevertheless, the data that results from those gestures ends up on the developers desk where we get to build software that can interact with a human and their fingers.

Binary. You've probably heard of binary, the language of computers! Yes, it is real and is still used. Thankfully, we as web developers don't need to understand binary because we get to develop software while standing on the shoulders of giants, who over decades have developed tools, or abstractions, of the basics of computer science. These abstractions are useful for more rapid development of software because we don't have to figure out how to communicate to our computer the color of red in binary, 111111110000000000000000 or the action of a button every time we have a new idea for an app. Instead, we build with these abstractions like HTML, JS, & CSS that already have pre-built definitions of the color red or the action of a button. All we have to do is learn the languages...these abstracted tools that help us develop faster!



## What Layer of Abstraction are We?

Since we're not physicist observing electrons passing through our phone screen and binary representing red actions, where are we actually developing? What level of abstraction are we working in if not in electrons or binary? In this course and the entire program, we'll be building websites and web apps that depend on the pre-determined structure of a computer and the HTTProtocol we've just learned about earlier. That structure and protocol are just two of the many layers of abstracted tools that we get to use to build!

To answer the question, in web development we are working at about the 10th layer of abstraction.

* 1st - Electrons and Transistors
* 2nd - DRAM memory and a [CPU](https://en.wikipedia.org/wiki/Central_processing_unit) using binary(1s & 0s)
* 3rd - Bits & Bytes
* 4th - Logic Gates - [AND, NOT, NAND, OR, XOR, ADDER](https://whatis.techtarget.com/definition/logic-gate-AND-OR-XOR-NOT-NAND-NOR-and-XNOR)
* 5th - Functions - small packets of instructions
* 6th - Operating System - computing the memory with functions
* 7th - Service Workers - small but massively important programs that keep your computer running smoothly
* 8th - Interpreters - programs used to interpret instructions from other apps into binary
* 9th - Browser App - an app that interprets your HTML, CSS, and JavaScript into visual elements with executable actions.
* 10th - HTTP, HTML, CSS, JS **<-- where we are now!**
* 11th - Libraries and Frameworks **<-- where we'll be in 211, 311, & 411**

**IT IS MOST IMPORTANT THAT YOU REALIZE YOU DON'T NEED TO UNDERSTAND THE FIRST 9 LAYERS OF ABSTRACTION!** Use this list to appreciate the work many scientists and engineers have done to create the environment we are lucky to inherit and develop within AND to know that these layers of abstraction create the fundamentals of how computers operate and communicate with one another. This means that our HTML, CSS, and JS code is just following the same foundational principals of computer science. Now all that's left to do is learn to use these abstracted tools(layers) to build website and web apps!

To learn and use these tools/abstractions doesn't require a CS degrees or knowledge of bits, bytes, interpreters, or service workers. It only requires you to see this development world from two perspectives at the same time while keeping another idea in mind, Object Modeling.



# The Window Object

A few lesson earlier you used the `alert()` method on the Window object but the Window object has far more abilities than just signaling an alert! In fact, it has 31 properties, 26 methods, and 80 events in total. You can learn to use each of them by [reading the documentation](https://www.w3schools.com/jsref/obj_window.asp) on them. For now, let's look at two of them `.open()` and `.close()` just to get familiar with the process of using them.

## Window.open & Window.close Methods

These methods, respectively, open and close a new window. Use that code you've been playing with to follow along:

```html

 <body>
   <button onclick="sayHello();">Click Me</button>
   <button onclick="sayHi();">Click Me Too</button>
   <button onclick="openANewWindow();">Open</button>
  
   <script>
     let secondWindow;
 
     function sayHello(){ alert('Hello, Window.alert Method!') };
     function sayHi(){ console.log('Hi, Console.log Method!') };
     function openANewWindow() {
       secondWindow = window.open("", "myWindow", "width=400, height=300");
     }
    
   </script>
 </body>
```

There are a few more bits of **syntax** to take in. We created a new function called `openANewWindow` and call it with a new button to `onclick` event. But there's something new going on at the top of the Script element and inside the `openANewWindow` function declaration. The `let` **keyword** you see up there signifies a place to hold a bit of data. We call this a **variable** because the bit of data that's held in these things usually change and we don't always know what value will be there, we just know we'll need to reference it later.

 > Think of how you might build a calculator. When the user types the first input you only know the number could be between -∞ and ∞; the same goes for the second input. Because of this programming challenge we have to create a place for the values the user inputs to be held until we know if we're going to add, subtract, multiply, or divide the numbers. This "place to hold values" is called a **variable** and we use the keyword `let` to communicate that in JavaScript.

After the **keyword** `let` we see `secondWindow`. This is the name of the variable and it’s used just the same way we name our functions, so we can reference them later in our program. It's important to know you can name your variables anything you want as long as they don't begin with a number(0-9) and are not one of [JavaScript's keywords](https://www.programiz.com/javascript/keywords-identifiers). The second guideline about naming variables is that they usually have descriptive names and are **camelCased**; `secondWindow` is a descriptive name for this variable it starts with a lower-case letter and has a capitalized letter at the beginning of its next word.

This particular variable would be described as **declared** but not **defined**. Try it.

 > Go to your DevTools, open the console tab and type `secondWindow` + ++enter++. What do you get?

You should get "undefined" as a return value. This is because the variable, the space for data, is declared but it has no value. Click the "Open" Button and re-type `secondWindow` in the console. What do you get? You should get something like: `Window {window: Window, self: Window, document: document, name: "myWindow", location: Location, …}`- This is another Window object opened by the browser and the properties and values you see listed are the key/value pairs of that new Window Object. The reason you're able to see these properties is because you saved a reference to this new Window object in the variable `secondWindow` and are now listing that data out in the Console.

### Window.Close

As you would expect there is an opposite method to the Open method, `close()`. Go ahead and create a function that calls `window.close()` and run it

```html

 <button onclick="closeTheNewWindow();">Close</button>
 
 <script>
   function closeTheNewWindow() {
     window.close();
   }
 </script>
```

What happened? Yeah, I tricked you. This code tells our current window to execute its own `close()` method. But we want instead for this Window to close the other window.

 > Hold ++cmd+shift+t++ (Macs) or ++ctrl+shift+t++ (Windows) to reopen that tab or simply relaunch Live Server.

The way we close this second window from our current window is to use that same variable we referenced in the Console to list out its properties. If we can get to its properties, we can get to its methods! Replace `window.` with `secondWindow.` and see what happens.

 > NOTE: You'll have to open the second smaller window before you can close it again.



## Know your Docs

- [ ] [W3S Docs - HTML Events](https://www.w3schools.com/tags/ref_eventattributes.asp)
- [ ] [W3S Docs - Window Object](https://www.w3schools.com/jsref/obj_window.asp)
# Asynchronous Code

*“Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.” –Stephen King*

## Overview


<iframe src="https://player.vimeo.com/video/409866764" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>


## Additional Resources

- [ ] [YT, Web Dev Simplified - Asynchronous vs Synchronous](https://youtu.be/Kpn2ajSa92c)
- [ ] [Reference, Eloquent JavaScript - Async/Sync Code](https://eloquentjavascript.net/11_async.html)
- [ ] [Blog, GitHub - States & Fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)

Don't worry, if all of this is a little more heady than it needs to be right now, you'll be practicing it more in your 200 Level class and building servers that return data to these promises in your 300 level class. In this course, you're just getting introduced and asked to request data to build simple web pages.

## Know Your Docs

- [ ] [MDN Docs - title]()








# Build Your Network

I don't like the term networking. It makes connection sound phony and cheap. Instead I like to think of it as building my network. Above you learned that we're all connected in more ways than we can imagine. So when you're talking to people truly reach out to them. Care for them. Practice genuine curiosity in them and I promise you won't have a hard time talk with people.

## Join a Meetup

This is the part of the course we'd suggest our students to begin attending a meetup. Obviously in the current pandemic we can't do that. For now, read about why you should plan to attend them in the future and set a reminder on your calendar in a few months to look for a meetup of interest. Meetups are a wonderful way to meet people with interests similar to yours. At [meetup.com](https://www.meetup.com/), you can find reasons to get out of the house and talk to new people every day. Use this to your advantage, and meet other developers, coding students, and recruiters!

Remember, this industry is so new, and so full of people tired of the typical corporate world, that it naturally invites "n00bs." The majority of people who work for tech companies are friendly, and willing to share their experience and knowledge to bring everyone around them up.

- [ ] Schedule a reminder to find a meetup.
- [ ] Find a meetup group.
- [ ] Reach out to someone in your class, and plan to go/zoom to a coding meetup together.
- [ ] Attend regularly.

# Class 9: Even-Odd List






*“What the caterpillar calls the end of the world, the master calls a butterfly. “ —Richard Bach*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE: After this class students will have a firm understanding of:*

* *Changing HTML Element Properties with JavaScript*
* *How JavaScript allows us to interact with the DOM*
* *Capturing DOM Events like onclick and onkeyup*

*****

- [ ] Questions for Student Led Discussion
- [ ] Student Presentations
- [ ] Creation Time
    * [ ] [Even-Odd List Follow Along](./../additionalResources/bonusMaterial/evenOddFollowAlong.md)
- [ ] Interview Challenge
- [ ] Exit Recap, Attendance, and Reminders

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-9.md)

### Student Presentations, 15 mins

[See Student Presentations List](./../additionalResources/studentPresentations.md)

## Creation Time, 30 mins

- Divide the class into pairs and work together.
- [ ] This is going to be a follow along so go ahead and create a new repo named `evenOdd-lists`.
- [ ] `git clone`
- [ ] Follow [these instructions](./../additionalResources/bonusMaterial/evenOddFollowAlong.md).
- [ ] *Optional*: If you'd like, you can copy/paste the CSS file, `generic-styles.css`, from this [repo](https://github.com/AustinCodingAcademy/101-important-to-do-list) and link it to your `index.html`

### Follow Up Questions

- [ ] What methods are new to us here?
- [ ] What is the modulus?
- [ ] How does this relate to the CSS and HTML we've learned? How is JavaScript used in web page development?
- [ ] What did we learn?

## Interview Challenge, 15 mins



[See Your Challenge Here](./../additionalResources/interviewChallenges.md)


## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create EvenOdd Assignment
- [ ] Prepare for next class by completing all of your pre-class lessons
- [ ] Complete the feedback survey(if applicable)









# Class 10: TicTacToe






*“There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures.” –Josiah Gilbert Holland*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE: After this class students will have a firm understanding of:*

* *Multi-Dimensional Arrays*
* *Representational Data*
* *Conditional Programming*

*****

- [ ] Questions for Student Led Discussion
- [ ] Interview Challenge
- [ ] Student Presentations
- [ ] Creation Time
    * [ ] TTT Fun Time - 60 mins
- [ ] Interview Questions: Blog to Show You Know
- [ ] Exit Recap, Attendance, and Reminders

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-10.md)

### Interview Challenge, 15 mins



[See Your Challenge Here](./../additionalResources/interviewChallenges.md)


### Student Presentations, 15 mins

[See Student Presentations List](./../additionalResources/studentPresentations.md)

## Creation Time, 60-90 mins

### TicTacToe

Back in [Class 5](./../module-2/class-5.md) you built a simple [TicTacToe Game](https://github.com/AustinCodingAcademy/TicTacToe-101). If you remember, it didn't have logic that told who or when someone won. Today, let's have some fun playing with JavaScript and let's see if we can all learn how to think a little more programmatically!!

Before we begin, let's create a new branch on our TicTacToe-101 repo.

- [ ] Go find its directory.
- [ ] Make sure you're on the `master`/`main` branch.
- [ ] Use the proper command to create a new branch named `TTT-Logic` and switch to it.
- [ ] Once you've done that let's move ahead!

    > When you finish your TTT board you were able to add "X"s and "O"s as well as clear the board. But now we'll need to compare the data inside those boxes to a set of "rules" to know if there is a win. To do this we have two problems to overcome:

    1. We have to access the data.
    2. We have to know the rules.

    > Let's start with the rules. The "set of rules" might look something like this:

- [ ] Horizontal Win, a.k.a, If row 0 equals all "X"s or "O"s:

    ```javascript
        if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
            || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
        )
    ```

    > This could be repeated for rows 1 and 2.

- [ ] Vertical Wins, a.k.a, if column 0 equals all "X"s or "O"s: 

    ```javascript
        if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
            || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
        )
    ```

    > This could be repeated for the next two columns.

- [ ] Diagonal Wins, a.k.a, If there is a line created diagonally across the board with "X"s or with "O"s:

    ```javascript
        if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
            || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
        )
    ```

    > This would be reversed for the opposite direction.

    > NOTE: You just saw new characters: `==`, `||` and `&&`. If you look at the docs on W3S about [Comparison Operators](https://www.w3schools.com/js/js_comparisons.asp) you'll see that `==` means "is-equal-to", `||` means "or" while `&&` means "and".

    > Now back to the first problem: Accessing the Data. We could use the `getElementById` method to access each box on the screen by it's `value` or `innerHTML` but this would be very expensive for computing power. So instead let's create a multi-dimensional array that can hold a **representational data structure** for our TTT board.

- [ ] Go to the top your `scripts.js` file and create an array called board with three arrays inside of it. Each of these inner arrays should have three places held with empty quotes: `""`, separated by commas, `,`.

    > If you look back up at those `if` statements you might be able to interpret that each one is checking to see what is inside each of the indexes of the arrays.

    > How do you create the representation of the data? In your `addMarker` function in `scripts.js` can you use the following code to set the value of each index in the board array to match what's on the screen? So in the end your `addMarker` function will insert an "X" or "O" in the DOM for the user to see as well as in the multi-dimensional array, board for your JavaScript to easily access.

- [ ] Inside `addMarker` add this line: `board[row][column] = currentMarker`

    > But how do you get the `row` and `column`?

- [ ] If you change the `ids` of each of the `<td>`s in the TTT board from `top-left` to say `0-0` & `middle-middle` to maybe `1-1`, etc... You could create `id`s that match their bracket-notation location in the board array. Then you could use the `parseInt` method to create numbers that you could use to access the arrays and indexes of board:

These variables hold the first and third letters in the element's id.

* `const row = parseInt(element.id.charAt(0))`
* `const column = parseInt(element.id.charAt(2))`

    > What's `charAt()` doing?

- [ ] But now you might have another problem, you're `onclick` might not work with your `addMarker` function because you've changed class names. If it's not, stop here and make sure you do get it working before moving on. Why isn't it working?

    > Now for the `checkForWin`. This bit will seem a little complicated at first but stay cool and breath.

- [ ] Copy/Paste the following code snippet into the bottom of your `scripts.js` file:


```javascript
   const checkForWin = () => {
     if(horizontalWin() || verticalWin() || diagonalWin()) {
       window.alert(`Player ${currentMarker} won!`)
     } else {
       changeMarker()
     }
   }

   const horizontalWin = () => {
     // Your code here to check for horizontal wins
   }

   const verticalWin = () => {
     // Your code here to check for vertical wins
   }

   const diagonalWin = () => {
     // Your code here to check for diagonal wins
   }
```

- [ ] Currently, at the end of your `addMarker` function you tell the computer to change the `currentMarker` from `"X"` to `"O"` or `"O"` to `"X"`. But you wouldn't want to do that if the game was won. So before telling the computer to change the `currentMarker` you would want it to first `checkForWin`.

    > The code snippet you copy/pasted has a function called `checkForWin` which you'll notice calls `changeMarker` if none of the winning rules(see above), are met.

- [ ] So inside `addMarker` you can replace the `changeMarker` call out for `checkForWin` because `changeMarker` will still be called if the other functions don't return `true`.

    > Now for the last part...

- [ ] Look back at the *rules* laid out above in those long `if` statements. Can you figure out how to write the if statements that will go inside `horizontalWin`, `verticalWin`, and `diagonalWin` using the **exact** code given to you in the rules and the code snippet? You'll have to expand upon these *rules* to make multiple `if/if else/else` statements for each to work.

**HAVE FUN and DON'T STRESS if you don't figure it out yet.**



### Follow Up

- [ ] Can a group show their code off to the class?
- [ ] Can one of the groups walk us through how this app works?

## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Blogs to Show You Know

[Blog Prompts](./../additionalResources/blogPrompts.md)

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create TTT-Logic Assignment
- [ ] Create Class 10 Blog Assignment
- [ ] Prepare for next class by completing all of your pre-class lessons
- [ ] Complete the feedback survey(if applicable)
- [ ] You've been working on your Barbershop Capstone Projects for a week now but if you have a little bit of time you should jump back on it! It's due this Sunday!

Next week we'll take our JavaScript skills to a whole new level when we start fetching data and rendering it on our web pages!!!









# Class 11: ToDo List






*“He who has a why to live can bear almost any how.“ –Friedrich Nietzsche*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE: After this class students will have a firm understanding of:*

* *Using Fetch API to interact with APIs outside of the browser*
* *Read documentation and use APIs*
* *Loop over JavaScript arrays and create multiple items*

*****

- [ ] Questions for Student Led Discussion
- [ ] Interview Challenge
- [ ] Student Presentations
- [ ] Creation Time
    * [ ] Todo List - 80 mins
- [ ] Push Yourself Further

- [ ] Exit Recap, Attendance, and Reminders

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-11.md)

### Interview Challenge, 15 mins



[See Your Challenge Here](./../additionalResources/interviewChallenges.md)


### Student Presentations, 15 mins

[See Student Presentations List](./../additionalResources/studentPresentations.md)

## Creation Time, 60-90 mins

Today you're going to use the Fetch API on the browser to fetch data from the [JSON Placeholder API](https://jsonplaceholder.typicode.com/) which will provide you with **dummy data** to create a todo list which will get you ready for next class, where you'll be filtering those todos!!

- [ ] Create and clone a new repo with a `README` called: " `Dummy-Data-Todo-List` ".
- [ ] Go ahead and turn in your homework now *(if you're instructor creates the place for it. ;)*
- [ ] Create files for HTML and JavaScript. (You can add CSS later.)
- [ ] You'll start with some code like this:

=== "The JavaScript"
    ```javascript
        // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }

    const logTodos = () => {
        console.log(arrayOfTodos)
    }

    const populateTodos = () => {

    }
    ```

=== "The HTML"

    ```html
        <button onclick="fetchTodos()">Fetch Todos</button>
        <button onclick="logTodos()">Log Todos</button>
        <button onclick="populateTodos()">Populate Todos</button>
        <ol id="todo-list">
        
        </ol>
    ```

- [ ] Notice the `<ol></ol>` element. This is an [Ordered List](https://www.w3schools.com/html/html_lists.asp) that takes only `<li></li>` elements, or [List Items](https://www.w3schools.com/tags/tag_li.asp).

- [ ] Use the Ol element to insert new Li element for each todo in the `arrayOfTodos`.

- [ ] Notice to that each object comes inside **curly-braces**, `{ }`. This is called a JavaScript Object. You can access an object's **properties** with **dot-notation**. See the example below:

    ```javascript
        const arrayOfTodos1 = [
            {
            "userId": 14,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 20,
            "id": 2,
            "title": "delectus aut autem",
            "completed": false
        }
        ]

        console.log(arrayOfTodos[0].userId) // => 14
        console.log(arrayOfTodos[1].userId) // => 20
    ```

- [ ] After you've been able to access and console the properties on any object in the array your next step is to insert that data into an `li` element and insert the `li` into the `ol`.
- [ ] Start with getting just the **first** item and its `title` property.
    * [ ] Then capture the `ol` item into a variable (getElementById)
    * [ ] `createElement` to make a new LI
    * [ ] `createTextNode` inside the `li` using the `title` property.
    * [ ] Now append the text to the new element
    * [ ] Then append the element to the `ol` element.
    * [ ] Put all of that inside your `populateTodos` function.

- [ ] `git status`, `add`, `commit`, `push`
- [ ] Now that you have one element created and showing up on the screen, put the same code inside a `for` loop and iterate over the `length` of the array. But now just change out `[0]` for `[i]`! (Refer back to your for loop lesson if needed)
- [ ] Remember to `commit` often.

## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create JS-ToDo List Assignment
- [ ] Prepare for next class by completing all of your pre-class lessons
- [ ] Complete the feedback survey(if applicable)









# Class 12: Filtering ToDo List






*“When written in Chinese the word “crisis” is composed of two characters – one represents danger and the other represents opportunity. “ –John F. Kennedy*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE: After this class students will have a firm understanding of:*

* *Using callback functions*
* *Filtering Data*
* *Project Planning*

*****

- [ ] Final 101 Project Planning Discussion
- [ ] Questions for Student Led Discussion
- [ ] Interview Challenge
- [ ] Student Presentations
- [ ] Creation Time
    * [ ] Filter Dummy API ToDos
- [ ] Push Yourself Further
- [ ] Interview Questions: Blog to Show You Know
- [ ] Exit Recap, Attendance, and Reminders

### Final 101 Project Planning Discussion

As you saw in your homework, next week you'll begin work on your new Portfolio Website, before we get to that let's gave a quick talk about what this is:

- [ ] Why: you will need to have a very sharp portfolio to represent you out there in the job market and you're first site is likely not to be your best work.
- [ ] What? A responsive portfolio website that includes,
    * [ ] A Landing page
    * [ ] An About page
    * [ ] A Resume page
    * [ ] A Contact Me page
    * [ ] An image gallery, so to speak, that will serve as your Portfolio Page. It will have thumbnails of all the websites you've built and hosted up to this point, that when clicked they will take you to those websites.
    *  [ ] design for phone, tablet, and laptop
- [ ] How: Team work and planning. So let's partner up:
    * [ ] First based on similar work schedules
    * [ ] Secondly, based on similar ideas of their website....so
- [ ] Let's have students that are willing to show their ideas off.
- [ ] Spend a few minutes chatting to find a partner.
- [ ] RocketChat/Chat your instructor you and your partner's name (one per group is fine.)
- [ ] With that, let's move to Trello and continue our discussion on planning.

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-12.md)

### Interview Challenge, 15 mins



[See Your Challenge Here](./../additionalResources/interviewChallenges.md)


### Student Presentations, 15 mins

[See Student Presentations List](./../additionalResources/studentPresentations.md)

## Creation Time, 60-90 mins

We'll still be using the same JSON Placeholder API and the same `/todos` endpoint but this time you're going to only show/*filter* todos created by one user, i.e. in the 200 todos you fetch you'll see there are 10 different `userIds`. With the input of a number and the click of a button your todo list should only show the todos of a selected ``userId``.

### The Specifications/Specs

- [ ] Using the assignment from yesterday, create a branch called: " Todo-Filtering ".
- [ ] Fetch the same data.
- [ ] Store the data in a variable.
- [ ] Add an input for the `userID`. This input should only take in a number from `1 - 10`.
- [ ] Add a button that when clicked will:
    * [ ] clear the previous todos from the view
    * [ ] and populate it with only todos with the userID that matches the number inputted.
    * [ ] then stores the currently filtered todos in a variable so that ...
- [ ] You can create two more buttons that when clicked:
    * [ ] removes those todos from the view
    * [ ] and shows only todos that are either:
        - completed
        - not completed

    > HINT-1: When you're removing and repopulating, remember that you're removing them from the DOM and not the array. 

    > HINT-2: Take these tasks one at a time.



### Push Yourself Further

- [ ] Build another column for Complete todos.
- [ ] Sort the todos on just one click,
    * [ ] Show only the selected userID's todos
    * [ ] displays the Completed todos in one column
    * [ ] and the incomplete todos in another.

## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Blogs to Show You Know

[Blog Prompts](./../additionalResources/blogPrompts.md)

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create Filter Todos Assignment
- [ ] Create Class 12 Blog Assignment
- [ ] Prepare for next class by completing all of your pre-class lessons
- [ ] Complete the feedback survey(if applicable)

In the next two week, you'll have class time to work on your Portfolio Website Rebuild but it won't be enough time to complete it because we'll be learning new tricks that will spiff up your pages. Talk with your partner over the next few days so you have a good idea of what you'd like to start on first thing next week!









# The Console Object

*“Most of us, swimming against the tides of trouble the world knows nothing about, need only a bit of praise or encouragement – and we will make the goal. “ –Jerome Fleishman*

## Overview

<iframe src="https://player.vimeo.com/video/400350624" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Practice It

- [ ] Fork & Clone the [101-ConsoleIntro Repo](https://github.com/AustinCodingAcademy/101-ConsoleIntro).
- [ ] Open it in your text editor and use Live-Server to open it in your browser.
- [ ] Open the Inspector Tools and find the Console Tab
- [ ] Back in your text editor, go to the README file and work through the 5 challenges.

## Working with the Console

If you practiced in the Try It Yourself section above you got used to writing the `console.log()` statement which will be the most prevalent command you'll use in the console.

But moving forward, it's important to remember that the Console, like each of the HTML Elements, is just another object-thing that has properties and methods you can set and call when you need. We'll not cover them all but here are the common ones to remember:

* `log()` - Outputs a message to the console
* `assert()` - Takes two arguments. The first is a callback function and the second is a condition to be compared to.
* `warn()` - Writes a warning message labeled in yellow; .err() writes in red
* `clear()` - Clears the console
* `count()` - Logs the number of times that this particular call to count() has been called
* `time()` - Starts a timer (can track how long an operation takes)

Take each of these methods into the repo you just cloned and write them throughout the code.

* Use `count` inside one of the functions that's called when you click a button.
* Use `time` at the top of each of those functions to time how long they take to execute.
* Add a button into your `html` file that calls the `clear()` method to wipe your console.
* Don't worry about `assert` you can use that in your projects in class if you like.


## Know Your Docs

- [ ] [MDN Docs - Console Object(API)](http://developer.mozilla.org/en/docs/Web/API/console)
- [ ] [MDN Docs - window.onload](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)
- [ ] [MDN Docs - addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [ ] [MDN Docs - preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [ ] [JavaScript.info - Forms: Event and Method Submit](https://javascript.info/forms-submit)

## Additional Resources

- [ ] [YT, Zenva - How to Use the Console](https://youtu.be/q9jAFZjPFHo)

# Collaborators over Competitors. Paying Attention over Getting Attention.

For most of us, the world seems set up in a certain way. I am me and everyone else is they. I must survive, thrive, fight, and defend against they. They are against me and anyone that tries to help me is deceitful and manipulative. But why is this? Why do we strike out on the road of our life thinking every weary traveler we meet will somehow have been plotting against us even before we met them? Why is it that we think we must dominant and subdue those that are outside of us. Obviously, this doesn't mean physical domination but more of a mental, emotional, and financial domination. WE typically see others as a person that can give us money or take money from us. WE see others as a thing that can give us undying love and comfort. WE see others as competitive force that we must conquer. But what if it wasn't this way at all?

What if actually the world is filled with a community of members that haven't spoken yet? That haven't dreamed together yet? They haven't communed together yet?

In the TedTalk below, Joseph Gordon-Levitt speaks openly and honestly about the traps we fall into while seeking creative attention. There are trials we all face and pitfall we all will make but knowing about them will give us the opportunity to pick ourselves up when we fall into traps.

<iframe width="655" height="368" src="https://www.youtube.com/embed/3VTsIju1dLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Follow-Up Questions

- [ ] What are some potential benefits of Attention Giving to creative processes?
- [ ] What are some ways Attention Seeking can impact your life?
- [ ] When have you experienced Attention Seeking? Why do you think it comes up?
- [ ] When do you experience Attention Giving? How do you think you got there?

# Develop Series: Curing Imposter Syndrome

You might have heard of this at some point in your life and maybe you don't/didn't believe in it. Maybe you are skeptical and think that everything that we can accomplish is what is directly available to us. I hope to help you change that. I hope to guide you to finding that really and truly, the mind manifests sickness in the body as much as it manifests growth, change, and ability in the body. Think of the body as this *gooey robot-avatar* thing and the mind is the OS or **Operating System** of this *gooey robot-avatar* thing. It can be updated, reprogrammed, and optimized to run the body more efficiently. Truly!

See how [Dr. Alia Crum](https://mbl.stanford.edu/people) describes and PROVES it!!


<iframe width="655" height="368" src="https://www.youtube.com/embed/0tqq66zwa7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## You're Not an Imposter

As you make the transition from your past job to a career in this new and challenging field, you may at times doubt your ability to do the work — solving problems with software. This is normal; these doubts trouble or even plague people at the every-level of experience. (*If you never feel this way you're one of very few lucky ones.*) If you're not one of the lucky ones...read on.

Look, right now you're learning a skill that you might have zero familiarity with. It requires a different, programmatic way of thinking and you might **subconsciously** believe you don't deserve good pay and a healthy creative work environment. Maybe you're allowing past experiences to shape your experience with learning to code. That's okay, forgive yourself and recognize that almost all of our students struggle with [Imposter Syndrome](https://www.fastcompany.com/40421352/the-five-types-of-impostor-syndrome-and-how-to-beat-them). It's a real thing and people struggle with it even after they're hired!!

In the talk below, Lou Solomon discusses how she first learned that anxiety, perfectionism, fear of failure, and self-doubt are the triggers and symptoms of Imposter Syndrome but moreover, she discusses why it's important to overcome this negative self-image and **HOW** she works on it everyday for herself.


<iframe width="655" height="368" src="https://www.youtube.com/embed/whyUPLJZljE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You're not an imposter. You're not in-over-your-head. And you're not a failure. And you're not a finished product! You're a human that is constantly being shaped, changed, improved, and currently learning something new and that always comes with challenges. Breathe, give yourself a break and later, when you need a reminder read this article on [How To Deal with Imposter Syndrome](http://time.com/5312483/how-to-deal-with-impostor-syndrome/).

### Imposter Action Item

- [ ] Post to @all in RocketChat that you are not an imposter. Go! Do it now!
- [ ] Find a place to write down for yourself this short message: "I have not learned everything I need, yet!"
- [ ] Place that message where you will see it every day for the rest of your time in code school. Maybe the bathroom mirror....

## Find a Podcast

Lastly, find a podcast to help you learn to code. A survey unveiled a staggering figure: [74% of Coding Students don't listen to podcasts to learn to code](https://www.freecodecamp.org/news/we-asked-15-000-people-who-they-are-and-how-theyre-learning-to-code-4104e29b2781/?source=featured---#2b47)!

Don't be one of those students! Instead, take a look at a few of the podcasts below and begin listening to them in your car. Replace your radio noise with people talking about the thing you want to get good at and get paid to do! Try it out and let us know what you find.

- [ ] [ShopTalk](https://shoptalkshow.com/) is probably the easiest podcast to get into. It focuses on Front-End development and involves listeners by answering their questions. If some of the things don't make sense when you first start, stick with it for a little while trying to figure it out. In this moment you're also learning to piece together information on your own. You're just learning a skill you didn't realize you actually needed.

- [ ] [CodeNewbie](https://www.codenewbie.org/podcast/) is a great place to get encouragement and perspective. SOOOO many people, like you, have and are switching careers. Listening to their stories will help create a sense of place, purpose, and direction for you. Remember, you are part of a community whether you know it or not. Start listening to that community so you can benefit from knowing you're part of the community!

There are plenty of other Web Development podcasts to follow and listen to but I recommend these two mentioned above first. As you mature as a web developer you will find yourself looking for more challenging topics and ideas to consider which you can find on [other podcasts](https://www.freecodecamp.org/news/the-best-podcasts-for-new-coders-and-the-best-tools-for-listening-to-them-df393b1c8dc/).

# Handle Your Feelings Before They Handle You

Feelings are a squishy topics. They slip out of our fingers as we grasp to reach them and dart this way an that any time words attempt to define them. Yet, they are fundamental currents of energy flowing inside of every one of us.

As promised, this course isn't only about learning to code but also about learning to be a better human being, learning more about yourself, learning about be a better collaborator, contributor, and community member. Below is a speech given by Therapist [Mandy Saligari](http://www.mandysaligari.com/) who knows all about feelings and their potential for growth and detriment. Listen close to the way she talks about the patterns of childhood experiences causing teenage rebellion to childish relations in adulthood. This might be one of the greatest lessons to be learned.

<iframe width="655" height="368" src="https://www.youtube.com/embed/JD4O7ama3o8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Follow-Up Questions

- [ ] As you've worked through the class lesson and pre-homeworks you've most certainly felt some sort of frustration. How would you describe the feelings that are flowing underneath? What did you do to be with them?
- [ ] In relation to the speech, why do you think we're talking about feelings here?

# Git Branch Review

*“There is in every true woman’s heart a spark of heavenly fire, which lies dormant in the broad daylight of prosperity; but which kindles up, and beams and blazes in the dark hour of adversity. “ –Washington Irving*

## Overview

<iframe src="https://player.vimeo.com/video/407583549" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

So far we've used the git software for it bare minimum capabilities: `add` files, `commit` them to the staging area, check the `status` of our changed files, and `push` the changes to a remote repository. This is great, btw! Mastering these commands is crucial to your success because you'll be using them everyday of your development career. However there are three command we need to introduce now so you can further grow as a developer. They are: `git branch`, `git checkout`, and `git pull`.

## Branching

Throughout each of your projects you've been working on your own in a single branch: `master`/`main`. And this is fine if you're working by yourself because you don't have other developers changing the code causing **merge conflicts**. But, next week you'll begin collaboratively working with classmates on projects to prepare you for working on teams in your career. Remember, websites are not built by a single person, they have many teams, each with multiple people working on specific aspects of the website.

In order for these teams to work together and not mess each other up as they do it, they use a functionality of git called **branching**. Branching means that we create an identical copy of the current code base onto a virtual branch that is connected to the main branch.

Let's say you and your nearest classmate began working on a project, you or they could create a repo that includes a `README.md` file and an `index.html` file. Then you both clone it to your local computers. If you open it up it will be on the `master`/`main` branch and so will theirs.

If you both code on this same branch then try to `push` the code up, it won't allow you to because there will be a conflict in the files.

To safely, prevent against this you could create a branch **off of** `master`/`main` called something like: `jills_landing-page-branch` and your partner could create another branch **off of** master called: `jacks_gallery-page-branch`. Then you both could code up what you need to do. When you're finished, git push to add the code to the repo, but on a different branch than master or `jacks_gallery-page-branch`. Before you two *merge* these branches into `master`/`main` you would review Jack's code and Jack would review your code.

The point of branching & reviewing is that each of the developers on a team get to work with the same code base but not introduce bugs as easily.

  >  Note: As of the writing of this ebook, gitHub is in the process of switching the name of `master` branch to `main` branch.
  > Henceforth, we shall call `master` as `main`.

### How to Branch

It's actually just as easy as any of the other git commands. Once you've cloned a repo you can:

1. create a new branch: `git branch jills_landing-page-branch`
1. switch to that new branch: `git checkout jills_landing-page-branch`
1. *or* do **both** at the same time: `git checkout -b jills_landing-page-branch`

Look at those three commands one more time. One creates a new branch, another changes your workspace to the branch, and the other does both at the same time.

  > NOTE: If you've created a new branch you can't create the same branch again. You'll just use `git checkout` to switch between it and `main`, `git checkout master`

  > MAJOR NOTE: When you read **off of** `main` above, this means that you should only create a branch while in `main`, **not off** of another branch. If you do that, you'll create a branch off of `main`, then another branch off of that new branch and so forth and so forth. This is not good and you'll loose track of where your code is. DO YOURSELF A FAVOR, **only** create a new branch if you're currently on `main`.

What you should have learned:

- [ ] Why we need branches.
- [ ] When to branch.
- [ ] The difference between each of these commands:
    * [ ] `git branch branch-name`
    * [ ] `git checkout branch-name`
    * [ ] `git checkout -b branch-name`
- [ ] Only branch **off of** `main`

## Merging & Pulling

Merging usually only happens in GitHub not on the terminal. After you `push` up the changes from your personal branch to the repo, you can go to the repo on GitHub and create a **Pull Request**(PR). This is your request for the code base administrator, i.e. your partner or team lead, to *pull* your code into the `main` branch.

If they review your code and determine that it is clean, bug free, and accomplishes the tasks it is suppose to do then they will **merge** it into `main` and normally delete your personal branch from the repo.

Then you will go to your terminal and find the code base your team is working on and switch to the `main` branch (`git checkout main`) so you're back in the main code base. Since your team lead has merged your latest changes to `main` you can run the command `git pull` to pull all of the code that was merged to `main` since you cloned it. These merged changes would include your code and all of your teammates' code as well.

The process would continue from there when you received your next task where you would create a new branch off of `main`, make your changes, `git push`, create a **PR**, wait for the merge to be approved, then `checkout main`, and `git pull` the changes again. *Repeat, over and over again for the rest of your career.*

What you should have learned:

- [ ] We create new branches to have a personal sandbox for us to build our code.
- [ ] When we're finished we `push` those changes and create a **Pull Request**.
- [ ] Then our team lead approves and merges that branch into `main`
- [ ] After that, we `checkout` back to `main` and `git pull` all the latest changes.
- [ ] Then we start over again by `git checkout -b new-branch-name`.

### One Small Gotcha

After you've created your new branch, the remote repo won't know about it because it currently only exist on your **local machine**. This means that when you attempt to `git push` you'll get an error that looks something like this:

```console
➜  101-git-practice git:(jills_landing-page-branch) git push
fatal: The current branch jills_landing-page-branch has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin jills_landing-page-branch
```

Yes, the `fatal`: sounds terrifying but all it really means is that the command you last put in didn't resolve/complete. And, git is so nice that it gives you the fix with the error message!!! Do you see the line that starts: `git push --set-upstream`....? Just copy/paste that line back into the terminal = ++enter++ and it will resolve the issue.

  > STUDENT: 'What does that line do?'
  > INSTRUCTOR: 'It creates an origin in the repo that matches what's on the local computer.'
  > STUDENT: 'So, it creates a branch on the remote repo that's called: `"jills_landing-page-branch"`?'
  >INSTRUCTOR: 'Yes. Using the additional arguments: `--set-upstream` and `origin` we can tell the `push` function to create a place for this code to go that is on the original repo as well as push the new code up! Look at the docs for `push` for more information.

## Additional Resources

- [ ] [YT, Jake Vanderplas - Creating a Simple PR](https://youtu.be/rgbCcBNZcdQ)
- [ ] [YT, helpmecoder - Git Branching & Merging](https://youtu.be/hufGg2mf7eA)

## Know Your Docs

- [ ] [git SCM Docs - branch](https://git-scm.com/docs/git-branch)
- [ ] [git SCM Docs - checkout](https://git-scm.com/docs/git-checkout)
- [ ] [git SCM Docs - pull](https://git-scm.com/docs/git-pull)
- [ ] [git SCM Docs - push](https://git-scm.com/docs/git-push)

  > [What's SCM mean](https://www.google.com/search?q=what+does+scm+mean+in+git+scm)?







# How to Plan

*“Big jobs usually go to the men who prove their ability to outgrow small ones." –Ralph Emerson*

## Overview


<iframe src="https://player.vimeo.com/video/409871769" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

Look, planning is everything to success! Think back on any project you've ever worked on. Did you find it hard to motivate yourself while you didn't know what to do? Did you struggle to figure out the next step? Or did you know where you were headed and were able to step through each challenge as the came?

In either case, I hope you're able to see right now that having a general plan with large tasks broken into small steps will help you stay focused one step at a time that will accumulate to create one large achievement. I like to remind student's: "Rome was not built in a day, and neither was Google." All of these websites, apps, and services we know as pillars in our society now were, at one point in time, nothing, and all of them were built slowly, step at a time, within an overarching vision/plan.

We're introducing planning here because in the following two weeks you'll be building a new portfolio project with a partner. This additional developer will introduce new challenges for you and them that you'll need to overcome if you want to work in this industry, so let's figure it out!

## Breaking it Down

Remember, a **website** is many **web pages** linked together through **anchor** tags. (*Gives you a pause to think why they were named Anchor Tags...*) In this way, we can begin breaking down the massive tasks of building a website into the pages.

### Practice It - What are the Needs?

- [ ] Go get your notepad and pencil.

  Your final project for this class will be a rebuild of your portfolio website that includes:

  - A Landing page
  - An About page
  - A Resume page
  - A Contact Me page
  - An image gallery, so to speak, that will serve as your Portfolio Page. It will have thumbnails of all the websites you've built and hosted up to this point, that when clicked they will take you to those websites.

- [ ] Write those pages down on 5 different pages as the header for each page.

- [ ] Now begin with your landing page. What does it need? And what would you like to have on it. List those on the page for the Landing Page.
- [ ] Now think about what websites you've built and which of them will be displayed on your Portfolio Page. How would you like it to look and what does the page need to have on it? Write and draw those on the page for Portfolio Page.
- [ ] Resume this for your Resume Page. Write down the needed information and elements. Sketch it out if you have an idea of how it looks right now.
- [ ] And do the same for your About Page and for your Contact Me Form.

*Finish the steps above before continuing.*

### Practice It - How Are Those Needs Expressed?

We're going to get to looking at examples of Portfolio websites but right now I want you to know what you want. Be in touch with that so that you're not corrupted by someone else's vision before you know what you want; what you're capable of creating.

Remember, we're not dealing with code here, we're planning out what the website should look like, what the feel of it is, how it represents you.

- [ ] Close your eyes and think of all 5 pages laid out in-front of you. How do you see them? What do they look like? what shapes do you see? What flow do you see?

  > With each of these steps you should pause, close your eyes and think about them. Remember, this is the discovery of your creativity which you and everyone else has. It just takes space & time to see it. Give yourself that space & time now.

- [ ] Starting from your Landing page, where do you want the user to look to find your Portfolio? How do the thumbnails appear? Are they popping up with animations? Fading in? Sliding in? How does your web page feel?

- [ ] Once a user likes what they see how do they find your Resume? Contact Page?
- [ ] Once you're website has been sent from the recruiter to the hiring manager how do you want your Blog/About page to appear?
- [ ] Draw, however you can, sketch and find a way to capture what you see in your mind! Go!!

### Practice It - Getting Inspiration

Now that you've envisioned what you want to represent you:

- [ ] Google search "web developer portfolio websites". Look through the results and see what you come up with.
- [ ] Write down and keep up with the URLs of the website you like or have elements you'd like to mimic.
- [ ] With each URL, write down what you like about them so you're ready to talk to your coding buddy about what you want to build together. We'll talk about wireframing later.

## Summary

If you spent time with the steps above you see that planning is really taking large tasks and breaking them into smaller more manageable steps. You see, our minds have a finite amount of focus space. We can use that focus space to see the grand view or we can use it to focus on the details that make up that grand view, but we can't do both at the same time. Because of this, we have to learn to switch our minds focus from grand to small, then to grand and back again.

This is where your meditation will pay dividends! The more you train yourself to switch your focus and not give energy to distractions the better and faster you will be at programming, coding, society, people, you, your relationships, and emitting less carbon so our children have a prosperous Earth to live on the way we were given her to live on.

## Additional Resources

- [ ] [YT, Amy Landino - How to Plan Your Day](https://youtu.be/e7QrmHiF2SI)
- [ ] [YT, CharlieMarieTV - Planning & Site Mapping](https://youtu.be/-Dwo-UOjDuw)
- [ ] [YT, CharlieMarieTV - Designing a Website in Webflow](https://youtu.be/zHhKAwcqdNY)








# HTML Fetch API

*“I decided, very early on, just to accept life unconditionally; I never expected it to do anything special for me, yet I seemed to accomplish far more than I had ever hoped. Most of the time it just happened to me without my ever seeking it.” –Audrey Hepburn*

## What is the HTML Fetch API?


<iframe src="https://player.vimeo.com/video/409867819" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

=== "The JavaScript"

    ```javascript
      const getRemoteData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => console.log(json))
      }
    ```

=== "The HTML"

    ```html
      <button onclick="getRemoteData()">Get Data</button>
    ```

- Take the code snippet you see above and throw it into one of your projects.
- Create a button and attach a function to it that when clicked will call this fetch code.
- Check out the [JSON Placeholder Documentation](https://jsonplaceholder.typicode.com/).

  > HINT: Start with changing the end of the URL in the request from 1 to 2...or something else...

## Additional Resources

- [ ] [YT, Paul Halliday - How to Use Fetch](https://youtu.be/tVQgfKqbX3M)
- [ ] [YT, Web Dev Simplified - Fetch API in 6 mins](https://youtu.be/cuEtnrL9-H0)

## Know Your Docs

You've become used to W3Schools as your main documentation provider. But as you move into JavaScript, I suggest you start learning with Mozilla Developer Network(MDN) documentation. They have more robust explanations and cover deeper topics in web development.

- [ ] [MDN Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [ ] [W3S Docs - JSON](https://www.w3schools.com/js/js_json_intro.asp)
- [ ] [MDN Docs - Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- [ ] [JSON Placeholder Documentation](https://jsonplaceholder.typicode.com/)








# Intro to APIs

*In the middle of every difficulty lies opportunity. —Albert Einstein*

## Overview


<iframe src="https://player.vimeo.com/video/409866081" width="655" height="368"frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

In class we'll be writing JavaScript that will use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) of the browser which will then talk with [another API](https://jsonplaceholder.typicode.com/) that will provide to us fake todo items we can use to populate a todo list!

I'll stress this now, you don't have to build an API or figure all of the pieces to it this week. Just open your mind to exploring what they look like in your mind's eye. Use the video below to help.

### What's An API?


<iframe width="655" height="368" src="https://www.youtube.com/embed/s7wmiS2mSXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Know Your Docs

- [ ] [MDN Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [ ] [MDN Docs - title]()








# Intro To Sorting

*”Fall seven times, stand up eight.” –Japanese Proverb*

## Overview

Let's start with a code snippet:

```javascript
const words = ['ray', 'limitless', 'elite', 'exuberant', 'devotion', 'presence', 'great'];

const result = words.filter((word) => word.length > 6);
```

Above we see an array is created called words, that has multiple strings in it. Then we see a variable called `results` that is pointing to the value of `words` with the .`filter()` method called on it.

`.filter` is another method on array *object-things* and it takes a special argument: a **callback function**

  > WAIT! Before you get hung up on trying to figure out what that means, do you remember when we saw an **anonymous function** passed into a `.then()` method while learning `fetch()`? Well...that too was a **callback function**. In both cases, the code snippet above and the `.then()` use an anonymous **callback function**.

  * An **Anonymous Function** is a function that doesn't have a name and can be passed into another function, or method.
  * A **callback Function** is a function placed into another function, or method, that will be called multiple times. It can only be used in methods or functions that use a callback functions like `.filter()`

So, reading the code again,

```javascript
  const result = words.filter((word) => word.length > 6);
```

We can expect whatever is returned from `.filter()` will be saved into the value of `result`. From the [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), we can also know that `.filter()` returns an array so results will be an array of something.

What will this *something* be?

For that we can look at what is passed into this anonymous function that will be called back, which is:

```javascript
  word => word.length > 6

  // or in long-hand
  (word) => { word.length > 6 }
```

The word `word` is not unique. We could have just as easily named it `greta`, so long as the next part was `greta.length > 6`. `word` is just holding the value of each value in the array: `words`.

Now we know that `.filter()` loops over an array and applies what is inside of its callback function. Which in this case is `word.length > 6`. This means that all words that have more than six letters will be added to the new array, `results`.

From all of this we find that `.filter()` creates a filter for large sets of data in an array!

```javascript
  const words = ['ray', 'limitless', 'elite', 'exuberant', 'devotion', 'presence', 'great'];

  const result = words.filter(word => word.length > 6);

  console.log(result);
  // Try it yourself, paste this into your browser's console, repl.it, or in a new repo and let it fly
```

Now that you know how JavaScript's `.filter()` works you can apply it to your todo application!!








## Additional Resources

- [ ] [YT, Programming with Mosh - JavaScript Array Filter](https://youtu.be/4_iT6EGkQfk)

## Know Your Docs

There's more to filter including two other argument that filter's callback takes so make sure you checkout the docs.

- [ ] [MDN Docs - Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)








# Intro To Loops

*“Press on – nothing can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Perseverance and determination alone are omnipotent.” –Calvin Coolidge*

## Overview

By now you've probably understood that we write/build functions as sets of instructions that sit in storage until the computer needs to use/execute them. These sets of instructions are very useful because we can ** our web pages to do specific actions when a user interacts with it. And so far, we've built simple actions, however, if we want to build more complex sets of instructions we'll need to learn why and how to use **.

Loo**ps are just like what they sound like. Under certain conditions, the tasks detailed inside the set of instruction should loop until the conditions have changed.

### What's a Condition?

A condition is a certain **state**; as in the current *state* or *status* of something.

If you arrive at an intersection and the light is red then the condition is `light = "red"`. But if you arrive at the intersection and the light is green then the condition is `light = "green"`. Based on these two different *states* we could tell the program to do certain things. Let's pretend we're programming an driverless car! We might be able to write a conditional statement that looks like this:

```javascript
  const checkLight = () => {
    if (light = "green") {
      accelerate()
    } else if (light = "red") {
      stop()
    } else {
      slowDown()
    }
  }

  checkLight()
```

In the code snippet above, we see a simple JS function that does one of three things based on a certain condition, the color of the `light`! We are getting a little ahead of ourselves right now because today we're going to cover two different loops: `while()` and `for()`. Both of these loops are commonly used in programming. But to use either of these loops you'll need to have a basic understanding of **conditional statements**. Now that you do, let's get to it.

### While Loop

Remembering what you just learned about conditions, look at the code snippet below and see if you can figure out how this built-in functions works.

```javascript
  let light = "red"

  while (light === "red") {
    holdBrake()
  }
```

A while loop is function built-in to the JavaScript language that will execute its **Action Statement** as long as its **Conditional Statement** evaluates to true. In the code above, as long as the light is red the car should *holdBrake()*. If the light should change the car will cease *holdBrake()*.

Explore the example below.

```javascript
  const countOneToHundred = () => {
    let counter = 1
    while (counter <= 100) {
      console.log(counter)
      counter++
    }
  }

  countOneToHundred()
```

Stop an ask yourself:

- [ ] What does the condition statement say?
- [ ] What is the line `counter++` doing?
- [ ] Throw this into your Console Tab and try it out yourself!
- [ ] You'll use this loop in the next class. Make sure to spend sometime learning this for yourself.


### For Loop

Last lesson we learned about Arrays and why they're really useful. To add to their utility, let's now learn how to use their **indexes** to **Loop/iterate** over arrays. To **loop** or **iterate** means that we ask the computer to traverse each item in the array so we can do something with each item.


<iframe src="https://player.vimeo.com/video/385377379" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

Like the **while** loop, a **for loop** repeats an actions over and over until a specified condition evaluates to false; the difference is that it's meant specifically for an array. What that means is that we tell the for loop how long an array is and what actions to do until we've looped over each item in the array/its traversed the length of the array.

First things first:

1. A `for()` loop is a built-in function that takes in arguments like any other function.
2. The arguments of the `for()` loop function are always in 3 and always go in this order:

    ```javascript
      for ([initialExpression]; [condition]; [incrementExpression]) {
        action statement
      }
    ```

    `Initial Expression`
: declares an iterator variable that will hold a number.

    `Condition`
: when the iterator meets this specific value the loop will stop.

    `Increment Expression`
: Tells how much the iterator number should increase or decrease.

    `Action Statement`
:is where we detail a set of instructions to do on every loop.

Look at the syntax below:

```javascript
  const arrOfNums = [2, 33, 4, 54, 13, 8, 79]

  for (let i = 0; i < arrOfNums.length; i++) {
    console.log(arrOfNums[i])
  }
```

From the code above we can see that an array is created that hold a handful of numbers. Then, a for loop is given three argument:

  * `let i = 0;` creates a variable called `i` and sets it to `0`
  * `i < arrOfNums.length - 1;` creates a condition for the loop to stop when its met.
  * `i++` continually adds 1 to the value of `i`

  > BUT WAIT!! We just saw some code we've never seen: `.length`! True, this a property on arrays and string data types. We can access this value and use as we like... in this case, to evaluate when our loop should stop. Just like HTML elements have properties like `color`, `border`, and `padding`, so too do Arrays, Strings, and Numbers!!

  > Everything is an object and every object has properties and methods!

Check out the code below. [Run it yourself](https://replit.com):

```javascript
  let alphabet = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ]
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const logCharacters = (arr) => {
    for (i = 0;  i < arr.length; i++){
      console.log("current character is " + arr[i]);
    }
  }

  logCharacters(alphabet)
  logCharacters(digits)
```

In the code snippet above, the `for` loops states:

1. Read the `for()` line. What is it saying?
1. Where is `arr` coming from?
1. How does `arr` allow us to call the function with two different arrays passed to it?

## Practice It




For each of these you can write them in a new `.js` file and run them with live-server or use [Repl.it](https://replit.com); as long as you use `console.log()` to see the results in the Console Tab.

- [ ] Create a while loop to print out numbers from 1 - 10.
- [ ] Create an array and a for loop that will iterate over it backwards.
- [ ] Create a while loop to prints out every multiple of 3 up to 100.

## Additional Resources

- [ ] [YT, whatsdev - While Loops](https://www.youtube.com/embed/eQS9C_ZxKt0?start=12)


## Know Your Docs

- [ ] [MDN Docs - While Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [ ] [MDN Docs - For Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [ ] [MDN Docs - Conditional Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)








# JS Function Syntax

*“Often we women are risk averse. I needed the push. Now, more than ever, young women need more seasoned women to provide that encouragement, to take a risk, to go for it. Once a glass ceiling is broken, it stays broken.” –Jennifer Grahnolm*



## Overview

Functions may seem scary at first but if you think of them in the same way CSS rules are built, they're actually the same thing! See when you select an element and give it rules those rules are like a function waiting to be called. Usually they're called when the web page loads. Or, if you use a pseudo selector, the rule is called when the user does the thing you were looking for like a `:hover`. In this same way, JavaScript functions are just recipes or sets of instructions waiting to be called and used when they're needed!

Obviously you've already worked with some JavaScript in a few of your projects but starting today we're going to slow down a little to focus on JavaScript. It can be a little harder to grasp than CSS but I think if you work to ask questions, answer your own questions, and ask more questions then you'll get this very quickly!



## What is Syntax?

**Syntax** is a funny word and not often used outside of programming. But, in fact, this word was used before programming was created.

A [Google Search](https://www.google.com/search?q=syntax&oq=syntax) provides the following:

  > "the arrangement of words and phrases to create well-formed sentences in a language. From the Greek, Suntaxis, - To arrange together."

What this means for us is that certain **keywords** and **characters** must go in specific order for the computer to interpret what we're trying to tell it. Just the same with CSS we have a **Selector**, **Property**, **Value** and **Declaration Block** and with HTML we have an **Opening Tag**, `<h3>` and a **Closing Tag**, `</h3>`, we have specific syntax for JavaScript functions, as well. Take a look:

```javascript
  // Function Declaration
  const separateWord = (word) => {

    // Function Body (between the { } )
    const splitUpWord = word.split("")

    // Function Return Statement
    return splitUpWord
  }
```

The code snippet above:

1. creates a **function** called `separateWord`
2. which takes in a **parameter** named `word`
3. and creates a new **variable** inside its **Function Body** called `splitUpWord`
4. then assigns this new variable's value to what the **method** `.split() `returns when 5. it is called on the `word` that is given to the function.
6. After this the function returns the value of `splitUpWord`.

If we **called** this function with the word: "Balloon" like so, `separateWord("Balloon")` we would expect it to return the following: `["B", "a", "l", "l", "o", "o", "n", ]`

```javascript
  separateWord("Balloon")
```

### What Can We Learn From This?

In this small example you can deduce that JavaScript, like CSS and HTML reads from top to bottom and left to right. We call this **Synchronous**, or that each action happens after the last action is finished, one at a time.

We can also see that a **function** is created the same way a **variable** is created, using the const **keyword** and then **naming** it what we'd like to name it.

Next we see that, besides having to use the JavaScript Language Specific **Keywords** like `const`, `.split()` and return we as the developer get to decided on the names of our functions and variable. In the snippet above we get to decide the name of `separateWord`, `word` and `splitUpWord`. We could have just as easily named these `crumble`, `cookie`, or `chip` and the program would have still done the exact same thing!

Now we can focus in on the characters or **tokens** used in sequential order. After the name of the function, separateWord we see the following characters: `= () => {}` these character go in order every time you create a function and you can read them aloud to yourself like this: "Create a variable called `separateWord` that equals a function and returns the following..." Where:

```markdown
* `const` - "Create a variable..."
* `separateWord` - "...called separateWord..."
* `=` - "...that equals..."
* `()` - "...a function..."
* `=> {}` - "...and returns the following..."
```

So you see then that a pair of parenthesis, `()` signifies a function in JavaScript. This is where we declare **parameters** when we declare a functions and where to pass in **arguments** when we call/invoke a function.

A **Fat Arrow**, `=>` shows that it returns whatever follows, and a pair of curly-braces, `{}`, (just like CSS), is a block of code to be run when the function is called.

### Alternative Syntax

We've just covered the *preferred* way to create a JavaScript function, now we'll show you the older way to create a function. This way is still used and you might even use it later on in your coursework and career but for now just know that it exists but that we'll use the preferred signature, (detailed above), throughout this course.

```javascript
  function separateWord(word) {
    const splitUpWord = word.split("")

    return splitUpWord
  }
```

This method uses the **reserved word** `function` to declare the same function as we saw above. It has it's [purposes](https://mrkiffie.com/2017/anatomy-of-a-javascript-function/) but for now let's just let it reside in our awareness.

## Invoke a JavaScript Function

Declaring a function is the hard part. It's where you write out the steps you want your computer to do when that function is **called** but when the computer reads the **function declaration** it doesn't *run* the code. Instead it just stores it in memory as a set of instructions to do before it's time to run them.

Therefore, **invoking** or **calling** a function is when the function is actually run. The syntax of this is really simple, it looks like this: `myFunction()`.

That's it! Seriously, when ever we want your computer to run a function you've built you give it a simple line: `thFunctionsName()` where the name of the function is followed by a pair of parenthesis, `()`.

## Parameters vs Arguments

Not all functions have **parameters**. Parameter are bits of data that functions hold on to and use to make calculations or perform specific tasks on like our separateWord example above. That function example had a parameter we called word. Which means, we the function is called it needs a piece of data like a word, or **string**, given to it so it can perform the tasks it's supposed to perform. When we give, or **pass**, data to a function we call it an **argument**. Below is an example of two functions. One requires a parameter and the other does not. Then you'll see them both invoked, one with an **argument** passed to it and the other without.

```javascript
  // requires an argument to be passed to it because it has a parameter defined as "username"
  const sayHi = (username) => {
    greetingString = "Hi, " + username + "!"

    return greetingString
  }

  // doesn't require an argument because it has no parameters defined
  const sayHello = () => {
    return "Hello!"
  }




  // This line will return: "Hi, Greta!" because we passed it an argument: "Greta"
  sayHi("Greta")

  // This next line will return: "Hello!"
  sayHello()
```

## As We Move Forward

As we add more to our JavaScript knowledge base you'll see methods like `.split()` used again and again. So let's take a minute to cover three aspects that will give us a solid foundation of what they are and how they're being used.

**Aspect 1**. Just like the methods you're used to on the `document` or on each of the HTML Elements, methods in JavaScript are **built-in** to the language and are specific to the **Data Types** just like certain methods are specific to certain HTML Elements. In the case of `.split()`, this method is specific to the **String** data type, or words/characters inside a pair of quotes, `" "`. You can't call this method on a Number data type because it doesn't exist on **Number** types of data! So you can start thinking of the **Data Types** a lot like the Elements we create on the DOM Tree. They are plain object-things we can't see but have many little properties we can access on the back side of them.

**Aspect 2**. The syntax of `.split()` looks just like the syntax of **Invoking** a JavaScript function we built ourselves. That's because it is. These **methods** were built by the developers of the JavaScript language and reside under-the-hood. We don't have to build them, all we have to do is [read the docs](https://www.w3schools.com/js/js_string_methods.asp) on them and know how to use them.

**Aspect 3**. The `.split()` method returns a funny looking thing called an **Array**. (*Remember, `["B", "a", "l", "l", "o", "o", "n", ]` from above?*) This is another **type of data** in JavaScript which we're going to dig into in the next lesson. It's important to understand simply that each *type of data* or **data type** has utility for specific scenarios. The Array data type has the most built-in methods so it's often advantageous to convert data like a string to an array. You'll see in the next lesson!!

## Practice It

Go to [W3Schools JavaScript Exercises](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_datatypes1) and complete the first 15 challenges in JS Variables, **JS Operators**, **JS Data Types**, and **JS Functions**.

  > HINT: in **JS Data Types** you'll be asked about a data type we haven't covered in length yet. It's an Object.

## Know Your Docs

- [ ] [MDN Docs - Old-School Function Syntaxt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)


# Nested Arrays

*“Do one thing every day that scares you.”―Eleanor Roosevelt*

## Overview

Nested Arrays or **Multi-Dimensional** Arrays at first sound scary and crazy. But, rest assured, they are simple and very easy to use.

Remember how we learned that Array data types are really lists of other objects like Numbers, Strings, Functions, and yes, even other Arrays? When we have an array nested inside of another array we call them **Nested** or **Multi-Dimensional** Arrays.

```javascript
  const myArr = [
    [1, 2, 4, 88, 54, 91, 3],
    ["let", "live", "love", "leadership", "last", "lofty", "leader"],
    [personObj, personTalkFunc, addPersonFunc, removePersonFunc],
    [[3, 5, 6, 99], [100, 6, 4, 2], [77, 81, 9]]
  ]
```

The array, `myArr`, from the snippet above has 4 objects inside of it; the fact that each of those objects is an array makes it an array of 4 arrays. Do you see them? Each is separated by a comma, `,`.

If we logged each of these arrays to the console we'd see the following:

  * `myArr[0]` => `[1, 2, 4, 88, 54, 91, 3]`
  * `myArr[1]` => `["let", "live", "love", "leadership", "last", "lofty", "leader"]`
  * `myArr[2]` => `[personObj, personTalkFunc, addPersonFunc, removePersonFunc]`
  * `myArr[3]` => `[[3, 5, 6, 99], [100, 6, 4, 2], [77, 81, 9]]`

  > Do you see it?

The beauty of Multi-Dimensional Arrays is that we can continue stacking, or **chaining** bracket-notation on top of other brackets!! For example, if we wanted to access the first number in the first object of myArr we'd write: `myArr[0][0]` which would be `1`.

But if we wanted to access the first number of the first array of the last object in `myArr` we'd write `myArr[3][0][0]` which would be `3`; but if we just wrote `myArr[3][0]` would equal `[3, 5, 6, 99]`. See that?

To get to the word `"lofty"` in the second object of `myArr`: `myArr[1][5]`.

  > Are you catching on?

Below you'll see an example that relates directly to your Tic Tac Toe game in class but it's important to remember that these **Data Structures** are similar to the [data structures you'll see when you retrieve data from a database](http://dummy.restapiexample.com/api/v1/employees). Knowing how to access the data inside nested arrays is crucial to your future job!



## Practice It

To complete the logic of your Tic Tac Toe game you'll need to know how to access Nested Arrays because the Data Structure we would use to represent a Tic Tac Toe board would be a Nested Array like:

```javascript
  let board = [
    ["", "", ""], // <-- Row 1, index 0
    ["", "", ""], // <-- Row 2, index 1
    ["", "", ""] // <-- Row 3, index 2
  ]
```

Where each index in the `board` array represents a *row* on the Tic Tac Toe board and each `""`, or index of the inner arrays, represents *column* on the Tic Tac Toe board.

[Try it yourself](https://replit.com). Go to the console in your browser and:

- [ ] Copy/paste the board example into it. Hit ++enter++.
    * [ ] Then run `board[0][0] = "X"`
    * [ ] Then run `board`. What do you see? It should be something like: "(3) [Array(3), Array(3),Array(3)]"
    * [ ] Click on the drop-down arrow to open the array. What changed?
    * [ ] Try it again but this time, change the position you want to change: `board[1][2]`, `board[2][1]`, etc.
    * [ ] Play and see what you can figure out.
    * [ ] Try `.push()`, `.pop()`, `shift` and `unshift`
- [ ] Go to [W3Schools to practice on these three Array Exercises](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_arrays1)




# Type Object-Literal

*“He who refuses to embrace a unique opportunity loses the prize as surely as if he had failed.“ – William James*

## Overview


<iframe src="https://player.vimeo.com/video/409877283" width="655" height="368" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

The reason we've held off teach JavaScript **Objects** until now is because in JavaScript, everything is a object: Strings, Numbers, Arrays, Functions, Arrays, and yes, Objects. This is also why we refer to everything as object-things, because they're all just chunks of data held within the program we're building.

So a pure JavaScript Object is a way to group multiple bits of data that are all related to one another. For instance, if we were cataloging types of trees for people to contribute to the [1 Trillion Tree Need](http://1t.org/) you might want to offer them things like:

* grow Zone
* Mature Height in feet
* Special Care
* Soil Type
* as well as name and catalogID

To offer an easier way to structure the data we'd need to display on the web page for them we wouldn't want an array because those are for lists, not necessarily related items.

```javascript
  const arrayOfTree = [{
    catalogID: 38,
    name: "American Beech",
    growZone: "4-9",
    matureHeightFT: 40,
    specialCare: "Full Sun",
    soilType: ["Acidic", "Clay", "Loamy", "Moist", "Sandy", "Well-drained"]
  },
    {
    catalogID: 81,
    name: "River Birch",
    growZone: "4-9",
    matureHeightFT: 70,
    specialCare: "Partial Shade"
    soilType: ["Acidic", "Clay", "Drought-Tolerant", "Loamy", "Moist", "Sandy", "Well-drained", "Wet"]
  },
    {
    catalogID: 90,
    name: "Northern Catalpa",
    growZone: 4-8,
    matureHeightFT: 60,
    specialCare: "Partial Shade",
    soilType: ["Acidic", "Alkaline", "Clay", "Drought-Tolerant", "Loamy", "Moist", "Rich", "Sandy", "Well-drained", "Wet"]
  }]
```

Above we see an array of three objects that each contain information on three different trees. We can loop over the object themselves but we cannot loop over the keys inside them. However, we can still access the values with dot-notation.

```javascript
  console.log(arrayOfTree[2].name) // => Northern Catalpa
  console.log(arrayOfTree[1].matureHeightFT) // => 70
```

If you're confused, think of them just like CSS, on the left-side of the `:` is the **key**/property and on the right-side is **value**.






## Additional Resources

TheNetNinja goes a little further than you need to know at this point in your career but at least you can see how an objects is created in the first 10 minutes.

- [ ] [YT, The Net Ninja - JS Tutorial 5: Objects](https://youtu.be/X0ipw1k7ygU)

## Know Your Docs

- [ ] [MDN Docs - Object Initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)








# Type Array

*“It is time for us all to stand and cheer for the doer, the achiever – the one who recognizes the challenges and does something about it.” –Vince Lombardi*

## Overview

Up to this point you've seen a couple types of data including **String** and **Number**. Just like we have different element types to work with in the DOM, in JavaScript we have different types of data to work with. Each comes with its own properties and methods available to adjust and call.

  > FYI: Last lesson we learned about the syntax of a **Function** but we didn't even mention that itself is a type of data(data type)!

Now we have three types of data: Number, String, and Function. In this lesson we'll add one more type of data, **Array**!

## What's An Array?

The words array and list are interchangeable. In fact, in other languages like C#, they are called lists instead of arrays. If this is true, we can think of the data type, **Array** as a way to group many items together in the form of a list. Let's say we're creating a todo list. We wouldn't want to create a new variable to hold each todo as String types:

```javascript
  // Inefficient way to hold a list of ToDos

  let todo1 = "wash the dog."
  let todo2 = "wash the car."
  let todo3 = "meditate."
  let todo4 = "learn to prepare a new healthy meal."
  let todo5 = "journal my thoughts."
```

Instead, we could hold a list of items like this in an array/list. Like so...

```javascript
  // A better way to hold a list of similar or related items

  let myTodos = ["wash the dog.", "wash the car.", "meditate.", "learn to prepare a new healthy meal.", "journal my thoughts."]
```

From the examples above you can deduce:

1. Arrays are created in a similar way as the Number, String, or Function types are created. We start by simply using the keyword const, then naming the array something like myTodos then assigning it a value with the = symbol.
1. Beyond that, we can see that an array's **syntax** includes a pair of square-brackets, [] and we separate our items with a comma, ,.

  > But what if we want to hold a list of numbers?

```javascript
  let aListOfNumbers = [8, 45, 71, 23, 75, 99, 103, 5, 61, 2]
```

  > What if we wanted to hold a list of Numbers and Strings?

```javascript
  let mixedList = [855, "Growth", 2630, 7, "Strength", "Positive Change", 1013, "Laughter"]
```

  > Great! We can put anything we like in an array as long as we use the proper syntax, but what can we do with an array that we can't do with a String or Number?

I'm glad you asked!

## What Does Indexed Mean?

You see, an Array is **indexed** which means every item in the array has a hidden number attached to it. These *hidden numbers* mark the place in the array the items sits. This means, that every place in the array is marked with a number that ascends from 0 up to the total number of items in the array.

From left to right, we can count the items in the array as 0, 1, 2, 3, 4, 5, 6, etc, until we reach the end of the array. This is useful because we can access those items just the same way we can access the properties on our HTML Elements! Check out the two code snippets below and see if you can figure out the connection.

```html
  
  <p id="parrot">Blue feathers.</p>

  <script>
    // JavaScript
    let ourElement = document.getElementById("parrot")
    let text = ourElement.innerHTML

    console.log(text) // => "Blue Feathers."
  </script>
```

In the example above we see some JavaScript inside the `<script>` element that holds the value of the `<p>` element in the variable named `ourElement`. Then we access its `innerHTML` property and hold it in the `text` variable. If we log `text` to the console we should see `"Blue Feathers."`.

In this same way, we can access the **items**/*properties* of an array by using its **indexes**: 0, 1, 2, 3 ... ∞. Below we see an example of JS code that creates an array and logs out a few of its items/properties.

```javascript
  let courage = [999, "wonderful", 100, 10, "challenge"]

  console.log(courage[0]) // => 999
  console.log(courage[1]) // => "wonderful"
  console.log(courage[4]) // => "challenge"
```

In the code snippet above you see a different syntax than what we've used before, [0]. This is called **bracket-notation**. It works the same as dot-notation except that it can accept numbers where dot-notation can only take letters/words that refer to a property name like `.innerHTML`.

  > To access the *hidden numbers*, **indexes**, we use bracket-notation. To access properties with names we know we use dot-notation. We'll use these indexes later when we write loops, as well!

### Practice It - Array Indexes

- [ ] In Chrome, open the inspector tool, then open the Console tab.( ++cmd+shift+c++ / ++ctrl+shift+c++ )
    * [ ] Inside that open space, you can type JavaScript. Go ahead and create an array called `phones` with 4 phone numbers as 4 different items. Type them as strings like this: `"512-888-0000"`.
    * [ ] Hit ++enter++.
    * [ ] Now `console.log` each of the phone number using bracket-notation: `phones[2]`, `phones[3]`,` phones[0]`, etc.

## First Two Array Methods

Again, just like each HTML Element has methods, or built-in functions, so do each of our JavaScript Data Types. Arrays have many many methods which makes them very useful and versatile. Today we'll cover two very essential methods: `.pop()` and `.push()`.

These two methods remove or add an item to the end of the array. So `phones.pop()` will remove the last phone number in the array you created in the **Practice It** section above.

On the contrary, `.push()` will add an item to the end of an array. If you wanted to add a number to your phones array you could write: `phones.push("214-991-0050")`. This would add `"214-991-0050"` to the end of the array.

**Try it yourself!**

- [ ] Go back to your Console tab (if you reloaded your window you'll need to create a new array called `phones`. See the **Practice It** section above for instructions)
- [ ] Write `phones.push("214-991-0050")` + ++enter++ .
- [ ] Now `console.log(phones)` + ++enter++. What do you see?
- [ ] Now `write phones.pop()` + ++enter++.
- [ ] Then `console.log(phones)` + ++enter++ again. What do you see?

These two methods are very useful! Let's say you're building a todo app *(like we'll be doing in a few days)* and you'd like to add an item to the list. You can use and `onclick` method to pass the `input`'s value to a function that `.push()`es to the todo list! When you've finished the todo, you could do the same technique but instead use `.pop()` to remove the last todo!

We'll stop for now on the methods of Arrays but we'll come back to the them soon because they are very useful **types of data**! In the next lesson we'll cover how to **loop** over an array while we cover Loops!!

## Practice It

Create a new repo or [CodePen](https://codepen.io) and paste the following code into the `index.html` file.

```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <article id="text-box"></article>
    <button onclick="addNewElement()">Click Me</button>

    <script>
      // Create an array called listOfWords
      const listOfWords = ["Beautiful", "Grand", "Brave", "Powerful"]
      // Create a variable to count the number of clicks
      let clicks = 0

      const addNewElement = () => {

        // Use the document method: .createElement() to create a <p> element
        const newParagraph = document.createElement("p")

        // Use the .createTextNode() method to create a text node with each of the words of the array
        // ON LINE 25 - Replace the "me" to Practice Bracket-Notation and make this function access each element one-at-a-time using the "clicks" as a value for the indexes of the array.
        const newText = document.createTextNode(me[me])

        // Then attach the text node to the new <p> element
        newParagraph.appendChild(newText)

        // Next, hold the value of the <article> element
        const myElement = document.getElementById("text-box")

        // Then add the new <p> element with the new text node inside it to the <article> element
        myElement.appendChild(newParagraph)

        // Each time this function runs add 1 to the value of clicks so we can iterate over the array
        clicks++

        return console.log(clicks)
      }
    </script>
  </body>
  </html>
```

- [ ] Read the comment lines to figure out what the code is supposed to be doing.

- [ ] Find the two bugs and fix them to make this web page work.
- [ ] **BONUS 1**: Create a new button, an input field, and a new function that will add words to the list of words.
- [ ] **BONUS 2**: Take this practice problem to you for loop practice and get the program to display the new words you add to the list.

## Know Your Docs

- [ ] [MDN Docs - Type Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)








# Using Trello

*“In essence, if we want to direct our lives, we must take control of our consistent actions. It’s not what we do once in a while that shapes our lives, but what we do consistently.” –Tony Robbins*

## Overview

Continuing on with that idea of breaking down large ideas into smaller pieces, then into tiny steps that will build that bridge from point-A to point-B. Let's introduce [Trello](https://trello.com/), a free software owned by Atlassian for doing exactly what was described above by creating tiny draggable steps to keep you organized!

![trello-landing-page](./../images/trello-landing-page.png)

With [Trello](https://trello.com/) we can create **Swim Lanes**. This is **AGILE** jargon for columns that represent the status of a task, i.e. inbox, doing, done, etc.

Where,

**Inbox** would mean a place team members could add things to be done.
**Doing**, since your whole team works on one board, this show what tasks are being worked on and by who.
**Done**, beyond the obvious here, it's also a place that could signal a team lead/code reviewer to review your latest Pull Request.
**Archived**, after your teams has finished a code sprint you'll still want access to tasks that have been completed, when, and by who.
**Icebox**, kept for a later date, this category is reserved for tasks that seem a little too extra or your team doesn't have bandwidth for right now. This is a good place to keep up with stretch goals.
You should begin building your team board with these swim lanes or something very similar since this is what most companies practice.




## Practice It

Starting next week we'll be building a new portfolio website with a partner. It's important to stay organized and motivated on the tasks so you both complete it. Remember, you already know everything you need to know to build this website so you don't have to focus on learning new code or programming, so use this time to apply what you've learned and build your confidence with these tools: HTML, CSS, and JS while learning so cool things as you go.

This new tool, Trello, is just to help you get & stay organized and help you communicate between each other. So get to learning about this new tool:

![trello-board-tutorial-screenshot](./../images/trello-board-tutorial-screenshot.png)

Accounts are free but do require a sign-up. So let's get an account and a board created today!

- [ ] Navigate to the [trello tutorial](https://trello.com/b/I7TjiplA/trello-tutorial)
- [ ] Click around on the cards and start to get familiar with this tool.
- [ ] Go answer your **Questions for Student Discussion** while you're here.
- [ ] Now click "Sign-up", create an account.
- [ ] Create a new board and set it up the way you've learned so far.
- [ ] See if you can begin translating your sketches and notes from your notepad to your board.

## Additional Resources

- [ ] [YT, Simpletivity - 7 Things You Should Do with Every Trello Board](https://youtu.be/HvkTamEjDXk)

## Know Your Docs

- [ ] [Trello Docs - Keyboard Shortcuts](https://trello.com/shortcuts)
- [ ] [Trello Docs - How to Use Trello Like a Pro](https://help.trello.com/article/734-how-to-use-trello-like-a-pro)








# Intro to Animations

*“If one dream should fall and break into a thousand pieces, never be afraid to pick one of those pieces up and begin again. “ —Flavia*

## Overview

Animations, while not a definitive skill you must master, do create needed flare on websites and can set you apart from other candidates.

The first thing you should learn is to not build your own, but instead "steal" ideas from others at [CodePen.io](https://codepen.io/) -just search for "animation." This is a great place to get ideas, and learn how to do different things. Don't be afraid to fork someone else's code, and break it, trying to figure out how they did it. It really is the best way to learn! After enough stealing you'll become a pro but for now, let's look into the basics of animations using CSS so you can steal well.

## How to use CSS Animations

When making animations in CSS, we are actually just setting the style of an element to make it look a certain way at one point in time, then specifying a new look for a different point in time, and then setting how long it will take for the change to happen. We do this using `@keyframes`, along with `animation-name`, `animation-duration`.

When you define CSS styles inside the `@keyframes` rule, the animation will plot a gradual change from one to the next that takes a specified percentage of the total time given to complete.

To get started let's build a simple `<div>`:

```html
  <div class="animated-div"></div>
```

Then we have to give the element an animated name so the `@keyframe` function knows what to target. In the code snippet below, we'll add some style, an `animation-name`, and some `animation-duration` time.

```css
  .animated-div {
      width: 100px;
      height: 100px;
      background-color: red;
      animation-name: example;
      animation-duration: 4s;
  }
```

With the code above we can see that the element will start at 100px by 100px, be red and the change will happen over 4 seconds.

Now we can call the `@keyframes` function and pass it the `animation-name` we want to execute on which is `example` in this example.

Now you see that code if fairly straightforward: it will change from red background to yellow background.

  > NOTE 1: You can see the full code and [try it out yourself at W3S](https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation1).

  > Note 2: The `animation-duration` property defines how long in seconds an animation should take to complete. If the `animation-duration` property is not specified, no animation will occur, because the default value is `0s` (0 seconds).

In the example above, we have specified when the style will change by using the keywords "from" and "to," which represent 0% (start) and 100% (complete), respectively.

It is also possible to use percentages **explicitly**, and by doing so you can add as many style changes as you like to happen throughout the duration of the animation!

```css
  @keyframes example {
      0%   {background-color: red;}
      25%  {background-color: yellow;}
      50%  {background-color: blue;}
      100% {background-color: green;}
  }
```

[Try it for yourself](https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation2)!


<iframe width="655" height="368" src="https://www.youtube.com/embed/Syg_9iB1vco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Practice It

- [ ] Open and Fork the [CodePen](https://codepen.io/hipperger/pen/GwEqpY/).
- [ ] Change the color of each square in the CSS file.
- [ ] Change the animation duration from 1.5 seconds to 3 seconds, and run it.
- [ ] See if you can get the squares to go the opposite direction.
- [ ] Don't be afraid to get so immersed you spend hours playing around. That's how you get good at coding! *Nerd out!*

## Additional Resources

- [ ] [YT, tuber - title]()

## Know Your Docs

- [ ] [MDN Docs - Animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [ ] [W3S Docs - Animation](https://www.w3schools.com/css/css3_animations.asp)








# Class 13: Responsive Menu






*“You will never do anything in this world without courage. It is the greatest quality in the mind next to honor “ —Aristotle*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE: After this class students will have a firm understanding of:*

* *Resolving merge conflicts through git*
* *Using the CSS properties: `transition`, `animation-` and `transform`*
* *Project planning and team coordination*

*****

- [ ] Questions for Student Led Discussion
- [ ] Interview Challenge
- [ ] Student Presentations
- [ ] Creation Time
    * [ ] Animated Git Conflict
- [ ] Team Planning
- [ ] Exit Recap, Attendance, and Reminders

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-13.md)

### Interview Challenge, 45 mins



[See Your Challenge Here](./../additionalResources/interviewChallenges.md)


### Student Presentations, 15 mins

[See Student Presentations List](./../additionalResources/studentPresentations.md)

## Creation Time, 60-90 mins

Today you'll clone a boilerplate code base intended for a new developer to quickly begin building a portfolio website for themselves. Then you'll push it to a new repo you've created, work with a partner on different branches to make three buttons/li elements transform. Doing this, you'll create merge conflicts and you'll work together to resolve them to have a fully functioning portfolio website.

### Transform, Animate + Create * Fix Conflicts

Clone and follow the instructions in the `README.md` file of the [101-Portfolio-Boilerplate-Boilerplate](https://github.com/AustinCodingAcademy/101-Portfolio-Boilerplate-Boilerplate) repo.

### The Specs

- [ ] Pushed into a new repo owned by one of the students.
- [ ] One new branch for each partner created off of master.
- [ ] Three buttons/li elements to have transformation and animation added to them.
- [ ] Both branches merged.
- [ ] Conflicts resolved.
- [ ] Working Portfolio Boilerplate website.




### Team Planning

The remainder of class time is reserved for students to partner up, brainstorm, plan, design, and project plan how they'll use the remaining three classes!

## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Prepare for next class by completing all of your pre-class lessons
- [ ] Complete the feedback survey(if applicable)

For the next three class we'll be learning many new tools in our pre-class lessons but the focus of class time will be on you and your partner building a website together. Yes, you may use the new tools you've learned in the pre-class lessons but you have enough now to build a fair website that is responsive and professional. Let's make sure we use our time wisely together so you have a polished sight that can be shown to the world!!









# Class 14: Final Portfolio Work Day 1/2






*“Never let the odds keep you from doing what you know in your heart you were meant to do.“ –H. Jackson Brown Jr.*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE - After this class students will have a firm understanding of:*

* *Organize projects into maintainable pieces*
* *Group collaboration to achieve larger goals*

*****

- [ ] Questions for Student Led Discussion
- [ ] Student Presentations
- [ ] Creation Time
    * [ ] Final Project Time Day 1/2
- [ ] Push Yourself Further
- [ ] Exit Recap, Attendance, and Reminders

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-14.md)

### Student Presentations, 15 mins

[See Student Presentations List](./../additionalResources/studentPresentations.md)

## Creation Time, 110+ mins

Although we're learning new techniques in our Pre-Class lessons this week and next are dedicated to you building a new Portfolio website that each of you and your partner can clone and host for each of you to use when looking for your next role!

Get with your partner in a breakout room, rocketChat, Live-Share, Trello, and/or on the phone and layout together what needs to happen, when it needs to happen and who will be doing what!

To keep you on track we'll all do these at the same time. Ready?

### Organize On Trello - 20 mins

Just like we learned earlier this week create a Trello board that both you and your partner have access to. Create the swim lanes and both of you should start laying out the steps you need to accomplish to build this website.

> HINT: Start with the big steps (landing page, about, contact...) and then you can start breaking those down into the smaller components (header, footer, aside, main...)

### Label Cards with Assignee - 10 mins

Before you move on make sure you both know what your responsibilities are. Assign yourself to the cards that you are responsible for.

### Draw Mockups for the first two pages - 15 mins

Before you code, DRAW! We can't stress this enough. Draw and plan what you want to build. Spend a few minutes to layout on paper what you want your page to look like before you start trying to code it.

### Create Repo + `index.html` file + clone - 10 mins

Get a place for yall's code to go. It doesn't matter who owns it. As long as each of your pull requests are being merged into the `main` branch you'll both be getting credit for your commits.

Go ahead and host it with GitHub Pages and turn in that live URL to be graded later on. (This way you don't forget later on.)

> Remember to work in separate branches *OFF OF* `main`.

### Start Coding

Don't waste time. You have access to your instructor and your partner very easily right now don't let the time slip away. Get going.

Also, don't forget you can use Bootstrap and all of your other project over the past two months.

### The Specifications of your last project

- [ ] A Landing page
- [ ] An About page
- [ ] A Resume page
- [ ] A Contact Me page
- [ ] An image gallery, so to speak, that will serve as your Portfolio Page. It will have thumbnails of all the websites you've built and hosted up to this point, that when clicked they will take you to those websites.
- [ ] design for phone, tablet, and laptop

### Push Yourself Further

- [ ] The time remaining, continue on by create a mockup for your next web page.

## Student Feedback

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjuL10i2xFGMWRwkjtgAL8F1Y5ipMPPjtTCDzkO1ZBcxUYZA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create a checkpoint Final Portfolio Assignment
- [ ] Prepare for next class by completing all of your pre-class lessons
- [ ] Complete the feedback survey(if applicable)
- [ ] Next week we'll be learning more techniques include HTML APIs like Geolocation but during class we'll be focusing our time on our project. Don't stop coding. Use the weekend to coordinate with your partner and keep pushing up your code. We want to see these by the end of our last class!!!
- [ ] Go ahead and turn in your live URL.
- [ ] No blog this weekend, just focus on building your web page.









# Class 16: Presentation Day






*Reject your sense of injury and the injury itself disappears. —Marcus Aurelius*

## Greet, Outline, and Objectify




Today we're going to:
  
*OBJECTIVE - After this class students will have a firm understanding of:*

* *Common terms in Agile Project Management*
* *Participating in a retro meeting*
* *Presenting their code and workflow to a team*

*****

- [ ] Questions for Student Led Discussion
- [ ] Student Presentations
- [ ] Creation Time
    * [ ] Special Homework
    * [ ] Retro Presentation & Work Time - 110 mins
- [ ] Push Yourself Further
- [ ] End Of Course Evaluation
- [ ] Interview Questions: Blog to Show You Know
- [ ] Exit Recap, Attendance, and Reminders

### Questions for Student Led Discussion, 15 mins


[Questions to prompt discussion](./../additionalResources/questionsForDiscussion/qfd-class-16.md)

### Student Presentations, 15 mins

[See Student Presentations List](./../additionalResources/studentPresentations.md)

## Creation Time, 60-90 mins

Remember, your final portfolio isn't due until Sunday but let's have some retros on what you've built so far and what needs to be finished.

## Special Homework

Last night you reflected on your learning journey thus far and changed your LinkedIn title to "Freelance Web Developer". Tonight, let's hear each person's thoughts on this and hear each person say: "I am a Freelance Web Developer"!

### Quick Retros

One group at a time, present your app to the class including:

- [ ] Introduce yourself and your theme/vision for this Portfolio Website.
- [ ] Show-and-Tell us what you've built so far and what your struggle with.
- [ ] What are you most proud of in your website. (Both partners)
- [ ] What will you be working on over the weekend?

### The Specifications/Rubric

- [ ] Responsive for phone, tablet, and laptop - **50pts**
- [ ] A Landing page - **10pts**
- [ ] An About page - **10pts**
- [ ] A Resume page - **10pts**
- [ ] A Contact Me page - **10pts**
- [ ] Portfolio Page - **10pts**

You only have to host one website for both of the partners. Later you will want to clone the repo and replace it with your own information to host again. But for now, all you have to have is ONE website hosted for both of you.

### Push Yourself Further

- [ ] **10pt Bonus** - Use Canvas to animate something.
- [ ] **10pt Bonus** - Use any HTML5 API.
- [ ] **10pt Bonus** - Use another HTML5 API.

*****

## End of Course Feedback

Take 5 - 10 minutes now to complete the End of Course Evaluation. This information is incredibly important to our organization to improve, grow our instructors, textbooks, and community.

- [ ] [End of Course Evaluation](https://docs.google.com/forms/d/e/1FAIpQLScSN8i3bPtmSH5KzpRDtH7RBUO0y4sgIji2t2vZ9N4VueYqdg/viewform)




*****

## Blogs to Show You Know

[Blog Prompts](./../additionalResources/blogPrompts.md)

## Exit Recap, Attendance, and Reminders, 5 mins

- [ ] Create Class 16 Blog Assignment
- [ ] Remember to turn in your Project's live URL.
- [ ] Instructor will begin grading them this coming Monday.
- [ ] You will still be able to get up to an 80 if you turn this Project in by **next** Sunday but you will get a 50 after that.
- [ ] Any project you haven't turned in yet will be an automatic 50 after next Sunday, this course's **Final Submission Day**.
- [ ] See the Home Page of this textbook for more information on the grading policy.
- [ ] Complete the feedback survey(if applicable)

Your Final Portfolio Project is due this coming Sunday. After you finish it you should start working on the Pre-Coursework for your 200 level course.

If you finish the Pre-Coursework check out the Post-Coursework of 101 to learn more and become a nerd.









# CSS Reset

*“Applause is the spur of noble minds, the end and aim of weak ones.“ –Edmund Burke*

## Overview

The first coding lesson this week is pretty darn simple, it's called CSS reset. All you have to do is create a new CSS file, throw in the code shown below, link it to your HTML files ABOVE your other CSS files, and boom, you're done! But why?



### Why

Browsers come with various default styling which means they display HTML elements slightly different from one another. Chrome has its own, Firefox another, and Safari a different default. This can cause small deviations in the appearance of your web pages.

To avoid your layout looking different in the various browsers people use to see the internet, you use what's called a "CSS Reset". Think of it as a clean slate to start painting on. A CSS reset reduces browser default styling like `border`, `padding`, `margins` and `font-size`. When you are use a CSS reset you can count on a starting point of defining rules for elements without having surprises later on!

### How

To create a CSS Reset just create a new CSS file and name it something like reset.css. Then, paste the following code in there.

```css
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
```

All this code is doing is selecting all HTML elements and applies the same rules to them. Obviously you can overwrite the rules with new CSS rules as long as they are listed in a file **below** the `reset.css` file.

## The Cascade

To use your new `reset.css` in a project, remember that HTML is read from **top-down**, **left-to-right** - if it finds two CSS definitions for the same element in both files, it will apply the most recently parsed definition, *the one on the bottom*. Therefore, you write `<link href="reset.css"/>` before you link in any other CSS files, like your `style.css` or Google Fonts.

=== "Just like this."
    ```html
      <link rel="stylesheet" href="./css/reset.css"/>
      <link rel="stylesheet" href="./css/style.css"/>
    ```

=== "If using a **third-party**"
    ```html
      <link rel="stylesheet" href="./css/reset.css"/>
      <link rel="stylesheet" href="./css/bootstrap.css"/>
      <link rel="stylesheet" href="./css/style.css"/>
    ```

If your `reset` is read after your `style`, and both contain conflicting style definitions for the same element, the reset's style definition will be applied. This can be quite perplexing - to prevent unnecessary confusion, remember:

  > **add the reset before any of your own styles.**
  > **Your custom styles should always come last**, after any outside styles.

=== "Not like this"
    ```html
          
      <link rel="stylesheet" href="./css/style.css"/>
      <link rel="stylesheet" href="./css/reset.css"/>
    ```

## Additional Resources

- [ ] [YT, Kevin Powell - The Problem with Browser Default Values](https://www.youtube.com/watch?v=L4wPV-K1lNI)
- [ ] [Medium, Kevin Powell - Understanding "Initial", "Inherit", and "Unset](https://elad.medium.com/understanding-the-initial-inherit-and-unset-css-keywords-2d70b7121695)

## Know Your Docs

- [ ] [W3S Docs - Default CSS Values](https://www.w3schools.com/cssref/css_default_values.asp)

# Achieving Goals: Why, What, and How

*Well done is better than well said. —Benjamin Franklin*

## Overview

We all have goals! Right now one of your goals could be to change into a new career using these web development skills. That's a notable and worthy goal that should be taken seriously and committed to. But why?

Only you can answer that. Why do you want to change careers? Why do you want to learn these skills? Why do you want to challenge yourself this way?

Is it just for money? I hope not...that won't motivate you beyond the first few bugs you have. Is it for personal satisfaction? Validation? Respect? Intrinsic value? Growth and purpose? Again...only you can answer that. But answer you must. For it is the fundamental building block to launch from if you are going to achieve your goal

## Why. The Golden Circle

In this, albeit, old and low-fi TedTalk, [Simon Sinek](https://simonsinek.com/), clarifies how these three questions lead a company to wild success. If you think of yourself as a small business and **you are the CEO** then you can apply the exact same method to your life! Here's how:


<iframe width="655" height="368" src="https://www.youtube.com/embed/qp0HIF3SfI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How. Achieving Your Ambitions

Now that you know your **why**, let's step into the **HOW** of your small business model! Check it out as this radical guy wraps the world in yarn!


<iframe width="655" height="368" src="https://www.youtube.com/embed/TQMbvJNRpLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What. Atomic Habits

Now that you're fully invested in building you, your small business, now it's time to take a step and make plans. There's an incredible book you should read called [Atomic Habits](https://jamesclear.com/atomic-habits) that takes a very realistic look at breaking all our HUGE goals into tiny, achievable, and useful habits. It's also available on [Audible](https://www.amazon.com/gp/product/B07RFSSYBH/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=jamesclear-20&creative=9325&linkCode=as2&creativeASIN=B07RFSSYBH&linkId=e147c3247100ade2767cf242ab22cdfb)!

# Develop Series - Feeling vs Emotions, All Together, All at the Same Time

*Knowing other people's stories is the natural block-chain of humanity.*

**Of all the Develop Series, this one is the most important.**

## Overview

Last week we talked about how impactful feelings are on our mental, spiritual, and physical well-being, even down to the biological level! We also learned about the difference between paying attention and seeking attention. This week, let's learn how to take action and affect each of those. Now that your awareness is keyed in on them you can actively pursue what's best for you, your family, and everyone around you.

## Get Your Feelings Outside of You

Most of us don't know we're actually in control of our feelings. We have been taught to live within rules but when things don't go our way our emotions arise and our feelings go haywire! We start blaming others and shutting down. What if that didn't have to be the case! What if instead we could learn about ourselves, not just how we physically move like walking and talking, but also about our emotion state. What if we could tune into our inner world in a way that we could actually change it and make a real difference?!?

Alan Watkins presents a fascinating and moving explanation of our self-development from infancy to who you are now and why we should pay attention to what's going on inside of us! Check it out.


<iframe width="655" height="368" src="https://www.youtube.com/embed/h-rRgpPbR5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Life Happens For You

*The purpose of spirituality is to end suffering. - The Buddha*

Spirituality recognizes that your role in life has a greater value than what you do every day. It can relieve you from dependence on material things and help you to understand your life's greater purpose. Spirituality can also be used as a way of coping with change or uncertainty.

<iframe width="655" height="368" src="https://www.youtube.com/embed/Fo_lDTDSO-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Develop Series - Teaching Yourself

*Failure will never overtake me if my determination to succeed is strong enough. —Og Mandino*

## Overview

In the past 4 weeks, you have learned so many new skills, in areas you knew nothing about before. But one of those skills, which you may not have noticed that you've been learning, is the ability to learn new skills, itself — in particular, those centering on web and software development!

Throughout this course you've been reading documentation, watching videos, and practicing concepts in CodePens. This is a perfect approach to learning new things (as you will continue to do throughout your life and career). In this industry, you must learn new skills all the time: you'll take courses to further your learning, attend conferences, sit in on forums, and bring those new skills back to enrich your teams. It will be a never-ending pursuit.

Do yourself a favor, and start devoting more time to learning now! As with other skills, the more you practice it, the faster and stronger you will get.

## How to Learn Anything Faster


<iframe width="655" height="368" src="https://www.youtube.com/embed/rA2XHWM__yE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Practice It

Bring to class 3 ways you can continue learning and practicing what you know after this course and this program.

