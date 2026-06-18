const users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone"
  },
  {
    name: "riya sharma",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    bio: "coffee, coding & late night thoughts ☕"
  },
  {
    name: "priya verma",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    bio: "dream big, work hard, stay humble ✨"
  },
  {
    name: "neha singh",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    bio: "traveler ✈️ | reader 📚 | foodie 🍕"
  },
  {
    name: "kavya patel",
    pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500",
    bio: "creating my own sunshine ☀️"
  },
  {
    name: "ananya gupta",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
    bio: "music heals what words cannot 🎵"
  },
  {
    name: "isha mehta",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500",
    bio: "living one adventure at a time 🌍"
  }
];

function showUsers(arr){

    
    arr.forEach(function(users){

                const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = users.pic;
        img.className = "bg-img";

        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${users.pic})`;
        blurredLayer.className = "blurred-layer";

        const content = document.createElement("div");
        content.className = "content";

        const h3 = document.createElement("h3");
        h3.textContent = users.name;

        const p = document.createElement("p");
        p.textContent = users.bio;

        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        
        document.querySelector(".cards").appendChild(card);
    })
}

showUsers(users);

 let inp = document.querySelector(".inp");
 inp.addEventListener("input",function(){
    let newUsers  = users.filter((users) => {
        return users.name.startsWith(inp.value);
    });

        document.querySelector(".cards").innerHTML = "";
        showUsers(newUsers);
 });