function humanYearsCatYearsDogYears(human){
    if (human === 1) {
      return [1, 15, 15];
    }
    if (human === 2) {
      return [2, 24, 24];
    }
  
    return [human, 24 + (human - 2) * 4, 24 + (human - 2) * 5];
  };