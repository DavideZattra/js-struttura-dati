let myMagicCard = { //Card description and caracteristics
    id : 88,
    name : 'Bloodfire Colossus',
    manaCost : [ 6, 'R', 'R'],
    totalManaCost : 8,
    type : 'Creature',
    subType : 'Giant',
    edition : 9,
    rarity : 'Rare',
    text : {

        ability :{

            description : 'Sacrifice Bloodfire Colossus: Bloodfire Colossus deals 6 damage to each creature and each player.',
            manaCost : ['R'],            
            tappable : false,

        } ,
        flavorText : 'It took all its strenght to contain the fire within.'

    },
    artist : {

        id : 45,
        name : 'Greg',
        surname : 'Staples',
        dateOfBirth : '07/22/1980',
        placeOfBirth : 'Chicago, Illinois'

    },
    number : 177,
    strenght : 6,
    constitution : 6,
    border : 'Black',
    image: 'img/myCardImage.jpeg'
}

let cardHTML = 
`<div class="row align-items-center">

    <div class="col-5" id="ms_card-img">

        <img src="${myMagicCard.image}" placeholder=" BloodFireColossusCard ">

    </div>    

    <div class="col-7 text-start" id="ms_card-description">

        <ul class="card-element">

            <!-- <li>Database id: ${myMagicCard.id}</li>-->
            <li>Name: ${myMagicCard.name}</li>
            <li>Launch cost: ${myMagicCard.manaCost.join(', ')}</li>
            <li>Total mana cost: ${myMagicCard.totalManaCost}</li>
            <li>Type: ${myMagicCard.type} ${myMagicCard.subType}</li>
            <li>Expansion: ${myMagicCard.edition}</li>
            <li>Rarity: ${myMagicCard.rarity}</li>
            <li>Card ability: 
                <ul class="">

                    <li>${myMagicCard.text.ability.description}</li>
                    <li>${myMagicCard.text.ability.manaCost}</li>
                    <li>${myMagicCard.text.ability.tappable}</li>

                </ul>
            </li>
            <li>Flavor text: <em>${myMagicCard.text.flavorText}</em></li>
            <li>Card artist: ${myMagicCard.artist.name} ${myMagicCard.artist.surname}</li>
            <li>Card Number: ${myMagicCard.number}</li>
            <li>Card S/C: ${myMagicCard.strenght}/${myMagicCard.constitution}</li>
            <li>Border color: ${myMagicCard.border}</li>

        </ul>

    </div>

</div>
`
;

document.getElementById('ms_card').innerHTML += cardHTML;