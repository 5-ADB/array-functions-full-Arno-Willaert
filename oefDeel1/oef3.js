const wagens = [
    {kleur: "zwart", merk: "audi", bouwjaar: "2009", prijs: "100.000"},
    {kleur: "violet", merk: "bmw", bouwjaar: "20016", prijs: "150.000"},
    {kleur: "rood", merk: "suziki", bouwjaar: "2019", prijs: "10.000"}
]
for (let i = 0; i < wagens.length; i++) {
 let   tussenStop = wagens[i]
 let merk = tussenStop.merk
 let prijs = tussenStop.prijs
    console.log(merk, prijs);
}
