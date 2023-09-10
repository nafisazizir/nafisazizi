---
title: "Creating Lifelong Memories: Bonds and Adventures of a Lifetime at NUS"
date: "2023-07-21"
description: "Embarking on thrilling adventures across diverse landscapes, from conquering mountain peaks on a motorbike to exploring pristine island beaches, our shared travel experiences forged unforgettable bonds."
type: "blog"
featuredImage: "./nus-exchange.png"
slug: "nus-exchange"
---

# This is Heading 1

Recently, the [QS World University Rankings 2024](https://www.topuniversities.com/university-rankings/world-university-rankings/2024) have just been released and NUS was ranked **8th** in the world! Making it’s remarkable achievements by being the only institution from Asia that sits comfortable in the top 10 😱.

## This is Heading 2

As some of you may know, last semester I had the opportunity to do an exchange in NUS, Singapore as part of my Computer Science study in Universitas Indonesia. I was beyond grateful to be the part of NUS School of Computing, where the CS program was ranked 6th in the world!! And let me tell you, it was **_an experience like no others_**!

### This is Heading 3

We hopped on adventures that pushed the boundaries out of our **_comfort zones_** and unlock some **_new skills 🧗🏻‍♂️🏄🏻‍♂️_**. From conquering the peak of mountains and embark on a thrilling loop that offered a scenic panoramic views, to unforgettable island hopping experiences, complete with a vibrant coral reefs and pristine beaches 🏖️ with turquoise crystal clear waters. **We truly lived on an adventure of a lifetime.** These shared experiences not only strengthened our friendship, but also allowed us to tap into our adventurous spirit and discover newfound strength within ourselves.

# Code Implementation

The Shade app's functionality is driven by a set of functions that manipulate color values. These functions enable the app to generate shades with precision and accuracy:

- `darken`: This function darkens a base color by applying a darkening factor `(1 - 100)`, resulting in deeper shades.
- `lighten`: This function lightens a base color by applying a lightening factor `(1 - 100)`, resulting in brighter shades.

- `generateShades`: This function orchestrates the process of generating shades by calling the `darken` and `lighten` functions. The amount of factor for each shades are:
  ```python
  {
      **lightest**: lighten by 90%,
      **lighter**: lighten by 60%,
      **light**: lighten by 30%,
      **primary**: keep the primary color,
      **dark**: darken by 30%,
      **darker**: darken by 50%,
    }
  ```
- `addToDesign`: This function adds the generated color palette to the Canva design.
