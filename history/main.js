$(document).ready(function(){
    const name = window.location.search.replace('?name=','');
    document.title = `History of ${name}`;
    $.get(`https://dirkdev-bot.dirkdev.repl.co/api/history/${name}`,function(data,status){
        let output;
        if (typeof data === "object"){
            output = JSON.stringify(data[0],undefined,4);
            for (const item in data){
                if (item === "0") continue;
                output += "\n\n";
                output += JSON.stringify(data[item],undefined,4);
            }
        } else {
            output = data;
        }
        document.getElementById("history").innerText = output;
    })
})