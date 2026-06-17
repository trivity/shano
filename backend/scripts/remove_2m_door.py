"""Remove ONLY the front door panel from the 2m³ bin.

Keep everything else: the small angled ramp/chute, the bin body, the ground
shadow, the colour, the perspective and the background.
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
    "This is a red Marrel-style hook-lift skip bin. KEEP everything in the "
    "image EXACTLY the same — same red colour (#bf0403), same 3/4 perspective, "
    "same bin size, same position in frame, same proportions, same small "
    "angled loading ramp/chute on the bottom-left (DO NOT remove the ramp), "
    "same ground shadow, same pure white background. DO NOT change anything "
    "else.\n\n"
    "The ONLY change required: REMOVE the upright rectangular DOOR PANEL that "
    "currently sits in front of / against the front-left face of the bin body. "
    "This door panel has visible vertical seam lines and looks like a hinged "
    "access door. Remove that panel entirely so the front-left face of the bin "
    "body becomes one smooth, uninterrupted red surface with NO vertical seams "
    "and NO panel outlines.\n\n"
    "Important: KEEP the small angled chute/ramp at the bottom-left that "
    "rests on the ground at an angle. That ramp is correct and must stay. "
    "Only the upright door panel needs to be removed.\n\n"
    "Output a single cleaned-up image preserving the original style exactly."
)


async def main():
    with open(SRC, "rb") as f:
        ref_b64 = base64.b64encode(f.read()).decode("utf-8")
    chat = LlmChat(
        api_key=API_KEY,
        session_id="skip-bin-2m-door-removal",
        system_message="You carefully edit product render images.",
    ).with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    msg = UserMessage(text=PROMPT, file_contents=[ImageContent(ref_b64)])
    text, images = await chat.send_message_multimodal_response(msg)
    if not images:
        print(f"No image returned. text: {(text or '')[:200]}")
        return
    image_bytes = base64.b64decode(images[0]["data"])
    with open(SRC, "wb") as f:
        f.write(image_bytes)
    print(f"DOOR REMOVED -> {SRC} ({len(image_bytes)} bytes)")


if __name__ == "__main__":
    asyncio.run(main())
