from motor.motor_asyncio import AsyncIOMotorClient
from .models import Module

client = None

def connect_db():
    global client
    client = AsyncIOMotorClient("mongodb://localhost:27017")
    return client

def get_db():
    return client["recruitment_db"]
