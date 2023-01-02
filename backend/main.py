from unicodedata import name
from fastapi import FastAPI
from pydantic import BaseModel
import spacy
from spacy import displacy
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

nlp = spacy.load('en_core_web_sm')

class Request(BaseModel):
    payload: str
    
@app.post("/getNamedEntities")
def get_named_entities(req: Request):
    doc = nlp(req.payload)
    return dict([(ent.text, ent.label_) for ent in doc.ents])
