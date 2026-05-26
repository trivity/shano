"""Remove the walk-in door panel from all 4 skip bin images.

Uses image-to-image to keep everything identical except removing the door.
"""
import asyncio
import base64
import os
import sys
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent

load_dotenv("/app/backend/.env")
API_KEY = os.getenv("EMERGENT_LLM_KEY")
assert API_KEY

PUBLIC_DIR = "/app/frontend/public"

EDIT_PROMPT = (
    "This is a red Marrel-style hook-lift skip bin. KEEP everything in this "
    "image EXACTLY the same — same red colour (#bf0403), same 3/4 perspective, "
    "same size, same position in frame, same proportions, same attached small "
    "ramp/chute at the bottom-left, same ground shadow, same pure white "
    "background. DO NOT change anything else.\n\n"
    "The ONLY change: REMOVE any walk-in door panel and any visible vertical "
    "seam lines from the side of the bin. The bin's side should be one smooth, "
    "uninterrupted red surface with NO door, NO panel outlines, NO seam lines, "
    "NO handles. Just a clean, solid bin body.\n\n"
    "Output a single cleaned-up image preserving the original style exactly, "
    "with the door fully removed."
)


async def remove_door(size_key: str) -> bool:
    src = os.path.join(PUBLIC_DIR, f"skip-bin-{size_key}m.png")
    with open(src, "rb") as f:
        ref_b64 = base64.b64encode(f.read()).decode("utf-8")
    chat = LlmChat(
        api_key=API_KEY,
        session_id=f"skip-bin-no-door-{size_key}",
        system_message="You carefully edit product render images.",
    ).with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    msg = UserMessage(text=EDIT_PROMPT, file_contents=[ImageContent(ref_b64)])
    try:
        text, images = await chat.send_message_multimodal_response(msg)
    except Exception as e:
        print(f"[{size_key}m] error: {e}")
        return False
    if not images:
        print(f"[{size_key}m] no images returned. snippet: {(text or '')[:140]}")
        return False
    out = os.path.join(PUBLIC_DIR, f"skip-bin-{size_key}m.png")
    image_bytes = base64.b64decode(images[0]["data"])
    with open(out, "wb") as f:
        f.write(image_bytes)
    print(f"[{size_key}m] DOOR REMOVED -> {out} ({len(image_bytes)} bytes)")
    return True


async def main():
    targets = sys.argv[1:] or ["2", "3", "4", "6"]
    for s in targets:
        await remove_door(s)


if __name__ == "__main__":
    asyncio.run(main())
