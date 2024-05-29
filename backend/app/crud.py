from .database import get_db
from .models import Module

db = get_db()

async def get_modules():
    return await db["modules"].find().to_list(1000)

async def create_module(module: Module):
    result = await db["modules"].insert_one(module.dict())
    return result.inserted_id
