<script>
    import domtoimage from 'dom-to-image';
    import {
        saveAs
    } from 'file-saver';

    function capture_post() {
        domtoimage.toJpeg(document.getElementById('my-node'), {
                quality: 1.00
            })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }
</script>

<div id="my-node" class="bg-yellow-300 w-[3000px] h-[1500px] p-4">
    <div class="text h-full w-full  text-center flex space-x-4 ">
        <p class="bg-yellow-200 w-full">ff</p>
        <p class="bg-green-200 w-full">gg</p>
    </div>
</div>

<button on:click|once={capture_post}>
    Export
</button>