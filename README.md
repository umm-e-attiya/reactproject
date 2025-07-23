# React UI Components Library

## 📌 Project Description

This is a reusable UI components library built with **React**, featuring:

- Custom **Buttons** (primary, secondary, disabled)
- Profile-style **Cards** with avatar images
- **Modal Popups** that open on "View Profile" button click

The project demonstrates modular component structure using React functional components and CSS styling.

---

## ⚙️ Installation Instructions

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-ui-library.git
cd react-ui-library

2.Install dependencies:

bash
Copy
Edit
npm install

3.Run the project:
npm run dev     # for Vite
# or
npm start       # for Create React App


🚀 Usage Guidelines

Button:
<Button label="Click Me" type="primary" onClick={() => alert('Clicked!')} />

Card:
<Card
  title="John Doe"
  description="Frontend Developer"
  image="https://i.pravatar.cc/300?img=1"
/>

Modal:
<Modal isOpen={true} onClose={() => setOpen(false)}>
  <h2>Modal Title</h2>
  <p>This is modal content.</p>
</Modal>


```
