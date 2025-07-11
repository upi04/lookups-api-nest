# ✅ Final Project Explanation – Lookups API (NestJS + Prisma + PostgreSQL)

Hi there! 👋  
This project is a modernized version of the **Lookups API** that was previously built using **DynamoDB**, **Elasticsearch**, and **Express**. We've now migrated it to a clean, scalable stack using:

- ✅ **NestJS** – Modular and scalable backend framework  
- ✅ **Prisma ORM** – Type-safe database access  
- ✅ **PostgreSQL** – As the new relational database  
- ✅ **JWT Authentication** – For secure access control  
- ✅ **Swagger** – For interactive API documentation  
- ✅ **Pagination & Filtering** – For better performance and usability  

---

## 🔐 1. Authentication (Login & Register)

We added **JWT-based authentication** to secure the API:

### Register Endpoint

**POST** `/auth/register`

Example JSON:
```json
{
  "email": "zulal@example.com",
  "password": "rahasia123"
}
```
## 🌍 2. Core Resources (CRUD APIs)

You have implemented and tested CRUD for:

- ✅ `/countries`
- ✅ `/devices`
- ✅ `/educational-institution`

Each resource supports:

- `GET` all (with pagination & search)
- `GET` by ID
- `POST` (create new)
- `PUT` (update)
- `DELETE` (remove)

---

## 🧠 3. Validation with DTOs

All input data is validated using `class-validator`.  
This ensures:

- Required fields (`@IsNotEmpty()`)
- Proper formats (`@IsEmail()`, `@Length()`, etc.)

---

## 📄 4. Swagger Documentation

You can view and test all endpoints from your browser:

👉 [http://localhost:3000/api](http://localhost:3000/api)

Includes:

- Route descriptions
- Required parameters
- Example requests/responses

---

## 🔄 5. Pagination & Search

Pagination and filtering are supported on all `GET` endpoints.

**Example query:**


This keeps the API scalable with large datasets.

---

## 📝 6. Database & Prisma

Prisma schema defines:

- `Country`
- `Device`
- `EducationalInstitution`
- `User`

Key highlights:

- Proper foreign key relationships are implemented
- `prisma migrate` used to generate and apply migrations
- Prisma Client is used for all DB operations in services

---

## 📁 7. Project Structure

Follows NestJS best practices:

src/
├── auth/
├── country/
├── device/
├── educational-institution/
├── prisma/
├── app.module.ts
├── main.ts


---

## 🧪 8. Testing

Tested thoroughly using **Postman**:

- ✅ Register & Login
- ✅ Protected Routes (with JWT)
- ✅ CRUD for all entities
- ✅ Pagination & Filtering

You can use seed data or `POST` requests to populate the database.

---

## 📦 9. Final Submission Package

Include the following in your zipped project:

- ✅ `src/` folder (source code)
- ✅ `prisma/` folder (schema + migrations)
- ✅ `.env.example` (no secrets)
- ✅ `package.json`
- ✅ `README.md` (this file)
- ✅ `test_postman/lookups-api.postman_collection.json`
