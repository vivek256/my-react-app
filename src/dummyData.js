export const Users = [
  {
    id: 1,
    profilePicture: "assets/person/1.jpeg",
    username: "Vivek Ramteke"
  },
  {
    id: 2,
    profilePicture: "assets/person/2.jpeg",
    username: "Yash Kirti Sinha"
  },
  {
    id: 3,
    profilePicture: "assets/person/3.jpeg",
    username: "Vimal Anand Baghel"
  },
  {
    id: 4,
    profilePicture: "assets/person/4.jpeg",
    username: "Rajat Giradkar"
  },
  {
    id: 5,
    profilePicture: "assets/person/5.jpeg",
    username: "Sahithya Jain"
  },
  {
    id: 6,
    profilePicture: "assets/person/6.jpeg",
    username: "Takshil Bharadwaj"
  },
  {
    id: 7,
    profilePicture: "assets/person/7.jpeg",
    username: "Ardhindu Sekhar kar"
  },
  {
    id: 8,
    profilePicture: "assets/person/8.jpeg",
    username: "Harishankar Mandavi"
  },
  {
    id: 9,
    profilePicture: "assets/person/9.jpeg",
    username: "Akshay Mohadikar"
  },
  {
    id: 10,
    profilePicture: "assets/person/10.jpeg",
    username: "वीरेंद्र सिंह"
  }
];

export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: "assets/post/1.jpeg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comments: [
      {
        id: 1681111882728,
        content:
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",

        score: 12,
        user: {
          image: {
            png: "assets/person/2.jpeg",
            webp: "./images/avatars/image-amyrobson.webp"
          },
          username: "Yash Kirti Sinha"
        },
        replies: [],
        likes: []
      },
      {
        id: 1681111891160,
        content:
          "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",

        score: 5,
        user: {
          image: {
            png: "assets/person/3.jpeg",
            webp: "./images/avatars/image-maxblagun.webp"
          },
          username: "Vimal Anand Baghel"
        },
        replies: [
          {
            id: 1681111899684,
            content:
              "@Vimal Anand Baghel If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",

            score: 4,

            user: {
              image: {
                png: "assets/person/4.jpeg",
                webp: "./images/avatars/image-ramsesmiron.webp"
              },
              username: "Rajat Giradkar"
            },
            replies: [],
            likes: []
          },
          {
            id: 1681111906132,
            content:
              "@RajatGiradkar I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",

            score: 2,

            user: {
              image: {
                png: "assets/person/1.jpeg",
                webp: "./images/avatars/image-juliusomo.webp"
              },
              username: "Vivek Ramteke"
            },
            replies: [],
            likes: []
          }
        ],
        likes: []
      }
    ]
  },
  {
    id: 2,
    photo: "assets/post/2.jpeg",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comments: []
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: "assets/post/3.jpeg",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comments: []
  },
  {
    id: 4,
    photo: "assets/post/4.jpeg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comments: []
  },
  {
    id: 5,
    photo: "assets/post/5.jpeg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comments: []
  },
  {
    id: 6,
    photo: "assets/post/6.jpeg",
    date: "1 day ago",
    userId: 6,
    like: 44,
    comments: []
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: "assets/post/7.jpeg",
    date: "2 days ago",
    userId: 7,
    like: 52,
    comments: []
  },
  {
    id: 8,
    photo: "assets/post/8.jpeg",
    date: "3 days ago",
    userId: 8,
    like: 15,
    comments: []
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo: "assets/post/9.jpeg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comments: []
  },
  {
    id: 10,
    photo: "assets/post/10.jpeg",
    date: "1 week ago",
    userId: 10,
    like: 104,
    comments: []
  }
];
