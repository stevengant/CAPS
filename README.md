# LAB - Class 11

## Project: CAPS - Code Academy Parcel Service

## Author: Steve Gant

## Problem Domain
### Phase 1 Requirements
Today, we begin the first of a 4-Phase build of the CAPS system, written in Node.js. In this first phase, our goal is to setup a pool of events and handler functions, with the intent being to refactor parts of the system throughout the week, but keep the handlers themselves largely the same. The task of “delivering a package” doesn’t change (the handler), even if the mechanism for triggering that task (the event) does.

The following user/developer stories detail the major functionality for this phase of the project.

- As a vendor, I want to alert the system when I have a package to be picked up.
- As a driver, I want to be notified when there is a package to be delivered.
- As a driver, I want to alert the system when I have picked up a package and it is in transit.
- As a driver, I want to alert the system when a package has been delivered.
- As a vendor, I want to be notified when my package has been delivered.

And as developers, here are some of the development stories that are relevant to the above.

- As a developer, I want to use industry standards for managing the state of each package.
- As a developer, I want to create an event driven system so that I can write code that happens in response to events, in real time.

## Links and Resources
  - [GitHub Actions ci/cd](https://github.com/stevengant/CAPS/actions)
  - [back-end server url](https://stevegant-caps.onrender.com)

## Setup
.env requirements (where applicable)

How to initialize/run your application (where applicable)
  - e.g. npm start

How to use your library (where applicable)

Features / Routes
  - Feature One: Details of feature
  - GET : /person - specific route to hit

Tests
  - How do you run tests?
  - Any tests of note?
  - Describe any tests that you did not complete, skipped, etc

## UML
![](assets/Lab11UML.png)