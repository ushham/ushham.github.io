---
title: "EGU Poster 2024"
subtitle: "Additional Results"
excerpt:
permalink: /outreach/2024-04-15-EGU/additional_results
collection: sub_pages
header: true
include: false
---

[Back to poster](/outreach/2024-04-15-EGU)

## <a id="behaviour">Model Behaviour</a>

Here is an animation showing the behaviour of the model over time.
On the left we show the position of the trajectory in projected phase spece, on the modes $(x, y)=(\psi_{a, 3}, \psi_{a, 2})$, which allows us to visualise the strength of the blockings

On the right we show the 500hPa geopotential height anomaly over time.

<video src='../../images/outreach/2024_egu/MALAOM_regular_params.mp4' width=800 controls></video>

## <a id="hadley">Hadley Cell</a>

The Hadley fixed point refers to the model state which displays a fixed unchanging zonal type behaviour, caused by all modes having 0 magnitude apart from the mode $\psi_{a,1}$. This causes a fixed constant decreasing gradient in the geopotential height between the south and north, resulting in a constant band of high pressure in the south and constant low in the north. This solution is stable for $C_g\le 50$Wm$^{-1}$. As the north-south temperature gradient is increased, the resulting circulation becomes stronger and destabilises.   

In the real world the Hadley cell refers to the atmospheric circulation that features air rising near the equator, flowing north,then cooling and descending around the subtropics. It is caused by a temperature gradient between the equator and further north. To the north there is a similar cell of rotating air raising in the mid-latitudes and descending in the sub-tropics.

Below we show a sweep through the bifurcation diagram varying $C_g$ on the $x$ axis, and display the $L_2$ norm on the y axis. We also show a plot of the solutions for each branch in the bifurcation diagram, and a plot of the attractor in grey. These solutions are projected onto $(x, y)=(\psi_{a, 3}, \psi_{a, 2})$.

<video src='../../images/outreach/2024_egu/Continuation_test_cg.mp4' width=800 controls></video>

## <a id="windward">Windward Blocking</a>
At values of $C_g=300$Wm$^{-1}$ and $k_d=0.01405$ we find a stable heteroclinic orbit. Below we show the model behaviour for this stable orbit.
<video src='../../images/outreach/2024_egu/windward_blocking_behaviour.mp4' width=800 controls></video>

As $k_d$ decreases a crisis occurs and the trajectory again becomes chaotic. This crisis is shown in the below plot, where the stable PO at fixed $k_d=0.0104$ is shown on top of the trajectory for varying $k_d$.
Once we leave the region of stability, through a series of period doublings or torus bifurcations, depending on the direction we take in $k_d$ or $C_g$, the behaviour again becomes chaotic. However, we see that there is a persistance of the periodic orbit on the dynamics.

<video src='../../images/outreach/2024_egu/qgs_crisis.mp4' width=800 controls></video>


## <a id="leeward">Leeward Blocking</a>
At $k_d=0.08$ and $C_g=370$Wm$^{-1}$ there is a region where there is a stable periodic orbit. Below is a look at the climatology of the model at these parameters. Note that the periodic orbit has to orbit twice in the projected space to complete a single orbit in the full state space.

<video src='../../images/outreach/2024_egu/leeward_blocking_behaviour.mp4' width=800 controls></video>


This PO is stable for a narrow band of $k_d$, and we show the evolution of the solutions as we sweep over $k_d$ in the bifurcation diagram below.

<video src='../../images/outreach/2024_egu/kd continuation.mp4' width=800 controls></video>


---
[Back to poster](/outreach/2024-04-15-EGU)