# EduHub
>_Collection of qualityful online courses that you need_ - __[click here to Visit](https://eduhub-tohir.netlify.app/)__

---

### What this App for
- Educational service for all
- You need a quality education? We are here for you
- This App is build with most popular framework `react`

### Installing the App
- Download or clone this repository
- Open project root in terminal
- Give command __`npm install`__ and you are good to go
- To run the project in local server give command __`npm start`__

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
