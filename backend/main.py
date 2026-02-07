from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def fun():
    return {"message": "Hello World"}



