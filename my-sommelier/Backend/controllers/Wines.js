const WinesCollection = require('../models/WinesCollection'); 

exports.createWine = async (req, res, next) => {
  const { name, color, origin, year, grapes, price, caracteristics, pairing, ecology, imageUrl, mapUrl } = req.body;
  const newWine = { name, color, origin, year, grapes, price, caracteristics, pairing, ecology, imageUrl, mapUrl };

  try {
    // Tenter de récupérer la collection existante ou créer une nouvelle instance
    let winesCollection = await WinesCollection.findOne();
    if (!winesCollection) {
      winesCollection = new WinesCollection({ whiteWines: [], redWines: [], roseWines: [] });
    }

    // Ajout du vin au tableau correspondant à sa couleur
    if (color === 'Blanc') {
      winesCollection.whiteWines.push(newWine);
    } else if (color === 'Rouge') {
      winesCollection.redWines.push(newWine);
    } else if (color === 'Rosé') {
      winesCollection.roseWines.push(newWine);
    } else {
      // Si la couleur ne correspond à aucun des cas attendus, retour d'une erreur
      return res.status(400).json({ message: 'Invalid wine color' });
    }

    // Sauvegarde de la collection mise à jour
    await winesCollection.save();
    res.status(201).json({ message: 'Wine added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
