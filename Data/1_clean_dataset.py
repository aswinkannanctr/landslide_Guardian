import pandas as pd
import numpy as np

data = pd.read_csv("Landslide_Factors_IRAN.csv")

columns_to_drop=['SUB_Basin','Landuse_Type','GEO_UNIT','DES_GEOUNI','Climate_Type','DES_ClimateType']
data = data.drop(columns=columns_to_drop)
data=data.drop(data.columns[0], axis=1)
data.to_csv('new_dataset_final1.csv')

