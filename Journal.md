# Tlabting.github.io

references used
https://www.w3schools.com/howto/howto_css_rounded_images.asp
https://www.webfx.com/blog/web-design/circular-images-css/

trying to replicate scroll behavior in buttons when hovering as seen:
https://avision.vawl.dev/

It looks inspecting the html element shows the list item anchor has two span elements with the same text. I assume its different colors and they use custom css classe or JavaScript to implement the affect.

~~https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-behavior~~ Looks like this would not be the appropriate approach

https://www.w3schools.com/css/css3_transitions.asp

Decided to move the Logo to the tab icon
https://www.w3schools.com/html/html_favicon.asp

Looking to find a way to smoothly transition div elemnet placements at different screen sized ad came across this:
https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transitions/Using

FORM:

I think i'll use javascript for my form

~~https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript~~

Note: use grid for form
https://www.w3schools.com/tags/att_input_required.asp

I'm trying to reverse engineer the form layout and effects Avision has.
I tried a similar approach to how i approached the button effects in the navbar.

https://stackoverflow.com/questions/24287192/css-change-parent-on-focus-of-child

I have the label and text input fields as span elements and I got them stacked horizontally. I then lowered the label so that it overlaps with the text field. When the text field is clicked on, the label goes to its original position above the text field. I had to adjust the background, so that the label was visible in its lowered position. I am trying to figure out how to get the label to stay up, if the text field has input. I think the right move will be to make the label stay up if the placeholder text is not there using not(placeholder-shown), but im struggling to find the right way to word the css.

I ended up using has, which was the first result of "if child element has a text input value css".
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:has

I ended up applying the form-effect to all form elements except for the message text area. I had to adjust how I alight the text area placeholder, but I am relatively happy with the end result.

I removed the focus outline for both the text input and the textarea, as it was bothering me.
https://stackoverflow.com/questions/3397113/how-to-remove-focus-border-outline-around-text-input-boxes-chrome

I realized the cursor affect was not present after moving everything, and I adjusted the path to the image. I am not yet sure if I want to apply the custom cursor when the user is interacting with the contact form.

I could change the appearance of the button pretty easily, but I wasn't sure how to get the desired shape, I knew I needed to adjust the button-radius, but changing the percentage wasn't working.

https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_round

I ended up using em instead of px.

I'm having too much fun doing sill things. changing the cursor.
https://www.w3schools.com/cssref/tryit.php?filename=trycss_cursor
https://blog.logrocket.com/custom-cursor-css/

I removed submit from the form actions and am changing my approach to the form submission, since this is going to be hosted on GitHub. It's going to be a much simpler approach. I'm just going to have a modal appear, and I won't be using the Bootstrap approach we used in class.

https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:modal

I'm trying to get a similare effect on hover for the buttons, but I'm running into an issue of the children of button being slightly smaller than the button itself, no matter how i tweak the styling. I'm going to save it as is. My next step would be to make its so that the button itself doesnt carry the color or pill box shape, and that will be the styling for the children. Hopefully that works.

Turns out button had padding set automatically, setting padding to 0 fixed the issue. I then changed the button background to the red color and had it transition to white when hovered. The first child had its background set to none and now transitions up. This gave the desired effect I was trying to emulate, as seen on Avision's site. Its been fun and a bit tricky to figure out how the effects could be replicated. Taking a close look at their html, it looks like the span elements are flex items, which could indicate a slightly different approach than what I ended up coming up with.

https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation
I want the error message to appear below the input field.
I am working on the validation of input by the user. Name fields will only allow lettes and space, apostrophe, period, or hyphen.
Email must have a valid email format.
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/email
Phone number must have a valid format.
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/tel
All required fields must be filled. I decided to make the phone number optional.

Starting work on the project's effects. Following Lun Dev Code's tutorial
https://www.youtube.com/watch?v=yqaLSlPOUxM
I had to look up the difference of top vs margin top:
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/top
I made a few

I added a pause on hover for the effect.
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-play-state

button click to link :
https://stackoverflow.com/questions/5025941/is-there-a-way-to-get-a-button-element-to-link-to-a-location-without-wrapping
https://developer.mozilla.org/en-US/docs/Web/API/Window/open
I wanted to have the button directly open the github link in a new window.
