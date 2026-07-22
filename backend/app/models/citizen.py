from pydantic import BaseModel


class Citizen(BaseModel):
    name: str
    age: int
    gender: str
    state: str
    occupation: str
    income: int
    category: str
    need: str