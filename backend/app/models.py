from pydantic import BaseModel
from typing import List

class Subitem(BaseModel):
    name: str
    actions: List[str]

class Module(BaseModel):
    name: str
    subitems: List[Subitem]
