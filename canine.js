var mutateTweet = () => {
  $('.tweet .tweet-text').text("woof");
  $('.card2,.AdaptiveMediaOuterContainer').remove();
}
$(document).on('scroll','',  mutateTweet);
mutateTweet();
setTimeout(mutateTweet, 100);

