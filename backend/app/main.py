from fastapi import FastAPI

app = FastAPI(title="Yojana AI API")


@app.get("/")
def home():
    return {
        "message": "Welcome to Yojana AI Backend 🚀"
    }