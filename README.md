This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- Clone the repo into VSCODE
- run 'npm i' to install all dependencies
- you should be able to 'npm run dev'

Database

- you may need to set your execution policy to enable this with 'Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass'

- 'npx prisma studio' loads a gui in your browser where you can view, edit & delete records

- in order to edit the schema of prisma, edit/add tables as per the template in prisma/schema.prisma. Then, run 'prisma migrate dev --name 'your_name_without_quotes''. Then run 'prisma generate'. Note that there may be conflicts if you add columns to tables with data already in them. We may need to reconcile data at the end, so worth talking to each other before we do this.

- Database actions are performed in the lib/actions folder using the prisma client. Some examples already in place are in the authActions folder.

Front End

- Try to use next-ui packages where possible, components like Button etc. are more flexible in this package, and easier to use than out-of-the-box React ones.
- Use 'import Link from 'next/link' for routing. Examples of these are found in the app/auth/signin folder

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
