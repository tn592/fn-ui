# 🐾 fn-ui — Pet Adoption Platform

A full-featured **Pet Adoption Platform** where animal lovers can discover, adopt, and review pets online. Built with React 19 and Vite, styled with Tailwind CSS and DaisyUI, and deployed on Vercel.

---

## 📖 About the Project

fn-ui is the frontend of a Pet Adoption Platform that connects pet lovers with animals looking for a home. The platform supports two types of users — **Admins** and **Customers** — each with their own dedicated features.

- Admins manage the pet listings.
- Customers browse, adopt, and review pets using their account balance.
- Some pets are free; others require a deposit-based payment.

---

## ✨ Features

### 🔐 Authentication & User Roles
- User registration and login for **Admins** and **Customers**
- **Email verification** — users must verify their email before logging in
- Secure logout for both roles

### 🐶 Pet Management
- Admins and Customers can **add pets** to the platform
- Admins can **edit** or **delete** pet listings
- Pet details include: name, category, breed, age, description, and availability
- Pets can be set as **public** or restricted

### 👤 Customer Profile
- View personal info, account balance, and **full adoption history**
- Change password from the profile page
- Adopted pets are displayed on the customer's profile

### 🔍 Filter & Deposit
- Filter pets by **category** (Dog, Cat, Bird, etc.)
- Customers can **deposit money** into their account for future adoptions

### 🏠 Pet Adoption
- Adopt a pet if account balance is sufficient
- Adoption is **denied** if balance is insufficient
- Adopted pets are immediately reflected on the customer's profile

### ⭐ Pet Reviews
- Customers can leave **reviews only for pets they have adopted**
- All reviews for a pet are visible to the **public**

### 💳 Payment Gateway (Placeholder)
- Designed to support future online payment integration for adoption fees and payment history

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19 | UI framework |
| [Vite](https://vite.dev/) | 7 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | 5 | Tailwind component library |
| [React Router](https://reactrouter.com/) | 7 | Client-side routing |
| [Chart.js](https://www.chartjs.org/) | 4 | Data visualization (admin dashboard) |
| [React Hook Form](https://react-hook-form.com/) | 7 | Form state management |
| [Swiper](https://swiperjs.com/) | 11 | Touch-friendly pet carousels |
| [Axios](https://axios-http.com/) | 1 | HTTP client for API calls |
| [React Icons](https://react-icons.github.io/react-icons/) | 5 | Icon library |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tn592/fn-ui.git
cd fn-ui

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add your backend API URL:

```env
VITE_API_BASE_URL=https://your-backend-api.com
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## 👥 User Roles

### 🛡️ Admin
| Capability | Status |
|---|---|
| Add a pet | ✅ |
| Edit pet details | ✅ |
| Delete a pet | ✅ |
| Manage availability | ✅ |

### 🧑 Customer
| Capability | Status |
|---|---|
| Browse & filter pets | ✅ |
| Deposit money | ✅ |
| Adopt a pet | ✅ |
| Leave a review (adopted pets only) | ✅ |
| View adoption history | ✅ |

---

## 🤝 Contributing

Contributions and suggestions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source. Feel free to use and modify it.

---

> Made with ❤️ for pets everywhere 🐕🐈🐦
