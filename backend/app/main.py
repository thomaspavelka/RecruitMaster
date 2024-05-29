from fastapi import FastAPI
from .routers import module
from .database import connect_db

app = FastAPI()

app.include_router(module.router)

@app.on_event("startup")
async def startup_db_client():
    connect_db()

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Recruitment App"}
