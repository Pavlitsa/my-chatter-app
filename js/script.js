console.log('app is alive');

function switchChannel(channelName, location) {
    $('#chat-name').html(channelName + ' by');
    $('#title-name').html(location);
    $('#title-name').attr("href", "https://what3words.com/reeling.rainbow.martini");
    console.log('Tuning into channel ' + channelName + " by " + location);
}

// function changeTime(time) {
//     $('.rmn-time').html(time);
// }
