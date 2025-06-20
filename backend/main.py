import os
import json
from fastapi import FastAPI, Query
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware
from litellm import LiteLLM, completion
from models import all_models
import random
import uuid
import re



app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET"],
    allow_headers=["*"],
)


example_svg = """
<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" aria-label="Pelican illustration" role="img">
  <!-- Body -->
  <ellipse cx="100" cy="90" rx="60" ry="40" fill="#c8c8c8" stroke="#555" stroke-width="2"></ellipse>
  
  <!-- Head -->
  <circle cx="140" cy="60" r="25" fill="#ddd" stroke="#555" stroke-width="2"></circle>
  
  <!-- Eye -->
  <circle cx="150" cy="55" r="6" fill="#333"></circle>
  <circle cx="152" cy="53" r="2" fill="#fff"></circle>
  
  <!-- Beak upper -->
  <path d="M160 70 Q190 70 180 90 Q160 90 160 70 Z" fill="#f4a261" stroke="#b35618" stroke-width="2"></path>
  
  <!-- Beak lower -->
  <path d="M160 90 Q180 100 170 105 Q160 95 160 90 Z" fill="#e07b39" stroke="#b35618" stroke-width="2"></path>
  
  <!-- Wing -->
  <path d="M70 90 Q90 40 120 80 Q90 90 70 90 Z" fill="#a0a0a0" stroke="#555" stroke-width="2"></path>
  
  <!-- Tail -->
  <path d="M40 110 L20 130 L40 120 Z" fill="#888" stroke="#555" stroke-width="2"></path>
</svg>"""
data_example = [
    {"model": 'openasd', "svg_text": example_svg}
]

system_prompt = """
    You are an expert SVG generator. Create clean, well-structured SVG code based on user descriptions.
    Requirements

    Generate complete, valid SVG code with proper viewBox (default: "0 0 400 400")
    Use clean, indented code with semantic element names
    Prioritize simplicity and geometric shapes
    Choose harmonious colors with good contrast
    Group related elements with <g> tags and use <defs> for reusable elements

    Response Format

    Provide only the SVG code without explanation
    Ensure the SVG renders correctly and is immediately usable

    Focus on creating visually appealing, functional SVGs that accurately represent the user's description.
"""

def extract_svg(text):
    match = re.search(r'<svg[^>]*>.*?</svg>', text, re.DOTALL)
    return match.group(0) if match else None

def fetch_llm_response(prompt, model):
    messages = [
        {
            "role": "developer",
            "content": system_prompt,
        },
        {"role": "user", "content": f"generate an SVG of {prompt}"},
    ]
    print(prompt, model)
    print("*" * 50)
    print(messages)
    try:
        response = completion(model=model, messages=messages)
        print(response)
        svg = response.choices[0].message.content

        random_id = str(uuid.uuid4())[:8]
        with open(f"examples/{model}_{random_id}.svg", "w") as f:
            f.write(svg)

        return extract_svg(svg)
    except Exception as e:
        print(e)
        raise
        

import time

@app.get("/get_svg/")
def get_svg(
    prompt: str = Query(...),
    model: str = Query(...),
):
    print("*" * 50)
    
    svg = None
    try:
        svg = fetch_llm_response(prompt, model)
        data.append({"model": model, "svg_text": svg})

    except:
        pass
    
    time.sleep(5)

    return Response(content=svg, media_type="image/svg+xml")
    # print('.'*50)
    # print('example_svg', example_svg)
    # return Response(content=example_svg, media_type="image/svg+xml")


if __name__ == "__main__":
    data = {"model": ["gpt-4o-mini"], "prompt": "a pelican on a bicycle"}
    get_svg(data)
