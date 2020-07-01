console.log('app is alive');

function switchChannel(channelName, location) {
    $('#chat-name').html(channelName + ' by');
    $('#title-name').html(location);
    $('#title-name').attr("href", "https://what3words.com/reeling.rainbow.martini");
    $('.selected-list-item').removeClass('selected-list-item');
    $('.channel-item:contains('+ channelName +')').addClass('selected-list-item');
    console.log('Tuning into channel ' + channelName + " by " + location);
}

function channelChangeStar() {
    $('#bar-full-star').attr('src','https://ip.lfe.mw.tum.de/sections/star-o.png');
}

function fillChannelStar() {
    $('#bar-full-star').attr('src','https://ip.lfe.mw.tum.de/sections/star.png');
}

// function removeTab() {
//     $('.tab-bar > button').removeClass("selected");
// }

function addTab(tabId) {
    $('.selected').removeClass('selected');
    $(tabId).addClass('selected'); 
}


function showEmojis() {
    $('#emojis').toggle();
}
