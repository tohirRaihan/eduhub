# EduHub
>_Build your dream team with some master mind of programming_ - __[click here to create](https://callbackwarriors.netlify.app/)__

---

### What this App for
- Collection of top notch programmers
- We are here to protect any cyber attack
- You have a budget? Build your team

### Installing the App
- Download or clone this repository
- Open project root in terminal
- Give command __`npm install`__ and you are good to go

### Generate JSON data
Copy the code below and paste it in __[this website](https://www.json-generator.com/)__ and click `generate` to generate demo data of this project

```
[
    '{{repeat(12)}}',
    {
        id: '{{index() + 1}}',
        lession: '{{integer(43, 150)}}',
        rating: {
        rate: '{{floating(3, 5, 1)}}',
        count: '{{integer(100, 999)}}'
        },
        instructor: {
        name: '{{firstName()}} {{surname()}}',
        image: 'https://randomuser.me/api/portraits/thumb/{{random("men", "women")}}/{{integer(1, 100)}}.jpg'
        },
        courseImage: 'https://picsum.photos/id/{{integer(1, 900)}}/356/212?blur',
        price: '{{integer(101, 199)}}',
        priceColor: '{{random("primary", "info", "danger", "warning", "success")}}',
        latest: false,
        title: '{{company()}} {{company().toLowerCase()}} {{firstName().toLowerCase()}} {{city().toLowerCase()}} {{company().toLowerCase()}} {{firstName().toLowerCase()}} {{city().toLowerCase()}} {{surname().toLowerCase()}}'
    }
]
```


```
[
    '{{repeat(12)}}',
    {
        id: '{{index() + 1}}',
        blogger: {
        name: '{{firstName()}} {{surname()}}',
        image: 'https://randomuser.me/api/portraits/thumb/{{random("men", "women")}}/{{integer(1, 100)}}.jpg'
        },
        blogImage: 'https://picsum.photos/id/{{integer(1, 900)}}/356/212?blur',
        badgeColor: '{{random("primary", "info", "danger", "warning", "success")}}',
        latest: false,
        category: '{{random("Art & Design", "Marketing", "UX Design", "Engineering", "Audio & Music")}}',
        date: '{{date(new Date(2020, 0, 1), new Date(), "MMM dd, YYYY")}}',
        title: '{{company()}} {{company().toLowerCase()}} {{firstName().toLowerCase()}} {{city().toLowerCase()}} {{company().toLowerCase()}} {{firstName().toLowerCase()}} {{surname().toLowerCase()}}'
    }
]
```
