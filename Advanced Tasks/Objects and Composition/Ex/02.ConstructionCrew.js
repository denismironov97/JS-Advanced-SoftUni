function constructionCrew(worker) {
  const isWorkerDehydrated = worker.dizziness === true;
  if (isWorkerDehydrated) {
    let requiredWater = 0.1 * worker.weight * worker.experience; // water in ml
    worker.levelOfHydrated += requiredWater;
    worker.dizziness = false;
  }

  return worker;
}

console.log(
  constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true,
  })
);
