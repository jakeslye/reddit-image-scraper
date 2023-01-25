# Reddit Image Scraper
Javascript reddit scraper in one function

```Javascript
getRedditImages(amount, subreddit, callback)
```

## Example Usage
```HTML
<script src="reddit.js"></script>
<style>
    img{
        width: 25%;
        height: 25%;
    }
</style>
<script>
    getRedditImages(15, "nature", (images) => {
        for(var i=0; i<images.length; i++){
            if(images[i] != "no image"){
                var image = document.createElement("img");
                image.src = images[i];
                document.body.appendChild(image);
            }
        }
    });
</script>
```
