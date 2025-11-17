import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

const JioHotstar = () => {
  const [selected, setSelected] = useState(null);
  const [overlayStyle, setOverlayStyle] = useState({});

  console.log(selected);

  const handleSelected = (itemId, event) => {
    setSelected(itemId);

    if (!event) return;

    // The hovered image's container (the div with the relative class)
    // We use the currentTarget here, which is the div being hovered
    const targetRect = event.currentTarget.getBoundingClientRect();
    const overlayWidth = 300;
    const overlayHeight = 300;
    const spacing = 20; // Space between image and overlay
    const padding = 10; // Viewport padding

    let top = targetRect.top + window.scrollY; // Default: align top edge
    let left = targetRect.left + window.scrollX + targetRect.width + spacing; // Default: position to the right

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // --- Right Edge Check: If it goes off-screen right, position it to the left ---
    if (targetRect.right + overlayWidth + padding > viewportWidth) {
      left = targetRect.left + window.scrollX - overlayWidth - spacing;
    }

    // --- Bottom Edge Check: If it goes off-screen bottom, align its bottom edge with the image's bottom edge ---
    if (targetRect.top + overlayHeight + padding > viewportHeight) {
      // Adjust the top position so the overlay's bottom is aligned with the image's bottom
      top =
        targetRect.top + window.scrollY - (overlayHeight - targetRect.height);
    }

    setOverlayStyle({
      top: `${top}px`,
      left: `${left}px`,
      position: "absolute", // This is crucial for dynamic positioning outside the grid flow
    });
  };

  // Function to hide the overlay when not hovering
  const handleMouseLeave = () => {
    setSelected(null);
    setOverlayStyle({});
  };

  // Consolidated data array (added ids to the last few elements for consistency)
  const data = [
    {
      id: 1,
      title: "Jumanji: The Next Level",
            description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/1848/1734945421848-v",
    },
    {
      id: 2,
      title: "Lokah Chapter 1: Chandra",
            description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/2300/1761975712300-v",
    },
    {
      id: 3,
      title: "Mirai",
      description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/4836/1760035304836-v",
    },
    {
      id: 4,
      title: "Shakthi Thirumagan",
            description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/5672/1760541835672-v",
    },
    {
      id: 5,
      title: "Robinhood",
            description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/5456/1762256595456-v",
    },
    {
      id: 6,
      title: "Elevation",
            description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/4506/1761746254506-v",
    },
    {
      id: 7,
      title: "Game Of Thrones",
            description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/5375/1739947275375-v",
    },
    {
      id: 8,
      title: "Kill",
            description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/1207/1753445401207-v",
    },
    {
      id: 9,
      title: "King of Kotha",
            description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/3315/1753455903315-v",
    },
    {
      id: 10,
      title: "A Thursday",
            description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/7072/1713534317072-v",
    },
    {
      id: 11,
      title: "The Roundup: Punishment",
            description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/6941/1762862406941-v",
    },
    {
      id: 12,
      title: "Special Ops",
            description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/2868/1757951102868-v",
    },
    {
      id: 13,
      title: "Demon Slayer: Kimetsu no Yaiba",
            description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/5644/1754203315644-v",
    },
    {
      id: 14,
      title: "Salaar: Part 1 - Ceasefire",
            description:"A mythical vigilante in hiding draws three unsuspecting friends into a moral war that threatens to tear the city's dark underworld apart.",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/5665/1753421585665-v",
    },
    {
      id: 15,
      title: "Marco",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/4269/1744026164269-v",
    },
    {
      id: 16,
      title: "Cuttputlli",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/824/1710950200824-v",
    },
    {
      id: 17,
      title: "The Family Star",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/2983/1734512482983-v",
    },
    {
      id: 18,
      title: "Liger - Saala Crossbreed",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/5595/1355595-v-93a3866a2fa5",
    },
    {
      id: 19,
      title: "A.R.M",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/8312/1753695698312-v",
    },
    {
      id: 20,
      title: "IB71",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/5261/1753424725261-v",
    },
    {
      id: 21,
      title: "Bhadrakaali",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/8660/1761312658660-v",
    },
    {
      id: 22,
      title: "Special Ops 1.5",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/1738/1631738-v-85d7d9e7dce7",
    },
    {
      id: 23,
      title: "Laxmii",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/1096/1712208971096-v",
    },
    {
      id: 24,
      title: "Tadap",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/6716/1106716-v-a0a306c60795",
    },
    {
      id: 25,
      title: "The Freelancer",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/4838/1753466284838-v",
    },
    {
      id: 26,
      title: "Zebra",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/2190/1761716792190-v",
    },
    {
      id: 27,
      title: "Aavesham",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/3460/1722102183460-v",
    },
    {
      id: 28,
      title: "Baaghi 3",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/7668/1710933777668-v",
    },
    {
      id: 29,
      title: "Bhuj: The Pride of India",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/6042/1753441466042-v",
    },
    {
      id: 30,
      title: "Akelli",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/8882/1734953558882-v",
    },
    {
      id: 31,
      title: "Kabali",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/4865/1749827164865-v",
    },
    {
      id: 32,
      title: "Dashing CM Bharath",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/7978/1734266387978-v",
    },
    {
      id: 33,
      title: "L2: Empuraan",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/1859/1745433761859-v",
    },
    {
      id: 34,
      title: "Inspector Avinash",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/5371/1734427015371-v",
    },
    {
      id: 35,
      title: "Hanuman",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/981/1736497370981-v",
    },
    {
      id: 36,
      title: "Bloody Daddy",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/1349/1734509571349-v",
    },
    {
      id: 37,
      title: "The Thieves",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/233/1758799000233-v",
    },
    {
      id: 38,
      title: "Taaza Khabar",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/6295/1753700136295-v",
    },
    {
      id: 39,
      title: "Vikram",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/9003/1639003-v-31cc8eeb198f",
    },
    {
      id: 40,
      title: "Get it on Google Play",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/v1661346101/google-playstore",
    },
    {
      id: 41,
      title: "Download on the App Store",
      imageUrl:
        "https://img10.hotstar.com/image/upload/f_auto,q_90/v1661346071/ios-appstore",
    },
  ];

  
  return (
    // The main container doesn't need to be relative, but it must be large enough
    <div className="sm:min-h-screen sm:w-screen grid gap-1 py-2 bg-neutral-900 px-4 grid-cols-7 justify-center items-center">
      {data.map((item, index) => (

        <>
        
        <div
          key={item.id || index} // Use index as fallback key
          className="h-[250px] w-[200px] mx-auto rounded-[20px] relative"
          // 🐛 FIX: Wrap handleSelected to pass the event object (e)
          onMouseEnter={(e) => handleSelected(item, e)}
          onMouseLeave={handleMouseLeave} // Hide the overlay on mouse leave
          >
          <img
            src={item.imageUrl}
            className="h-full w-full object-cover object-center rounded-[20px]"
            alt={item.title}
            />
        </div>
        
      <AnimatePresence>


   
      {selected !== null && (
        <motion.div 
        key={selected.id}
       transition={{duration:0.5,ease:"backInOut",delay:0.1}}
            initial={{scale:0.8, opacity: 0,rotate:-90}} // Ensure initial state has opacity: 0
            exit={{scale:0.8, opacity:0,rotate:90}}
            // Use opacity: 1 and scale: 1 for the 'animate' prop
            animate={{scale:1, opacity: 1,rotate:0}}

            
          className="bg-gray-900 min-h-[400px] w-[350px] flex flex-col absolute z-50 rounded-[20px]"
          style={overlayStyle}
        >
          {" "}
          <div className="h-[70%]  w-full rounded-t-[20px] ">
            <img
              src={selected.imageUrl}
              className="h-[200px] w-full object-cover object-center rounded-[20px]"
              alt=""
            />
          </div>
          <div className=" w-full flex justify-center gap-2 items-start px-2 py-2">

<button className="h-[50px] w-[80%] bg-white rounded-lg flex justify-center items-center">Watch now</button>
<button className="h-[50px] w-[20%] bg-neutral-500 text-white  rounded-lg"><h1 className="text-[20px]">+</h1></button>

          </div>
       <div className="h-[100px] w-full px-3 flex justify-center items-center">   <p className="text-white">{selected.description}</p></div>
        </motion.div>
      )}
         </AnimatePresence>
            </>
      ))}

      {/* The dynamically positioned overlay (placed outside the map) */}

    </div>
  );
};

export default JioHotstar;
