# 🚀 Dynamic Multi-Category Catalog (Premium UI)

A modern, responsive **multi-category product catalog web application** built using React, Redux Toolkit, and Tailwind CSS.
The application dynamically renders product data from a JSON structure and provides a premium ecommerce-like user experience.

---

## ✨ Live Demo

🔗 https://catalogue-app-kappa.vercel.app/

---

## 📌 Features

### 🏠 Home Page (Category Overview)

* Displays multiple categories (Cars, Bikes, Phones, Computers)
* Clean and organized UI with category-wise grouping
* Hero section with glassmorphism design

### 🔍 Search & Filters

* Real-time search functionality
* Category-based filtering
* Combined filtering (search + category)

### 📄 Item Detail Page

* Dynamic rendering of product attributes
* Iterates through `itemprops` array
* Displays product image, name, category, and specifications

### 🎨 Premium UI/UX

* Glassmorphism design
* Smooth hover animations (Tailwind CSS only)
* Responsive layout (mobile, tablet, desktop)
* Interactive components (cute loader & sorry page)

### 💖 Extra Enhancements

* Cute animated loader
* Custom "Sorry" page with interactive UI
* Clean navbar & footer (ecommerce style)

---

## 🛠️ Tech Stack

* ⚛️ React (Vite)
* 🧠 Redux Toolkit (State Management)
* 🎨 Tailwind CSS (Styling)
* 🔀 React Router DOM (Routing)
* 🎯 React Icons

---

## 📂 Project Structure

```
src/
 ├── app/
 │    └── store.js
 ├── features/
 │    └── catalogSlice.js
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Footer.jsx
 │    ├── PremiumHero.jsx
 │    ├── CategorySection.jsx
 │    ├── ItemCard.jsx
 │    ├── CuteLoader.jsx
 │    └── SorryCard.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── ItemDetail.jsx
 │    └── SorryPage.jsx
 ├── data/
 │    └── data.json
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/catalog-app.git
cd catalog-app
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run development server

```
npm run dev
```

---

## 🚀 Deployment (Vercel)

1. Push your project to GitHub
2. Import project into Vercel
3. Set:

   * Build Command: `npm run build`
   * Output Directory: `dist`

### Add `vercel.json` for routing:

```
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 🧠 Key Concepts Used

* Dynamic UI rendering using JSON data
* State management with Redux Toolkit
* Category grouping using `reduce()`
* Reusable component architecture
* Responsive design with Tailwind CSS

---

## 📸 Screenshots

> Add screenshots here (Home, Detail Page, UI, Loader)

---

## 🔥 Future Enhancements

* 🛒 Add to Cart functionality
* ❤️ Wishlist feature
* 🌙 Dark Mode
* 🔍 Search suggestions dropdown
* 📊 Performance optimization (Lighthouse)

---

## 👨‍💻 Author

**Prince Hira**
Frontend Developer

---

## 📄 License

This project is open source and available under the MIT License.
