# cosmos-explorer
NASA API + AI-powered space dashboard
# 🔭 Cosmos Explorer

Cosmos Explorer is a full-stack web application that brings NASA’s open data to life through an interactive and intuitive user interface. This project allows users to explore space phenomena, access rich astronomical content, and engage with AI to learn more about the cosmos.

## 🌐 Live Demo

[https://cosmos-explorer.onrender.com](https://cosmos-explorer.onrender.com)

---

## ✨ Features Overview

### 🖼️ Astronomy Picture of the Day (APOD)
Fetches NASA's daily image or video with contextual information about celestial phenomena.

![APOD](screenshots/Screenshot-APOD.png)

---

### 🤖 Ask the Cosmos
An AI-powered chat assistant that lets users ask questions about space, planets, missions, and astronomical concepts. This uses AI language models to return insightful, educational content based on queries.

![Ask the Cosmos](screenshots/Screenshot-AskCosmos.png)

---

### 🚀 Mars Rover Photo Explorer
Allows users to search and view real images captured by NASA's Mars rovers on a specific date and camera.

![Mars Rover](screenshots/Screenshot-Mars.png)

---

### ☄️ Near Earth Object (NEO) Dashboard
Visualizes asteroid and object data near Earth using a bar chart for a selected date range (max 7 days). Displays velocity in km/h for comparative analysis.

![NEO Dashboard](screenshots/Screenshot-NEO.png)

---

### 🔍 NASA Image Search
Users can search NASA’s image archive by keyword and browse high-resolution space photos.

![Image Search](screenshots/Screenshot-ImageSearch.png)

---

## 🛠️ Tech Stack

### Frontend
- React
- Chart.js (for NEO dashboard visualization)
- Axios
- Bootstrap 5 (styling)

### Backend
- Node.js
- Express
- Axios (for API requests)
- dotenv (for environment configuration)

---

## 📁 Folder Structure

```bash
assignment/
│
├── backend/              # Express server
│   ├── routes/           # API route handlers
│   ├── .env              # API keys
│   └── index.js          # Server entry
│
├── frontend/             # React app
│   ├── src/              # Components & Pages
│   ├── public/           # Static files
│   ├── .env              # REACT_APP_BACKEND_URL
│   └── package.json      # Frontend dependencies
```

---

## 🔐 Environment Variables

### Backend `.env`

```env
NASA_API_KEY=your_nasa_api_key
OPENAI_API_KEY=your_openai_api_key
```

### Frontend `.env`

```env
REACT_APP_BACKEND_URL=https://cosmos-explorer.onrender.com
```

---

## 🚀 Getting Started

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 📸 Screenshots

Ensure the screenshots are placed in a `screenshots/` folder in your repo:
```
screenshots/
├── Screenshot-APOD.png
├── Screenshot-Mars.png
├── Screenshot-NEO.png
├── Screenshot-ImageSearch.png
├── Screenshot-AskCosmos.png
```

---

## 📚 Learn More

- [NASA Open APIs](https://api.nasa.gov)
- [OpenAI API](https://platform.openai.com)
- [React Documentation](https://reactjs.org/)
- [Chart.js Documentation](https://www.chartjs.org/)

---

## 👨‍💻 Author

Saurav Raveendran T  
[GitHub](https://github.com/saurav181229)

---

## 📄 License

This project is licensed under the MIT License.
