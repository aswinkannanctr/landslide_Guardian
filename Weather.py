# FOR WEATHER
import python_weather

import asyncio
import os

# FOR EXCEL SHEET
import pandas as pd


# SPECIFIC CITY FUNCTION
async def getweather(CITY):
    async with python_weather.Client(unit=python_weather.IMPERIAL) as client:
        weather = await client.get(f'{CITY}')

        print(f'Warning for {CITY}')
        print(f"Today's date: {weather.current.date} ,Today's Description: {weather.current.description},"
              f" Today's Temp: {weather.current.temperature}")

        while True:
            try:
                forecast_type = input('Do you want the forecast prediction or a hourly '
                                      'detailed prediction or a lanslide prediction '
                                      '(D for daily/ H for hourly/ L for landslide)')
            except ValueError:
                print('Wrong input, try again')
                continue
            else:
                break

        # DAILY INFORMATION
        if forecast_type.lower() == 'd':
            for forecast in weather.forecasts:
                print(f"forecast date: {forecast.date} , Description: {weather.current.description},"
                      f" forecast Temp: {weather.current.temperature}")


        # HOURLY INFORMATION
        elif forecast_type.lower() == 'h':
            for forecast in weather.forecasts:
                print(f"forecast date: {forecast.date} , Description: {weather.current.description},"
                      f" forecast Temp: {weather.current.temperature}")
                for hourly in forecast.hourly:
                    print(f' --> {hourly.description, hourly.chances_of_thunder, hourly.chances_of_rain!r}')


        # LANDSLIDE WARNING
        elif forecast_type.lower() == 'l':

            for forecast in weather.forecasts:
                for hourly in forecast.hourly:
                    if ((hourly.chances_of_rain >= 50 and hourly.chances_of_thunder >= 0 and
                         hourly.wind_speed >= 10) or hourly.chances_of_snow >= 30
                            or hourly.chances_of_frost >= 30):
                        print(forecast.date, hourly.time, 'warning')


# MULTIPLE CITY FUNCTION
async def getweatherany():
    async with python_weather.Client(unit=python_weather.IMPERIAL) as client:

        # EXCEL SHEET ----------------
        # CITY = ['Delhi', 'Meghalaya', 'Nagaland', 'Kashmir', 'Chennai', 'Arunachal Pradesh']

        df = pd.read_csv('city.csv', usecols=[1])
        temp = df.head(10)

        CITY = temp['Name of City'].tolist()
        # DATA FROM EXCEL ----------------

        for c in CITY:
            weather = await client.get(f'{c}')

            print(f'Details for {c}')
            print(f"Today's date: {weather.current.date} ,Today's Description: {weather.current.description},"
                  f" Today's Temp: {weather.current.temperature}")

            # Landslide conditions -----------------
            for forecast in weather.forecasts:
                for hourly in forecast.hourly:
                    if ((hourly.chances_of_rain >= 50 and hourly.chances_of_thunder >= 0 and
                         hourly.wind_speed >= 10) or hourly.chances_of_snow >= 30
                            or hourly.chances_of_frost >= 30):
                        print(forecast.date, hourly.time, 'warning')

            # Landslide conditions ------------------


# MAIN FUNCTION
if __name__ == '__main__':
    if os.name == 'nt':
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

    decision = input('Do you want a specific place? or landslide warnings(S for specific and A for any):\n')
    if decision.upper() == 'S':
        City = input('Which place do you want to find the warnings for:')
        asyncio.run(getweather(City))
    elif decision.upper() == 'A':
        asyncio.run(getweatherany())
      
