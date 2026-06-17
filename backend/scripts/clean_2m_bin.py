"""2m³ bin: remove BOTH the door panel and the front ramp/chute.

Keep the bin body, colour, angle, ground shadow and background.
"""
import asyncio
import base64
import os
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent

load_dotenv("/app/backend/.env")
API_KEY = os.getenv("EMERGENT_LLM_KEY")
assert API_KEY

SRC = "/app/frontend/public/skip-bin-2m.png"

PROMPT = (
    "This is a red Marrel-style hook-lift skip bin. KEEP the bin body EXACTLY "
    "the same — same red colour (#bf0403), same 3/4 perspective, same size, "
    "same proportions, same position in frame, same subtle ground shadow, "
    "same pure white background.\n\n"
    "REMOVE these two attachments completely:\n"
    "1. The upright rectangular DOOR PANEL with vertical seam lines that sits "
    "against the front-left face of the bin body.\n"
    "2. The small angled rectangular RAMP/CHUTE at the bottom-left that sits "
    "on the ground in front of the bin.\n\n"
    "After removal, the bin should look like a clean, simple open-top "
    "trapezoidal tipper bin with smooth uninterrupted red sides — NO door, "
    "NO ramp, NO chute, NO panels, NO extra protrusions on the front or "
    "bottom. Just the plain bin body resting on the ground (subtle shadow "
    "under it) with the usual top rim and lifting bar at the back.\n\n"
    "Output a single cleaned image preserving the original style."
)


async def main():
    with open(SRC, "rb") as f:
        ref_b64 = base64.b64encode(f.read()).decode("utf-8")
    chat = LlmChat(
        api_key=API_KEY,
        session_id="skip-bin-2m-no-door-no-ramp",
        system_message="You carefully edit product render images.",
    ).with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    msg = UserMessage(text=PROMPT, file_contents=[ImageContent(ref_b64)])
    text, images = await chat.send_message_multimodal_response(msg)
    if not images:
        print(f"No image. text: {(text or '')[:200]}")
        return
    image_bytes = base64.b64decode(images[0]["data"])
    with open(SRC, "wb") as f:
        f.write(image_bytes)
    print(f"DOOR + RAMP REMOVED -> {SRC} ({len(image_bytes)} bytes)")


if __name__ == "__main__":
    asyncio.run(main())
