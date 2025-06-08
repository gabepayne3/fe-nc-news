# NC News Front-End

This is the front-end React application for **NC News**, built during my time on the Northcoders Full-Stack JavaScript Bootcamp. It interacts with the back-end RESTful API and provides users with a smooth and responsive experience of a news website, allowing them to view, sort, and interact with articles and comments.

🔗 **Live Site:**  ](https://gabes-news-app.netlify.app/) 
🔗 **Back-End Repo:** (https://github.com/gabepayne3/my_personal_project)

---

## 📰 Features

- View all articles or filter by topic
- Sort articles by date, comment count, or votes
- View full article details and associated comments
- Post and delete comments (as the logged-in user)
- Vote on articles and comments
- Responsive layout for desktop and mobile devices

---

## 🛠️ Technologies Used

- **React** (functional components & hooks)
- **React Router DOM** for navigation
- **Axios** for HTTP requests
- **CSS** for styling
- **Netlify** for deployment

---

## 🚀 Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/gabepayne3/fe-nc-news.git

# Navigate into the project directory
cd fe-nc-news

# Install dependencies
npm install

# Start the local server
npm start

This will start the app on http://localhost:3000.

    ⚠️ Make sure the back-end API is running or deployed. The app fetches data from an external server.

📡 API Reference

This app consumes data from the NC News API, which includes endpoints such as:

    GET /api/articles

    GET /api/articles/:article_id

    GET /api/articles/:article_id/comments

    POST /api/articles/:article_id/comments

    DELETE /api/comments/:comment_id

    PATCH /api/articles/:article_id

    GET /api/topics


