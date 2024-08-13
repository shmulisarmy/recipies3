function BigUserProfile(id) {
    const user = uploaders[id];
    assert(user, `user ${id} does not exist`);
    
    return html`
    <style>
        .profile-container {
            display: grid;
            grid-template-columns: 1fr minmax(200px, 1fr);
            gap: 20px;
            padding: 20px;
            background-color: #f0f0f0;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            max-width: 1000px;
            margin: 20px auto;
        }
        .profile-picture {
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
        .profile-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .profile-name {
            font-size: 32px;
            margin: 10px 0;
        }
        .profile-section-title {
            font-size: 24px;
            margin: 10px 0;
        }
        .profile-contact {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            align-items: center;
        }
        .profile-contact-item {
            display: flex;
            flex-direction: column;
        }
        .profile-contact-label {
            font-weight: bold;
            margin-bottom: 5px;
        }
        .profile-links {
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        .profile-link {
            margin: 5px;
            padding: 5px;
            border-radius: 5px;
            background-color: #f0f0f0;
            display: flex;
            align-items: center;
        }
        .profile-link img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }
        .profile-recipes {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
            max-height: 300px;
            overflow-y: auto;
        }
        .profile-recipe {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .profile-recipe img {
            width: 100%;
            height: auto;
            border-radius: 5px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .profile-container {
                grid-template-columns: 1fr;
                padding: 10px;
            }
            .profile-contact {
                grid-template-columns: 1fr;
            }
            .profile-links {
                flex-direction: column;
                align-items: center;
            }
            .profile-recipes {
                grid-template-columns: 1fr;
                max-height: none;
                overflow-y: visible;
            }
            .profile-recipe {
                width: 100%;
            }
        }
    </style>
    <div class="profile-container">
        <div class="profile-header">
            <img src="${user.profileImage}" alt="${user.name}" class="profile-picture" />
            <h1 class="profile-name">${user.name}</h1>
        </div>
        <div class="profile-body">
            <h2 class="profile-section-title">Contact</h2>
            <div class="profile-contact">
                <div class="profile-contact-item">
                    <span class="profile-contact-label">Email:</span> 
                    <span class="profile-contact-value">${user.email}</span>
                </div>
                <div class="profile-contact-item">
                    <span class="profile-contact-label">Phone:</span> 
                    <span class="profile-contact-value">${user.phone}</span>
                </div>
                <div class="profile-contact-item">
                    <span class="profile-contact-label">Address:</span> 
                    <span class="profile-contact-value">${user.address}</span>
                </div>
            </div>
            <h2 class="profile-section-title">Links</h2>
            <div class="profile-links">
                <a href="${user.socialMedia.github}" class="profile-link">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github">
                    Github
                </a>
                <a href="${user.socialMedia.twitter}" class="profile-link">
                    <img src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png" alt="Twitter">
                    Twitter
                </a>
                <a href="${user.socialMedia.instagram}" class="profile-link">
                    <img src="https://abs.twimg.com/responsive-web/client-web/icon-ios-default-192x192.png" alt="Instagram">
                    Instagram
                </a>
                <a href="${user.socialMedia.facebook}" class="profile-link">
                    <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook">
                    Facebook
                </a>
            </div>
            <h2 class="profile-section-title">Recipes</h2>
            <div class="profile-recipes">
                /${user.indexOfRecipes.map(i => html`<a href="/recipe/${i}" class="profile-recipe">/${SmallRecipeCard(i)}</a>`).join("")}
            </div>
        </div>
    </div>
    `;
}



function SmallRecipeCard(id){
    const recipie = recipies[id]
    assert(recipie, `recipie ${id} does not exist`)

    return html`
    <style>
        .recipe-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: #f0f0f0;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            border: 2px solid #ccc;
        }

        .recipe-card img {
            width: 100%;
            height: 100px;
            border-radius: 5px;
        }

        .recipe-card h3 {
            text-align: center;
            font-size: 1.5rem;
            margin: 10px 0;
        }
    </style>
    <div class="recipe-card">
        <img src="${recipie.image}" alt="${recipie.name}" />
        <p>${recipie.name}</p>
    </div>
    `
}

function UserProfile(id){
    const user = uploaders[id]
    assert(user, `user ${id} does not exist`)
    return html`
    <div class="user-profile"
    onclick=${(event) => { rerender("App", {showing: "userProfile", id}) }}
    >
    <style>
        .user-profile{
            display: flex;
            img{
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }
            h2{
                margin: 0;
                margin-left: 5px;
                margin-top: 5px;
                font-size: 20px;
            }
        }
        </style>
        <img src="${user.profileImage}" alt="${user.name}" />
        <h2>${user.name}</h2>
    </div>
    `
}