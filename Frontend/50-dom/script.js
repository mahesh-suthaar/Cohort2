const reelsData = [
  {
    reelimage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80",
    profileimage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    username: "shreya_sharma",
    isfollowed: true,
    caption: "Golden hour vibes in Mumbai ✨ City light aesthetics!",
    isliked: false,
    likecount: 14200,
    commentcount: 382,
    sharecount: 1205
  },
  {
    reelimage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    profileimage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    username: "rohit_vlogs",
    isfollowed: false,
    caption: "Goa beaches hit different in winter 🌊🏖️",
    isliked: true,
    likecount: 28900,
    commentcount: 512,
    sharecount: 3410
  },
  {
    reelimage: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&auto=format&fit=crop&q=80",
    profileimage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    username: "code_with_anya",
    isfollowed: true,
    caption: "When your JavaScript animation works on the first try 💻🚀 #sheryians #frontend",
    isliked: true,
    likecount: 8540,
    commentcount: 129,
    sharecount: 670
  },
  {
    reelimage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80",
    profileimage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    username: "foodie_dev",
    isfollowed: false,
    caption: "Best authentic wood-fired pizza in town! 🍕😋",
    isliked: false,
    likecount: 45200,
    commentcount: 890,
    sharecount: 5120
  },
  {
    reelimage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80",
    profileimage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    username: "fit_priya",
    isfollowed: true,
    caption: "Morning leg day grind! Never skip consistency 💪🏻🔥",
    isliked: false,
    likecount: 9810,
    commentcount: 245,
    sharecount: 430
  },
  {
    reelimage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80",
    profileimage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    username: "wanderlust_kabir",
    isfollowed: false,
    caption: "Backpacking across Himachal... clouds under my feet ☁️🏔️",
    isliked: true,
    likecount: 67300,
    commentcount: 1420,
    sharecount: 8900
  },
  {
    reelimage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80",
    profileimage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    username: "indie_beats",
    isfollowed: true,
    caption: "Late night guitar jam Session #4 🎸🎶",
    isliked: true,
    likecount: 18200,
    commentcount: 410,
    sharecount: 1540
  },
  {
    reelimage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    profileimage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    username: "style_by_meera",
    isfollowed: false,
    caption: "Streetwear lookbook autumn edition 🧥✨ Rate this outfit 1-10!",
    isliked: false,
    likecount: 31200,
    commentcount: 730,
    sharecount: 2100
  },
  {
    reelimage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    profileimage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    username: "sneaker_head_arjun",
    isfollowed: true,
    caption: "Unboxing these grails! Red colorway looks insane 👟🔴",
    isliked: true,
    likecount: 52100,
    commentcount: 980,
    sharecount: 4600
  },
  {
    reelimage: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=80",
    profileimage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    username: "paws_and_whiskers",
    isfollowed: false,
    caption: "He demands treats every time I open the laptop 🐶🐾",
    isliked: true,
    likecount: 89400,
    commentcount: 2300,
    sharecount: 11200
  }
];

let sum = ''
let allReels=document.querySelector('.allReels')

function formatCount(num) {
    return new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 2 // 9999 -> 9.99K
    }).format(num);
}

reelsData.forEach(function(elem){
    sum = sum + `<div class="reel">
                    <img class="reelimage" src="${elem.reelimage}" alt="">
                    <div class="bottom">
                        <div class="user">
                            <img class="profile" src="${elem.profileimage}" alt="">
                            <h3 class="username">${elem.username}</h3>
                            <button class="follow">${elem.isfollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <p class="caption">${elem.caption}</p>
                    </div>
                    <div class="right">
                        <div class="like">
                            <i class="${elem.isliked?'ri-heart-fill':'ri-heart-line'}"></i>
                            <h5 class="likeCount">${formatCount(elem.likecount)}</h5>
                        </div>
                        <div class="comment">
                            <i class="ri-chat-3-line"></i>
                            <h5 class="commentCount">${formatCount(elem.commentcount)}</h5>
                        </div>
                        <div class="share">
                            <i class="ri-send-ins-line"></i>
                            <h5 class="shareCount">${formatCount(elem.sharecount)}</h5>
                        </div>
                        <div class="save">
                            <i class="ri-bookmark-line"></i>
                        </div>
                        <div class="menu">
                            <i class="ri-more-2-line"></i>
                        </div>
                    </div>
                </div>`

                
})

function renderReels (){
    allReels.innerHTML=sum
}

renderReels()
