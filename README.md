# Task-API-TS

A RESTful Task Management API built with **TypeScript**, **Express v5**, and **Prisma ORM**, backed by a **PostgreSQL** database.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Language | TypeScript 5 |
| Framework | Express 5 |
| ORM | Prisma 6 |
| Database | PostgreSQL (Railway) |
| Package Manager | pnpm |
| Dev Server | Nodemon |

---

## Project Structure

```
Task-API-TS/
├── prisma/
│   └── schema.prisma       # Database schema & Prisma config
├── src/
│   └── index.ts            # App entry point & route definitions
├── .env                    # Environment variables (DB connection)
├── package.json
├── tsconfig.json
└── pnpm-workspace.yaml
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/) v10+
- A PostgreSQL database (local or hosted, e.g. [Railway](https://railway.app))

### Installation

```bash
git clone https://github.com/sakamw/Task-API-TS.git
cd Task-API-TS
pnpm install
```

### Environment Setup

Create or update the `.env` file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

> ⚠️ **Note:** The repository currently commits a live `.env` file. For production use, add `.env` to `.gitignore` and never commit real credentials.

### Database Setup

Run Prisma migrations to create the database schema:

```bash
pnpm prisma migrate dev
```

Optionally seed the database (if a seed script is available):

```bash
pnpm prisma db seed
```

### Running the Server

**Development** (with hot reload via Nodemon):

```bash
pnpm start:dev
```

**Production** (compile then run):

```bash
pnpm build
pnpm start:prod
```

The server will be available at `http://localhost:3000` (or the port configured in `src/index.ts`).

---

## API Endpoints

This API exposes standard CRUD endpoints for managing tasks.

### Tasks

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/tasks` | Retrieve all tasks |
| `GET` | `/tasks/:id` | Retrieve a single task by ID |
| `POST` | `/tasks` | Create a new task |
| `PUT` | `/tasks/:id` | Update an existing task |
| `DELETE` | `/tasks/:id` | Delete a task |

### Example Request — Create a Task

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "completed": false
  }'
```

### Example Response

```json
{
  "id": "clxyz123",
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": false,
  "createdAt": "2026-04-28T10:00:00.000Z",
  "updatedAt": "2026-04-28T10:00:00.000Z"
}
```

---

## Scripts

| Command | Description |
|---|---|
| `pnpm start:dev` | Run the dev server with Nodemon |
| `pnpm build` | Compile TypeScript to `dist/` |
| `pnpm start:prod` | Run the compiled production build |
| `pnpm prisma migrate dev` | Apply database migrations |
| `pnpm prisma studio` | Open Prisma's visual DB browser |

---

## Dependencies

### Runtime
- [`express`](https://expressjs.com/) — HTTP server framework
- [`@prisma/client`](https://www.prisma.io/) — Type-safe database client
- [`@faker-js/faker`](https://fakerjs.dev/) — Fake data generation (for seeding/testing)
- [`lodash`](https://lodash.com/) — Utility functions

### Development
- `typescript` — TypeScript compiler
- `nodemon` — Auto-restart on file changes
- `prisma` — Prisma CLI for migrations and schema management
- `@types/express` — TypeScript types for Express

---

## Database

The project uses **PostgreSQL** via Prisma ORM. The connection string is configured in `.env` under `DATABASE_URL`. The project is currently configured to use a hosted [Railway](https://railway.app) PostgreSQL instance.

To use a local PostgreSQL instance instead, update `DATABASE_URL` to:

```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/taskdb"
```

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

---

## License

ISC
