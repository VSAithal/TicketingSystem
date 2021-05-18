### Getting started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, install the dependencies:

```bash
yarn install
```

Then seed the database:

```bash
yarn seed
```

Now you can start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### API endpoints

`GET /api/tickets` - get all tickets
`DELETE /api/tickets/:ticketId` - delete a ticket with id = ticketId
`GET /api/users` - get all users

### Specifications

There are certain specifications defined which **must** be met. If you should encounter some shortcomings of the existing system this would need to be corrected.

- the UI should follow the [given designs](https://www.figma.com/file/XRLLHLtNSgEKSQGE4kaFQ9/Front-end-Task?node-id=0%3A1)
- the UI should use the Material-UI component library

## Objective

Your job is to extend the existing UI so it satisfies the following requirements. For more details please see the [attached designs](https://www.figma.com/file/XRLLHLtNSgEKSQGE4kaFQ9/Front-end-Task?node-id=0%3A1). If you have any questions feel free to ask at any time.

### Task A

**AS** a User
I want to be able to delete tasks.

### Task B

**AS** a User
I want to be able to manage the tasks on all my devices.

### Stretch goal

So far this poor repo has no tests. If you feel pumped about it let us see how you would setup testing is this environment and show us an example test.

