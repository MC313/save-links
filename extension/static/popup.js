document.addEventListener('DOMContentLoaded', async function () {

})

function getCurrentTime() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const minutesFormatted = minutes.length < 1 ? "0" + minutes : minutes
    return `${hours}:${minutesFormatted}`
}

async function getURL() {
    const { url } = await getCurrentTab()
    return url;
}

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true }
    let [tab] = await chrome.tabs.query(queryOptions)
    return tab
}