function footballLeague(input){
    
    let index = 0;
    let capacityStadium = Number(input[index++]);
    let allFans = Number(input[index++]);
    let sectors = input[index++];

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;
    let allSectorFans = 0;

    for(let n = 1; n <= allFans; n++){
        switch(sectors){
            case "A": sectorA++; allSectorFans++; break;
            case "B": sectorB++; allSectorFans++; break;
            case "V": sectorV++; allSectorFans++; break;
            case "G": sectorG++; allSectorFans++; break;
        }
        sectors = input[index++]
    }
    console.log(`${((sectorA / allSectorFans) * 100).toFixed(2)}%`)
    console.log(`${((sectorB / allSectorFans) * 100).toFixed(2)}%`)    
    console.log(`${((sectorV / allSectorFans) * 100).toFixed(2)}%`)
    console.log(`${((sectorG / allSectorFans) * 100).toFixed(2)}%`)
    console.log(`${((allSectorFans / capacityStadium) * 100).toFixed(2)}%`)
}

footballLeague([
    '76', '10', 'A', 'V',
    'V',  'V',  'G', 'B',
    'A',  'V',  'B', 'B'
  ])