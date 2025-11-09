package com.gameawards.gameawardsapp.util;

import com.gameawards.gameawardsapp.model.GameAward;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@Component
public class DataInitializer {
    
    // This would normally load from the actual dataset
    // For now, we'll create sample data based on what we know about the dataset
    
    public List<GameAward> loadSampleData() {
        List<GameAward> awards = new ArrayList<>();
        
        // Sample data for 2014
        awards.add(new GameAward(2014, "Game of the Year", "Dragon Age: Inquisition", false, ""));
        awards.add(new GameAward(2014, "Game of the Year", "Bayonetta 2", false, ""));
        awards.add(new GameAward(2014, "Game of the Year", "Dark Souls II", false, ""));
        awards.add(new GameAward(2014, "Game of the Year", "The Last of Us: Left Behind", false, ""));
        awards.add(new GameAward(2014, "Game of the Year", "Mario Kart 8", false, ""));
        awards.add(new GameAward(2014, "Game of the Year", "Hearthstone: Heroes of Warcraft", true, ""));
        
        // Sample data for 2015
        awards.add(new GameAward(2015, "Game of the Year", "Bloodborne", false, ""));
        awards.add(new GameAward(2015, "Game of the Year", "The Witcher 3: Wild Hunt", true, ""));
        awards.add(new GameAward(2015, "Game of the Year", "Metal Gear Solid V: The Phantom Pain", false, ""));
        awards.add(new GameAward(2015, "Game of the Year", "Fallout 4", false, ""));
        awards.add(new GameAward(2015, "Game of the Year", "Super Mario Maker", false, ""));
        
        // Sample data for 2016
        awards.add(new GameAward(2016, "Game of the Year", "Overwatch", true, ""));
        awards.add(new GameAward(2016, "Game of the Year", "Uncharted 4: A Thief's End", false, ""));
        awards.add(new GameAward(2016, "Game of the Year", "Titanfall 2", false, ""));
        awards.add(new GameAward(2016, "Game of the Year", "Inside", false, ""));
        awards.add(new GameAward(2016, "Game of the Year", "Firewatch", false, ""));
        
        // Sample data for 2017
        awards.add(new GameAward(2017, "Game of the Year", "The Legend of Zelda: Breath of the Wild", true, ""));
        awards.add(new GameAward(2017, "Game of the Year", "Horizon: Zero Dawn", false, ""));
        awards.add(new GameAward(2017, "Game of the Year", "Super Mario Odyssey", false, ""));
        awards.add(new GameAward(2017, "Game of the Year", "PlayerUnknown's Battlegrounds", false, ""));
        awards.add(new GameAward(2017, "Game of the Year", "Persona 5", false, ""));
        
        // Sample data for 2018
        awards.add(new GameAward(2018, "Game of the Year", "God of War", true, ""));
        awards.add(new GameAward(2018, "Game of the Year", "Monster Hunter: World", false, ""));
        awards.add(new GameAward(2018, "Game of the Year", "Red Dead Redemption 2", false, ""));
        awards.add(new GameAward(2018, "Game of the Year", "Celeste", false, ""));
        awards.add(new GameAward(2018, "Game of the Year", "Marvel's Spider-Man", false, ""));
        
        // Sample data for 2019
        awards.add(new GameAward(2019, "Game of the Year", "Sekiro: Shadows Die Twice", true, ""));
        awards.add(new GameAward(2019, "Game of the Year", "Death Stranding", false, ""));
        awards.add(new GameAward(2019, "Game of the Year", "Control", false, ""));
        awards.add(new GameAward(2019, "Game of the Year", "Resident Evil 2", false, ""));
        awards.add(new GameAward(2019, "Game of the Year", "Borderlands 3", false, ""));
        
        return awards;
    }
}