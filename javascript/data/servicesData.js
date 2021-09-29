// 1.sukursime sarasa paslaugu kurios ale galimos teikti
// sukuriamas objektas

const servicesData = {
    imgPath: "./img/server/", 
    maxCount: 3,
    list: [
        {
            img: "mitech-box-image-style-01-image-01-100x108.png",
            title: "It design",
            description: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
            link: "#",
            active: true
    },
        {
            img:"mitech-box-image-style-01-image-02-100x108.png",
            title:"It management",
            description:"It’s possible to simultaneously manage and transform information from one server to another.",
            link: "#",
            active:true
    },
        {
            img: "mitech-box-image-style-01-image-03-100x108.png",
            title: "Data security",
            description: "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
            link: "#",
            active: true
    },
    ]
}

// duomenys eksportuojami
export { servicesData }