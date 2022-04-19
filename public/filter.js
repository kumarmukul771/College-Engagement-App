const onChanged = (e) => {
    let title = document.getElementById("search").value
    const req = new XMLHttpRequest;
    req.onreadystatechange = async function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response)
            let msg = await JSON.parse(this.responseText);
            console.log(msg)
            // document.getElementById("demo").innerHTML = msg.message;
        }
    };
    req.open("GET", "http://localhost:3000/search"+title, true);
    req.send();
}