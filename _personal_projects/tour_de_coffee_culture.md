---
title: "Tour de Coffee Culture"
subtitle: "How to take the fun out of a weekend jolly"
excerpt: 
permalink: /personal_projects/tour_de_coffee_culture
collection: personal_projects
image: "<img src='../images/personal_projects/tdcc/tdcc_header.jpg' width='800' height='600'>"
header: true
date: 2026-06-10
include: true
---

A mate at work mentioned a fun ride around Ōtautahi-Christchurch, where you visit all the Coffee Culture locations in Canterbury. Its called the [Tour de Coffee Culture](https://coffeeculture.co.nz/tour-de-coffee-culture-2026/canterbury-tour). As someone who studied maths, I know there is as much satisfaction to be gained in showing there is (propably) a solution as there is in actually doing the work. For this reason I went and brute forced the problem to find the fastest way to visit all the cafes. Better still, this did not require me to leave the house and actually cycle my bike.

So long story short, here is the shortest route:

<iframe src="../../images/personal_projects/tdcc/maps/Shortest_distance.html" width="100%" height="500px" style="border:none;"></iframe>

Its 109.5km long, with 870m of climbing. But... its not the fastest way around.

To work out what is the fastest order to visit all the cafes, you need to be able to calculate how fast you can cycle. But its winter here, and cold outside. So instead of going for a cycle I can use physics to get a much worse estimate for how fast I can cycle. 

Long story short, by balencing the forces from rolling resistance, gravity, wind, with how much power I can output (or I guess I can put out), you get a speed out the other side. Interestingly, these calculations show that by cycling an extra 2.5km you can save a whopping 4 minutes compaired to the shortest route:

<iframe src="../../images/personal_projects/tdcc/maps/No_wind.html" width="100%" height="500px" style="border:none;"></iframe>

The time saved comes from doing 40m less of climbing, and fewer corners, which I have given time penilties.

As someone who uses the existance of headwinds when cycling as a proof that a god does not exist I also wanted to see which wind direction would lead to the fastest time, and maximum tailwind. This route is actually the same one as the above, but with a wind from 213° it can shave off about 20 minutes.

The overall summary of time taken and distance is below, for different wind directions:

| Wind	| Time (min) | Distance (km) |	Elevation (m) |
| --- | --- | --- | ---|
| Shortest Distance | 274 |	109.5 |	870 |
|No wind |	270 | 111.9 | 857 |
| Northerly	| 258 | 110.5 |	843 |
| Southerly	| 258 |	111.9 |	857 |
| Westerly | 296 | 110.5 | 844 |
| Easterly | 304 | 118.4 |	552 |
| North Westerly | 275 | 110.5 | 844|
| Best wind | 252 |111.9 |	857 |

And the maps of the routes for each wind direction can be found <a href="/personal_projects/tour_de_coffee_culture/additional_maps">here</a>.

The code used to create these routes and maps is all on my [github](https://github.com/ushham/tour_de_coffee_culture).


---

## Assumptions
**Cycling Model**

The model to calculate an average speed given the above parameters was influenced by [Steve Gribble](https://www.gribble.org/cycling/power_v_speed.html). This balences the forces of gravity, wind resistance and rolling resistance, with the power input by the cyclist to find the resulting speed.

A very simple penilty has been added to help reflect the reduced speeds in cities. The harsher the corner a cyclist must take, the harsher the time penilty.

Maximum and minimum speed limits have been added to prevent huge downhill speeds, and crawling slower than walking pace uphill.


**Routes**

Road surfaces are assumed to be constant. This is clearly not true for some of the routes that are included in this (see the Bridle path out of Lyttelton).

To reduce API calls, the routes between cafes have been assumed to be symmetric. This means the route taken from A -> B is the same as B -> A. 

The routes were set to be cycle friendly. This was done to prevent the routings putting cyclist on the freeway, but does mean some routes are not the ones that road cyclists would choose to take. Get a gravel bike and problem solved.

**Weather**

When wind is included, it is included at the same rate, from the same direction, across all routes. In other-words, no local variation to wind direction or wind speed is taken into account.