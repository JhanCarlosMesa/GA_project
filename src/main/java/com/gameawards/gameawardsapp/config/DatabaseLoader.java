package com.gameawards.gameawardsapp.config;

import com.gameawards.gameawardsapp.model.GameAward;
import com.gameawards.gameawardsapp.repository.GameAwardRepository;
import com.gameawards.gameawardsapp.util.DataInitializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DatabaseLoader implements CommandLineRunner {
    
    @Autowired
    private GameAwardRepository gameAwardRepository;
    
    @Autowired
    private DataInitializer dataInitializer;
    
    @Override
    public void run(String... args) throws Exception {
        // Check if data already exists
        if (gameAwardRepository.count() == 0) {
            // Load sample data
            List<GameAward> awards = dataInitializer.loadSampleData();
            gameAwardRepository.saveAll(awards);
            System.out.println("Loaded " + awards.size() + " game awards into the database");
        } else {
            System.out.println("Database already contains data. Skipping initialization.");
        }
    }
}