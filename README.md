# 🧠 Job Assistant

**Job Assistant** is a modern web application built with **Next.js** and **TypeScript**, designed to streamline job hunting and professional organization. It serves as a productivity-focused assistant that integrates user authentication, advanced UI/UX, and modular architecture to help users stay on track with their career growth.

---

## 📸 Preview

> Add a screenshot or GIF of the application

![Job Assistant Preview](public/preview.png)

---

## 🚀 Features

- ✅ Authentication with **Clerk**
- ✅ Responsive UI with **Tailwind CSS** & **Shadcn/UI**
- ✅ Reusable components and clean structure
- ✅ Global state with **React Context**
- ✅ Convex (optional): for real-time backend/database
- ✅ Dark mode support
- ✅ Middleware routing for access control
- ✅ Modern architecture with the **App Router** (Next.js)
- ✅ TypeScript everywhere
- ✅ Deployed on **Vercel**

---

## 🧱 Tech Stack

| Layer         | Technology        | Purpose                                               |
|---------------|-------------------|--------------------------------------------------------|
| Frontend      | Next.js (App Router) | Routing, SSR, and UI Composition                   |
| Styling       | Tailwind CSS, Shadcn/UI | Rapid UI development, utility classes         |
| Language      | TypeScript         | Type safety across the codebase                       |
| Auth          | Clerk              | Authentication, sessions, user profiles               |
| State Mgmt    | React Context API  | Global state handling                                 |
| Backend (opt) | Convex             | Real-time database and backend logic (if integrated)  |
| Hosting       | Vercel             | Deployment of frontend (serverless)                   |

---

## 🗂️ Project Structure

```
job-assistant/
├── app/               # Main app routes (App Router)
│   ├── layout.tsx     # Global layout
│   ├── page.tsx       # Root landing page
│   └── dashboard/     # Protected dashboard routes
├── components/        # Shared UI components
├── context/           # Global React contexts
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets
├── styles/            # Global and component styles
├── convex/            # Optional backend logic (if using Convex)
├── middleware.ts      # Route protection
├── next.config.ts     # Next.js configuration
├── package.json
└── tailwind.config.ts
```

---

## 📦 Installation


```

###  Install dependencies
```bash
npm install  # or yarn or pnpm
```

###  Create `.env.local`
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🧪 Running the App

```bash
# Start development server
npm run dev
```

Visit `http://localhost:3000`

---

## 🧑‍💻 Scripts

| Script        | Purpose                            |
|---------------|------------------------------------|
| `dev`         | Start dev server                   |
| `build`       | Build for production               |
| `start`       | Start production build             |
| `lint`        | Run ESLint                         |
| `test`        | Run tests (if configured)          |

---

## ☁️ Deployment (Vercel)

### Steps
1. Push code to GitHub
2. Import repo into [Vercel](https://vercel.com)
3. Set up environment variables in Vercel dashboard
4. Deploy!

---

## 🧩 Integrations

- **Clerk** for auth  
  Get keys at [https://clerk.dev](https://clerk.dev)

- **Convex** (optional real-time backend)  
  [https://convex.dev](https://convex.dev)

- **Vercel** for frontend hosting  
  [https://vercel.com](https://vercel.com)

---

## 🧠 Best Practices

- Component-driven development
- Strong type safety using TypeScript
- Modular file structure
- Centralized config and env management
- Accessibility and mobile responsiveness
- Git-based deployment with CI/CD support

---

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Clerk Docs](https://clerk.dev/docs)
- [Convex Docs](https://docs.convex.dev/)
- [Vercel Deployment](https://vercel.com/docs)

---

## 🛠️ Contributing

1. Fork the repository
2. Create a new feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'add awesome feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## 🪪 License

[MIT License](LICENSE)

---



---

## ⭐ Support

If you like this project, leave a star ⭐ and consider contributing or sharing with others!
