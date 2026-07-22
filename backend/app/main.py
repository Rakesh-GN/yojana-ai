from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import schemes


app = FastAPI(
    title="Yojana AI API",
    description="AI powered government scheme recommendation system",
    version="1.0"
)


# Allow frontend connection

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(
    schemes.router
)


@app.get("/")
def home():

    return {
        "message": "Welcome to Yojana AI Backend 🚀"
    }