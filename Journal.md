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

https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript
Note: use grid for form
https://www.w3schools.com/tags/att_input_required.asp

I'm trying to reverse engineer the form layout and effects Avision has.
I tried a similar approach to how i approached the button effects in the navbar.

https://stackoverflow.com/questions/24287192/css-change-parent-on-focus-of-child

I have the label and text input fields as span elements and I got them stacked horizontally. I then lowered the label so that it overlaps with the text field. When the text field is clicked on, the label goes to its original position above the text field. I had to adjust the background, so that the label was visible in its lowered position. I am trying to figure out how to get the label to stay up, if the text field has input. I think the right move will be to make the label stay up if the placeholder text is not there using not(placeholder-shown), but im struggling to find the right way to word the css.

I'm having too much fun doing sill things. changing the cursor.
https://www.w3schools.com/cssref/tryit.php?filename=trycss_cursor
https://blog.logrocket.com/custom-cursor-css/
