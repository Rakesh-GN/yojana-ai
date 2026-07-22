import json
import os


def load_schemes():

    file_path = os.path.join(
        os.path.dirname(__file__),
        "../../../dataset/schemes.json"
    )

    with open(file_path, "r", encoding="utf-8") as file:
        return json.load(file)



def calculate_match(citizen, scheme):

    score = 0
    reasons = []


    # Need Matching
    if citizen.need.lower() == scheme["category"].lower():
        score += 45
        reasons.append(
            f"Matches your requirement ({citizen.need})"
        )


    # Occupation Matching
    if (
        scheme["occupation"].lower() == "any"
        or citizen.occupation.lower() == scheme["occupation"].lower()
    ):
        score += 30
        reasons.append(
            f"Suitable for {citizen.occupation}"
        )


    # Income Eligibility
    if citizen.income <= scheme["income_limit"]:
        score += 25
        reasons.append(
            "Income is within eligibility"
        )


    return score, reasons
    score = 0
    reasons = []


    # Need Matching
    if citizen.need.lower() == scheme["category"].lower():
        score += 35
        reasons.append(
            f"Matches your requirement ({citizen.need})"
        )


    # Occupation Matching
    if (
        scheme["occupation"].lower() == "any"
        or citizen.occupation.lower() == scheme["occupation"].lower()
    ):
        score += 25
        reasons.append(
            f"Suitable for {citizen.occupation}"
        )


    # Income Eligibility
    if citizen.income <= scheme["income_limit"]:
        score += 20
        reasons.append(
            "Income is within eligibility"
        )


    # Social Category
    if (
        "category" in scheme
        and (
            scheme["category"].lower() == "all"
            or citizen.category.lower() == scheme["category"].lower()
        )
    ):
        score += 10
        reasons.append(
            "Social category eligible"
        )


    # State Support
    if (
        "state" in scheme
        and (
            scheme["state"].lower() == "all"
            or citizen.state.lower() == scheme["state"].lower()
        )
    ):
        score += 10
        reasons.append(
            f"Available in {citizen.state}"
        )


    return score, reasons


def recommend_schemes(citizen):

    schemes = load_schemes()

    recommendations = []


    for scheme in schemes:

        score, reasons = calculate_match(
    citizen,
    scheme
)


        if score >= 60:

            recommendations.append(
    {
        "name": scheme["name"],
        "category": scheme["category"],
        "benefit": scheme["benefit"],
        "documents": scheme["documents"],
        "match_score": score,
        "reasons": reasons
    }
)


    recommendations.sort(
        key=lambda x:x["match_score"],
        reverse=True
    )


    return recommendations