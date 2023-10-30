---
title: "MatkulGue, University Course Catalog, Timetable Builder, and Course Planner"
date: "2023-08-05"
description: "A MERN web app for UI students. 14K+ courses, 99.9% server uptime via AWS. Visual planning, non-clashing timetables, calendar sync, and custom wallpapers make course management seamless. Access course details with ease."
type: "project"
featuredImage: "./matkulgue.png"
tags: ["react", "node", "express", "mongodb"]
slug: "matkulgue"
---

🔗 [http://matkulgue.nafisazizi.com](http://matkulgue.nafisazizi.com)

Hey there, I want to introduce you to a personal project that has saved my academic life countless times - **MatkulGue**. This MERN web app is tailor-made for University of Indonesia (UI) students like me who needed a better way to manage their courses, build timetables, and plan their academic journey. Let me take you on a journey through my own experience and how MatkulGue came to be.

# Background

Picture this: it's 2022, and I'm gearing up for my [exchange semester at the National University of Singapore (**NUS**)](/blogs/nus-exchange). The excitement was clear, but so was the stress about course selection and study planning. You see, I'm enrolled in a [double degree program](https://cs.ui.ac.id/sarjana-ilmu-komputer-kelas-internasional/), shuttling between the University of Indonesia and the University of Queensland. My academic path requires me to spend five semesters in Indonesia, **completing all mandatory courses**, before continuing my degree in Queensland.

Now, here's the twist – the only window for my exchange semester was during my fourth semester at UI. While most students opt for exchange in their 6th semester onwards, when they already finished most of their mandatory courses, but here I had a bunch of mandatory courses left. So, I had to plan my exchange semester meticulously to ensure everything would run smoothly: completing my mandatory courses in UI, **going to UQ and graduate without any delay**. NUS, my exchange university, offers limited courses for exchange students and encourages flexibility in study plans. Plus, I had to make sure I took and **passed all prerequisite** courses for my following (5th) semester. Stressful, right? Well, that's just the tip of the iceberg!

As I embarked on this planning journey, I realized how cumbersome it was to gather information about course details. My home university didn't have a platform that consolidated all the crucial information like course descriptions, syllabus, and reviews from previous students. I had to navigate through multiple university platforms, which, frankly, was not the most efficient user experience.

On the flip side, NUS had a platform called [NUSMods](https://nusmods.com/timetable/sem-1), which provided course timetables, details, semesters of offering, and reviews. But guess what? They didn't have the syllabus, a crucial piece of the puzzle. Syllabus were vital because I needed to ensure the courses covered material similar to what my home university offered to get those credits transferred.

# Turning Point

Fast forward to one fateful day when I was finalizing my course plan. I reached out to a senior for advice, and he was **taken aback**. Why? Because I was planning to take a course in 5th semester which **only offered in even semesters**, the very semesters I'd be on exchange! In other words, if I didn't take that course during my exchange semester, I'd have to wait until the following year, by which time I should be well on my way to Queensland.

I'm eternally grateful that I sought his advice, even though it meant a change of plans. But it also underscored a critical point - something as seemingly minor as knowing when a particular course is offered can have a **massive impact** on your academic journey.

# Development Journey

And there it was, the spark of inspiration that would eventually become MatkulGue. The idea had been brewing in my mind for quite some time, but it wasn't until I returned from my exchange semester (busy traveling and all lol) that I finally had the time and motivation to bring it to life.

MatkulGue quickly evolved into my passion project, a solution aimed at **addressing the academic headaches** I had faced during my own course planning. My mission was clear: create a user-friendly platform that would empower students like me with the information they needed to make informed decisions about their courses and timetables.

One significant source of inspiration for MatkulGue was NUSmods, a platform from my exchange university. It offered valuable insights into course timetables, details, and student reviews. It was a fantastic resource, and I wanted to build on that concept, making it even more accessible and versatile for UI students.

The name "MatkulGue" is a fusion of two Indonesian words: "matkul" and "gue." "Matkul" is short for "mata kuliah," which translates to "courses" in Bahasa Indonesia. "Gue" is an informal way of saying "I," "me," or "my" commonly used in Jakarta. This name reflects the personal touch we aimed to bring to the platform, making it feel like it was designed specifically for each user.

What's remarkable is that I undertook the entire journey of building MatkulGue **single-handedly** – from designing, coding, to deployment. It's important to note that MatkulGue marked my very first "real" project using a tech stack I had never used before – **MERN** (MongoDB, Express, React, and Node).

The development process was filled with its fair share of ups and downs, especially as a first-timer with the added challenge of being a single-armed developer. It was a **steep learning curve**, and there were moments of frustration and triumph along the way. But the vision for MatkulGue kept me going.

I meticulously collected course data, developed an intuitive user interface, and integrated features such as visual planning, timetables that never clashed, calendar synchronization, and even the option to customize wallpapers. My goal was simple – to make course management as effortless and enjoyable as possible, despite the hurdles we faced.

# Highlighted Challenges

Now, let's talk about the nitty-gritty details of the development journey. As someone relatively new to the world of app deployment, I encountered my fair share of challenges while building MatkulGue. One of the most significant hurdles I faced was ensuring that the app delivered a **lightning-fast** performance, despite the sheer volume of course data it had to handle.

You see, managing a vast amount of course information, combined with using a free-plan database cloud and server deployment, was a recipe for a less-than-ideal user experience. It was a real headache! The app struggled to provide the responsiveness that students needed when searching for courses and planning their timetables. It was clear that I had to find a solution, and fast.

After some serious troubleshooting and optimization efforts, I managed to refine the query processing and streamline the app's performance. But I knew I had to take it a step further to ensure MatkulGue lived up to its potential.

This is where **Amazon Web Services (AWS)** came into the picture. Initially, diving into AWS felt a bit daunting. I believed my knowledge of Linux was rather limited, and AWS seemed like a whole new world. But I was determined to give it a shot.

I rolled up my sleeves and embarked on the journey of getting MatkulGue up and running on AWS. It was a learning curve filled with moments of uncertainty and, honestly, a few anxious days. But as I tinkered, configured, and set things up, I began to see the light at the end of the tunnel.

After days of effort and perseverance, MatkulGue was finally operational on AWS. The result? The performance was not just good; it was blazingly fast! It was a victory, not just for me but for every student who would use the platform.

# How’s User Reacts?

Once MatkulGue went live, the response from users was nothing short of exhilarating. People started reaching out to me, expressing their **excitement and appreciation** for the platform. It was incredibly rewarding to hear users highlight some of the app's coolest features.

But what really blew my mind was the global reach of MatkulGue right from day one. Users weren't just pouring in from Indonesia; they were coming from all corners of the world, representing **over 7 countries**! The feeling of knowing that MatkulGue was making a positive impact on students was beyond words. The joy and satisfaction of knowing that something I had built was helping people in their academic journeys was an incredible reward in itself.

# The Future of Matkulgue

As I reflect on the incredible journey of bringing MatkulGue to life, I can't help but be grateful for the lessons I've learned along the way. This project has been a **masterclass** in determination, problem-solving, and the power of a clear vision. It taught me that challenges are not roadblocks but opportunities for growth. Even when faced with unfamiliar technologies and daunting obstacles, the pursuit of a meaningful goal can lead to remarkable achievements.

The future of MatkulGue is bright. I’m planning to **invite others to contribute** to MatkulGue. Our commitment to making course management seamless and enjoyable for students remains unwavering. We will continue to listen to your feedback, enhance existing features, and introduce new ones to cater to your needs. Our goal is to provide you with a platform that not only simplifies your academic life but also inspires you to excel in your studies.

So, what's next? Stay tuned for updates, as we have exciting plans in the pipeline. The journey of MatkulGue has only just begun, and we're thrilled to have you along for the ride. As we move forward, let's remember that every small step we take towards our goals can have a profound impact. MatkulGue is proof that a simple idea, fueled by determination, can grow into something that touches lives around the world.
