// The Track section.....

let timeout;
let addkey = [];
let track = document.getElementById("track").innerHTML;
    window.addEventListener("keydown", event => {
        addkey.push(event.key);
        clearTimeout(timeout);
        //track = addkey;
        //timeout = setTimeout(() => document.write(track), 1000);
        timeout = setTimeout(() => console.log(`Typed: ${addkey}`), 100);
    } );
   