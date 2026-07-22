# 🚀 Yojana AI

## AI-Powered Government Scheme Recommendation System

Yojana AI is an intelligent platform that helps citizens discover relevant government schemes based on their personal profile, needs, occupation, and eligibility criteria.

The system uses an AI-assisted recommendation engine to analyze citizen information and provide personalized scheme recommendations with match scores, explanations, benefits, and required documents.

---

## 🌟 Problem Statement

Millions of citizens are eligible for government schemes but struggle to find the right schemes due to:

* Lack of awareness
* Complex eligibility criteria
* Difficulty understanding available benefits
* Information scattered across multiple sources

Yojana AI simplifies this process by providing personalized recommendations through an easy-to-use interface.

---

# ✨ Features

## 🤖 Intelligent Scheme Matching

* Personalized recommendations based on:

  * Occupation
  * Income
  * Citizen needs
  * Eligibility criteria

## 📊 Dynamic Match Score

Each recommended scheme receives a percentage-based score showing how suitable it is for the citizen.

Example:

```
PM Scholarship Scheme
100% Match
```

---

## 💡 Explainable Recommendations

The system explains why a scheme was recommended.

Example:

```
✓ Matches your requirement (Education)
✓ Suitable for Student
✓ Income is within eligibility
```

---

## 📄 Document Guidance

Users can view required documents for each scheme.

Example:

```
- Aadhaar Card
- Income Certificate
- Student ID
```

---

## 💬 AI Assistant

Users can interact with an AI assistant to get help related to government schemes and benefits.

---

# 🏗️ System Architecture

```
              Citizen
                 |
                 ↓
        Next.js Frontend
                 |
                 ↓
          FastAPI Backend
                 |
                 ↓
      Recommendation Engine
                 |
                 ↓
       Scheme Dataset Analysis
                 |
                 ↓
     Personalized Recommendations
```

---

# 🛠️ Tech Stack

## Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS 4
* Lucide React

## Backend

* Python
* FastAPI
* Pydantic
* Uvicorn

## AI & Logic

* Intelligent matching algorithm
* Rule-based scoring engine
* Explainable recommendation system

---

# 📂 Project Structure

```
YOJANA-AI/

├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── main.py
│   │
│   ├── requirements.txt
│
├── dataset/
│   └── schemes.json
│
├── frontend/
│   ├── app/
│   ├── components/
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone <your-github-repository-url>

cd yojana-ai
```

---

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

# Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

# 🔄 How Recommendation Works

1. Citizen enters personal details.
2. Backend receives citizen profile.
3. Matching engine evaluates schemes.
4. Scores are calculated dynamically.
5. Top matching schemes are returned.
6. Frontend displays:

   * Match percentage
   * Benefits
   * Reasons
   * Required documents

---

# 📡 API Endpoint

## Recommend Schemes

```
POST /schemes/recommend
```

Example request:

```json
{
  "name": "Rahul",
  "age": 20,
  "gender": "Male",
  "occupation": "Student",
  "income": 200000,
  "need": "Education",
  "category": "General",
  "state": "Karnataka"
}
```

---

# 📈 Current Implementation

✅ Smart recommendation engine
✅ Dynamic scoring system
✅ Explainable AI recommendations
✅ 15+ government schemes dataset
✅ Responsive frontend interface
✅ FastAPI REST API
✅ AI assistant module

---

# 🚀 Future Improvements

* Integration with real government APIs
* Multi-language support
* Location-based scheme filtering
* User authentication
* Database integration
* Mobile application

---

# 👨‍💻 Author

**Rakesh**

---

# 📜 License

This project is created for educational and demonstration purposes.
