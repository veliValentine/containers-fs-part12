# Containers
[Part 12](https://fullstackopen.com/en/part12) of [the full stack open](https://fullstackopen.com/en/) [mooc](https://www.mooc.fi/en/) cource. This cource is a part of the university of Helsinki computer science studies (1 cr).

## Cource contents
"In this part, we will learn how to package code into standard units of software called containers. These containers can help us develop software faster and easier than before. Along the way, we will also explore a completely new viewpoint for web development outside of the now-familiar Node.js backend and React frontend.

We will utilize containers to create immutable execution environments for our Node.js and React projects. Containers also make it easy to include multiple services with our projects. With the flexibility, we will explore and experiment with many different and popular tools by utilizing containers.

This section has been created by [Jami Kousa](https://github.com/jakousa) in collaboration with the Helsinki-based Services Foundation team at Unity. The Services Foundation team works on providing platforms for other teams at Unity to succeed in their mission of building great services for their customers. The team is passionate about improving Unity’s developer experience and works on tools like the Unity Dashboard, the Unity Editor, and [Unity.com](https://unity.com/)."[1](https://fullstackopen.com/en/part12)

## Excercise
[Submission application](https://studies.cs.helsinki.fi/stats/courses/fs-containers)

### 12.1
Run: `curl http://helsinki.fi/ > script-answers/exercise12_1.txt`

### 12.5
Build: `docker build -t todo-backend:12.5 todo-app/todo-backend/`

Run: `docker run -it -p 3000:3000 todo-backend:12.5`

### 12.6
`docker compose --project-directory todo-app/todo-backend up`