---
layout: "@src/layouts/MarkdownProjectLayout.astro"
title: Fae Scribe
description: A note taking app for role-playing games built with Ruby on Rails.
website: https://fae-scribe-c77ffba44917.herokuapp.com/
github: https://github.com/mononoken/fae-scribe
createdAt: 2023-07-08
lastUpdated: 2024-07-07
icon: "@src/assets/icons/fae-scribe.svg"
iconAlt: Fae Scribe icon
---

![Fae Scribe homepage](@src/assets/projects/fae-scribe-mobile.png)

Fae Scribe is a passion project I built to help take notes for Dungeons & Dragons campaigns. I like taking notes in markdown and enjoy tools like Obsidian that allow you to link your internal files easily. I implemented markdown parsing with this custom Obsidian linking behavior in a Ruby on Rails app.

I also like to share these notes with players as allow them to share notes too. Fae Scribe utilizes WebSocket protocol with Turbo to create quick updates on collaborative notes, making the sharing process seamless.

I wanted to push my knowledge of end to end testing as well. Fae Scribe utilizes RSpec and has over 80% test coverage as reported by SimpleCov.
