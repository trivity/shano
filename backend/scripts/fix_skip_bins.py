"""Fix defective skip bin images by image-to-image editing with Gemini Nano Banana.

Goal: keep the EXACT SAME look, angle, colour and proportions of each existing
skip bin image, but fix the detached/floating ramp and any "melting" geometry
artifacts so the bin looks like one solid, properly connected object.
"""
import asyncio
import base64
import os
import sys
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent

load_dotenv("/app/backend/.env")
API_KEY = os.getenv("EMERGENT_LLM_KEY")
assert API_KEY, "EMERGENT_LLM_KEY missing in /app/backend/.env"

PUBLIC_DIR = "/app/frontend/public"
REFERENCE_DIR = "/app/frontend/public/_old_skip_bins"  # preserved originals

EDIT_PROMPT = (
    "This is a reference image of a red Marrel-style hook-lift skip bin. "
    "The image has rendering defects: the small angled ramp/chute on the lower "
    "left appears DETACHED and FLOATING separately from the main bin body, and "
    "the bin's body has irregular 'melting' edges where geometry is broken.\n\n"
    "Re-render the SAME bin in the SAME 3/4 perspective, SAME red colour "
    "(#bf0403), SAME size, SAME position in frame, and SAME pure white "
    "background — but FIX the defects:\n"
    "1. Re-attach the small ramp/chute so it visibly connects to the bottom-left "
    "edge of the bin body as one continuous piece of metal.\n"
    "2. Clean up the bin's outer edges so they are smooth, straight, and solid "
    "with no floating fragments or melting artifacts.\n"
    "3. Keep the walk-in door visible on the side.\n"
    "4. Keep subtle ground shadow.\n"
    "5. No text, no logos, no people, no background scenery — just the clean "
    "fixed bin on white.\n\n"
    "Output a single cleaned-up image preserving the original style."
)


async def fix_one(size_key: str) -> bool:
    ref_path = os.path.join(REFERENCE_DIR, f"skip-bin-{size_key}m.png")
    if not os.path.exists(ref_path):
        print(f"[{size_key}m] reference missing: {ref_path}")
        return False
    with open(ref_path, "rb") as f:
        ref_b64 = base64.b64encode(f.read()).decode("utf-8")

    chat = LlmChat(
        api_key=API_KEY,
        session_id=f"skip-bin-fix-{size_key}",
        system_message="You are a careful product render fixer.",
    ).with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    msg = UserMessage(text=EDIT_PROMPT, file_contents=[ImageContent(ref_b64)])
    try:
        text, images = await chat.send_message_multimodal_response(msg)
    except Exception as e:
        print(f"[{size_key}m] edit error: {e}")
        return False
    if not images:
        print(f"[{size_key}m] no image returned. snippet: {(text or '')[:140]}")
        return False
    out_path = os.path.join(PUBLIC_DIR, f"skip-bin-{size_key}m.png")
    image_bytes = base64.b64decode(images[0]["data"])
    with open(out_path, "wb") as f:
        f.write(image_bytes)
    print(f"[{size_key}m] FIXED -> {out_path} ({len(image_bytes)} bytes)")
    return True


async def main():
    only = sys.argv[1:] if len(sys.argv) > 1 else None
    sizes = ["2", "3", "4", "6"]
    results = {}
    for s in sizes:
        if only and s not in only:
            continue
        results[s] = await fix_one(s)
    print("\nSummary:")
    for k, v in results.items():
        print(f"  {k}m: {'ok' if v else 'FAILED'}")


if __name__ == "__main__":
    asyncio.run(main())
