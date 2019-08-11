// File that will contain the 25+ sets of image urls, hosted via AWS S3.
// Seeder.js will pull from this file when randomly generating a set of images for each product.

const imageData = [
  { 
    thumbnails: [
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-W-Aurora.jpg', 
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-W-Macaw.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-W-Titanite.jpg'
    ],
    images: [
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-W-Aurora.jpg', 
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-W-Macaw.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-W-Titanite.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-Women-s-Titanite-Back-View.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-Women-s-Titanite-Chest-Pocket.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-Women-s-Titanite-Collar.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-Women-s-Titanite-Front-View.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-Women-s-Titanite-Helmet-Compatible-Hood.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-Women-s-Titanite-Hem-Adjuster.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-Women-s-Titanite-Hood-Adjuster.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-Women-s-Titanite-Hood-Up.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-Women-s-Titanite-Internal-Dump-Pocket.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-Women-s-Titanite-Internal-Security-Pocket.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Alpha-SV-Jacket-Women-s-Titanite-Pit-Zip.jpg'
    ]
  },

  { 
    thumbnails: [
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-W-Black-Sapphire-II.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-W-Black.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-W-Crimson.jpg'
    ],
    images: [ 
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-W-Black-Sapphire-II.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-W-Black.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-W-Crimson.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-Women-s-Black-Sapphire-Back-View.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-Women-s-Black-Sapphire-Collar.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-Women-s-Black-Sapphire-Cuffs.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-Women-s-Black-Sapphire-Hand-Pocket.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-Women-s-Black-Sapphire-Internal-Security-Pocket.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-Women-s-Black-Sapphire-Open-View.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-Women-s-Black-Sapphire-Side-View.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Atom-LT-Jacket-Women-s-Black-Sapphire-Outfit.jpg'
    ],
  },

  { 
    thumbnails: [
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-W-Black.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-W-Zaffre.jpg'
    ],
    images: [ 
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-W-Black.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-W-Zaffre.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Adjustable-Suspenders.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Back-View.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Drop-Seat.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Front-View.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Lace-Hook-And-Drawcords.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Lace-Hook.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Outfit.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Side-Zipper-Open.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Side-Zipper.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Waist.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Zippered-Fly-With-Snaps.jpg'
    ]
  },

  { 
    thumbnails: [
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-W-Black.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-W-Zaffre.jpg'
    ],
    images: [
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-W-Black.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-W-Zaffre.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Adjustable-Suspenders.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Back-View.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Drop-Seat.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Front-View.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Lace-Hook-And-Drawcords.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Lace-Hook.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Outfit.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Side-Zipper-Open.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Side-Zipper.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Waist.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Beta-SV-Bib-Pant-Women-s-Zaffre-Zippered-Fly-With-Snaps.jpg'
    ]
  },

  { 
    thumbnails: [
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Blade-6-Backpack-Black.jpg'
    ],
    images: [ 
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Blade-6-Backpack-Aramon-Back-Panel-Pocket.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Blade-6-Backpack-Aramon-Back-View.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Blade-6-Backpack-Aramon-Fit.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Blade-6-Backpack-Aramon-Front-View.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Blade-6-Backpack-Aramon-Internal-Compartments.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Blade-6-Backpack-Aramon-Internal-Compartments.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Blade-6-Backpack-Aramon-Key-Clip.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Blade-6-Backpack-Aramon-Padded-Compartment.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Blade-6-Backpack-Aramon-Suspension.jpg',
      'https://arcteryxsdc.s3-us-west-1.amazonaws.com/Blade-6-Backpack-Black.jpg'
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Bora-AR-49-Backpack-W-Castaway.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Bora-AR-49-Backpack-W-Castaway.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Bora-AR-49-Backpack-Women-s-Castaway-Adjustable-Shoulder-Straps.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Bora-AR-49-Backpack-Women-s-Castaway-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Bora-AR-49-Backpack-Women-s-Castaway-Hipbelt-Stash-Pocket.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Bora-AR-49-Backpack-Women-s-Castaway-Internal-Security-Pocket.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Bora-AR-49-Backpack-Women-s-Castaway-Rolltop-Closure.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Bora-AR-49-Backpack-Women-s-Castaway-Side-Access.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Bora-AR-49-Backpack-Women-s-Castaway-Side-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Bora-AR-49-Backpack-Women-s-Castaway-Suspension.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cala-Dress-W-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cala-Dress-W-Cloudburst.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cala-Dress-W-Kirigami.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cala-Dress-W-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cala-Dress-W-Cloudburst.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cala-Dress-W-Kirigami.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cala-Dress-Women-s-Kirigami-Back-Detail.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cala-Dress-Women-s-Kirigami-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cala-Dress-Women-s-Kirigami-Closed-Collar.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cala-Dress-Women-s-Kirigami-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cala-Dress-Women-s-Kirigami-Open-Collar.jpg",
      "	https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cala-Dress-Women-s-Kirigami-Security-Hand-Pocket.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Carrier-Duffle-40-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Carrier-Duffle-40-Lt-Chandra.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Carrier-Duffle-40-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Carrier-Duffle-40-Lt-Chandra.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Carrier-Duffle-40-Lt-Chandra-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Carrier-Duffle-40-Lt-Chandra-Fabric.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Carrier-Duffle-40-Lt-Chandra-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Carrier-Duffle-40-Lt-Chandra-Open-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Carrier-Duffle-40-Lt-Chandra-Packed.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Carrier-Duffle-40-Lt-Chandra-Side-View.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cerium-SL-Hoody-W-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cerium-SL-Hoody-W-Iolite.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cerium-SL-Hoody-W-Utopia.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cerium-SL-Hoody-W-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cerium-SL-Hoody-W-Iolite.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cerium-SL-Hoody-W-Utopia.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cerium-SL-Hoody-Women-s-Utopia-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cerium-SL-Hoody-Women-s-Utopia-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cerium-SL-Hoody-Women-s-Utopia-Hood-Up.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cerium-SL-Hoody-Women-s-Utopia-Open-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cerium-SL-Hoody-Women-s-Utopia-Outfit.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Cerium-SL-Hoody-Women-s-Utopia-Stuff-Sack.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Fission-Mitten-Black.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Fission-Mitten-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Fission-Mitten-Black-Carabiner-Loop.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Fission-Mitten-Black-Dexterity-2.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Fission-Mitten-Black-Dexterity.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Gamma-MX-Pant-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Gamma-MX-Pant-Gwaii.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Gamma-MX-Pant-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Gamma-MX-Pant-Gwaii.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Gamma-MX-Pant-Black-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Gamma-MX-Pant-Black-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Gamma-MX-Pant-Black-Hand-Pocket.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Gamma-MX-Pant-Black-Hem-Adjuster.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Gamma-MX-Pant-Black-Thigh-Pocket.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Grotto-Toque-Zaffre-Baja.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Grotto-Toque-Orion-Olive-Amber.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Grotto-Toque-Crimson-Hard-Coral.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Grotto-Toque-Zaffre-Baja.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Grotto-Toque-Orion-Olive-Amber.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Grotto-Toque-Crimson-Hard-Coral.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Grotto-Toque-Orion-Olive-Amber-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Grotto-Toque-Orion-Olive-Amber-Back-View.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Incendo-SL-Jacket-Odyssea.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Incendo-SL-Jacket-Pilot.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Incendo-SL-Jacket-Utopia.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Incendo-SL-Jacket-Odyssea.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Incendo-SL-Jacket-Pilot.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Incendo-SL-Jacket-Utopia.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Incendo-SL-Jacket-Utopia-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Incendo-SL-Jacket-Utopia-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Incendo-SL-Jacket-Utopia-Open-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Incendo-SL-Jacket-Utopia-Packed.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Incendo-SL-Jacket-Utopia-Sleeves.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Lyra-Short-W-Black-Sapphire.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Lyra-Short-W-Hard-Coral.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Lyra-Short-W-Black-Sapphire.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Lyra-Short-W-Hard-Coral.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Lyra-Short-Women-s-Black-Sapphire-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Lyra-Short-Women-s-Black-Sapphire-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Lyra-Short-Women-s-Black-Sapphire-Articulation.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Lyra-Short-Women-s-Black-Sapphire-Security-Pocket.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Lyra-Short-Women-s-Black-Sapphire-Waist-Adjuster.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-W-Crimson-Aura.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-W-Mosaic.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-W-Twisted-Pine.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-W-Crimson-Aura.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-W-Mosaic.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-W-Twisted-Pine.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-Women-s-Crimson-Aura-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-Women-s-Crimson-Aura-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-Women-s-Crimson-Aura-Collar.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-Women-s-Crimson-Aura-Hood-Up.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-Women-s-Crimson-Aura-Internal-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-Women-s-Crimson-Aura-Pit-Zip.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-Women-s-Crimson-Aura-Internal-Security-Pocket.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Shashka-Jacket-Women-s-Crimson-Aura-Hem-Adjuster.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-W-Awestruck.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-W-Black-Sapphire.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-W-Electrolyte.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-W-Osmosis.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-W-Theanine.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-W-Awestruck.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-W-Black-Sapphire.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-W-Electrolyte.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-W-Osmosis.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-W-Theanine.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-Women-s-Awestruck-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-Women-s-Awestruck-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-Women-s-Black-Sapphire-Outfit.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-Women-s-Awestruck-Hood-Up.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Nodin-Jacket-Women-s-Awestruck-Packed.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Taema-Crew-Neck-Shirt-SS-W-Black-Sapphire.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Taema-Crew-Neck-Shirt-SS-W-Continuum.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Taema-Crew-Neck-Shirt-SS-W-Firoza.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Taema-Crew-Neck-Shirt-SS-W-Firoza.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Taema-Crew-Neck-Shirt-SS-W-Black-Sapphire.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Taema-Crew-Neck-Shirt-SS-W-Continuum.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Taema-Crew-Neck-Shirt-SS-W-Firoza.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Taema-Crew-Neck-Shirt-SS-W-Firoza.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Taema-Crew-Neck-Shirt-SS-Women-s-Black-Sapphire-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Taema-Crew-Neck-Shirt-SS-Women-s-Black-Sapphire-Back-View.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-AR-Bottom-W-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-AR-Bottom-W-Shorepine.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-AR-Bottom-W-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-AR-Bottom-W-Shorepine.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-AR-Bottom-Women-s-Black-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-AR-Bottom-Women-s-Black-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-AR-Bottom-Women-s-Black-Thigh-Pocket.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rico-Shacket-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rico-Shacket-Caribou.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rico-Shacket-Pegasus.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rico-Shacket-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rico-Shacket-Caribou.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rico-Shacket-Pegasus.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rico-Shacket-Black-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rico-Shacket-Black-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rico-Shacket-Black-Collar.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rico-Shacket-Black-Internal-Security-Pocket.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Bottom-Black.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Bottom-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Bottom-Black-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Bottom-Black-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Bottom-Black-Thigh-Pocket.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Bottom-Black-Waistband.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Riel-Shirt-LS-Yukon-Gold.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Riel-Shirt-LS-Loggerhead.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Riel-Shirt-LS-Astrosphere.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Riel-Shirt-LS-Yukon-Gold.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Riel-Shirt-LS-Loggerhead.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Riel-Shirt-LS-Astrosphere.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Riel-Shirt-LS-Astrosphere-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Riel-Shirt-LS-Astrosphere-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Riel-Shirt-LS-Astrosphere-Outfit.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Riel-Shirt-LS-Astrosphere-Chest-Pocket.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Riel-Shirt-LS-Astrosphere-Cuff.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Norvan-SL-GTX-Shoe-W-Aurora-Infrared.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Norvan-SL-GTX-Shoe-W-Black-Sapphire-Continuum.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Norvan-SL-GTX-Shoe-W-Aurora-Infrared.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Norvan-SL-GTX-Shoe-W-Black-Sapphire-Continuum.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Norvan-SL-GTX-Shoe-Women-s-Aurora-Infrared-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Norvan-SL-GTX-Shoe-Women-s-Aurora-Infrared-Side-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Norvan-SL-GTX-Shoe-Women-s-Aurora-Infrared-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Norvan-SL-GTX-Shoe-Women-s-Aurora-Infrared-Top-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Norvan-SL-GTX-Shoe-Women-s-Aurora-Infrared-Sole.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Procline-AR-Boot-W-Black.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Procline-AR-Boot-W-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Procline-AR-Boot-Women-s-Black-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Procline-AR-Boot-Women-s-Black-Internal-Side-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Procline-AR-Boot-Women-s-Black-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Procline-AR-Boot-Women-s-Black-Ski-Mode.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Procline-AR-Boot-Women-s-Black-Walk-Mode.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Procline-AR-Boot-Women-s-Black-Sole.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Procline-AR-Boot-Women-s-Black-Medial-Rotation.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Hooded-Zip-Neck-W-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Hooded-Zip-Neck-W-Iolite.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Hooded-Zip-Neck-W-Merbau.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Hooded-Zip-Neck-W-Black.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Hooded-Zip-Neck-W-Iolite.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Hooded-Zip-Neck-W-Merbau.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Hooded-Zip-Neck-Women-s-Merbau-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Hooded-Zip-Neck-Women-s-Merbau-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Hooded-Zip-Neck-Women-s-Merbau-Collar.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Rho-LT-Hooded-Zip-Neck-Women-s-Merbau-Hood-Up.jpg"
    ]
  },

  { 
    thumbnails: [
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Sidewinder-Jacket-Olive-Amber.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Sidewinder-Jacket-Red-Beach.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Sidewinder-Jacket-Tui.jpg"
    ],
    images: [ 
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Sidewinder-Jacket-Olive-Amber.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Sidewinder-Jacket-Red-Beach.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Sidewinder-Jacket-Tui.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Sidewinder-Jacket-Tui-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Sidewinder-Jacket-Tui-Back-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Sidewinder-Jacket-Tui-Internal-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Sidewinder-Jacket-Tui-Hood-Front-View.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Sidewinder-Jacket-Tui-Chest-Pocket.jpg",
      "https://arcteryxsdc.s3-us-west-1.amazonaws.com/Sidewinder-Jacket-Tui-Collar.jpg"
    ]
  }
]

module.exports = imageData;