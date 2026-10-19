# XAddToList

A simple and responsive React application built with Vite and CSS Modules that allows users to add items to a dynamic list and remove them with ease.

## 🔗 Links

- **Live Demo**: [https://xaddtolist-tanmay-gurav.vercel.app/](https://xaddtolist-tanmay-gurav.vercel.app/)
- **GitHub Repository**: [https://github.com/tanmaygurav/XAddToList](https://github.com/tanmaygurav/XAddToList)

---

## 🚀 Features

- **Add Items**: Input any item text and add it by clicking the **Add** button or pressing <kbd>Enter</kbd>.
- **Remove Items**: Easily delete items individually from the list.
- **Empty State Display**: Displays an intuitive message when no items have been added yet (`"No items yet. Add your first one!"`).
- **Responsive & Clean UI**: Centered card layout styled with scoped CSS Modules.
- **Form Validation**: Automatically ignores empty inputs to avoid adding blank items.

---

## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **CSS Modules**
- **Cypress** (for E2E testing)

---

## 💻 Getting Started Locally

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Running the App

1. Clone the repository:
   ```bash
   git clone https://github.com/tanmaygurav/XAddToList.git
   cd XAddToList
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 🧪 Running Cypress Tests

To run the assessment test suite:

1. Ensure the development server is running at `http://localhost:5173`.
2. Open a separate terminal and navigate into the `assessment` directory:
   ```bash
   cd assessment
   npm install
   ```
3. Run Cypress headless:
   ```bash
   npx cypress run --spec "cypress/e2e/spec.cy.js"
   ```
   Or open the Cypress interactive test runner:
   ```bash
   npx cypress open
   ```

