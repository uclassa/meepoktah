/*
    This file allows us to reuse components 
    to render different information.
*/

export const vision = {
    id: 'about',
    lightBg: false, // If T, lightText = F, darkText = T
    lightText: true, // For headline
    darkText: false,  // For description
    topLine: 'Our Vision',
    headline: 'Fostering a global community for Singaporean culture within UCLA',
    description: 'Our members cultivate a welcoming community for people of all backgrounds. We hope to develop a "home away from home" for Singaporeans, and introduce our Singaporean culture to the broader student body at UCLA. Come learn more about the small island we call home!',
    hasButton: false,
    buttonLabel: "",
    buttonLink: "",
    hasImage: true,
    imgStart: false, // T for image on left, F on right
    img: require("./../../images/infoSection1.jpeg"),
    alt: 'Some picture of SSA',
    dark: true,
    primary: true,
    curveTop: false 
}

export const sponsorships = {
    id: 'sponsorships',
    lightBg: false,
    lightText: true,
    darkText: false,
    topLine: 'Interested in supporting us?',
    headline: 'We build strong relationships with our partners',
    description: 'Our partnership program allows businesses and organisations to tap into our growing community. Reach out to learn more about how we can benefit you.',
    hasButton: true,
    buttonLabel: "Contact us!",
    buttonLink: "mailto:ssa.uclabruins@gmail.com",
    hasImage: true,
    imgStart: true,
    img: require("./../../images/infoSection2.jpg"),
    alt: 'Random photo showing us enjoying something',
    dark: false, 
    primary: false,
    curveTop: true
}
