const car = {
    speed: 110,
    distanceTolls: 0,
    hasTag: true,
    originCity: "Ribeirão Preto"
  };
  
  const truck = {
    speed: 80,
    distanceTolls: 2 * 5 / 60, // km (tempo em horas)
    hasTag: false,
    originCity: "Franca"
  };
  
  //distância total entre as cidades
  const totalDistance = 100;
  
  // Calcula o tempo de viagem de cada veículo até o cruzamento
  const carTime = totalDistance / car.speed; // horas
  const truckTime = (totalDistance - truck.distanceTolls) / truck.speed; // horas
  
  // Calcula a distância percorrida por cada veículo até o cruzamento
  const distanceCar = carTime * car.speed; // km
  const distanceTruck = truckTime * truck.speed + truck.distanceTolls; // km
  
  // Verifica qual veículo está mais próximo da cidade de Ribeirão Preto
  let closer;
  if (distanceCar < distanceTruck) {
    closer = "carro";
  } else {
    closer = "caminhão";
  }
  
  console.log(`O veículo mais próximo da cidade de Ribeirão Preto é o ${closer}.`);
  