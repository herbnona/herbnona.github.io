/**** variable settings - from cytube's defaults ****/
UI_UserCommands = 1;
/**** END variable settings ****/

/**** Cookie Functions ****/
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(+ date + (days * 86400000));
        var expires = "; expires=" + date.toUTCString();
        var maxage = "; max-age=" + (days * 86400000);
    }
    document.cookie = name + "=" + (value || "")  + expires + maxage + "; path=/r/theherbgarden";
}

/**** Chat Bot variables ****/
// [!8ball] Magic 8 Ball responses
const AskAnswers_Array = [
    "as I see it, yes","it is certain","it is decidedly so","most likely","outlook good","signs point to yes","without a doubt","yes","yes - definitely","you may rely on it", "reply hazy, try again","ask again later","better not tell you now","cannot predict now","concentrate and ask again","don't count on it","my reply is no","my sources say no","outlook not so good","very doubtful"
];

// [!vend] vending machine prizes 
const emotes_Array = [
    "angelcake","burger1","cherrypie","cheese","drink1","burger2","icecream","cake2","milk1","milk2","milk3","milk4","pizza*","zebracake","junkfood","tea1","sushi1","sushi2","riceball1","snack1","ramen1","ramen2","sake1","kpop1","milkbone","snowcone","cheekystrawb","pancakes1","chocolates1","coffee1","vendsnack1","vendsnack2","vendsnack3","vendsnack4","vendsnack5","vendsnack6","vendsnack7","vendsnack8","vendsnack9","vendsnack10","vendsnack11","vendsnack12","vendsnack13","vendsnack14","vendsnack15","vendsnack16","vendsnack17","vendsnack18","vendsnack19","vendsnack20","vendsnack21","vendsnack22","vendsnack23","vendsnack24","vendsnack25","vendsnack26","vendsnack27","vendsnack28","vendsnack29","vendsnack30","vendsnack31","vendsnack32","vendsnack33","vendsnack34","vendsnack35","vendsnack36","vendsnack37","vendsnack38","vendsnack39","vendsnack40","vendtoy1","vendtoy2","vendtoy3","vendtoy4","vendtoy5","vendtoy6","vendtoy7","vendtoy8","vendtoy9","vendtoy10","vendtoy11","vendtoy12","vendtoy13","vendtoy14","vendtoy15","vendtoy16","vendtoy17"
];

// [!trickortreat] candy options
const candy_Array = [
    "ttboba1","ttboba2","ttcakedonut","ttcandyapple","ttcandycorn","ttcandypumpkin","ttcaramelapple","ttcrepe1","ttdonutsprinkle","ttparfait","ttpumpkindonut","ttpumpkinpie","ttspiderdonut","ttvamp","ttcatinthebox", "tteyedrink", "ttcauldron","tteyeballs","ttcandybucket2","ttbrain","ttlollipop","ttpopcorn2","ttspookyfloss","ttskellypink","ttskeletea","ttcreepcake2","ttpumpjuice","ttpumpbag","ttmeltycorn","ttmacabron3","ttmacabron2","ttmacabron","ttgift","ttlatte","ttdonut","ttdrank","ttcreepcake","ttpopcorn","ttcandy2","ttcandy1","ttcrunch","ttapple"

];

// [!dressup] costume options
const costume_Array = [
"dressup1","dressup2","dressup3","dressup4","dressup5","dressup6","dressup7","dressup8","dressup9","dressup10","dressup11","dressup12","dressup13","dressup14","dressup15","dressup16","dressup17","dressup18","dressup19","dressup20","dressup21","dressup22","dressup23","dressup24","dressup25","dressup26","dressup27","dressup28","dressup29","dressup30","dressup31","dressup32","dressup33","dressup34","dressup35","dressup36"
];

// [!boo] options
const boo_Array = [
    "https://i.postimg.cc/C1KkQ638/cow3.png",
    "https://i.postimg.cc/25GnTfKm/cow5.png",
    "https://i.postimg.cc/RVQCW1p6/creepy3.png",
    "https://i.postimg.cc/253C9skh/creepy4.png",
    "https://i.postimg.cc/wjw6Vqp9/creepy5.png",
    "https://i.postimg.cc/pdkqrSzG/creepy2.png",
    "https://i.postimg.cc/sXXKhJJV/cute1.png",
    "https://i.postimg.cc/NMzD7rNR/cute3.png",
    "https://i.postimg.cc/5yQ3PNGT/cute4.png",
    "https://i.postimg.cc/7hzR5Vx5/cow1.png",
    "https://i.postimg.cc/hPFwHHrT/cow2.png",
    "https://i.postimg.cc/GhkNrq7N/cow4.png",
    "https://i.postimg.cc/L82WsLGs/creepy6.png",
    "https://i.postimg.cc/dQZpNq8J/cute5.png",
    "https://i.postimg.cc/Z5HMv0hx/cute6.png"

];

const queue = document.getElementById("queue");
var sortedVideos = {};
const chatformel = $("#chatwrap").find("form");

const wrapelement = document.getElementById("chatwrap");
const imagepopup = document.createElement("div");
const imgTag = new Image();
imagepopup.id = "image-popup";
wrapelement.appendChild(imagepopup);
imagepopup.appendChild(imgTag);

/**** END - Chat Bot variables ****/

/**** Custom Buttons ****/
const ghostbutton = document.createElement('button');
const leftcontrols = document.getElementById('leftcontrols');
ghostbutton.innerText = '⚰ hide ghosts';
ghostbutton.id = 'ghostbutton';
ghostbutton.className = 'btn btn-sm btn-default ghostbutton effect';

leftcontrols.appendChild(ghostbutton);

/**** END - Custom Buttons ****/


/**** Custom Theme Handling ****/

const themeSelect = document.getElementById('us-theme');

// Remove existing options from options list
Array.from(themeSelect).forEach((option) => {
  themeSelect.removeChild(option)
})

// get or set your new options here.
var newthemeSelect = [
    ["Change your theme!", "/css/themes/slate.css", ""],
    ["Moomin Default", "/css/themes/slate.css", "https://herbnona.github.io/nonny.css"],
    ["Strawbentines - Valentine's Day Light Mode", "/css/themes/slate.css", "https://herbnona.github.io/strawbentines.css"],
    ["Dreamentines - Valentine's Day Dark Mode", "/css/themes/slate.css", "https://herbnona.github.io/valentinesdarkmode.css"],
    ["Summer Bubble - Summer Light Mode", "/css/themes/slate.css", "htatps://herbnona.github.io/summerbubble.css"],
    ["Summer Nights - Summer Dark Mode", "/css/themes/slate.css", "https://herbnona.github.io/summernights.css"],
    ["Age of Aquarium", "/css/themes/slate.css", "https://herbnona.github.io/age-of-aquarium.css"],
    ["Moomin Autumn", "/css/themes/slate.css", "https://herbnona.github.io/autumn.css"],
    ["Graveyard Ghosts", "/css/themes/slate.css", "https://herbnona.github.io/graveyard-ghosts.css"],
    ["Halloween", "/css/themes/slate.css", "https://herbnona.github.io/halloween.css"],
    ["Battyween", "/css/themes/slate.css", "https://herbnona.github.io/battyween.css"],
    ["Hallosweets", "/css/themes/slate.css", "https://herbnona.github.io/hallosweets.css"],
    ["Moomin Winter", "/css/themes/slate.css", "https://herbnona.github.io/winter.css"],
    ["Merry Matryoshka", "/css/themes/slate.css", "https://herbnona.github.io/matryoshka.css"],
    ["Christmas", "/css/themes/slate.css", "https://herbnona.github.io/herbalchristmas.css"]
]

// Add new options
newthemeSelect.map((optionData) => {
    var opt = document.createElement('option');
    opt.appendChild(document.createTextNode(optionData[0]));
    opt.value = optionData[1]
    opt.setAttribute('extcss', optionData[2]);
    themeSelect.appendChild(opt);
})

// swap only custom css
$(themeSelect).change(function(e){
    e.preventDefault;
    var customstyle = themeSelect.options[themeSelect.selectedIndex].getAttribute('extcss');
    setCookie('customtheme', customstyle, 30);
    swapStyleSheet(customstyle);
})

function swapStyleSheet(sheet) {
    document.getElementById("chanexternalcss").setAttribute("href", sheet);  
}

function styleCookieCheck() {
    if (document.cookie.indexOf('customtheme') > -1) {
        let stylecookie = getCookie('customtheme');
        if (stylecookie == 'https://herbnona.github.io/age-of-aquarium.css' || stylecookie == 'https://herbnona.github.io/autumn.css') {
            swapStyleSheet('https://herbnona.github.io/graveyard-ghosts.css');
            setCookie('customtheme', 'https://herbnona.github.io/graveyard-ghosts.css', 30);
        } else {
            swapStyleSheet(stylecookie);
        }
    } else {
        swapStyleSheet('https://herbnona.github.io/graveyard-ghosts.css');
        setCookie('customtheme', 'https://herbnona.github.io/graveyard-ghosts.css', 30);
    }
}

/**** END - Custom Theme Handling ****/

// reload script after unexpected re-connection or script URL change

var LOADED = (typeof LOADED==="undefined") ? false : true;
LOADED ? location.reload() : '';

var COMMAND = false;

/**** Chat Bot functions ****/
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPokemon() {
    num=a=Math.round(Math.random()*(493));
    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + num + '/', false);
    request.send(null);

    if (request.status === 200) {
        var pokemon = JSON.parse(request.response);
        imgTag.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+num+'.png';
        $(imagepopup).addClass('show');
        setTimeout(function() { 
            $(imagepopup).removeClass('show');
            imgTag.src='';
        }, 1000);
        return 'you found a ' + capitalizeFirstLetter(pokemon.name) + '!';
    }
}

function getGhost(ghostID) {
    var ghostType = '';
    imgTag.src = boo_Array[ghostID];
    imgTag.height = '400';
    $(imagepopup).addClass('show');
    setTimeout(function() { 
        $(imagepopup).removeClass('show');
        imgTag.src='';
    }, 1500);
    if (boo_Array[ghostID].indexOf('cute') > 0) {
        ghostType = 'cute';
    } else {
        ghostType = 'scary';
    }
    return 'you have been visited by a ' + ghostType + ' ghost!';
}

function counterCheck() {
    var countcontent = $("#plcount").text();
    if (countcontent.indexOf('35') < 0) {
        $("#showmediaurl").removeClass('disabled');
        $("#showsearch").removeClass('disabled');
        $("#library button").removeClass('disabled');
    } else {
        $("#showmediaurl").addClass('disabled');
        $("#showsearch").addClass('disabled');
        $("#library button").addClass('disabled');
    }
}

function uniqueContributors(queuedVids, leader) {
    var contributors = [];
    contributors.push(leader);
    for (i = 1; i < queuedVids.length; i++) {
        var whoAdded = queuedVids[i].getAttribute("title");
        whoAdded = whoAdded.replace('Added by: ','');
        $(queuedVids[i]).addClass(whoAdded);
        contributors.push(whoAdded);
    }
    let uniqueContributors = [...new Set(contributors)];
    return uniqueContributors;
}

function setOrderAttrs(uniqueCont) {
    var matchingVids = [];
    for (var j = uniqueCont.length - 1; j >= 0; j--) {
        matchingVids = document.querySelectorAll('[data-addedby="'+uniqueCont[j]+'"]');
        for (var k = 0; k < matchingVids.length; k++ ) {
            matchingVids[k].setAttribute('data-queuedbyorder',j);
        }
    }
}

function createArraysPerUser(usergroup) {
    for (i = 0; i < usergroup.length; i++) {
        var arrayName = usergroup[i];
        sortedVideos[arrayName] = queue.getElementsByClassName(arrayName);
    }
}

function smartShuffle(leader) {
    let queuedVids = queue.getElementsByClassName("queue_temp");
    var dedupedCont = uniqueContributors(queuedVids, leader);
    setOrderAttrs(dedupedCont);
    createArraysPerUser(dedupedCont);

    var numVidsArray = [];
    for (const item in sortedVideos) {
        numVidsArray.push(sortedVideos[item].length);
    }
    var largestArray = Math.max(...numVidsArray);
    
    for (i = largestArray; i >= 0; i--) {
        for (const item in sortedVideos) {
            if (sortedVideos[item][i] != undefined){
                sortedVideos[item][i].getElementsByClassName("qbtn-next")[0].click();
            } else {
                continue;
            }
        }
    }
}

/**** END Chat Bot functions ****/

// format chat messages before sending and execute commands
function prepareMessage(msg) {
    if (UI_UserCommands=="1" && msg.indexOf("!") == 0) {
        COMMAND=true;
        if (msg.indexOf("!8ball") == 0) {
            // magic 8 ball function, if message begins with !8ball
            rnd=a=Math.round(Math.random()*(AskAnswers_Array.length-1));
            msg='🎱 shake shake shake 🎱  ✧･ﾟ: *✧･ﾟ:* *:･ﾟ✧*:･ﾟ✧ ｡･:*:･ﾟ★,｡･:*:･ﾟ☆ \n' + AskAnswers_Array[rnd];
        } else if (msg.indexOf("!vend") == 0) {
            // vending machine function, if message begins with !vend
            rnd=a=Math.round(Math.random()*(emotes_Array.length-1));
            msg='yay! you got ' + emotes_Array[rnd];
        }  else if (msg.indexOf("!trickortreat") == 0) {
            // vending machine function, if message begins with !vend
            rnd=a=Math.round(Math.random()*(candy_Array.length-1));
            msg='added ' + candy_Array[rnd] + ' to your candy bucket! candybucket';
        } else if (msg.indexOf("!boo") == 0) {
            // ghost function, if message begins with !boo
            rnd=a=Math.round(Math.random()*(boo_Array.length-1));
            msg=getGhost(rnd);
        } else if (msg.indexOf("!dressup") == 0) {
            // dress up function, if message begins with !dressup
            rnd=a=Math.round(Math.random()*(costume_Array.length-1));
            msg='you put on a new costume! ' + costume_Array[rnd];
        } else if (msg.indexOf("!advice") == 0) {
            // advice function, if message begins with !advice
            msg='advicebot gave too much bad advice and died';
        } else if (msg.indexOf("!encounter") == 0) {
            // pokemon function, if message begins with !encounter
            msg=getPokemon();
        } else if (msg.indexOf("!mock") == 0) {
            // mocking spongebob function, if message begins with !mock
            var heldMsg = msg.split('!mock ')[1];
            msg=heldMsg.split('').map((v) =>
            Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
            ).join('') + ' spongebobdurr';
        } else if (msg.indexOf("!bonk") == 0) {
            // bonk function, if message begins with !bonk
            var heldMsg = msg.split('!bonk ')[1];
            if (heldMsg == undefined) {
                msg='who are you trying to bonk?';
            } else {
                msg='turbobonk \n' + heldMsg + ' got bonked!';
            }
        } else if (msg.indexOf("!shuffle") == 0) {
            if (hasPermission("playlistmove")) {
                var leader = queue.getElementsByClassName("queue_active")[0].getAttribute("title");
                if (msg.indexOf("@") > 0) {
                    leader = msg.split('@')[1];
                } else {
                    leader = leader.replace('Added by: ','');
                }
                smartShuffle(leader);
            } else {
                msg='You do not have permission to do that!';
            }
        } else if (msg.indexOf("!time") == 0) {
            // current local time function, if message begins with !time
            var h = new Date().getHours();
            h<10 ? h='0'+h : '';
            var m = new Date().getMinutes();
            m<10 ? m='0'+m : '';
            msg='current time = '+h+':'+m;
        // now playing function, if message begins with !now
        } else if (msg.indexOf("!now") == 0) {	
            // now playing function, if message begins with !now	
            msg='Now playing = '+$(".queue_active a").html();	
        } else if (msg.indexOf("!rules") == 0) {	
            msg='\n⚘ Be nice\n⚘ Do not sperg out\n⚘ Right click user to ignore\n⚘ No males';	
        } else if (msg.indexOf("!guide") == 0) {	
            msg='Hosting How-To: https://docs.google.com/document/d/1L-s2k-Pac1_QvM8T25PirP6G5JslF4gqWeY0muQ5vQM/edit?usp=sharing';	
        } else {	
            COMMAND=false;	
        }	
    }
    return msg;
}

// Select the node that will be observed for mutations - counter for playlist
var targetNode = document.getElementById('plcount');
var targetUsers = document.getElementById('userlist');

// Options for the observer (which mutations to observe)
var config = { childList: true };
var observer;

// Callback function to execute when mutations are observed - run counterCheck function
var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            counterCheck();
        }
    }
};

chatformel.attr("autocomplete","off");

$("#chatline, #chatbtn").unbind();

$("#chatline").on("keydown", function(ev) {
    if (ev.keyCode==13) {
        if (CHATTHROTTLE) {
            return;
        }
        _msg=$("#chatline").val();
        msg=$("#chatline").val();
        if (msg.trim()) {
            msg=prepareMessage(msg.trim());
            meta={};
            if (COMMAND) {
                socket.emit("chatMsg", {msg:_msg});
                msg='➥ '+msg;
                COMMAND=false;
            }
            if (USEROPTS.adminhat && CLIENT.rank>=255) {
                msg='/a '+msg;
            } else if (USEROPTS.modhat && CLIENT.rank>=Rank.Moderator) {
                meta.modflair=CLIENT.rank;
            }
            if (CLIENT.rank>=2 && msg.indexOf("/m ")===0) {
                meta.modflair=CLIENT.rank;
                msg=msg.substring(3);
            }
            socket.emit("chatMsg", {msg:msg, meta:meta});
            CHATHIST.push($("#chatline").val());
            CHATHISTIDX=CHATHIST.length;
            $("#chatline").val('');
        }
        return;
    } else if (ev.keyCode==9) {
        chatTabComplete();
        ev.preventDefault();
        return false;
    } else if (ev.keyCode==38) {
        if (CHATHISTIDX==CHATHIST.length) {
            CHATHIST.push($("#chatline").val());
        }
        if(CHATHISTIDX>0) {
            CHATHISTIDX--;
            $("#chatline").val(CHATHIST[CHATHISTIDX]);
        }
        ev.preventDefault();
        return false;
    } else if (ev.keyCode==40) {
        if (CHATHISTIDX<CHATHIST.length-1) {
            CHATHISTIDX++;
            $("#chatline").val(CHATHIST[CHATHISTIDX]);
        }
        ev.preventDefault();
        return false;
    }
});

$("#chatbtn").on("click", function() {
    _msg=$("#chatline").val();
    msg=$("#chatline").val();
    if (msg.trim()) {
        msg=prepareMessage(msg.trim());
        if (COMMAND) {
            socket.emit("chatMsg", {msg:_msg});
            msg='➥ '+msg;
            COMMAND=false;
        }
        socket.emit("chatMsg", {msg:msg});
        $("#chatline").val('');
    }
});


$("#ghostbutton").on("click", function() {
    const ghostcontain = document.getElementById("ghost-container");
    if (ghostcontain.style.display !== 'none') {
        ghostcontain.style.display = 'none';
        ghostbutton.innerText = '⚰ boo!';
    }
    else {
        ghostcontain.style.display = 'block';
        ghostbutton.innerText = '⚰ hide ghosts';
    }
});

setTimeout(styleCookieCheck, 100);
//setTimeout(fetchTodayEvent, 100);