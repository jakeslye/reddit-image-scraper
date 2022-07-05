function getRedditImages(AMOUNT, SUBREDDIT, CALLBACK){
    var images = [];
    var responce;
    var first = "";
    fetch(`https://www.reddit.com/r/${SUBREDDIT}/.json?limit=1`)
        .then(unformattedResponse => unformattedResponse.json())
        .then(formattedResponce => {
            first = formattedResponce.data.children[0].data.after;
        })
        .catch(err => console.error(err));

    fetch(`https://www.reddit.com/r/${SUBREDDIT}/.json?limit=${AMOUNT}&after=${first}`)
        .then(unformattedResponse => unformattedResponse.json())
        .then(formattedResponce => {
            responce = formattedResponce;
            for(var i=0; i<formattedResponce.data.children.length; i++){
                var image = "no image";
                if((responce.data.children[i].data).hasOwnProperty("preview")){
                    if(responce.data.children[i].data.preview.images[0].variants.hasOwnProperty("gif")){
                        image = responce.data.children[i].data.preview.images[0].variants.gif.source.url;
                    }else{
                        image = responce.data.children[i].data.preview.images[0].source.url;
                    }
                    image = image.replaceAll("amp;", "");
                }
                images.push(image);
            }
            CALLBACK(images);
        })
        .catch(err => console.error(err));
}
