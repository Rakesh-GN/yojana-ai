from fastapi import APIRouter

from app.models.citizen import Citizen
from app.services.matcher import recommend_schemes


router = APIRouter(
    prefix="/schemes",
    tags=["Government Schemes"]
)


@router.post("/recommend")
def recommend(citizen: Citizen):

    results = recommend_schemes(citizen)

    if not results:
        return {
            "success": True,
            "count": 0,
            "message": "No suitable government schemes found for your profile.",
            "recommendations": []
        }


    return {
        "success": True,
        "count": len(results),
        "message": "Schemes matched successfully.",
        "recommendations": results
    }