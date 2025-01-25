---
layout: archive
title: "Feed"
permalink: /feed
author_profile: true
redirect_from:
  - /feed/
  - /news
  - /news/

header: True
---


<ul>
    {% assign folders = "talks,publications,personal_projects" | split: "," %}
    {% assign all_posts = "" | split: "" %}

    {% for post in site.publications reversed %}
        {% assign all_posts = all_posts | push: post %}
    {% endfor %}

    {% for post in site.talks reversed %}
        {% assign all_posts = all_posts | push: post %}
    {% endfor %}

    {% for post in site.personal_projects reversed %}
        {% assign all_posts = all_posts | push: post %}
    {% endfor %}


    {% assign sorted_posts = all_posts | sort: "date" | reverse %}

    {% for post in sorted_posts %}
        {% include archive-single-no-image.html %}
    {% endfor %}
</ul>