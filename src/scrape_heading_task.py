from botasaurus import *
from chrome_extension_python import Extension
from botasaurus.create_stealth_driver import create_stealth_driver


@browser(
    create_driver=create_stealth_driver(
        start_url="https://www.g2.com/products/github/reviews.html?page=5&product_id=github",
        wait=10000,
    ),
    extensions=[
        Extension(
            extension_id="gighmmpiobklfepjocnamgkkbiglidom",  # Unique identifier for the Chrome Extension, found in the Chrome Webstore link
            extension_name="cloudflare-solver",  # The name assigned to the extension
        )
    ],
)
def scrape_heading_task(driver: AntiDetectDriver, data):
    driver.prompt()
