export type MeteoResult = {
  current_weather: {
    temperature: number,
    windspeed: number,
    weathercode: number
  }
}

export class MeteoInfo {
  public weatherLabel = 'Non connu';

  constructor(public temperature: number, public weatherCode: number) {
    this.weatherLabel = this.getLabelFromCode(this.weatherCode);
  }

  private getLabelFromCode(code: number): string {
    let label = 'Non connu';

    switch(code) {
      case 0: label = 'Sans nuage'; break;
      case 3: label = 'Nuageux'; break;
    }

    return label;
  }
}


