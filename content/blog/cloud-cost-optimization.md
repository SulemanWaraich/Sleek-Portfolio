---
title: "Scaling Pakpay To Handle 1000+ Users Without Breaking The System"
excerpt: "how I improved performance using vertical scaling, load balancing, and backend optimizations"
date: "april 16, 2026"
tags:
  - system-design
  - scalability
  - devops
  - performance
  - backend
---

when I launched pakpay, I wasn’t thinking about scale.

it was simple:
- build fast  
- ship fast  
- make it work  

but then something interesting happened.

after sharing it, **1000+ users started visiting**, and that’s when reality hit.

the system wasn’t designed for that.

---

## the problem

initially, everything was running on a basic setup:
- single server  
- no load distribution  
- minimal optimization  

it worked fine for testing.

but under real traffic:
- response times increased  
- api latency became noticeable  
- database queries slowed down  

👉 classic “it works on my machine” moment

---

## what i focused on

i didn’t rebuild everything.

i focused on:
- handling more users  
- reducing latency  
- improving response time  

---

## 1. vertical scaling (quick win)

first step was simple:

👉 increase server resources

- more cpu  
- more ram  

this immediately:
- reduced response delays  
- stabilized the system under load  

but there’s a limit.

👉 vertical scaling is fast  
👉 but not a long-term solution  

---

## 2. load balancing (handling traffic better)

instead of sending all traffic to one server:

👉 i distributed requests

this helped:
- prevent overload  
- improve availability  
- handle concurrent users better  

even basic load balancing made a noticeable difference.

---

## 3. reducing latency (backend optimization)

i focused on backend performance:

- optimized database queries  
- reduced unnecessary api calls  
- improved response handling  

👉 result:
- faster responses  
- smoother user experience  

---

## 4. smarter scaling decisions

i didn’t just scale blindly.

i used:
- analytics (user traffic insights)  
- real usage patterns  

to understand:
- when load increases  
- where bottlenecks happen  

👉 this helped me scale **based on actual demand**

---

## results

after these changes:

- handled **1000+ concurrent users**  
- improved load time significantly  
- reduced latency across endpoints  
- system became more stable under traffic  

---

## what i learned

### 1. scaling is not just adding resources
you need to understand **where the bottleneck is**

---

### 2. performance issues show up only in real usage
local testing never reveals real-world problems

---

### 3. simple optimizations go a long way
you don’t always need complex architecture

---

## final thoughts

> “building is easy. scaling is where engineering actually starts.”

pakpay taught me that:
- real problems come after launch  
- performance matters more than features  
- and small decisions can have a big impact  

this wasn’t about building something new.

it was about making something **work under pressure**.