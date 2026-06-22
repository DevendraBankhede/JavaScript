 let from = document.querySelector("from");
 let username = document.querySelector("#name");
 let role = document.querySelector("#role");
 let Bio = document.querySelector("#Bio");
 let photo = document.querySelector("#Photo");
 const userManager = {
    users: [],
    init: function () {
        from.addEventListener("submit", this.submitFrom.bind(this));
    },
    submitFrom:function (e) {
        e.preventDefault();
        this.addUser();
    },
    addUser: function () {
        this.users.push({
            username:username.value,
            role:role.value,
            bio:bio.value,
            photo:photo.value,
        });

         from:reset();
    },
    renderUi:function() {
        this.users.forEach(function(user){
            const card = document.createElement("div");
            card.className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blur-100 hover:scale-105 transition";

            const img = document.createElement("img");
            Image.className="w-28 h-28 rounded-full object-cover mb-5 border-4 border-blur-200 shadow";
            img.src=user.photo;
            img.alt="User Photo";
            card.appendChild(img);

            //Name
            const name = document.createElement("h2");
            name.className = "text-2xl font-bold mb-1 text-blue-700";
            name.textContent = "John Doe";
            card.appendChild(name);

            //Role
            const role = document.createElement("p");
            role.className = "text-purple-500 mb-2 font medium";
            role.textContent = user.roel;
            card.appendChild(role);

            //Description
            const desc = document.createElement("p");   
            desc.className = "text-gray-700 text center";
            desc.textContent = user.bio;
            card.appendChild(desc);

            document.querySelector(".users").appendChild(card);
        }) 
    },
    removeUser: function() {    },
};
userManager.init();