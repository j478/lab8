let imgArray = ["https://static.comicvine.com/uploads/original/11112/111126656/3947276-darth_vader_by_zaratus.jpg", "https://static.comicvine.com/uploads/original/13/132327/2924559-2775272_starwarsiii.jpg", "https://static.comicvine.com/uploads/original/13/132327/2926534-1606167_2.jpg", "https://static.comicvine.com/uploads/original/13/132327/2926585-untitled.png", "https://static.comicvine.com/uploads/original/13/132327/3122480-star-wars-episode-5-big-reveal.jpg"];
let picDisplayed = 0;
document.querySelector("#display").src = imgArray[picDisplayed];

document.querySelector('#next_btn').addEventListener('click', () => {
	picDisplayed++;
	if(picDisplayed > 4)
	{
		picDisplayed = 0;
	}
	document.querySelector("#display").src = imgArray[picDisplayed];
});

document.querySelector('#back_btn').addEventListener('click', () => {
	picDisplayed--;
	if(picDisplayed < 0)
	{
		picDisplayed = 4;
	}
	document.querySelector("#display").src = imgArray[picDisplayed];
});