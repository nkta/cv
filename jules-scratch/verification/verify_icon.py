from playwright.sync_api import sync_playwright
import os

def run_verification():
    """
    Navigates to the local index.html file, hovers over a clickable
    experience item to reveal the icon, and takes a screenshot.
    """
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get the absolute path to index.html to ensure correct navigation
        # and use it with the file:// protocol.
        file_path = os.path.abspath("index.html")
        page.goto(f"file://{file_path}")

        # Locate the first clickable experience item.
        experience_item = page.locator('.experience-item[data-experience-key="HOP"]')

        # Hover over the element to trigger the CSS hover effects.
        experience_item.hover()

        # Wait for the icon to become visible due to the hover effect.
        icon = experience_item.locator('.clickable-icon')
        icon.wait_for(state='visible')

        # Take a screenshot to verify the result.
        page.screenshot(path="jules-scratch/verification/verification.png")

        browser.close()
        print("Screenshot saved to jules-scratch/verification/verification.png")

if __name__ == "__main__":
    run_verification()