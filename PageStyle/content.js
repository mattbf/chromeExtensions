//only on the develop page highlight the icons
// We cannot highlight it with a content scriptr so we send a message to the popup scripts


chrome.runtime.sendMessage({todo: "showPageAction"})
