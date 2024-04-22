const API_URL = "https://jsonplaceholder.typicode.com/users"
const cards = document.querySelector(".user__cards")

const images = [
    // 1
    "https://img.freepik.com/free-photo/young-happy-man-standing-isolated_171337-1127.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1713657600&semt=ais",
    // 2
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg",
    // 3 
    "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
    // 4
    "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713744000&semt=sph",
    // 5
    "https://st3.depositphotos.com/3776273/31836/i/450/depositphotos_318367382-stock-photo-portrait-of-a-handsome-young.jpg",
    // 6
    "https://media.istockphoto.com/id/1212710606/photo/young-handsome-man-with-beard-wearing-casual-t-shirt-standing-over-white-background-looking.jpg?s=612x612&w=0&k=20&c=TqO46wTlF5ZA3lFpIfNq2br-ruuKpdZXSegCkHNoqMo=",
    // 7 
    "https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Glasses-for-Oval-shape-741x505.jpg",
    // 8
    "https://st2.depositphotos.com/2931363/6511/i/450/depositphotos_65116237-stock-photo-happy-young-man-in-shirt.jpg",
    // 9
    "https://t4.ftcdn.net/jpg/02/98/28/89/360_F_298288984_8i0PB7s9aWPzi1LeuNGGrnjXkmXRpcZn.jpg",
    // 10 
    "https://st4.depositphotos.com/1049680/20631/i/450/depositphotos_206317298-stock-photo-young-caucasian-man-grey-grunge.jpg",
    // 11
    "https://t3.ftcdn.net/jpg/05/09/38/68/240_F_509386837_KH6uEl5YptC272rHHof6z2zE4xXagww2.jpg"
]

async function getAPI(url) {
    let data = await fetch(url)
    data.json()
        .then(res => mapCards(res))
        .catch(err => console.log(err))
}
getAPI(API_URL)

function mapCards(data) {
    let newData = ""
    let count = 0
    data.forEach(e => {
        count++
        newData += `
            <div class="user__card">
                <div class="user__img">
                    <img src="${images[count]}" alt="">
                </div>
                <div class="user__desc">
                    <h1 class="line__clamp">Name: ${e.name}</h1>
                    <p>Company: ${e.company.name}</p>
                    <p>Email: ${e.email}</p>
                    <p class="line__clamp">Address: ${e.address.city} ${e.address.street} ${e.address.suite}</p>
                    <p>Phone number: ${e.phone}</p>
                    <div class="user__btns">
                    <a href="https://www.instagram.com/" target="_blank" class="user__btn">
                        Website
                    </a>
                    </div>
                </div>
            </div>
        `
        cards.innerHTML = newData
    });
}