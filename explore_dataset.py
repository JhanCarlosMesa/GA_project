import kagglehub
import pandas as pd
import os

try:
    # Load the dataset
    path = kagglehub.dataset_download("unanimad/the-game-awards")
    
    # Find the CSV file in the downloaded dataset
    csv_file = None
    for root, dirs, files in os.walk(path):
        for file in files:
            if file.endswith('.csv'):
                csv_file = os.path.join(root, file)
                break
        if csv_file:
            break
    
    if not csv_file:
        print("No CSV file found in the dataset")
    else:
        # Load the dataset
        df = pd.read_csv(csv_file)
        
        # Display basic information about the dataset
        print("Dataset Info:")
        print(f"Shape: {df.shape}")
        print(f"Columns: {list(df.columns)}")
        print("\nFirst 5 rows:")
        print(df.head())
        
        # Check for null values
        print("\nNull values:")
        print(df.isnull().sum())
        
        # Get unique years
        if 'year' in df.columns:
            print(f"\nYears available: {sorted(df['year'].unique())}")
        
        # Get unique categories
        if 'category' in df.columns:
            print(f"\nCategories: {df['category'].unique()}")
            
except Exception as e:
    print(f"Error loading dataset: {e}")