import pandas as pd

def calculate_landslide_risk(row):
  weight_elevation = 0.3  # Adjust weight based on relative importance
  weight_slope = 0.2
  weight_river_distance = 0.2
  weight_fault_distance = 0.15
  weight_aap = 0.15  # Weight for AAP(mm)

  elevation = row['Elevation']
  slope_degrees = row['Slop(Degrees)']
  river_distance = row['RiverDIST(m)']
  fault_distance = row['FaultDIST(m)']
  aap = row['AAP(mm)']

  risk_score = 0

  # Risk factors based on feature values (adjust thresholds and weights as needed)
  if elevation > 1500:
    risk_score += weight_elevation * 0.8  # Higher weight for high elevation
  elif elevation > 1000:
    risk_score += weight_elevation * 0.5

  if slope_degrees > 25:
    risk_score += weight_slope * 1  # Maximum weight for steep slopes
  elif slope_degrees > 20:
    risk_score += weight_slope * 0.7

  if river_distance < 1000:
    risk_score += weight_river_distance * 0.8  # Higher weight for closer rivers
  elif river_distance < 500:
    risk_score += weight_river_distance * 1

  if fault_distance < 2000:
    risk_score += weight_fault_distance * (1 - fault_distance / 2000)  # Higher risk closer to faults

  if aap > 250:
    risk_score += weight_aap * 0.8  # Higher weight for higher AAP(mm)
  elif aap > 200:
    risk_score += weight_aap * 0.5

  # Normalize risk score to 0-1 range
  risk_score = min(risk_score, 1)  # Ensure score doesn't exceed 1

  return risk_score
def add_landslide_risk_column(dataset_final):
 
  # Read the CSV data
  data = pd.read_csv("new_dataset_final.csv")

  # Get descriptive statistics (assuming numerical columns)
  description = data.describe(include='all')
  print(description)  # Print description before adding the new column

  # Extract minimum, maximum, and median values from description
  min_values = description.min(axis=0)
  max_values = description.max(axis=0)
  median_values = description.median(axis=0)

  # Add a new column for landslide risk
  data['Landslide Risk'] = data.apply(calculate_landslide_risk, axis=1)

  return data

# Example usage
# Assuming you have 'dataset1_final.csv' and description from earlier code

data_with_risk = add_landslide_risk_column("new_dataset_final.csv")

# Save the DataFrame with landslide risk to a new CSV file
data_with_risk.to_csv('new_dataset_final1.csv', index=False)
