# Nagano Pickleball Website

A comprehensive website for the Nagano Pickleball community, featuring club information, event schedules, announcements, and administrative features.

## 🌐 Live Demo

**Deployed on Vercel**: [https://naganopickleball.vercel.app](https://naganopickleball.vercel.app)

## 📋 Overview

This is a full-stack web application built for the Nagano Pickleball community. It provides information about local clubs, event schedules, announcements, and includes an admin panel for content management.

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM
- **Deployment**: Vercel

## ✨ Features

- 🏢 **Club Information**: Browse and view details about local pickleball clubs
- 📅 **Event Schedule**: View upcoming events and calendar
- 📢 **Announcements**: Stay updated with community announcements
- 👨‍💼 **Admin Panel**: Manage clubs, events, and announcements
- 📱 **Responsive Design**: Works seamlessly on all devices
- ⚡ **Fast Performance**: Optimized with Next.js

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/takuaki-taku/webPageFornNgano.git
cd webPageFornNgano
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. Set up the database:
```bash
npx prisma migrate dev
npx prisma generate
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
webPageFornNgano/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── admin/             # Admin panel pages
│   │   ├── club/              # Club pages
│   │   └── schedule/          # Schedule pages
│   ├── components/            # React components
│   ├── hooks/                 # Custom React hooks
│   └── styles/               # Global styles
├── prisma/                    # Prisma schema and migrations
└── public/                   # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Database

This project uses Prisma ORM for database management. The database schema includes:
- Clubs
- Events/Schedules
- Announcements
- User management

## 🚢 Deployment

This project is deployed on Vercel. The deployment is automatically triggered on push to the main branch.

## 📝 License

MIT License

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
