---
title: "Revamping Siasisten - Taching Assistant Management App"
date: "2023-12-15"
description: "A revamp of FASILKOM UI's teaching assistant hiring app, enhancing user experience, performance, and security. Conducted end-to-end software development cycle."
type: "project"
featuredImage: "./siasisten.png"
tags: ["python", "django", "react", "docker"]
slug: "siasisten"
---

As a Computer Science student at the University of Indonesia, I've experienced firsthand how crucial teaching assistants are to the academic ecosystem. When the opportunity arose to revamp our faculty's TA management system as part of our Software Engineering course, I knew this wasn't just another academic project – it was a chance to solve real problems affecting hundreds of students and faculty members daily.

## The Challenge

The existing Siasisten system had served its purpose but was showing clear signs of age. Users regularly encountered frustratingly slow API response times, struggled with an unintuitive interface, and worked around various security vulnerabilities in the API layer. What should have been a straightforward process of managing teaching assistants had become unnecessarily complicated, affecting everyone from students to faculty members.

## Our Solution

Working closely with faculty stakeholders, we rebuilt Siasisten from the ground up with a laser focus on speed, security, and user experience. The system serves as a central hub for the entire TA management process, connecting students, lecturers, and administrative staff in a seamless workflow. Students and TAs can easily navigate the application process and manage their activity logs, while lecturers have efficient tools for selecting candidates and monitoring activities. Behind the scenes, our finance and administrative staff can comprehensively manage everything from applications to payroll processing.

We built Siasisten on a modern, robust technical stack chosen specifically for longevity and maintainability. The backend runs on Django REST Framework, providing us with robust security features and rapid development capabilities. For the frontend, we chose React to create a responsive, dynamic user interface that feels natural to use. PostgreSQL serves as our reliable data management solution, while Docker containerization and VM deployment ensure consistent environments across development and production.

## Development Philosophy

Our approach to development became one of the most valuable aspects of this project. We fully embraced Test-Driven Development (TDD), which fundamentally changed how we approached building features. Writing tests first forced us to think deeply about requirements before jumping into implementation, ensured comprehensive code coverage, and helped us catch bugs early in the development cycle.

We structured our work around two-week sprints, following Agile methodology with regular standups, retrospectives, and reviews. This rhythm helped us stay perfectly aligned with stakeholder expectations while giving us the flexibility to adapt to changing requirements. The regular feedback loops proved invaluable for maintaining steady progress and ensuring we were building exactly what our users needed.

## Overcoming Technical Challenges

One of our biggest technical hurdles was addressing the tightly coupled nature of various system modules. Rather than rushing to add features, we took a step back and carefully analyzed the existing dependency chains. This led us to design clear interface boundaries between modules and implement a more modular architecture that significantly improved both maintainability and scalability.

Performance optimization was another critical focus area. We implemented efficient database design and optimized our API endpoints for minimal response times. The result was a noticeably more responsive system that users could rely on throughout their daily tasks.

## Impact and Looking Forward

The revamped Siasisten has successfully modernized the TA management process at FASILKOM UI. Operations that once tested users' patience now complete in seconds, security vulnerabilities have been sealed through proper API authentication and authorization, and the intuitive interface has dramatically reduced the learning curve for new users. Perhaps most importantly, the streamlined workflow has given back valuable time to both TAs and faculty members.

This project taught me invaluable lessons about real-world software development. I learned the critical importance of thorough requirement gathering before writing any code, how to effectively translate business needs into technical specifications, and the immense value of good testing practices in maintaining code quality. The significance of user feedback in the development cycle became clearly apparent through our regular interactions with stakeholders.

Building Siasisten was more than just a course project – it was an opportunity to create lasting impact while gaining hands-on experience with professional software development practices. The skills and insights gained from this project continue to influence my approach to software engineering challenges, and I'm excited to carry these lessons forward into future endeavors.
