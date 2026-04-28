---
title: "Multistability and intermingledness in complex high-dimensional data"
collection: publications
permalink: /_publications/2026_04_28_multistability_and_intermingledness
excerpt: A computational nonlinear dynamics worflow is presented to identify potentially multistable simulation data.
date: 2026-03-30
venue: 'Arxiv'
paperurl: https://doi.org/10.48550/arXiv.2604.09661
citation: Datseris, G., Lohmann, J., <b>Hamilton, O.</b>, Haqq-Misra, J. Multistability and intermingledness in complex high-dimensional data. <i>Under Review</i>.
header: true
---

<img src="/images/publications/multi_inter_pipeline.png" alt="Workflow pipeline" width="100%"/>

Multistability is a phenomenon prevalent in many natural systems. In climate, for example, it allows the possibility of irreversible consequences on planetary scale as a result of climate change. Indeed, a climate ''tipping element'' is a multistable component that can undergo a transition to an alternative steady state due to an external perturbation. Despite the potential impact, multistability in realistic, complex simulations (e.g. climate models) remains poorly understood. Arguably a reason for this the lack of applicable methodology that explicitly targets finite yet high-dimensional datasets. In this work we utilize recent progress in computational nonlinear dynamics to formulate a workflow that analyses potentially multistable simulation data and decides algorithmically what are the alternative steady states contained within, if any. The framework undergoes an optimization routine that showcases which observables in the data best differentiate the alternative states, and which ones do not differentiate at all, which could be used to guide monitoring and early-warning for multistable components in climate or ecosystems. Finally, once the alternate states have been found, we define an indicator called ''intermingledness''. It quantifies differences and similarities between alternate states, as well as for their basins of attraction, across various diagnostic variables. We analyse and present results using three diverse climate datasets: Atlantic ocean circulation, atmospheric midlatitude flow, and habitability of exoplanets. We also provide easy-to-use open source code for applying the workflow to new data.

Read the paper [here](https://doi.org/10.48550/arXiv.2604.09661).

---