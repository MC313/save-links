document.addEventListener('DOMContentLoaded', async function () {
    console.log(`TIME: ${getCurrentTime()}`)
    const url = await getURL()
    const urlInput = document.getElementById('urlId')
    setInputValue(urlInput, url)
})

function getCurrentTime() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const minutesFormatted = minutes.length < 1 ? "0" + minutes : minutes
    return `${hours}:${minutesFormatted}`
}

const setInputValue = (element, value) => {
    const event = new Event('input', { bubbles: true })
    element.value = value
    element.dispatchEvent(event)
}

async function getURL() {
    const { url } = await getCurrentTab()
    return url;
}

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}