import kagglehub
import pandas as pd
import json
import os

def download_and_process_dataset():
    try:
        # Download the dataset
        print("Downloading dataset...")
        path = kagglehub.dataset_download("unanimad/the-game-awards")
        print(f"Dataset downloaded to: {path}")
        
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
            return
        
        print(f"Found CSV file: {csv_file}")
        
        # Load the dataset
        df = pd.read_csv(csv_file)
        print(f"Dataset loaded with {len(df)} rows")
        print(f"Columns: {list(df.columns)}")
        
        # Process the data to match our format
        awards_data = []
        for index, row in df.iterrows():
            # Adjust column names based on actual dataset
            award = {
                "id": index + 1,
                "year": int(row.get('year', 0)) if pd.notna(row.get('year')) else 0,
                "category": str(row.get('category', '')) if pd.notna(row.get('category')) else '',
                "nominee": str(row.get('nominee', row.get('game', ''))) if pd.notna(row.get('nominee', row.get('game'))) else '',
                "winner": bool(row.get('winner', False)) if pd.notna(row.get('winner')) else False,
                "additionalInfo": ""
            }
            awards_data.append(award)
        
        # Save to JSON file
        with open('game_awards_data.json', 'w', encoding='utf-8') as f:
            json.dump(awards_data, f, indent=2, ensure_ascii=False)
        
        print(f"Data saved to game_awards_data.json with {len(awards_data)} entries")
        
        # Print some sample data
        print("\nSample data:")
        for i in range(min(5, len(awards_data))):
            print(awards_data[i])
            
    except Exception as e:
        print(f"Error: {e}")
        # Create sample data if download fails
        create_sample_data()

def create_sample_data():
    print("Creating sample data...")
    sample_data = [
        {"id": 1, "year": 2014, "category": "Game of the Year", "nominee": "Dragon Age: Inquisition", "winner": False, "additionalInfo": ""},
        {"id": 2, "year": 2014, "category": "Game of the Year", "nominee": "Bayonetta 2", "winner": False, "additionalInfo": ""},
        {"id": 3, "year": 2014, "category": "Game of the Year", "nominee": "Dark Souls II", "winner": False, "additionalInfo": ""},
        {"id": 4, "year": 2014, "category": "Game of the Year", "nominee": "The Last of Us: Left Behind", "winner": False, "additionalInfo": ""},
        {"id": 5, "year": 2014, "category": "Game of the Year", "nominee": "Mario Kart 8", "winner": False, "additionalInfo": ""},
        {"id": 6, "year": 2014, "category": "Game of the Year", "nominee": "Hearthstone: Heroes of Warcraft", "winner": True, "additionalInfo": ""}
    ]
    
    with open('game_awards_data.json', 'w', encoding='utf-8') as f:
        json.dump(sample_data, f, indent=2, ensure_ascii=False)
    
    print("Sample data created and saved to game_awards_data.json")

if __name__ == "__main__":
    download_and_process_dataset()