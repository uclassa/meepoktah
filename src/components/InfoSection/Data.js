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
    headline: 'To build a strong Singaporean community within UCLA',
    description: 'Our Supreme Leader David Grueber and Chief Hazim Bin Fathul Raman strong believe in the importance of having SSA be what it needs to be.',
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
    headline: 'Collaborate with us as a Sponsor',
    description: 'We have built strong partnerships with supporting companies',
    hasButton: true,
    buttonLabel: "Hit us up!",
    buttonLink: "mailto:ssa.uclabruins@gmail.com",
    hasImage: true,
    imgStart: true,
    img: require("./../../images/infoSection2.jpg"),
    alt: 'Random photo showing us enjoying something',
    dark: false, 
    primary: false,
    curveTop: true
}
