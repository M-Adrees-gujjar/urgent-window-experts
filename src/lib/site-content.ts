import windowsImage from "@/assets/ak-glazing-windows.jpg";
import doorsImage from "@/assets/ak-glazing-doors.jpg";
import extensionsImage from "@/assets/ak-glazing-extension.jpg";

export const servicePages = {
  windows: {
    title: "Windows",
    eyebrow: "Windows made to suit your home",
    heading: "The right windows change how a home feels.",
    intro: "Explore made-to-measure window styles that let in the light, sit comfortably with your home's character and work with the way you live.",
    image: windowsImage,
    imageAlt: "Slim dark framed windows fitted to a London brick home",
    imageWidth: 1280,
    imageHeight: 1024,
    detail: "From a single replacement to a whole home, start with the opening, the look you want and what matters most day to day. We can help you compare frame materials, glazing and opening styles before you choose.",
    features: ["Casement and flush styles", "Sliding sash and tilt-and-turn options", "uPVC and aluminium frames", "Glazing and colour options to discuss"],
    faqs: [
      { question: "Which window style should I choose?", answer: "It depends on the building, how each room is used and the look you want. Tell us about the property and we can talk through suitable styles." },
      { question: "Can you replace just one window?", answer: "Yes. Start with the opening you have in mind; we can discuss a single replacement as well as a larger project." },
      { question: "Do you work on older homes?", answer: "We can discuss window options for different property styles. If your home is listed or in a conservation area, tell us early so any relevant requirements can be considered." },
    ],
  },
  doors: {
    title: "Doors",
    eyebrow: "A warm welcome, made personal",
    heading: "An entrance that feels like yours.",
    intro: "From a front door with presence to a garden opening that brings the outside in, find a door to suit your home's character and your everyday routine.",
    image: doorsImage,
    imageAlt: "A forest-green glazed entrance door set in a London brick facade",
    imageWidth: 1280,
    imageHeight: 1024,
    detail: "Door choices start with where it sits and what you want it to do. Consider the opening, the amount of light you want, the style of your home and the way people move through it.",
    features: ["Front and entrance doors", "Composite and aluminium options", "French and sliding patio doors", "Colours, glazing and hardware to choose"],
    faqs: [
      { question: "Can I choose my door colour and hardware?", answer: "Colour, glazing and hardware choices depend on the door range. Share the look you have in mind and we can discuss what is available." },
      { question: "What is the difference between a sliding and bi-fold door?", answer: "Both open a room to the garden in different ways. Sliding panels move across the opening, while bi-fold panels fold together. The right fit depends on your opening and how you plan to use it." },
      { question: "Can you supply a door to match existing windows?", answer: "We can discuss finishes and styles that complement your current windows. A photo of the property is helpful when you enquire." },
    ],
  },
  glazing: {
    title: "Glazing",
    eyebrow: "Make more of every pane",
    heading: "Light, comfort and a clearer view.",
    intro: "Consider glazing options for your windows, doors and roof, from double glazing to carefully planned architectural glass.",
    image: windowsImage,
    imageAlt: "Contemporary window glazing in a traditional brick home",
    imageWidth: 1280,
    imageHeight: 1024,
    detail: "The right glazing depends on the existing frames, the aspect of your home and your priorities. We can help you understand options for warmth, privacy, daylight and sound before agreeing a specification.",
    features: ["Double and triple glazing options", "Secondary glazing to discuss for older homes", "Glass for doors and extensions", "Roof glazing and daylight solutions"],
    faqs: [
      { question: "What is the difference between double and triple glazing?", answer: "Double glazing uses two panes; triple glazing uses three. The best option depends on your home, frames and priorities, so the whole window should be considered—not only the number of panes." },
      { question: "Can I add secondary glazing to an older property?", answer: "It may be an option where you want to retain existing windows. The property's condition and any conservation requirements should be considered first." },
      { question: "How do I choose the right glass?", answer: "Think about the location of the opening and the needs of the room, including privacy, light, comfort and noise. We can discuss these when preparing your quote." },
    ],
  },
  extensions: {
    title: "Extensions & conservatories",
    eyebrow: "Room to grow, room to breathe",
    heading: "A brighter way to live at home.",
    intro: "Bring more daylight into the everyday with a conservatory, orangery or glazed extension planned around your home and garden.",
    image: extensionsImage,
    imageAlt: "Bright home extension with a glass roof and garden-facing sliding doors",
    imageWidth: 1280,
    imageHeight: 1024,
    detail: "Every home and garden has its own opportunities and constraints. Start by describing the space you want to create, how you expect to use it and the part of the house you would like to open up.",
    features: ["Conservatories and orangeries", "Glazed extensions and roof lanterns", "Garden-facing bi-fold and sliding doors", "Roof replacement options to discuss"],
    faqs: [
      { question: "What is the difference between a conservatory and an orangery?", answer: "They are different approaches to a light-filled room, with choices around structure, roof and how much glazing you want. The best fit depends on the house and your brief." },
      { question: "Will I need planning permission?", answer: "That depends on the property and the proposed work. Check current guidance with your local planning authority or a qualified planning professional before work begins." },
      { question: "Can I improve an existing conservatory?", answer: "If your room feels too hot, cold or noisy, there may be glazing or roof options worth discussing. We would first need to understand the existing structure." },
    ],
  },
  "roof-glazing": {
    title: "Roof glazing",
    eyebrow: "Daylight from a different angle",
    heading: "Open up the rooms that need more light.",
    intro: "Roof windows and lanterns can bring daylight into extensions, kitchens, landings and other spaces that feel a little dim.",
    image: extensionsImage,
    imageAlt: "A glazed roof lantern filling a home extension with natural light",
    imageWidth: 1280,
    imageHeight: 1024,
    detail: "The roof structure, pitch and room below all matter when choosing a rooflight. Describe the space and the kind of light you are looking for, and we can talk through the next steps.",
    features: ["Roof windows and skylights", "Roof lanterns for extensions", "Glazing for flat-roof spaces", "Options suited to your project"],
    faqs: [
      { question: "Where can a roof window or lantern be used?", answer: "It depends on the roof type and structure. A survey is needed to confirm what can be fitted safely and appropriately." },
      { question: "Can roof glazing be added to an existing room?", answer: "It may be possible, but roof structure and any required approvals need to be considered before a design is confirmed." },
      { question: "How do I request a roof glazing quote?", answer: "Tell us the property's postcode, the room and what you have in mind. Photos of the room and roof can help us understand the project." },
    ],
  },
} as const;

export type ServiceSlug = keyof typeof servicePages;