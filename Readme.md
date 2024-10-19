npx tailwindcss -i ./CSS/input.css -o ./CSS/output.css --watch


# tailwind configurations ( tailwind config is used for tailwind integration into my application && input.css just contains bunch of css properties inside layer) : Tailwind is just normal css with syntactic sugar.

# cursor movement effect : window.scrollY
# custom properties in tailwind 
# creating modal and it's features (overlay)
# theme switcher : body lai bg-color and color ko property dine , baki sabai children lai currentColor(tailwind) || inherit(CSS)
# resume downloading
# tailwind responsiveness(mobile first approach)
# CSS properties
# position sticky
# glassy effect
# navbar scrolling effect + debouncing implementation while scrolling




# CSS related
-> position and display property can work together
-> box shadow(elements) && drop-shadow(images)
-> margin auto works only if parent has display( grid || flex ) property
-> transition property don't work when css properties like (display , position , visibility etc) changes
-> position sticky : tesko current position samma position-relative ko property hold garcha , then according to top/bottom/left/right tyo point bata chai "stick" garna thalcha.

# glassy effect -> bg-color-opacity must be low + backdrop-filter:blur property

# Tailwind related
-> understanding tailwind : It's using the same css internally , outer mah it's just syntactic sugar 
-> responsiveness : inital property for mobile devices , then for md:(tablet) , then for lg:(desktop) , then for xl:(large desktop)
-> Adding Custom properties : 
     1. use a seperate CSS file
     2. use internal CSS
     3. use the same tailwind css file (using layout )
     4. set the custom properties in the tailwind.config file.
     5. directly using variables : bg-[var(--my-custom-color)]


# Javascript logic
1. navbar scrolling effect + debouncing implementation while scrolling 
HINT -> window tala scroll garda , window.scrollY only increases than it's previous value.
     -> window mathi scroll garda , window.scrollX only decreases than it's previous value.
     -> therefore store it's previous value in some varibale and use it.

Deboucing HINT : Add a setTimeOut , so that the upper logic won't run in every "pixel-scroll" && clear the previous-interval before starting new-interval.

2. Modal Close feature -> Concept of event bubling ( event bubbling from child to it's parent to it's grandparent)
HINT : If event is attached to parentElem and it has multiple children ,due to event bubbling childrenElem lai click garepani , the event will get fired , but kun element(either parent or children) triggered that event can be known through e.target. 


3. Cursor Movement effect : (difference between pageX/pageY && clientX/clientY && screenX/screenY)

social media icons : https://icons8.com/icons/set/social-media