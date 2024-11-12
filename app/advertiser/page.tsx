import Cardunique from "@/components/card-unique"

const advertiser = () =>{

    const uniqueCard = [
        {
          title : "Advertising Agencies and Brands",
          points : [
            {
              icon: "🌐",
              text: "Find your audiences across two billion smartphone users globally.",
            },
            {
              icon: "📱",
              text: "Drive active engagement with smart ad experiences.",
            },
            {
              icon: "📈",
              text: "Foster responsible growth through sustainability, supply path optimization, and transparency.",
            },
          ],
          buttonText : "Grow Your Brand",
          imageUrl : "/brand-marketers-desktop.webp",
          imageOnRight : true,
        },
        {
          title : "Advertising Agencies and Brands",
          points : [
            {
              icon: "🌐",
              text: "Find your audiences across two billion smartphone users globally.",
            },
            {
              icon: "📱",
              text: "Drive active engagement with smart ad experiences.",
            },
            {
              icon: "📈",
              text: "Foster responsible growth through sustainability, supply path optimization, and transparency.",
            },
          ],
          buttonText : "Grow Your Brand",
          imageUrl : "/brand-marketers-desktop.webp",
          imageOnRight : false,
        }
      ]


    return(
        <div className="flex flex-col items-center justify-center gap-y-4 py-2">
              {uniqueCard.map((card,index)=>(
                <Cardunique
                key={index}
                  title={card.title}
                  points={card.points}
                  buttonText={card.buttonText}
                  imageUrl={card.imageUrl}
                  imageOnRight={card.imageOnRight}
                />
              ))}
            </div>
    )
}

export default advertiser