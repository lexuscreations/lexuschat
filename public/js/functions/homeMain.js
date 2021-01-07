// Theme All Functionality

$(".logoImg").click(() => {
    $(".themeSection").toggleClass("themeSectionActive")
})

$(".themeSection").append(themeLayout)

$(".themeBlue").click(() => {
    if ($(".outgoing").hasClass("default") || $(".outgoing").hasClass("themeBlackOutActive")) {
        $(".outgoing").addClass("themeBlueOutActive")
        $(".incoming").addClass("themeBlueInActive")
    }

    if (themeOut != "themeBlueOutActive") {
        themeOut = "themeBlueOutActive"
        themeIn = "themeBlueInActive"
        $(".outgoing, .incoming").removeClass("default")
        $(".outgoing").removeClass("themeBlackOutActive")
        $(".incoming").removeClass("themeBlackInActive")
    }

    $(".logoImg").click()
})

$(".themeBlack").click(() => {
    if ($(".outgoing").hasClass("default") || $(".outgoing").hasClass("themeBlueOutActive")) {
        $(".outgoing").addClass("themeBlackOutActive")
        $(".incoming").addClass("themeBlackInActive")
    }

    if (themeOut != "themeBlackOutActive") {
        themeOut = "themeBlackOutActive"
        themeIn = "themeBlackInActive"
        $(".outgoing, .incoming").removeClass("default")
        $(".outgoing").removeClass("themeBlueOutActive")
        $(".incoming").removeClass("themeBlueInActive")
    }

    $(".logoImg").click()
})

// Hide Theme Section On Anywhere Click On Dom Except These Classes

$(document).click((event) => {
    if (!$(event.target).is(".themeSection, .logoImg, .SelectThemeHeading, .FullScreenHeading")) {
        $(".themeSection").removeClass("themeSectionActive")
    }
})

// For Every New In Or Out Msg Append scrollToBottom DOM

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}

// FullScreen Function Toggle

reqFullscreen = FullScrElement.requestFullscreen || FullScrElement.webkitRequestFullScreen || FullScrElement.mozRequestFullScreen || FullScrElement.msRequestFullScreen

function fullScreenApi() {
    return document.fullscreenElement || document.webkitfullscreenElement || document.mozfullscreenElement || document.msfullscreenElement
}

$(".FullScreenBtn").click(() => {
    if (fullScreenApi()) {
        document.exitFullscreen().catch((e) => {
            console.log(e)
        })
    } else {
        reqFullscreen.call(FullScrElement)
    }
})

// Refoces Textarea Or IN Mobile Imidate Still Reopen Keyboard

$(".Sbutton").click(() => {
    $("#textarea").focus()
})

// RightClick / ContextMenu = False

$("html").on("contextmenu", (e) => {
    return false;
})

// F12 | ctrl+shift+i | ctrl+shift+j | ctrl+u = False

document.onkeydown = (e) => {
    // F12 = inspect menu
    if (e.keyCode == 123) {
        return false;
    }

    // ctrl+shift+i = element inspect menu
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }

    // ctrl+shift+j = console inspect menu 
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }

    // ctrl+u = view source
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Loading Success Callback Action

$(document).ready(() => {
    $(".divBack").css({ "display": "none" })
    $(".chat__section").css({ "display": "block" })
})