const fs = require('fs');

const files = fs.readdirSync('./');

const dummyStrings = [
  "Tu veux de l'aide ? Moi aussi !",
  "Toujours pas tu vas craquer non ?",
  "Demande à ton voisin du dessus",
  "Demande à ton voisin du dessous",
  "Demande à ton voisin de droite",
  "Demande à ton voisin de gauche",
  "Non ce n'est toujours pas bon ..."
]

files.forEach(file => {
  if (file.includes('README'))
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) console.log(err);
      if (!dummyStrings.some(string => data.includes(string)))
        console.log(`File: ${file}; ${data}`);
    });
})
