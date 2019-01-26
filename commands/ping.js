exports.run=(client,message)=>{
    message.channel.send({"embed":{
        "title": "\ud83c\udfd3 Pong!",
        "color": 0xFF0000,
        "thumbnail": {"url": "https://cdn.discordapp.com/attachments/538510846176002048/538511040493649921/pingpong.png"},
        "fields": [{
            "name": "\ud83d\udcf6 Latence moyenne\u003a",
            "value": `\u0060\u0060\u0060js\n${Number(Math.round(client.ping+'e2')+'e-2')}ms\u0060\u0060\u0060`,
            "inline": true
        },{
            "name": "\ud83d\udcbe Edit\u0027 latence\u003a",
            "value": `\u0060\u0060\u0060js\n${Number(Math.round(client.ping+'e2')+'e-2')}ms\u0060\u0060\u0060`,
            "inline": true
        },{
            "name": "\ud83e\udd5d Derni\u00e8res latences\u003a",
            "value": `\u0060\u0060\u0060js\n${client.pings.map((a,b)=>{return Number(Math.round(a+'e2')+'e-2')}).join('ms, ')}ms\u0060\u0060\u0060`,
            "inline": true
        }]
    }});
}
