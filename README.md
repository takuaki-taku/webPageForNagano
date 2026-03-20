# 🌸 Sakura City Pickleball Association (Demo Site)

A comprehensive community platform for the fictional **Sakura City Pickleball Association**, featuring club management, event scheduling, announcements, and an administrative dashboard.

## 🌐 Live Demo

**Deployed on Vercel**: [https://naganopickleball.vercel.app](https://naganopickleball.vercel.app)
*(Note: Link depends on your Vercel project configuration)*

## 📋 Project Overview

This is a full-stack web application designed to serve as a central hub for a local pickleball community. Originally developed for the Nagano region, this **Demo Version (Sakura City)** has been customized to showcase the platform's capabilities for any regional sports association.

### Key Features
- 🏢 **Club Directory**: Browse and view detailed profiles of local pickleball clubs.
- 📅 **Dynamic Scheduling**: Real-time practice and tournament schedules with club-specific color coding.
- 📢 **Announcements**: Stay updated with the latest community news and official notices.
- 👨‍💼 **Admin Control Panel**: Full CRUD operations for managing clubs, events, and announcements.
- 📱 **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- ⚡ **High Performance**: Optimized using Next.js 15 App Router and server-side rendering.

## 🛠️ Tech Stack

- **Frontend**: [Next.js 15+](https://nextjs.org/) (App Router), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database & ORM**: [Prisma ORM](https://www.prisma.io/), [PostgreSQL (Neon)](https://neon.tech/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended)

### Installation

1. **Clone the repository**:
   ```bash
   git clone -b demo-site https://github.com/takuaki-taku/webPageForNagano.git
   cd webPageForNagano
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://user:password@host:port/dbname?sslmode=require"
   NEXT_PUBLIC_URL="http://localhost:3000"
   ```

4. **Database Setup**:
   ```bash
   npx prisma generate
   # To sync schema with your DB:
   npx prisma db push
   ```

5. **Run Development Server**:
   ```bash
   pnpm dev
   ```

## 📁 Project Structure

```text
src/
├── app/             # Next.js App Router (Pages & API)
│   ├── admin/       # Management Dashboard
│   ├── club/        # Club Details
│   └── schedule/    # Event Calendars
├── components/      # Reusable React UI Components
├── lib/             # Prisma client & shared utilities
└── styles/          # Global CSS & Tailwind configuration
```

## 📝 License

This project is licensed under the MIT License.

---
*Created as a portfolio demonstration of a regional community management system.*
