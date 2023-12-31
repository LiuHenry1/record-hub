# Web Development Final Project - *Record Hub*

Submitted by: **Henry Liu**

This web app: **Allows users to interact in a forum-based site.**

Time spent: **14** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **A create form that allows the user to create posts**
- [X] **Posts have a title and optionally additional textual content and/or an image added as an external image URL**
- [X] **A home feed displaying previously created posts**
- [X] **By default, the time created, title, and number of upvotes for each post is shown on the feed**
- [X] **Clicking on a post shall direct the user to a new page for the selected post**
- [X] **Users can sort posts by either their created time or upvotes count**
- [X] **Users can search for posts by title**
- [X] **A separate post page for each created post, where any additional information is shown is linked whenever a user clicks a post**
- [X] **Users can leave comments underneath a post on the post's separate page**
- [X] **Each post should have an upvote button on the post's page. Each click increases its upvotes count by one and users can upvote any number of times**
- [X] **A previously created post can be edited or deleted from its post page**

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/ZvXqAEU.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LICEcap  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

This project was time-consuming. I approached this project by laying out the HTML structure, then implementing
the functionality, and lastly styling it. The only challenge I had faced was figuring out how to sync changes made to the
database with the content shown on the site. I ended up creating a state and using it as a dependency for useEffect to refetch
data. Overall, a great learning experience, it really reinforced the concepts that we have covered. 

## License

    Copyright 2023 Henry Liu

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
