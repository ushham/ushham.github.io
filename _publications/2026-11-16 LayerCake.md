---
title: "LayerCake v1.0: a framework for low- to intermediate-order automated models development"
collection: publications
permalink: /_publications/2026_11_16_LayerCake
excerpt: A Python package to automatically project model equations on basis modes.
date: 2026-11-14
venue: 'Zonodo'
paperurl: https://zenodo.org/records/19789923
citation: "Demaeyer, J., <b>Hamilton, O.</b>, Vannitsem, S. LayerCake v1.0: a framework for low- to intermediate-order automated models development. <i>(Under Review in Geoscientific Model Development)</i>."
header: true
---

A new model development framework called LayerCake is presented. It is written in the Python language and relies on the Sympy symbolic computation package to compute the Galerkin projection of two-dimensional spatially extended geophysical models. These projections provide their time evolution operator in the spectral space on a restricted set of modes. The resulting tendencies of the models can be evaluated either numerically (for time integration) or symbolically (for parameters sensitivity analysis and bifurcation analysis). We provide several simple examples of geophysical models to showcase the capabilities of the framework, and we hint at how more complex systems can be designed.