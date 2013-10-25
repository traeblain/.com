Title: Batman Equation
Date: 2011-08-01 18:00
Tags: batman, math
Slug: batman-equation

So I saw this on [Reddit](http://www.reddit.com/r/pics/comments/j2qjc/do_you_like_batman_do_you_like_math_my_math/) a few days ago, and wondered if it was real...

The Batman Equation:

[![Batman Equation](http://blog.traeblain.com/wp-content/uploads/batman-equation-500x164.png)](http://blog.traeblain.com/wp-content/uploads/batman-equation.png)

I was wondering if this was a real item or not, so I decided to figure it out. This should be an easy MATLAB plug and play. The hard part would be making sure the equation in MATLAB code matched the pretty image you see here.  So I plugged it in:
    
    :::matlab
	eqf = '((x/7)^2*sqrt(abs(abs(x)-3)/(abs(x)-3))+(y/3)^2*sqrt(abs(y+(3*sqrt(33))/7)/(y+(3*sqrt(33))/7))-1)*(abs(x/2)-((3*sqrt(33)-7)/112)*x^2-3+sqrt(1-(abs(abs(x)-2)-1)^2)-y)*(9*sqrt(abs((abs(x) - 1)*(abs(x)-3/4))/((1-abs(x))*(abs(x)-3/4)))-8*abs(x)-y)*(3*abs(x)+3/4*sqrt(abs((abs(x) - 3/4)*(abs(x) - 1/2))/((3/4 - abs(x))*(abs(x) - 1/2))) - y)*(9/4*sqrt(abs((x-1/2)*(x + 1/2))/((1/2-x)*(1/2+x))) - y)*((6*sqrt(10))/7+ (3/2-abs(x)/2)*sqrt(abs(abs(x)-1)/(abs(x)-1))-(6*sqrt(10))/14*sqrt(4-(abs(x)-1)^2)-y) = 0';
    ezplot(eqf, [-7.25 7.25 -5 5]);

And what do I get? This trash:

![Batman Try 1](http://blog.traeblain.com/wp-content/uploads/batman-first.png)

So now, I'm thinking it's bunk. But after digging a bit closer, you can see that the bat-symbol is there but there happens to be a ton of trash. My guess is that the combination of all the parts (so there's essentially 6 equations that all can equal 0) is adding trash to the plot when a different section should be nullified. I think technically it should, but I'm not sure why MATLAB continues to process some of the points on this item.  For instance, the first part takes a standard ellipse equation and multiplies each part by a component that should remove certain areas of the plot.  So I'm assuming the rest of the equation should properly plot...but it doesn't.

So then, if you take each section and set it equal to 0 (which is legitimate) and only tell MATLAB to plot the areas that the equation itself should only allow, you get a nice clean Bat-symbol.

![Batman Try Clean](http://blog.traeblain.com/wp-content/uploads/batman-clean.png)

So is it MATLAB or an error in the equation? I tend to think the equation is correct, but MATLAB is doing things unexpectedly (or expected if you understand MATLAB better than I do). If I remembered how to do it in Maple, I'd give it a try there and WolframAlpha craps out (never could get it to work).  [Here's a link to my MATLAB .m file](https://gist.github.com/1119139) if you want to give it a try. Like I said, I could have done something wrong but can't see what.