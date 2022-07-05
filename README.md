# reddit-image-scraper
Javascript reddit scraper in one function

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
                console.log(i)
                var image = document.createElement("img");
                image.src = images[i];
                document.body.appendChild(image);
            }
        }
        console.log(images)
    });
</script>
```
