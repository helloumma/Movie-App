# 🍿Movies App

This small application allows users to input two actor/actress' names and view which films they both starred in.

### 📋Aims of App

- Allow the user to view results from inputs
- Show "no films" if user inputs two values that don't bring back any results
- User should be able to see the title, rating, summary and image of each film
- Basic implementation of error handling on inputs

### 👩‍💻Technical Details

- TypeScript
- NextJS
- Vitest
- TailwindCSS
- React-query
- Formik

### 🔧How to Run the App

```bash
npm i
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

```bash
npx vitest

npx vitest --coverage
```

### 💭Future Improvements

- Auto-complete on inputs
- Error handling (remove formik + yup)
- Unit tests
- Type safety checks
- Disable 'Find films' button when there are no inputs (?)
- Minor CSS fixes
- Update NextJS and switch to app directory
