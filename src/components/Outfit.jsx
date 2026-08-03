import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Outfit = ({ products }) => {
  const navigate = useNavigate()

  const [gender, setGender] = useState(null)
  const [outfit, setOutfit] = useState(null)

 
  const getRandom = (category) => {
    const items = products.filter(item =>
      item.category === category &&
      (gender === "All" || item.gender === gender)
    )

    return items[Math.floor(Math.random() * items.length)]
  }


  const generateOutfit = (selectedGender) => {
    setGender(selectedGender)

    const newOutfit = {
      clothing: getRandom("Clothing"),
      footwear: getRandom("Footwear"),
      accessory: getRandom("Accessories"),
      watches:getRandom("Watches")
    }

    setOutfit(newOutfit)
  }

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>

     
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h2> Outfit Suggestion</h2>

      
      {!outfit && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => generateOutfit("Women")}>👗 Women</button>
          <button onClick={() => generateOutfit("Men")}>👔 Men</button>
          <button onClick={() => generateOutfit("All")}>Random</button>
        </div>
      )}

     
      {outfit && (
        <>
          <h3 style={{ marginTop: "20px" }}>
            {gender === "All" ? "Mixed Outfit" : `${gender} Outfit`}
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px"
            }}
          >
            {Object.values(outfit).map((item, index) =>
              item ? (
                <div
                  key={index}
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    borderRadius: "10px"
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width="150"
                  />
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
              ) : (
                <p key={index}>No item found</p>
              )
            )}
          </div>

          
          <button
            style={{ marginTop: "20px" }}
            onClick={() => generateOutfit(gender)}
          >
            🔄 Try Another Outfit
          </button>
        </>
      )}
    </div>
  )
}

export default Outfit