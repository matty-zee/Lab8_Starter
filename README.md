# Lab 8 - Starter

1. You would include your unit tests in a Github action that runs whenever you push your code. That way, testing is completely automated and you won't build something that is broken. 
2. No. E2E testing is intended to emulate actions a user might do with your web application to see if it works correctly, not individual function correctness. 
3. No. A messaging feature of an application would definitely have many moving parts involving storing, sending, and receiving messages. Unit tests are intended to test invidvual function usage. 
4. Yes. This something like a max message length would be detected via a single function that just observes how long a user's message is. 