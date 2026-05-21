"""Generate clean Marrel skip bin images using Gemini Nano Banana.

Replaces the defective images at /app/frontend/public/skip-bin-{2,3,4,6}m.png.
Old images are preserved at /app/frontend/public/_old_skip_bins/ for reference.
"""
import asyncio
import base64
import os
import sys
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")
API_KEY = os.getenv("EMERGENT_LLM_KEY")
assert API_KEY, "EMERGENT_LLM_KEY missing in /app/backend/.env"

OUTPUT_DIR = "/app/frontend/public"

# Per-size prompt — emphasises the walk-in side door is attached, no floating parts
BASE_PROMPT = (
    "A clean, photorealistic 3D render of a single industrial red hook-lift skip bin "
    "(Marrel-style waste container) shown in 3/4 isometric perspective view, "
    "facing slightly to the right. "
    "The bin is solid red (hex #bf0403), with a darker red shadow on the right side "
    "for depth. It has a closed walk-in access door on the visible long side, "
    "with the door integrated flush into the body — NOT detached, NOT floating. "
    "The door has a small folded-down ramp at its base, attached to the bin body. "
    "At the back, the standard hook-lift lifting bar/eye is visible. "
    "Subtle soft drop shadow directly beneath the bin on the ground. "
    "Pure white background, studio lighting, no text, no logos, no people, "
    "no tyres, no debris. The bin must look like one continuous solid object with "
    "no rendering artifacts, no 'melting' edges, no disconnected pieces. "
    "Render quality: clean vector-illustration style with subtle highlights, "
    "centered in frame with generous white margin on all sides. "
)

SIZES = [
    ("2", "small bin, compact proportions, length roughly 1.8m, height 0.9m, "
          "appears low and shorter"),
    ("3", "medium bin, length roughly 1.8m, height 1.2m, "
          "appears slightly taller than the small bin"),
    ("4", "large bin, length roughly 2.2m, height 1.2m, "
          "appears longer than the medium bin, same height"),
    ("6", "extra large bin, length roughly 3.6m, height 1.2m, "
          "noticeably longer and lower-profile than the other bins"),
]


async def generate_one(size_key: str, size_hint: str) -> bool:
    prompt = BASE_PROMPT + f"Size variant: {size_hint}."
    chat = LlmChat(
        api_key=API_KEY,
        session_id=f"skip-bin-gen-{size_key}",
        system_message="You generate clean product render images.",
    ).with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    msg = UserMessage(text=prompt)
    try:
        text, images = await chat.send_message_multimodal_response(msg)
    except Exception as e:
        print(f"[{size_key}m] generation error: {e}")
        return False
    if not images:
        print(f"[{size_key}m] no images returned. text snippet: {(text or '')[:120]}")
        return False
    out_path = os.path.join(OUTPUT_DIR, f"skip-bin-{size_key}m.png")
    image_bytes = base64.b64decode(images[0]["data"])
    with open(out_path, "wb") as f:
        f.write(image_bytes)
    print(f"[{size_key}m] OK -> {out_path} ({len(image_bytes)} bytes)")
    return True


async def main():
    only = sys.argv[1:] if len(sys.argv) > 1 else None
    results = {}
    for size_key, hint in SIZES:
        if only and size_key not in only:
            continue
        results[size_key] = await generate_one(size_key, hint)
    print("\nSummary:")
    for k, v in results.items():
        print(f"  {k}m: {'ok' if v else 'FAILED'}")


if __name__ == "__main__":
    asyncio.run(main())
