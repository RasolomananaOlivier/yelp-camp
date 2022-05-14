const camps = [
  {
    name: 'Mount Ulap',
    url: 'mout-ulap',
    description: 'One of the most famous hikes in Benguet is MT Ulap in Itogon.',
    fullDescription: "Mount Ulap is a7.7 kilometer moderately trafficked point-to-point trail located near Tuba, benguet, Philippines that offers the chance to see wildlife nad is rated as moderate. The trail is primarily used for hiking.",
    src: '/img/Mount Ulap.jpg',
    highQualitySrc: '/highImg/Mount Ulap.png',
    reviews: [
      {
        name: 'Adam Jones',
        date: '13h hours ago',
        content: 'Honesty one of the best experiences ever, took us \
          a while to figure out how to get there but it was amazing!',
      }, {
        name: 'Isaac Dylan',
        date: '1 day ago',
        content: 'Traveling changes you as person, you gain more \
          perspective, this is the perfect spot to do that.'
      },
      {
        name: 'Hudson Luca',
        date: '3 days ago',
        content: 'Definitely recommend going there, not too far \
          and not a lot of people to the experience.'
      }
    ]
  },
  {
    name: 'Calaguas Island',
    url: 'calaguas-island',
    description: 'One of the most famous hikes in Benguet is MT Ulap in Itogon.',
    fullDescription: "Mount Ulap is a7.7 kilometer moderately trafficked point-to-point trail located near Tuba, benguet, Philippines that offers the chance to see wildlife nad is rated as moderate. The trail is primarily used for hiking.",
    src: '/img/Calaguas Island.jpg',
    highQualitySrc: '/highImg/Calagus Islands.jpg',
    reviews: [
      {
        name: 'Adam Jones',
        date: '13h hours ago',
        content: 'Honesty one of the best experiences ever, took us \
          a while to figure out how to get there but it was amazing!',
      }, {
        name: 'Isaac Dylan',
        date: '1 day ago',
        content: 'Traveling changes you as person, you gain more \
          perspective, this is the perfect spot to do that.'
      },
      {
        name: 'Hudson Luca',
        date: '3 days ago',
        content: 'Definitely recommend going there, not too far \
          and not a lot of people to the experience.'
      }
    ]
  }
  , {
    name: 'Onay Beach',
    url: 'onay-beach',
    description: 'One of the most famous hikes in Benguet is MT Ulap in Itogon.',
    fullDescription: "Mount Ulap is a7.7 kilometer moderately trafficked point-to-point trail located near Tuba, benguet, Philippines that offers the chance to see wildlife nad is rated as moderate. The trail is primarily used for hiking.",
    src: '/img/Onay Beach.jpg',
    highQualitySrc: '/highImg/Onay Beach.jpg',
    reviews: [
      {
        name: 'Adam Jones',
        date: '13h hours ago',
        content: 'Honesty one of the best experiences ever, took us \
          a while to figure out how to get there but it was amazing!',
      }, {
        name: 'Isaac Dylan',
        date: '1 day ago',
        content: 'Traveling changes you as person, you gain more \
          perspective, this is the perfect spot to do that.'
      },
      {
        name: 'Hudson Luca',
        date: '3 days ago',
        content: 'Definitely recommend going there, not too far \
          and not a lot of people to the experience.'
      }
    ]
  }, {
    name: 'Seven Sisters Waterfall',
    url: 'seven-sisters-waterfall',
    description: 'One of the most famous hikes in Benguet is MT Ulap in Itogon.',
    fullDescription: "Mount Ulap is a7.7 kilometer moderately trafficked point-to-point trail located near Tuba, benguet, Philippines that offers the chance to see wildlife nad is rated as moderate. The trail is primarily used for hiking.",
    src: '/img/Seven Sisters Waterfall.jpg',
    highQualitySrc: '/highImg/Seven Sisters Waterfall.jpg',
    reviews: [
      {
        name: 'Adam Jones',
        date: '13h hours ago',
        content: 'Honesty one of the best experiences ever, took us \
          a while to figure out how to get there but it was amazing!',
      }, {
        name: 'Isaac Dylan',
        date: '1 day ago',
        content: 'Traveling changes you as person, you gain more \
          perspective, this is the perfect spot to do that.'
      },
      {
        name: 'Hudson Luca',
        date: '3 days ago',
        content: 'Definitely recommend going there, not too far \
          and not a lot of people to the experience.'
      }
    ]
  }, {
    name: 'Latik Riverside',
    url: 'latik-riverside',
    description: 'One of the most famous hikes in Benguet is MT Ulap in Itogon.',
    fullDescription: "Mount Ulap is a7.7 kilometer moderately trafficked point-to-point trail located near Tuba, benguet, Philippines that offers the chance to see wildlife nad is rated as moderate. The trail is primarily used for hiking.",
    src: '/img/Latik Riverside.jpg',
    highQualitySrc: '/highImg/Latik Riverside.jpg',
    reviews: [
      {
        name: 'Adam Jones',
        date: '13h hours ago',
        content: 'Honesty one of the best experiences ever, took us \
          a while to figure out how to get there but it was amazing!',
      }, {
        name: 'Isaac Dylan',
        date: '1 day ago',
        content: 'Traveling changes you as person, you gain more \
          perspective, this is the perfect spot to do that.'
      },
      {
        name: 'Hudson Luca',
        date: '3 days ago',
        content: 'Definitely recommend going there, not too far \
          and not a lot of people to the experience.'
      }
    ]
  },
  {
    name: 'Buloy Springs',
    url: 'buloy-springs',
    description: 'One of the most famous hikes in Benguet is MT Ulap in Itogon.',
    fullDescription: "Mount Ulap is a7.7 kilometer moderately trafficked point-to-point trail located near Tuba, benguet, Philippines that offers the chance to see wildlife nad is rated as moderate. The trail is primarily used for hiking.",
    src: '/img/Buloy Springs.jpg',
    highQualitySrc: '/highImg/Buloy Springs.jpg',
    reviews: [
      {
        name: 'Adam Jones',
        date: '13h hours ago',
        content: 'Honesty one of the best experiences ever, took us \
          a while to figure out how to get there but it was amazing!',
      }, {
        name: 'Isaac Dylan',
        date: '1 day ago',
        content: 'Traveling changes you as person, you gain more \
          perspective, this is the perfect spot to do that.'
      },
      {
        name: 'Hudson Luca',
        date: '3 days ago',
        content: 'Definitely recommend going there, not too far \
          and not a lot of people to the experience.'
      }
    ]
  }
]


export default function handler(req, res) {
  const { query: { url } } = req;
  res.json({
    ...camps.find(camp => camp.url === url)
  });
}